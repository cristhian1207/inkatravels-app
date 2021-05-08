import React from 'react';

const ImageContainer = ({image, additionalClass}) => {
  return (
    <div className='imageContainer'>
      <img src={image} className={additionalClass} alt="destino"></img>
    </div>
  );
};

export default ImageContainer;