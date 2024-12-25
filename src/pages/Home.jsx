import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>FortiTask</h1>
      <p>Secure Homework Submission Platform</p>
      <div className="home-buttons">
        <Link to="/login" className="home-button login">Login</Link>
        <Link to="/signup" className="home-button signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
