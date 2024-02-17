import React from 'react';
import Home from './components/home.js';
import Reviews from './components/reviews.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Reviews />
    </div>
  );
}

export default App;