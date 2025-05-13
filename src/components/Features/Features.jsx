import React, { useState, useEffect } from "react";
import "./Features.css"; // Import your CSS file
import img1 from '../../assets/infastr.jpg';
import img2 from '../../assets/infaf2.jpg';
import img3 from '../../assets/infaf3.jpg';
import img4 from '../../assets/Teaching.jpg';
import img5 from '../../assets/Playing.jpg';
import img6 from '../../assets/foodn.jpg';
import img7 from '../../assets/infrastructure.jpg';


const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img2,
    img3,
    img1,
  ];

  

  // Auto-slide every 2 seconds
  useEffect(() => {

    
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Manual slide on arrow click
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  

  return (
    <div className="container">
      <h2 className="title">What's New at Insissors</h2>
      <div className="grid">
        {/* Card 1: Teaching */}
        <div className="FF-card">
          <img src={img4} alt="Teaching" />
          <div className="card-content">
            <h3>Teaching</h3>
            <p>
              Innovative and interactive learning methods to enhance knowledge
              retention and engagement.
            </p>
          </div>
        </div>

        {/* Card 2: Playing */}
        <div className="FF-card">
          <img src={img5} alt="Playing" />
          <div className="card-content">
            <h3>Playing</h3>
            <p>
              Encouraging creativity and teamwork through engaging play activities
              and structured games.
            </p>
          </div>
        </div>

        {/* Card 3: Healthy Food */}
        <div className="FF-card" id="card3">
          <img src={img6} alt="Healthy Food" />
          <div className="card-content">
            <h3>Healthy Food</h3>
            <p>
              Nutritious and delicious meals designed to support a healthy
              lifestyle and well-being.
            </p>
          </div>
        </div>

         {/* Card 4: Infrastructure */}
        <div className="FF-card" id="card3">
          <img src={img7} alt="Healthy Food" />
          <div className="card-content">
            <h3>Infrastructure</h3>
            <p>
            Safe, modern, and child-friendly spaces for learning, play, and growth.
            </p>
          </div>
        </div>

       
        
      </div>
    </div>
  );
};

export default Features;