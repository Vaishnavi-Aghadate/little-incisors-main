import React, { useState } from 'react';
import { FaCalculator, FaHandshake, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './NurseryAdmission.css';

import playAreaImg from '../../assets/Playing.jpg';
import financialImg from '../../assets/infastr.jpg';
import corporateImg from '../../assets/Teaching.jpg';

const NurseryAdmission = () => {
    const [activeTab, setActiveTab] = useState('afterSchool');
    const [activeAccordion, setActiveAccordion] = useState(null);

    const features = [
        {
            title: 'Find The Right Program',
            image: playAreaImg,
            description: 'Discover age-appropriate programs tailored to your child\'s developmental needs.'
        },
        {
            title: 'Fee Calculator',
            image: financialImg,
            description: 'Plan your child\'s education with our transparent fee structure and calculator.'
        },
        {
            title: 'Corporate Tie-Ups',
            image: corporateImg,
            description: 'Learn about special benefits available through our corporate partnerships.'
        }
    ];

    const benefits = [
        {
            title: 'Trusted by 80K+ Parents',
            description: 'A child development center with proven track record of excellence.'
        },
        {
            title: 'Safe Environment',
            description: 'Age-appropriate learning aids in a secure and stimulating space.'
        },
        {
            title: 'Screen-Free Engagement',
            description: 'Full-day activities focused on holistic development without screen time.'
        },
        {
            title: 'Expert Facilitators',
            description: 'Experienced staff for both individual and group activities.'
        },
        {
            title: 'Nutritious Meals',
            description: 'Expert-curated healthy meals for growing children.'
        },
        {
            title: 'Safety Protocols',
            description: 'Stringent health measures with child-friendly infrastructure.'
        }
    ];

    const admissionSteps = [
        'Find a center and take a walkthrough',
        'Meet the Center Director for counseling',
        'Select an age-appropriate program',
        'Receive a detailed fee quote',
        'Pay the fee and complete documents'
    ];

    const faqs = [
        {
            question: 'What age groups do you cater to at Little Incisors Preschools and Daycare?',
            answer: 'We cater to children from 6 months to 10 years with age-appropriate programs.'
        },
        {
            question: 'What are the working hours of the preschool?',
            answer: 'Our centers operate from 8:30 AM to 6:30 PM, Monday through Friday.'
        },
        {
            question: 'What is the curriculum followed?',
            answer: 'We follow a research-based curriculum aligned with national education standards.'
        },
        {
            question: 'Does the center provide meals?',
            answer: 'Yes, we provide nutritious meals prepared under strict hygiene conditions.'
        },
        {
            question: 'What safety measures are taken?',
            answer: 'We implement comprehensive safety protocols including CCTV monitoring, trained staff, and regular sanitization.'
        },
        {
            question: 'What is the adult-to-child ratio?',
            answer: 'We maintain appropriate ratios based on age groups, ensuring individual attention.'
        },
        {
            question: 'How does the program benefit child development?',
            answer: 'Our program focuses on holistic development including cognitive, social, emotional, and physical aspects.'
        },
        {
            question: 'Which cities is Little Incisors present in?',
            answer: 'We have centers across major cities including Mumbai, Delhi, Bangalore, and more.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="nursery-admission">
            {/* Hero Section */}
            <section className="admission-hero">
                <h1>Nursery Admission Enquiry</h1>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <LazyLoadImage
                                src={feature.image}
                                alt={feature.title}
                                effect="blur"
                                className="feature-image"
                            />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <button className="know-more-btn">Know More</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Program Details */}
            <section className="program-details">
                <button className="enquire-btn">Enquire Now</button>
                <h2>Program Details</h2>
                <div className="program-tabs">
                    <button 
                        className={activeTab === 'foundational' ? 'active' : ''}
                        onClick={() => setActiveTab('foundational')}
                    >
                        Foundational Development
                    </button>
                    <button 
                        className={activeTab === 'afterSchool' ? 'active' : ''}
                        onClick={() => setActiveTab('afterSchool')}
                    >
                        After School Enrichment
                    </button>
                    <button 
                        className={activeTab === 'individual' ? 'active' : ''}
                        onClick={() => setActiveTab('individual')}
                    >
                        Individualized Learning
                    </button>
                </div>
                <div className="program-content">
                    <LazyLoadImage
                        src={playAreaImg}
                        alt="Program"
                        effect="blur"
                        className="program-image"
                    />
                    <div className="program-text">
                        <h3>After School Enrichment Program</h3>
                        <p>A comprehensive program designed to support children's development after school hours...</p>
                        <button className="know-more-btn">Know More</button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <h2>Why Choose Little Incisors for Preschool Admission</h2>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Admission Process */}
            <section className="admission-process">
                <h2>Little Incisors Preschool Admission Process</h2>
                <div className="process-timeline">
                    {admissionSteps.map((step, index) => (
                        <div key={index} className="timeline-step">
                            <div className="step-number">{index + 1}</div>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
                <p className="admission-note">*Admissions are subject to availability</p>
            </section>

            {/* Walkthrough Section */}
            <section className="walkthrough-section">
                <h2>Schedule A Walkthrough of A Little Incisors Center Near You</h2>
                <button className="locate-btn">Locate A Center</button>
            </section>

            {/* Corporate Section */}
            <section className="corporate-section">
                <h2>Call Us To Find Out If Your Workplace Has A Tie-Up With Little Incisors</h2>
                <button className="call-btn">Call Now</button>
            </section>

            {/* FAQs */}
            <section className="faqs-section">
                <h2>FAQs</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeAccordion === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                {activeAccordion === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`faq-answer ${activeAccordion === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NurseryAdmission;