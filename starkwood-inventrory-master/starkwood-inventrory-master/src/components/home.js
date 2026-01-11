import React from 'react';
import './Home.css'; // Import the CSS file
import Navbar from './Navbar'; // Import the Navbar component
import Products from './products';
import About from './aboutUs.jsx';
import dragon1 from '../assets/dragon_1.jpg';
import dragon2 from '../assets/dragon_2.jpg';
import dragon3 from '../assets/dragon_3.jpg';
import dragon4 from '../assets/dragon_4.jpg';
import dragon5 from '../assets/dragon_5.jpg';
import dragon6 from '../assets/dragon_6.jpg';
import dragon7 from '../assets/dragon_7.jpg';
import dragon8 from '../assets/dragon_8.jpg';
import dragon9 from '../assets/dragon_9.jpg';
import dragon10 from '../assets/dragon_10.jpg';
import bgImage from '../assets/bg.png';
import modelImage from '../assets/model.png';
import logo2 from "../assets/logo2.png";

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="banner">
        <div className="slider" style={{ '--quantity': 10 }}>
          <div className="item" style={{ '--position': 1 }}><img src={dragon1} alt="Dragon 1" /></div>
          <div className="item" style={{ '--position': 2 }}><img src={dragon2} alt="Dragon 2" /></div>
          <div className="item" style={{ '--position': 3 }}><img src={dragon3} alt="Dragon 3" /></div>
          <div className="item" style={{ '--position': 4 }}><img src={dragon4} alt="Dragon 4" /></div>
          <div className="item" style={{ '--position': 5 }}><img src={dragon5} alt="Dragon 5" /></div>
          <div className="item" style={{ '--position': 6 }}><img src={dragon6} alt="Dragon 6" /></div>
          <div className="item" style={{ '--position': 7 }}><img src={dragon7} alt="Dragon 7" /></div>
          <div className="item" style={{ '--position': 8 }}><img src={dragon8} alt="Dragon 8" /></div>
          <div className="item" style={{ '--position': 9 }}><img src={dragon9} alt="Dragon 9" /></div>
          <div className="item" style={{ '--position': 10 }}><img src={dragon10} alt="Dragon 10" /></div>
        </div>
        <div className="content">
          <h1 data-content="Starkwood">Starkwood</h1>
          <div className="author">

          <div className="logo2">  
            <img src={logo2} alt="Logo" /> 
        </div>
            <h2>EVENTS</h2>
            <p><b>Melburn</b></p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
          <div className="model" style={{ backgroundImage: `url(${modelImage})` }}></div>
        </div>
      </div>
      <About />
      <Products />
    </div>
  );
};

export default Home;