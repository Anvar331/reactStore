import React from 'react';

interface Product  {
  name?: string;
  price?: number;
  description?: string;
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

function AddToProductCart() {
  const handleClick = () => {
    alert('Your product is added!');
  };
  return (
    <button onClick={handleClick}>
      Add to Product Cart
    </button>
  );
}

  export default ProductCard;

