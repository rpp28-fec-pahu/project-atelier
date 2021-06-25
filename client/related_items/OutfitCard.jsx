import React from 'react';

const OutfitCard = (props) => (
  <div className='rp-card' id={props.productInfo.id} onClick={() => props.handleRelatedItemClick(props.productInfo.id)}>
    <div id='rp-action-container'>
      <div id='rp-card-action' onClick={(e) => props.removeFromOutfit(e)}>Remove</div>
    </div>
    <div id='rp-thumbnail-container'>
      <img id='rp-thumbnail-image' src={props.productInfo.thumbnailUrl}></img>
    </div>
    <div id='rp-content-container'>
      <p id='rp-card-category'>{props.productInfo.category}</p>
      <p id='rp-card-name'>{props.productInfo.name}</p>
      <p id='rp-card-price'>${props.productInfo.price}</p>
      <p id='rp-card-rating'>{props.productInfo.rating}</p>
    </div>
  </div>
);

export default OutfitCard;