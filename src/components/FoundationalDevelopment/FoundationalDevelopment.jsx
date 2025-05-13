import React, { useState } from 'react';
import { FaBrain, FaUsers, FaStar, FaHeart, FaQuoteLeft, FaChild, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './FoundationalDevelopment.css';

// Safe Environment Images
const safeEnvironmentImages = [
    { img: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Bright preschool classroom with safety-rounded furniture and child-sized tables' },
    { img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Secure outdoor play area with soft rubber flooring and age-appropriate equipment' },
    { img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Childproofed daycare center with safety gates and electrical outlet covers' },
    { img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Secure outdoor play area with soft rubber flooring and age-appropriate equipment' },
    { img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Daycare nap area with individual cots and proper spacing' },
    { img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Preschool entryway with secure check-in system and staff supervision' }
];

// Trained Caregivers Images
const trainedCaregiversImages = [
    { img: 'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Certified teacher helping toddlers with a hands-on learning activity' },
    { img: 'https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Caregiver comforting a crying child with gentle reassurance' },
    { img: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Teacher demonstrating proper handwashing techniques to preschoolers' },
    { img: 'https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Caregiver comforting a crying child with gentle reassurance' },
    { img: 'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Certified teacher helping toddlers with a hands-on learning activity' },
    { img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Caregiver documenting child\'s progress in developmental portfolio' }
];

// Structured Engagement Images
const structuredEngagementImages = [
    { img: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Preschoolers engaged in circle time with calendar and weather activities' },
    { img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Children participating in music class with instruments and movement' },
    { img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Sensory table activity with toddlers exploring different textures' },
    { img: 'https://images.unsplash.com/photo-1584473457409-19b1d904d6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Preschool art project with children painting at easels' },
    { img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Story time with teacher using large picture book and props' },
    { img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Outdoor nature exploration activity with magnifying glasses' }
];

// Nutritious Meals Images
const nutritiousMealsImages = [
    { img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80', alt: 'Healthy snack time with sliced fruits, vegetables and whole grain crackers' },
    { img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Children sitting family-style at tables enjoying balanced lunches' },
    { img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Preschool cooking activity with children preparing healthy snacks' },
    { img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Toddler drinking from cup during mealtime with caregiver supervision' },
    { img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80', alt: 'Healthy snack time with sliced fruits, vegetables and whole grain crackers' },
    { img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Caregiver modeling good eating habits during preschool meal time' }
];

// Activities Images
const activitiesImages = [
    { title: 'Circle Time', image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Children sitting in circle for morning greeting and calendar time' },
    { title: 'Art Activities', image: 'https://images.unsplash.com/photo-1584473457409-19b1d904d6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Child painting at easel with various colors and brush sizes' },
    { title: 'Story Time', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Teacher reading interactive book with children gathered around' },
    { title: 'Music & Movement', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Children dancing with scarves during music class' },
    { title: 'Outdoor Play', image: 'https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Children climbing on safe playground equipment during recess' },
    { title: 'Sensory Play', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Toddlers exploring sensory bins with various textures' }
  ];
  

// Age Programs Images
const ageProgramsData = [
  { title: 'Infant', age: '6 Months - 15 Months', image: 'https://images.unsplash.com/photo-1541692641319-981cc79ee10a', alt: 'Caregiver holding baby' },
  { title: 'Junior Toddler', age: '15 Months - 2 Years', image: 'https://images.unsplash.com/photo-1583947581924-c39ee9314d0c', alt: 'Toddler playing with blocks' },
  { title: 'Senior Toddler', age: '2 Years - 3 Years', image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d', alt: 'Toddlers in group activity' },
  { title: 'Pre-K', age: '3 Years - 4 Years', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754', alt: 'Preschoolers at table' },
  { title: 'Kindergarten Prep', age: '4 Years - 5 Years', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4', alt: 'Children writing letters' },
  { title: 'School Age', age: '5 Years - 12 Years', image: 'https://images.unsplash.com/photo-1588072432904-843af37f03ed', alt: 'Older children doing homework' }
];

const FoundationalDevelopment = () => {
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('young');
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeFeature, setActiveFeature] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalTitle, setModalTitle] = useState('');

    const coreValues = [
        { icon: <FaBrain />, label: 'Curious' },
        { icon: <FaUsers />, label: 'Collaborative' },
        { icon: <FaStar />, label: 'Confident' },
        { icon: <FaHeart />, label: 'Empathetic' },
        { icon: <FaChild />, label: 'Independent' }
    ];

    const keyFeatures = [
        { 
            id: 'safe-environment',
            icon: <FaChild />, 
            text: 'Safe Environment',
            description: 'Our facility is designed with child safety as the top priority, featuring secure entry systems, child-proofed spaces, and constant supervision.'
        },
        { 
            id: 'trained-caregivers',
            icon: <FaUsers />, 
            text: 'Trained Caregivers',
            description: 'Our staff undergoes rigorous training in child development, first aid, and emergency protocols to provide the best care possible.'
        },
        { 
            id: 'structured-engagement',
            icon: <FaBrain />, 
            text: 'Structured Engagement',
            description: 'We provide age-appropriate activities and learning experiences that stimulate cognitive, social, and physical development.'
        },
        { 
            id: 'nutritious-meals',
            icon: <FaHeart />, 
            text: 'Nutritious Meals',
            description: 'We serve balanced, healthy meals prepared with fresh ingredients to support your child\'s growth and energy needs.'
        }
    ];

    const featureImageMap = {
        'safe-environment': safeEnvironmentImages,
        'trained-caregivers': trainedCaregiversImages,
        'structured-engagement': structuredEngagementImages,
        'nutritious-meals': nutritiousMealsImages
    };

    const faqs = [
        {
            question: 'What is the Foundational Development Program?',
            answer: 'Our Foundational Development Program is a comprehensive early learning program designed to build strong foundations in children during their crucial early years.'
        },
        {
            question: 'What age groups does the program cater to?',
            answer: 'The program caters to children from 6 months to 6 years, with age-appropriate activities and curriculum for each stage of development.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handleFeatureClick = (featureId, featureText) => {
        setModalImages(featureImageMap[featureId] || []);
        setModalTitle(featureText);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImages([]);
        setModalTitle('');
    };

    return (
        <div className="Fd-container">
            {/* Hero Section */}
            <div className="Fd-hero">
                <div className="Fd-hero-content">
                    <h1>Preparing Them for <span>the Future</span></h1>
                    <p className="Fd-hero-subtitle">BUILDING STRONG FOUNDATIONS FOR LIFELONG LEARNING</p>
                    
                    <div className="Fd-core-values">
                        {coreValues.map((value, index) => (
                            <div key={index} className="Fd-value-card">
                                <div className="Fd-value-icon">
                                    {value.icon}
                                </div>
                                <h3>{value.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Program Overview */}
            <div className="Fd-section">
                <div className="Fd-section-title">
                    <h2>Foundational <span>Development</span> Program</h2>
                    <p>Supporting early childhood development through structured learning and play</p>
                </div>
                <div className="Fd-features-grid">
                    {keyFeatures.map((feature, index) => (
                        <div 
                            key={index} 
                            className="Fd-feature-card"
                            onClick={() => handleFeatureClick(feature.id, feature.text)}
                        >
                            <div className="Fd-feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.text}</h3>
                            <p className="Fd-feature-description">{feature.description}</p>
                            <div className="Fd-feature-indicator">
                                +
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Learning Architecture */}
            <div className="Fd-section Fd-light-bg">
                <div className="Fd-section-title">
                    <h2>Learning <span>Architecture</span></h2>
                    <p>Tailored programs for different age groups</p>
                </div>
                <div className="Fd-age-group-selector">
                    <button
                        className={selectedAgeGroup === 'young' ? 'Fd-active' : ''}
                        onClick={() => setSelectedAgeGroup('young')}
                    >
                        6 Months to 4 Years
                    </button>
                    <button
                        className={selectedAgeGroup === 'older' ? 'Fd-active' : ''}
                        onClick={() => setSelectedAgeGroup('older')}
                    >
                        4 Years to 16 Years
                    </button>
                </div>
                <div className="Fd-development-grid">
                    <div className="Fd-development-card">
                        <h3>Cognitive Development</h3>
                        <p>Activities to enhance thinking and problem-solving skills</p>
                    </div>
                    <div className="Fd-development-card">
                        <h3>Social-Emotional Growth</h3>
                        <p>Building relationships and emotional intelligence</p>
                    </div>
                    <div className="Fd-development-card">
                        <h3>Physical Development</h3>
                        <p>Gross and fine motor skills activities</p>
                    </div>
                    <div className="Fd-development-card">
                        <h3>Language Skills</h3>
                        <p>Communication and literacy development</p>
                    </div>
                </div>
            </div>

            {/* Activities */}
            <div className="Fd-section">
                <div className="Fd-section-title">
                    <h2>Developmental <span>Activities</span></h2>
                    <p>Engaging experiences for holistic growth</p>
                </div>
                <div className="Fd-activities-grid">
                    {activitiesImages.map((activity, index) => (
                        <div key={index} className="Fd-activity-card">
                            <LazyLoadImage
                                src={activity.image}
                                alt={activity.alt}
                                effect="blur"
                                className="Fd-activity-image"
                            />
                            <div className="Fd-activity-content">
                                <h3>{activity.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Age Programs */}
            <div className="Fd-section Fd-light-bg">
                <div className="Fd-section-title">
                    <h2>Age-wise <span>Programs</span></h2>
                    <p>Specialized curriculum for each developmental stage</p>
                </div>
                <div className="Fd-programs-grid">
                    {ageProgramsData.map((program, index) => (
                        <div key={index} className="Fd-program-card">
                            <LazyLoadImage
                                src={program.image}
                                alt={program.alt}
                                effect="blur"
                                className="Fd-program-image"
                            />
                            <div className="Fd-program-content">
                                <h3>{program.title}</h3>
                                <p>{program.age}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Early Years Matter */}
            <div className="Fd-section">
                <div className="Fd-section-content">
                    <div className="Fd-content-block">
                        <h2>Early Years <span>Matter</span></h2>
                        <p>
                            Children come into this world ready to learn and develop. By the age of five, they have already formed 85 percent of their intelligence, personality, and abilities. The first few months and years of their lives lay the foundation for everything that follows. Their little brains make connections through everyday experiences with their mommies, daddies, and other caring adults. The amount of love, attention, and play they get in their early years decides which connections will last a lifetime. We're here to give children the happy and loving experiences they need to get ready for school and life ahead.
                        </p>
                    </div>
                    <div className="Fd-section-image">
                        <LazyLoadImage
                            src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a"
                            alt="Teacher with happy children"
                            effect="blur"
                        />
                    </div>
                </div>
            </div>

            {/* Daily Schedule */}
            <div className="Fd-section Fd-light-bg">
                <div className="Fd-section-title">
                    <h2>A Day at <span>Little Incisors</span></h2>
                    <p>Structured routine for optimal learning and growth</p>
                </div>
                <div className="Fd-schedule-container">
                    <div className="Fd-schedule-list">
                        <div className="Fd-schedule-item">
                            <h3>Arrival / Individual or Small Group Play</h3>
                        </div>
                        <div className="Fd-schedule-item">
                            <h3>Breakfast</h3>
                        </div>
                        <div className="Fd-schedule-item">
                            <h3>Routine Circle Time</h3>
                        </div>
                        <div className="Fd-schedule-item">
                            <h3>Development Activities</h3>
                        </div>
                        <div className="Fd-schedule-item">
                            <h3>Lunch</h3>
                        </div>
                        <div className="Fd-schedule-item">
                            <h3>Nap Time</h3>
                        </div>
                        <div className="Fd-schedule-note">
                            *Routine applies to children above 15 months and is customized for infants.
                        </div>
                    </div>
                    <div className="Fd-schedule-image">
                        <LazyLoadImage
                            src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d"
                            alt="Daily schedule activities"
                            effect="blur"
                        />
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="Fd-section Fd-testimonial-section">
                <div className="Fd-section-title">
                    <h2>I Choose <span>Little Incisors</span> Because...</h2>
                </div>
                <div className="Fd-testimonial-content">
                    <div className="Fd-testimonial-card">
                        <div className="Fd-quote-icon">
                            <FaQuoteLeft />
                        </div>
                        <p className="Fd-testimonial-text">
                            "The program has been transformative for my child's development. The personalized attention and expert care have helped them grow in ways we never imagined possible."
                        </p>
                        <div className="Fd-testimonial-author">
                            <div className="Fd-author-image"></div>
                            <div className="Fd-author-info">
                                <h4>Sarah Johnson</h4>
                                <p>Parent at Mumbai Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="Fd-section Fd-light-bg">
                <div className="Fd-section-title">
                    <h2>Frequently Asked <span>Questions</span></h2>
                </div>
                <div className="Fd-faq-container">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`Fd-faq-item ${activeAccordion === index ? 'Fd-active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="Fd-faq-question">
                                <h3>{faq.question}</h3>
                                <span className="Fd-faq-icon">
                                    {activeAccordion === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            <div className={`Fd-faq-answer ${activeAccordion === index ? 'Fd-show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="Fd-cta">
                <h2>Ready to <span>Begin</span> Your Child's Learning Journey?</h2>
                <p>Contact us to learn more about our Foundational Development Program</p>
                <button className="Fd-cta-button">Schedule a Visit</button>
            </div>

            {/* Modal for Feature Images */}
            {showModal && (
                <div className="Fd-modal-overlay">
                    <div className="Fd-modal-container">
                        <div className="Fd-modal-header">
                            <h3>{modalTitle}</h3>
                            <button className="Fd-modal-close" onClick={closeModal}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className="Fd-modal-images-grid">
                            {modalImages.map((image, index) => (
                                <div key={index} className="Fd-modal-image-card">
                                    <LazyLoadImage
                                        src={image.img}
                                        alt={image.alt}
                                        effect="blur"
                                        className="Fd-modal-image"
                                    />
                                    <p className="Fd-modal-image-caption">{image.alt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoundationalDevelopment;