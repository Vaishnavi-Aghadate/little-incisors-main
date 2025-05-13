import React, { useState } from 'react';
import './EventsWebinar.css';
import { FaQuoteLeft, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import tiredWoman from '../../assets/women1.jpg';
import doctor from '../../assets/women2.jpg';
import stressedWoman from '../../assets/women3.jpg';

const EventsWebinar = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        captcha: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="events-container">
            {/* Hero Section */}
            <div className="events-header">
                <div className="header-content">
                    <div className="header-text-container">
                        <h1>Feeling Drained? <span>Let's Talk About It!</span></h1>
                        <p className="tagline">UNDERSTANDING HORMONAL FATIGUE</p>
                        <p className="intro-text">
                            Join us for an insightful session on understanding and managing 
                            fatigue and mood swings naturally with expert guidance.
                        </p>
                        <div className="header-stats">
                            <div className="stat-item">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Participants</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">92%</span>
                                <span className="stat-label">Satisfaction Rate</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-form">
                        <h3>Register for the Webinar</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Contact Number"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                required
                            />
                            <div className="captcha-box">
                                <div><input
                                    type="checkbox"
                                    checked={formData.captcha}
                                    onChange={(e) => setFormData({...formData, captcha: e.target.checked})}
                                    required
                                /></div>
                                <div><label>I'm not a robot</label></div>
                            </div>
                            <button type="submit">Register Now</button>
                        </form>
                    </div>
                </div>
                <div className="header-decoration">
                    <div className="deco-circle deco-1"></div>
                    <div className="deco-circle deco-2"></div>
                    <div className="deco-circle deco-3"></div>
                </div>
            </div>

            {/* Speaker Section */}
            <div className="speaker-section">
                <div className="section-title">
                    <h2>Meet Our <span>Expert Speaker</span></h2>
                    <p>Learn from the best in women's health</p>
                </div>
                <div className="speaker-container">
                    <div className="speaker-image">
                        <img src={doctor} alt="Dr. Anvitha Shetty" />
                    </div>
                    <div className="speaker-info">
                        <h3>Dr. Anvitha Shetty</h3>
                        <p className="speaker-credentials">CMC Vellore, Apollo Clinic</p>
                        <div className="speaker-bio">
                            <p>
                                With over 15 years of experience in gynecology and endocrinology, 
                                Dr. Shetty specializes in hormonal imbalances and their impact on 
                                women's daily lives.
                            </p>
                        </div>
                        <div className="event-details">
                            <div className="detail-item">
                                <FaCalendarAlt className="detail-icon" />
                                <span>22nd March, 12:00 PM</span>
                            </div>
                            <div className="detail-item">
                                <FaMapMarkerAlt className="detail-icon" />
                                <span>Online Webinar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="info-banner">
                <div className="banner-content">
                    <h2>Struggling with <span>Fatigue?</span></h2>
                    <h3>Understand How Hormones Impact Your Energy and What Could Help</h3>
                    <p>
                        Join this exclusive session to gain expert insights on hormonal balance 
                        and discover practical ways to enhance your well-being.
                    </p>
                    <button className="cta-button">SIGN UP NOW!</button>
                </div>
            </div>

            {/* Takeaways Section */}
            <div className="takeaways-section">
                <div className="section-title">
                    <h2>What You'll <span>Gain</span></h2>
                    <p>Key benefits from this session</p>
                </div>
                <div className="takeaways-container">
                    <div className="takeaways-image">
                        <img src={stressedWoman} alt="Stressed Woman" />
                    </div>
                    <div className="takeaways-list">
                        <ul>
                            <li>Decoding the link between hormones and fatigue</li>
                            <li>Understanding common hormonal imbalances (PCOS, thyroid issues, stress)</li>
                            <li>Simple lifestyle changes to boost energy and well-being</li>
                            <li>Expert insights from a gynecologist</li>
                            <li>Q&A session with Dr. Shetty</li>
                            <li>Access to webinar recording</li>
                        </ul>
                        <button className="cta-button">SIGN UP FOR FREE</button>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="testimonial-section">
                <div className="section-title">
                    <h2>What <span>Participants</span> Say</h2>
                    <p>Hear from previous attendees</p>
                </div>
                <div className="testimonial-card">
                    <div className="quote-icon">
                        <FaQuoteLeft />
                    </div>
                    <p className="testimonial-text">
                        "This webinar completely changed my understanding of hormonal fatigue. 
                        Dr. Shetty's practical advice helped me regain my energy within weeks!"
                    </p>
                    <div className="testimonial-author">
                        <div className="author-image">
                            <img src={tiredWoman} alt="Participant" />
                        </div>
                        <div className="author-info">
                            <h4>Priya Malhotra</h4>
                            <p>Previous Attendee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsWebinar;