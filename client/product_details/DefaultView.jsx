import React from 'react';

const DefaultView = (props) => {

  if (props.selectedStyle) {
    var photoGallery = props.selectedStyle.photos;
    return (
      <div id="defaultView">
        <a target="_blank">
          <img 
            src={photoGallery[props.currPhotoIndex].url || 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'} 
            alt={props.selectedStyle.name} 
            className="defaultView" 
            id={props.selectedStyle.style_id}
            onClick={props.toggleView}>
          </img>
          {props.currPhotoIndex !== 0 ? 
            <a
              onClick={props.handleLeftClick} 
              id="leftArrow">&larr;
            </a> : null}
          {props.currPhotoIndex !== (photoGallery.length - 1) ?
            <a 
              onClick={props.handleRightClick}
              id="rightArrow">&rarr;
            </a> : null}
        </a>
      </div>
    );
  } 
  return null;
};

export default DefaultView;