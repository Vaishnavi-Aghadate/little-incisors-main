import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './CoreValues.css'; // Import the CSS file
import bearImage from '../../assets/images/bear.png'; // Import the bear image

const CoreValues = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="core-values" data-aos="fade-up">
      <h2>Core Values</h2>
      <div className="values-container">
        <div className="values-list">
          <div className="value-item">
            <div className="value-number">1</div> Developing Little Explorers
          </div>
          <div className="value-item">
            <div className="value-number">2</div> Language Blossoms
          </div>
          <div className="value-item">
            <div className="value-number">3</div> From Crawling to Confident
          </div>
          <div className="value-item">
            <div className="value-number">4</div> Active Bodies, Active Minds
          </div>
          <div className="value-item">
            <div className="value-number">5</div> Artistic Expressions
          </div>
        </div>
        <div className="center-image">
          <img src={bearImage} alt="Happy Bear" />
        </div>
        <div className="values-list">
          <div className="value-item">
            <div className="value-number">6</div> Friends, Fun, and Learning
          </div>
          <div className="value-item">
            <div className="value-number">7</div> Building Strong Characters
          </div>
          <div className="value-item">
            <div className="value-number">8</div> Math, Logic, and More
          </div>
          <div className="value-item">
            <div className="value-number">9</div> Independence Begins Here
          </div>
          <div className="value-item">
            <div className="value-number">10</div> Connecting with the World
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;