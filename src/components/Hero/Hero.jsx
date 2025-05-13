import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero1.png'; // Single image for all views

const Hero = () => {
    return (
        <div className="hero-container">
            <div 
                className="hero-image"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="hero-overlay">India's First Learncare Centre</div>
                <div className="hero-animated-shapes hero-curve1"></div>
                <div className="hero-animated-shapes hero-curve2"></div>
                <div className="hero-animated-shapes hero-curve3"></div>
            </div>
        </div>
    );
};

export default Hero;