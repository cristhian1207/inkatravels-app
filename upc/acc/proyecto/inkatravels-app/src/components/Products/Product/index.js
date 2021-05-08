import React from 'react'
import { Row, Col } from 'react-grid-system';
import ImageContainer from './ImageContainer';
import TextContainer from './TextContainer';

const Product = ({ element }) => {
  const { SKU, NAME, SHORT_DESCRIPTION, IMAGE } = element;
  return (
    <Row className='rowContainer rowLeft'>
      <Col sm={6}><ImageContainer image={IMAGE} additionalClass='imageLeft'></ImageContainer></Col>
      <Col sm={6}><TextContainer sku={SKU} name={NAME} description={SHORT_DESCRIPTION}></TextContainer></Col>
    </Row>
  )
}

export default Product 