import React from 'react';

interface Product  {
  name: String;
  price: Number;
  description: String;
}

const ProductCard: React.FC<Product> = (props) => {
  return (
      <div>
          <p>Name: {props.name}</p>
          <p>Price: {props.price}</p>
          <p>Description: {props.description}</p>
      </div>
  );
}

  export default ProductCard;

