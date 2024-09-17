import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/background.jpg';

const LandingPage = () => (
  <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}>
    <h1>Welcome to Plant Store</h1>
    <p>Your one-stop shop for all your houseplant needs.</p>
    <Link to="/products" className="get-started-button">Get Started</Link>
  </div>
);

export default LandingPage;
