import React from 'react';
import './About.css'; // Import your CSS file for styling
// import { FontAwesomeIcon } from "react-icons/fa";

import { FaLightbulb, FaChartLine, FaHeart, FaSchool } from "react-icons/fa";
import img1 from '../../assets/kid.jpg';

const About = () => {
    return (
        <section className="preschool-section">
            <div className="preschool-container-big-heading">
                <h2>About Preschool</h2>
                </div>
            <div className="preschool-container">
                
                <div className="preschool-image">
                    <img src={img1} alt="Kids Playing" />
                </div>
                <div className="preschool-content">
                    {/* <h3>About Preschool</h3> */}
                    <h2>    <div className="logo">
          <p className="logo-part1">LITTLE</p>
          <p className="logo-part2">Incisors</p>
          </div>Preschool Chain in Your City</h2>
                    <p>
                        Our curriculum is designed to ignite curiosity and nurture the delight of learning amongst little minds.
                    </p>
                    <ul className="features-list">
                        <li>
                            <FaLightbulb/> &emsp;
                            Innovative Learning Methods
                        </li>
                        <li>
                            <FaChartLine/> &emsp;
                            Transparent Progress Tracking
                        </li>
                        <li>
                            <FaHeart/> &emsp;
                            Focus on Holistic Growth
                        </li>
                        <li>
                            <FaSchool /> &emsp;
                            Exploration Beyond Classroom
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;