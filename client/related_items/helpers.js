const getRelatedItems = (productId) => {
  return new Promise (resolve => {
    fetch(`http://localhost:8080/products/${productId}/related`)
      .then(response => response.json())
      .then(data => {
        let mainProductId = parseInt(productId);
        let noDuplicates = data.filter(id => id !== mainProductId);
        resolve(noDuplicates);
      });
  });
};

const getProductInfo = (productId) => {
  return new Promise (resolve => {
    fetch(`http://localhost:8080/products/${productId}`)
      .then(response => response.json())
      .then(data => resolve(data));
  });
};

const getProductStyles = (productId) => {
  return new Promise (resolve => {
    fetch(`http://localhost:8080/products/${productId}/styles`)
      .then(response => response.json())
      .then(data => resolve(data));
  });
};

const getProductRatings = (productId) => {
  return new Promise (resolve => {
    fetch(`http://localhost:8080/reviews/meta?product_id=${productId}`)
      .then(response => response.json())
      .then(data => resolve(data));
  });
};

const findDefaultStyle = (styles) => {
  let foundDefault = false;

  return new Promise (resolve => {
    styles.forEach(style => {
      if (style['default?'] === true) {
        foundDefault = true;
        resolve(style);
      }
    });

    if (!foundDefault) {
      resolve(styles[0]);
    }
  });
};

const defineMainProduct = (info, defaultStyle, averageRating) => {
  let price, thumbnailUrl, mainProduct, rating;
  averageRating === 'NaN' ? rating = '0.00' : rating = averageRating;

  !defaultStyle.sale_price
    ? price = defaultStyle.original_price
    : price = defaultStyle.sale_price;

  !defaultStyle.photos[0].thumbnail_url
    ? thumbnailUrl = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081'
    : thumbnailUrl = defaultStyle.photos[0].thumbnail_url;

  mainProduct = {
    thumbnailUrl: thumbnailUrl,
    category: info.category,
    name: info.name,
    price: price,
    rating: rating,
    id: info.id
  };

  return mainProduct;
};

const findComparisonFeatures = (mainFeatures, comparisonFeatures) => {
  let allFeatures = [];

  mainFeatures.forEach(feature => {
    feature.compValue = '';
    allFeatures.push(feature);
  });

  comparisonFeatures.forEach(compFeature => {
    var index = allFeatures.findIndex(item => item.feature === compFeature.feature);
    if (index !== -1) {
      allFeatures[index].compValue = compFeature.value;
    } else {
      compFeature.compValue = '';
      allFeatures.push(compFeature);
    }
  });

  return allFeatures;
};

const hideArrows = (cardStrip) => {
  let childNodes = cardStrip.children;
  let leftArrow = childNodes[0];
  let rightArrow = childNodes[childNodes.length - 1];
  let firstCard = childNodes[1];
  let lastCard = childNodes[childNodes.length - 2];
  let xPosFirstCard = firstCard.getBoundingClientRect().x;
  let xEdgeLastCard = lastCard.getBoundingClientRect().x + lastCard.getBoundingClientRect().width;
  let xEdgeCardStrip = cardStrip.getBoundingClientRect().x + cardStrip.getBoundingClientRect().width;

  if (xPosFirstCard < 28) {
    leftArrow.style.display = 'flex';
  } else {
    leftArrow.style.display = 'none';
  }

  if (xEdgeCardStrip - xEdgeLastCard >= 8) {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'flex';
  }
};

module.exports = { getRelatedItems, getProductInfo, getProductStyles, getProductRatings, findDefaultStyle, defineMainProduct, findComparisonFeatures, hideArrows };