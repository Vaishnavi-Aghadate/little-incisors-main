import React from 'react';
import './Footer.css';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-section">
                    <h3>Our Programs</h3>
                    <ul>
                        <li>&#10004; About us</li>
                        <li>&#10004; Infant Care</li>
                        <li>&#10004; Learn & Play</li>
                        <li>&#10004; Preschool</li>
                        <li>&#10004; Kids Activities</li>
                        <li>&#10004; Contact</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>&#10004; Franchise Opportunities</li>
                        <li>&#10004; Parent Resources</li>
                        <li>&#10004; Consultation Services</li>
                        <li>&#10004; Find Us</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Get in Touch</h3>
                    <form>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="text" placeholder="Enter Your Contact no." />
                        <input type="email" placeholder="Enter Email-id" />
                        <textarea placeholder="Your Message/Query if any"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <img src={Logo} alt="Daycare Logo" />
                <div><p id='footer-credits'>&copy; 2025 Daycare Kids | Designed by Intellisys IT Solutions PVT LTD.</p></div>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;