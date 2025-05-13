import React, { useState } from 'react';
import './AfterSchool.css';
import { 
    FaBabyCarriage, FaChild, FaFirstAid, FaBook, 
    FaPalette, FaMusic, FaRunning, FaChess,
    FaChalkboardTeacher, FaUsers, FaHome
} from 'react-icons/fa';
import activityImg1 from '../../assets/Playing.jpg';
import activityImg2 from '../../assets/Teaching.jpg';
import activityImg3 from '../../assets/infastr.jpg';
import activityImg4 from '../../assets/infaf2.jpg';

const AfterSchool = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);
    
    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const features = [
        { icon: <FaBook className="feature-icon" />, title: "Homework Support", description: "Dedicated time and expert assistance for homework completion" },
        { icon: <FaPalette className="feature-icon" />, title: "Screen-Free Activities", description: "Engaging activities that don't rely on screens" },
        { icon: <FaHome className="feature-icon" />, title: "Large Activity Zones", description: "Spacious, supervised areas for various activities" },
        { icon: <FaChalkboardTeacher className="feature-icon" />, title: "Trained Facilitators", description: "Experienced and caring staff members" },
    ];

    const faqs = [
        {
            question: "What is Little Incisors' After School Enrichment and Care Program?",
            answer: "Our program provides a structured, screen-free environment for children after school hours, focusing on homework support, enrichment activities, and holistic development through various engaging activities."
        },
        {
            question: "What is the age group of the afterschool program?",
            answer: "We cater to children aged 3-10 years, with specialized programs for different age groups."
        },
        {
            question: "Is homework support provided?",
            answer: "Yes, dedicated time and expert assistance are provided for homework completion and academic support."
        },
        {
            question: "How is food managed?",
            answer: "We provide nutritious snacks and meals prepared under strict hygiene standards, considering dietary restrictions and allergies."
        }
    ];

    return (
        <div className="afterschool-container">
            {/* Hero Section */}
            <div className="afterschool-hero">
                <div className="hero-content">
                    <h1>Screen Free <span>Afterschool</span> Engagement and Care</h1>
                    <p className="hero-subtitle">WHERE LEARNING CONTINUES AFTER SCHOOL</p>
                    
                    <div className="care-types">
                        <div className="care-type">
                            <div className="care-icon-container">
                                <FaBabyCarriage className="care-icon" />
                            </div>
                            <h3>Full Daycare</h3>
                            <p>6 months - 5 years</p>
                        </div>
                        <div className="care-type featured">
                            <div className="care-icon-container">
                                <FaChild className="care-icon" />
                            </div>
                            <h3>After School Care</h3>
                            <p>3 years - 10 years</p>
                            <div className="featured-badge">Popular</div>
                        </div>
                        <div className="care-type">
                            <div className="care-icon-container">
                                <FaFirstAid className="care-icon" />
                            </div>
                            <h3>Emergency Daycare</h3>
                            <p>Flexible hours</p>
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

            {/* Why Choose Us Section */}
            <div className="why-choose-us">
                <div className="section-title">
                    <h2>Why Choose <span>Little Incisors</span>' After School Program?</h2>
                    <p>Comprehensive support for your child's development</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-container">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Activities Section */}
            <div className="activities-section">
                <div className="section-title">
                    <h2>Enrichment <span>Activities</span></h2>
                    <p>Engaging programs for holistic development</p>
                </div>
                <div className="activities-grid">
                    <div className="activity-card">
                        <img src={activityImg1} alt="Outdoor Play" className="activity-image" />
                        <div className="activity-content">
                            <h3>Outdoor Play & Fitness</h3>
                            <p>Structured physical activities for healthy development</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <img src={activityImg2} alt="Arts & Crafts" className="activity-image" />
                        <div className="activity-content">
                            <h3>Arts & Crafts</h3>
                            <p>Creative expression through various mediums</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <img src={activityImg3} alt="STEM Learning" className="activity-image" />
                        <div className="activity-content">
                            <h3>STEM Learning</h3>
                            <p>Hands-on science and technology activities</p>
                        </div>
                    </div>
                    <div className="activity-card">
                        <img src={activityImg4} alt="Music & Dance" className="activity-image" />
                        <div className="activity-content">
                            <h3>Music & Dance</h3>
                            <p>Rhythmic movement and musical exploration</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <div className="section-title">
                    <h2>Frequently Asked <span>Questions</span></h2>
                    <p>Everything you need to know about our program</p>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeAccordion === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">{activeAccordion === index ? '-' : '+'}</span>
                            </div>
                            <div className={`faq-answer ${activeAccordion === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
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

export default AfterSchool;