import React from 'react';

interface Product  {
  name: String;
  price: Number;
  description: String;
}

function ProductCard: React.PC<Product> = (props) => {
  return (
      <div>
          <p>Name: {props.name}</p>
          <p>Price: {props.price}</p>
          <p>Description: {props.description}</p>
              Product Card: 
              {props.ProductCard}
          </p>
      </div>
  );
}

  export default ProductCard;

