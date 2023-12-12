// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../State/StateProvider'

function ProductDetail() {
  const { id } = useParams();
  const [{ products, basket }, dispatch] = useStateValue();

  // Find the product with the given ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.title,
        price: product.price,
      },
    });
  };

  return (
    <div className="productDetail">
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default ProductDetail;
