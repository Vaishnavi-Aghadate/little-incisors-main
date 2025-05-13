import React from 'react';
import './Daycare.css';
import { FaBabyCarriage, FaChild, FaFirstAid, FaBook, FaPalette, FaUsers, FaHome } from 'react-icons/fa';
import caregiverImg from '../../assets/Teaching.jpg';
import nannyImg from '../../assets/Playing.jpg';
import galleryImg1 from '../../assets/infastr.jpg';
import galleryImg2 from '../../assets/infaf2.jpg';

const Daycare = () => {
    return (
        <div className="daycare-container">
            {/* Hero Section */}
            <div className="daycare-hero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <div className="title-wrapper">
                        <h1 className="main-title">
                            <span>Little Incisors</span> Day Care Program
                        </h1>
                        <p className="hero-subtitle">WHERE EVERY CHILD'S JOURNEY IS VALUED</p>
                    </div>
                    
                    <div className="care-types">
                        <div className="care-type">
                            <div className="care-icon-container">
                                <FaBabyCarriage className="care-icon" />
                            </div>
                            <div className="care-type-content">
                                <h3>Full Daycare</h3>
                                <p>6 months - 5 years</p>
                            </div>
                        </div>
                        
                        <div className="care-type featured">
                            <div className="care-icon-container">
                                <FaChild className="care-icon" />
                            </div>
                            <div className="care-type-content">
                                <h3>After School</h3>
                                <p>3 years - 10 years</p>
                            </div>
                            <div className="featured-badge">Popular</div>
                        </div>
                        
                        <div className="care-type">
                            <div className="care-icon-container">
                                <FaFirstAid className="care-icon" />
                            </div>
                            <div className="care-type-content">
                                <h3>Emergency Care</h3>
                                <p>Flexible hours</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Parent Satisfaction</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5:1</span>
                            <span className="stat-label">Child-Teacher Ratio</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empowering Section */}
            <div className="daycare-section">
                <div className="section-content">
                    <div className="content-block">
                        <h2>Empowering <span>Families</span>, Nurturing Futures</h2>
                        <p>
                            We provide a structured learning environment that focuses on socialization 
                            and early childhood education. Our program allows parents to pursue their 
                            careers with peace of mind, knowing their children are in capable hands.
                        </p>
                        <ul className="feature-list">
                            <li>Well-equipped learning spaces</li>
                            <li>Temperature-controlled environments</li>
                            <li>Nutritionist-designed meals</li>
                            <li>Regular progress updates</li>
                        </ul>
                    </div>
                    <div className="section-image">
                        <img src={caregiverImg} alt="Caregivers with children" />
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-section">
                <div className="section-title">
                    <h2>Child Care <span>At Its Best</span></h2>
                    <p>Comprehensive services for your child's development</p>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">
                            <FaFirstAid />
                        </div>
                        <h3>Health & Safety</h3>
                        <p>
                            Following stringent safety protocols based on global standards. 
                            Our trained safety team ensures a secure environment for your child.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <FaUsers />
                        </div>
                        <h3>Parent Communication</h3>
                        <p>
                            Stay connected with live CCTV access, regular newsletters, 
                            and detailed tracking of your child's milestones.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <FaBook />
                        </div>
                        <h3>Trained Caregivers</h3>
                        <p>
                            Our staff undergoes extensive training to provide the highest 
                            quality of care and early childhood education.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <FaHome />
                        </div>
                        <h3>Corporate Tie-Ups</h3>
                        <p>
                            Partnerships with leading companies to provide comprehensive 
                            childcare support for working parents.
                        </p>
                    </div>
                </div>
            </div>

            {/* Nanny Section */}
            <div className="daycare-section reverse">
                <div className="section-content">
                    <div className="section-image">
                        <img src={nannyImg} alt="Nanny with child" />
                    </div>
                    <div className="content-block">
                        <h2>Bringing Care to <span>Your Doorstep</span></h2>
                        <p>
                            Our Nanny At Home service provides personalized childcare in the comfort 
                            of your home. Each nanny is thoroughly vetted and trained to ensure your 
                            child receives the best care possible.
                        </p>
                        <ul className="feature-list">
                            <li>Personalized care in your home</li>
                            <li>Thoroughly vetted professionals</li>
                            <li>Flexible scheduling options</li>
                            <li>Regular progress reports</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="gallery-section">
                <div className="section-title">
                    <h2>Our <span>Daycare</span> Environment</h2>
                    <p>Explore our specially designed learning spaces</p>
                </div>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src={galleryImg1} alt="Daycare facility" />
                    </div>
                    <div className="gallery-item">
                        <img src={galleryImg2} alt="Daycare activity" />
                    </div>
                    <div className="gallery-item">
                        <img src={caregiverImg} alt="Learning session" />
                    </div>
                    <div className="gallery-item">
                        <img src={nannyImg} alt="Play area" />
                    </div>
                </div>
            </div>

            {/* Enquiry Section */}
            <div className="enquiry-section">
                <h2>Ready to <span>Enroll</span> Your Child?</h2>
                <p>Fill up the enquiry form to know more about our program</p>
                <button className="cta-button">Enquire Now</button>
            </div>
        </div>
    );
};

export default Daycare;