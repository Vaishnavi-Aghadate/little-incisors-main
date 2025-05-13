import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AdmissionEnquiry from '../components/AdmissionEnquiry/AdmissionEnquiry';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleEnquiryOpen = () => setIsEnquiryOpen(true);
    const handleEnquiryClose = () => setIsEnquiryOpen(false);

    return (
        <>
            <div className="navbar-wrapper">
                <nav className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
                    <div className="navbar-logo">
                        <p className={`navbar-logo-part1 ${isScrolled ? 'navbar-scrolled-logo' : ''}`}>LITTLE</p>
                        <p className={`navbar-logo-part2 ${isScrolled ? 'navbar-scrolled-logo' : ''}`}>Incisors</p>
                    </div>
                    <div className="navbar-menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? '✖' : '☰'}
                    </div>

                    <ul className={`navbar-links ${isMenuOpen ? 'navbar-active' : ''}`}>
                        <div className="navbar-middle-bar"></div>
                        <li><Link to="/" className={isScrolled ? 'navbar-scrolled-link' : ''}>Admissions</Link></li>
                        <div className="navbar-middle-bar"></div>

                        <li className="navbar-dropdown">
                            <Link to="#" className={isScrolled ? 'navbar-scrolled-link' : ''}>Programs ▼</Link>
                            <ul className="navbar-dropdown-menu">
                                <li><Link to="/foundational-development">Foundational Development</Link></li>
                                <li><Link to="/daycare">Daycare</Link></li>
                                <li><Link to="/afterschool">Afterschool Enrichment</Link></li>
                                <li><Link to="/learning-advancement">Learning Advancement</Link></li>
                            </ul>
                        </li>

                        <div className="navbar-middle-bar"></div>
                        <li><Link to="/corporates" className={isScrolled ? 'navbar-scrolled-link' : ''}>Corporates</Link></li>
                        <div className="navbar-middle-bar"></div>
                        <li><Link to="/foundational-development" className={isScrolled ? 'navbar-scrolled-link' : ''}>Curriculum</Link></li>
                        <div className="navbar-middle-bar"></div>

                        <li className="navbar-dropdown">
                            <Link to="#" className={isScrolled ? 'navbar-scrolled-link' : ''}>Resources ▼</Link>
                            <ul className="navbar-dropdown-menu">
                                <li><Link to="/fee-structure">Fee Structure</Link></li>
                                <li><Link to="/safety">Safety at Little Incisors</Link></li>
                                <li><Link to="/parent-thing">That Parent Thing</Link></li>
                                <li><Link to="/events-webinar">Events and Webinar</Link></li>
                            </ul>
                        </li>

                        <div className="navbar-middle-bar"></div>
                        <li className="navbar-mobile-cta">
                            <button
                                className={`navbar-cta-button ${isScrolled ? 'navbar-scrolled-button' : ''}`}
                                onClick={handleEnquiryOpen}
                            >
                                Enroll Now &#9658;
                            </button>
                        </li>
                    </ul>

                    <button
                        className={`navbar-cta-button navbar-desktop-cta ${isScrolled ? 'navbar-scrolled-button' : ''}`}
                        onClick={handleEnquiryOpen}
                    >
                        Enroll Now &#9658;
                    </button>
                </nav>
            </div>

            <AdmissionEnquiry isOpen={isEnquiryOpen} onClose={handleEnquiryClose} />
        </>
    );
};

export default Navbar;
