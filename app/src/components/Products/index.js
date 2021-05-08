import React from 'react';
import { Container } from 'react-grid-system';
import Product from './Product';

const Products = ( { products } ) => {
  return (
    <div className="body">
      <Container>
        {
          products.map( product => (
            <Product key={product.PRODUCTS_ID} element={product}/>
          ))
        }
      </Container>
    </div>
  );
};

export default Products;