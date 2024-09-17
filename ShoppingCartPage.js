import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increment, decrement } from '../redux/cartSlice';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleIncrease = (product) => {
    dispatch(increment(product));
  };

  const handleDecrease = (product) => {
    dispatch(decrement(product));
  };

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <button>Checkout</button>
      <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.imgSrc} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => handleIncrease(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleDecrease(item)}>-</button>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartPage;
