import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const products = [
    // Example products
    { id: 1, name: 'Fern', price: 15, imgSrc: '/path/to/image1.jpg' },
    { id: 2, name: 'Succulent', price: 10, imgSrc: '/path/to/image2.jpg' },
    // Add more products as needed
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product Listing</h2>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.imgSrc} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
