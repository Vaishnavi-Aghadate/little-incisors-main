import React, { useState, useEffect } from 'react';
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
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleEnquiryOpen = () => {
        setIsEnquiryOpen(true);
    };

    const handleEnquiryClose = () => {
        setIsEnquiryOpen(false);
    };

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
                        <li><a href="/" className={isScrolled ? 'navbar-scrolled-link' : ''}>Admissions</a></li>
                        <div className="navbar-middle-bar"></div>
                        <li className="navbar-dropdown">
                            <a href="#" className={isScrolled ? 'navbar-scrolled-link' : ''}>Programs ▼</a>
                            <ul className="navbar-dropdown-menu">
                                <li><a href="/foundational-development">Foundational Development</a></li>
                                <li><a href="/daycare">Daycare</a></li>
                                <li><a href="/afterschool">Afterschool Enrichment</a></li>
                                <li><a href="/learning-advancement">Learning Advancement</a></li>
                            </ul>
                        </li>
                        <div className="navbar-middle-bar"></div>
                        <li><a href="/corporates" className={isScrolled ? 'navbar-scrolled-link' : ''}>Corporates</a></li>
                        <div className="navbar-middle-bar"></div>
                        <li><a href="/foundational-development" className={isScrolled ? 'navbar-scrolled-link' : ''}>Curriculum</a></li>
                        <div className="navbar-middle-bar"></div>
                        <li className="navbar-dropdown">
                            <a href="#" className={isScrolled ? 'navbar-scrolled-link' : ''}>Resources ▼</a>
                            <ul className="navbar-dropdown-menu">
                                <li><a href="/fee-structure">Fee Structure</a></li>
                                <li><a href="/safety">Safety at Little Incisors</a></li>
                                <li><a href="/parent-thing">That Parent Thing</a></li>
                                <li><a href="/events-webinar">Events and Webinar</a></li>
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