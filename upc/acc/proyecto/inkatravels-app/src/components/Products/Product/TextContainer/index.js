import React from 'react';

const TextContainer = ({sku, name, description}) => {

  return (
    <div className="textContainer">
      <h3>{name}</h3><br/>
      <small>{sku}</small><br/>
      <span>{description}</span>
    </div>
  );
};

export default TextContainer;