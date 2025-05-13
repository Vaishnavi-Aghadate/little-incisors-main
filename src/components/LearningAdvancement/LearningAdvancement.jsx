import React, { useState } from 'react';
import './LearningAdvancement.css';
import { FaLeaf, FaUsers, FaHandsHelping, FaQuoteLeft, FaChild, FaCalendarAlt, FaClock, FaPalette } from 'react-icons/fa';
import environmentImg from '../../assets/Playing.jpg';
import facilitationImg from '../../assets/Teaching.jpg';
import galleryImg1 from '../../assets/infastr.jpg';
import galleryImg2 from '../../assets/infaf2.jpg';
import galleryImg3 from '../../assets/infaf3.jpg';

const LearningAdvancement = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const faqs = [
        {
            question: "What is the Learning Advancement Plan (LAP)?",
            answer: "The LAP is our comprehensive program designed to support children with diverse learning needs. It combines specialized instruction, therapeutic support, and inclusive practices to ensure every child reaches their full potential."
        },
        {
            question: "How do you assess a child's needs?",
            answer: "We conduct thorough assessments through observation, interaction, and consultation with parents and specialists to create personalized learning plans."
        },
        {
            question: "What qualifications do your staff members have?",
            answer: "Our team consists of certified special educators, therapists, and trained caregivers with extensive experience in early childhood education and special needs support."
        },
        {
            question: "How do you maintain communication with parents?",
            answer: "We provide daily updates, weekly progress reports, and monthly parent-teacher meetings to ensure transparent communication about your child's development."
        }
    ];

    return (
        <div className="lap-container">
            {/* Header Section */}
            <div className="lap-header">
                <div className="header-content">
                    <div className="header-text-container">
                        <h1>Unlocking Potential Through <span>Personalized Learning</span></h1>
                        <p className="tagline">WHERE EVERY CHILD'S JOURNEY IS CELEBRATED</p>
                        <p className="intro-text">
                            Our innovative Learning Advancement Plan creates an inclusive environment that 
                            nurtures each child's unique abilities while providing tailored support for their 
                            individual needs.
                        </p>
                        <div className="header-stats">
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
                    <div className="age-box">
                        <h3>Age Group</h3>
                        <p>3 - 8 years</p>
                    </div>
                </div>
                <div className="header-decoration">
                    <div className="deco-circle deco-1"></div>
                    <div className="deco-circle deco-2"></div>
                    <div className="deco-circle deco-3"></div>
                </div>
            </div>

            {/* Core Principles */}
            <div className="core-principles">
                <div className="section-title">
                    <h2>Our <span>Approach</span></h2>
                    <p>Three pillars of our learning philosophy</p>
                </div>
                <div className="principles-container">
                    <div className="principle-card">
                        <div className="card-icon">
                            <FaLeaf />
                        </div>
                        <h3>The Environment</h3>
                        <p>Creating nurturing spaces that support diverse learning needs</p>
                    </div>
                    <div className="principle-card">
                        <div className="card-icon">
                            <FaUsers />
                        </div>
                        <h3>Learning Facilitation</h3>
                        <p>Expert guidance for personalized development</p>
                    </div>
                    <div className="principle-card">
                        <div className="card-icon">
                            <FaHandsHelping />
                        </div>
                        <h3>Collaborative Support</h3>
                        <p>Working together with families and specialists</p>
                    </div>
                </div>
            </div>

            {/* Environment Section */}
            <div className="environment-section">
                <div className="section-content">
                    <div className="content-block">
                        <h2>The <span>Environment</span></h2>
                        <p>
                            We've carefully crafted spaces that inspire learning, creativity, and growth. 
                            Our environment is designed to be both stimulating and comforting, ensuring 
                            every child feels secure and motivated to explore.
                        </p>
                        <ul className="feature-list">
                            <li>Access to a variety of learning opportunities</li>
                            <li>A safe and welcoming space</li>
                            <li>Child-friendly sensory zones</li>
                            <li>Areas promoting self-expression, creativity, and social interaction</li>
                        </ul>
                    </div>
                    <div className="section-image">
                        <img src={environmentImg} alt="Learning Environment" />
                    </div>
                    
                </div>
            </div>

            {/* Facilitation Section */}
            <div className="facilitation-section">
                <div className="section-content">
                    <div className="section-image">
                        <img src={facilitationImg} alt="Learning Facilitation" />
                    </div>
                    <div className="content-block">
                        <h2>Learning <span>Facilitation</span></h2>
                        <p>
                            Our trained facilitators ensure smooth inclusion and personalized attention 
                            for every child. They create an atmosphere of understanding and support 
                            while maintaining professional excellence.
                        </p>
                        <ul className="feature-list">
                            <li>Support from trained caregivers</li>
                            <li>Personalized learning plans</li>
                            <li>Social-emotional development</li>
                            <li>Favorable adult-child ratios</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Collaborative Support */}
            <div className="collaborative-section">
                <div className="section-title">
                    <h2>Collaborative <span>Support</span></h2>
                    <p>Success comes through partnership</p>
                </div>
                <div className="collaborative-features">
                    <div className="feature-item">
                        <h3>Access to clinical psychologists</h3>
                        <p>Regular consultations with child development experts</p>
                    </div>
                    <div className="feature-item">
                        <h3>Dedicated inclusion experts</h3>
                        <p>Specialists who ensure every child's needs are met</p>
                    </div>
                    <div className="feature-item">
                        <h3>Program adjustments</h3>
                        <p>Continuous improvement based on feedback</p>
                    </div>
                    <div className="feature-item">
                        <h3>Group therapy sessions</h3>
                        <p>Structured activities to develop social skills</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>We're Here to Help Your Child <span>Thrive</span></h2>
                <p>
                    Our program adapts to meet your child's unique needs, ensuring they receive 
                    the support and guidance necessary for their growth and development.
                </p>
                <button className="cta-button">Schedule a Visit</button>
            </div>

            {/* Gallery */}
            <div className="lap-gallery">
                <div className="section-title">
                    <h2>Walk Through <span>Our LAP Zone</span></h2>
                    <p>Explore our specially designed learning spaces</p>
                </div>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src={galleryImg1} alt="LAP Facility 1" />
                    </div>
                    <div className="gallery-item">
                        <img src={galleryImg2} alt="LAP Facility 2" />
                    </div>
                    <div className="gallery-item">
                        <img src={galleryImg3} alt="LAP Facility 3" />
                    </div>
                </div>
            </div>

            {/* Schedule */}
            <div className="schedule-section">
                <div className="section-title">
                    <h2>Your Child's <span>Daily Routine</span></h2>
                    <p>A structured yet flexible approach to learning</p>
                </div>
                <div className="schedule-container">
                    <div className="schedule-list">
                        <div className="schedule-item">
                            <div className="item-icon">
                                <FaClock />
                            </div>
                            <div className="item-content">
                                <h3>Morning Arrival</h3>
                                <p>Warm welcome and settling in activities</p>
                            </div>
                        </div>
                        <div className="schedule-item">
                            <div className="item-icon">
                                <FaChild />
                            </div>
                            <div className="item-content">
                                <h3>Learning Sessions</h3>
                                <p>Personalized instruction and group activities</p>
                            </div>
                        </div>
                        <div className="schedule-item">
                            <div className="item-icon">
                                <FaHandsHelping />
                            </div>
                            <div className="item-content">
                                <h3>Therapy Time</h3>
                                <p>Specialized support as per individual needs</p>
                            </div>
                        </div>
                        <div className="schedule-item">
                            <div className="item-icon">
                                <FaPalette />
                            </div>
                            <div className="item-content">
                                <h3>Creative Expression</h3>
                                <p>Art, music, and movement activities</p>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-image">
                        <img src={facilitationImg} alt="Daily Activities" />
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="testimonial-section">
                <div className="section-title">
                    <h2>Parents <span>Love</span> Our Approach</h2>
                    <p>Hear what families say about their experience</p>
                </div>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>
                        <p className="testimonial-text">
                            The Learning Advancement Plan has been transformative for my child. 
                            The personalized attention and expert care have helped them grow in 
                            ways we never imagined possible.
                        </p>
                        <div className="testimonial-author">
                            <div className="author-image"></div>
                            <div className="author-info">
                                <h4>Sarah Johnson</h4>
                                <p>Parent at Pune Center</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>
                        <p className="testimonial-text">
                            As a parent of a child with special needs, I was nervous about finding the right program. 
                            The LAP team exceeded all our expectations with their expertise and compassion.
                        </p>
                        <div className="testimonial-author">
                            <div className="author-image"></div>
                            <div className="author-info">
                                <h4>Rajesh Patel</h4>
                                <p>Parent at Mumbai Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs */}
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
        </div>
    );
};

export default LearningAdvancement;