import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Corporates.css';

// Import images
import backgroundImage from '../../assets/Playing.jpg';
import img1 from '../../assets/women2.jpg';
import img2 from '../../assets/women2.jpg';
import img3 from '../../assets/women2.jpg';
import testimonialImg1 from '../../assets/women2.jpg';
import testimonialImg2 from '../../assets/women2.jpg';

const CorporatePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedSolution, setSelectedSolution] = useState('Onsite');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const solutions = {
    'Onsite': {
      text: 'Onsite childcare solutions provide facilities at the workplace, ensuring employees have their children nearby for convenience and peace of mind.',
      bgClass: 'purple-bg',
      descClass: 'white'
    },
    'Near-Site': {
      text: 'Near-site childcare centers are located close to the workplace, offering flexibility for working parents while ensuring high-quality care.',
      bgClass: 'pink-bg',
      descClass: 'white'
    },
    'Subsidized': {
      text: 'Subsidized childcare solutions help companies support employees by covering part of the childcare costs, making quality care more accessible.',
      bgClass: 'yellow-bg',
      descClass: 'dark'
    },
    'Nanny at Home': {
      text: "Nanny at home services provide professional childcare assistance directly at home, ensuring personalized care tailored to each child's needs.",
      bgClass: 'blue-bg',
      descClass: 'white'
    }
  };

  const features = [
    {
      icon: "🏠",
      title: "Infrastructure",
      description: "We create for your children a 'home away from home', a place where they feel loved and happy."
    },
    {
      icon: "🔒",
      title: "Health & Safety",
      description: "We follow the highest standards of hygiene, security, and nutrition to ensure well-being."
    },
    {
      icon: "📜",
      title: "Foundational Development",
      description: "Our pedagogy aligns with the National Education Policy to encourage children's exploration."
    },
    {
      icon: "🤝",
      title: "Trusted by Corporates",
      description: "Over 450 corporates trust us for world-class childcare facilities and professional nanny services."
    },
    {
      icon: "🌎",
      title: "Pan-India Presence",
      description: "With centers in Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, and Chennai, we are everywhere."
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "Tech Solutions Inc.",
      text: "Implementing Little Incisors' onsite childcare has transformed our workplace. Employee satisfaction has increased by 40% and retention rates have improved significantly.",
      img: testimonialImg1
    },
    {
      name: "Rahul Kapoor",
      company: "Global Enterprises",
      text: "The subsidized childcare program has been a game-changer for our employees. It's become one of our most valued benefits and a key differentiator in talent acquisition.",
      img: testimonialImg2
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="corporate-container">
      {/* Hero Section */}
      <div className="corporate-header">
        <div className="header-content">
          <div className="header-text-container">
            <h1>Empower Your Workforce With <span>Corporate Childcare</span></h1>
            <p className="tagline">WHERE WORK AND FAMILY THRIVE TOGETHER</p>
            <p className="intro-text">
              Our comprehensive corporate childcare solutions create family-friendly workplaces that 
              boost productivity, improve retention, and support working parents.
            </p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Employee Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3:1</span>
                <span className="stat-label">Child-Caregiver Ratio</span>
              </div>
            </div>
          </div>
          <div className="header-form">
            <h3>Get Started</h3>
            <input type="text" placeholder="Name *" required />
            <input type="tel" placeholder="+91 Phone Number *" required />
            <input type="email" placeholder="Email ID *" required />
            <select required>
              <option value="">Select I am *</option>
              <option value="Parent">Parent</option>
              <option value="Corporate">Corporate</option>
            </select>
            <input type="text" placeholder="Company *" required />
            <button type="submit">Connect Now</button>
          </div>
        </div>
        <div className="header-decoration">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="core-principles">
        <div className="section-title">
          <h2>Why Choose <span>Little Incisors</span></h2>
          <p>Five pillars of our corporate childcare philosophy</p>
        </div>
        <div className="principles-container">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="principle-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="section-title">
          <h2>Benefits of <span>Employer-Sponsored Childcare</span></h2>
          <p>How corporate childcare transforms workplaces</p>
        </div>
        <div className="benefits-container">
          <div className="benefit-card">
            <img src={img1} alt="Return to Work" />
            <div className="card-content">
              <h3>Return to Work</h3>
              <p>We help working parents return to their workplaces with quality daycare solutions.</p>
            </div>
          </div>
          <div className="benefit-card">
            <img src={img2} alt="Happy Employees" />
            <div className="card-content">
              <h3>Happy Employees</h3>
              <p>Employees can focus better when they know their children are in good hands.</p>
            </div>
          </div>
          <div className="benefit-card">
            <img src={img3} alt="Women as Leaders" />
            <div className="card-content">
              <h3>Women as Leaders</h3>
              <p>Support women in leadership by providing childcare solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className={`solutions-section ${solutions[selectedSolution].bgClass}`}>
        <div className="section-title">
          <h2>Our <span>Solutions</span></h2>
          <p>Flexible options to meet your corporate needs</p>
        </div>
        <div className="solutions-container">
          <div className="solution-options">
            {Object.keys(solutions).map((solution) => (
              <div
                key={solution}
                className={`solution-option ${selectedSolution === solution ? 'active' : ''}`}
                onClick={() => setSelectedSolution(solution)}
              >
                {solution}
              </div>
            ))}
          </div>
          
          <motion.div
            className={`solution-detail ${solutions[selectedSolution].descClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{selectedSolution}</h3>
            <p>{solutions[selectedSolution].text}</p>
          </motion.div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="section-title">
          <h2>Corporate <span>Success Stories</span></h2>
          <p>Hear what companies say about our solutions</p>
        </div>
        <div className="testimonial-content">
          <div className="testimonial-image">
            <img src={testimonials[testimonialIndex].img} alt="Testimonial" />
          </div>
          <div className="testimonial-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p>{testimonials[testimonialIndex].text}</p>
                <div className="testimonial-author">
                  <h4>{testimonials[testimonialIndex].name}</h4>
                  <p>{testimonials[testimonialIndex].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="testimonial-nav">
              <button onClick={prevTestimonial}>
                <FaArrowLeft />
              </button>
              <button onClick={nextTestimonial}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Transform Your <span>Workplace?</span></h2>
        <p>
          Partner with us to create a family-friendly environment that attracts and retains top talent.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Proposal
        </motion.button>
      </div>
    </div>
  );
};

export default CorporatePage;