import React, { useState } from 'react';
import { FaBookmark, FaPlay, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ParentThing.css';

// Import images
import familyImg from '../../assets/Playing.jpg';
import article1Img from '../../assets/Teaching.jpg';
import article2Img from '../../assets/infastr.jpg';
import article3Img from '../../assets/infaf2.jpg';
import expertImg from '../../assets/women1.jpg';
import testimonialImg from '../../assets/women2.jpg';

const ParentThing = () => {
    const [email, setEmail] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const featuredArticles = [
        {
            image: article1Img,
            title: "Understanding Your Child's Emotional Intelligence",
            intro: "Learn how to nurture emotional intelligence in your child's early years...",
            author: "Dr. Sarah Johnson",
            readTime: "5 min read",
            category: "Emotions & Behaviour"
        },
        {
            image: article2Img,
            title: "The Power of Play-Based Learning",
            intro: "Discover why unstructured play is crucial for cognitive development...",
            author: "Emily Parker",
            readTime: "4 min read",
            category: "Growth & Development"
        }
    ];

    const categories = [
        "All",
        "Emotions & Behaviour",
        "Family Life",
        "Food & Nutrition",
        "Growth & Development",
        "Health & Safety",
        "News & Media"
    ];

    const additionalArticles = [
        {
            image: article3Img,
            title: "Creating Healthy Sleep Habits",
            excerpt: "Essential tips for establishing good sleep routines...",
            author: "Dr. Michael Brown",
            readTime: "6 min read",
            category: "Health & Safety"
        },
        {
            image: article1Img,
            title: "Nutrition Guide for Toddlers",
            excerpt: "Complete guide to balanced nutrition for growing children...",
            author: "Lisa Chen, Nutritionist",
            readTime: "7 min read",
            category: "Food & Nutrition"
        }
    ];

    const videoSessions = [
        {
            thumbnail: expertImg,
            title: "Managing Tantrums Effectively",
            date: "March 15, 2025",
            duration: "12:45"
        },
        {
            thumbnail: expertImg,
            title: "Screen Time Guidelines",
            date: "March 20, 2025",
            duration: "15:20"
        },
        {
            thumbnail: expertImg,
            title: "Building Social Skills",
            date: "March 25, 2025",
            duration: "18:30"
        }
    ];

    const ageCategories = [
        "Infants (0-1 year)",
        "Toddlers (1-3 years)",
        "Preschoolers (3-6 years)",
        "School Age (6-12 years)"
    ];

    const testimonials = [
        {
            text: "The articles and videos on Parent Thing have been a lifesaver for our family. The practical advice helped us navigate the toddler years with confidence.",
            author: "Priya Sharma",
            role: "Mother of 3-year-old"
        },
        {
            text: "As a first-time parent, I found the expert sessions incredibly valuable. The information is presented in such an accessible way.",
            author: "Rahul Kapoor",
            role: "Father of 8-month-old"
        }
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <div className="parent-container">
            {/* Hero Section */}
            <div className="parent-header">
                <div className="header-content">
                    <div className="header-text-container">
                        <h1>That <span>Parent Thing</span></h1>
                        <p className="tagline">EMPOWERING PARENTS WITH KNOWLEDGE AND INSIGHTS</p>
                        <p className="intro-text">
                            Join our community of parents and experts to discover valuable insights, 
                            practical tips, and research-based guidance for your parenting journey.
                        </p>
                        <div className="header-stats">
                            <div className="stat-item">
                                <span className="stat-number">10K+</span>
                                <span className="stat-label">Parents Helped</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Expert Contributors</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-image">
                        <LazyLoadImage
                            src={familyImg}
                            alt="Family holding hands"
                            effect="blur"
                        />
                    </div>
                </div>
                <div className="header-decoration">
                    <div className="deco-circle deco-1"></div>
                    <div className="deco-circle deco-2"></div>
                    <div className="deco-circle deco-3"></div>
                </div>
            </div>

            {/* Featured Articles */}
            <div className="featured-section">
                <div className="section-title">
                    <h2>Your <span>Favourite Reads</span></h2>
                    <p>Curated content for modern parents</p>
                </div>
                <div className="featured-articles">
                    {featuredArticles.map((article, index) => (
                        <div key={index} className="featured-article">
                            <div className="article-image">
                                <LazyLoadImage
                                    src={article.image}
                                    alt={article.title}
                                    effect="blur"
                                />
                            </div>
                            <div className="article-content">
                                <span className="category-tag">{article.category}</span>
                                <h3>{article.title}</h3>
                                <p>{article.intro}</p>
                                <div className="article-meta">
                                    <span>{article.author}</span>
                                    <span>{article.readTime}</span>
                                </div>
                                <button className="read-btn">Read Article</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories & Articles */}
            <div className="categories-section">
                <div className="section-title">
                    <h2>Explore by <span>Category</span></h2>
                    <p>Find content that matches your needs</p>
                </div>
                <div className="categories-tabs">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="articles-grid">
                    {additionalArticles.map((article, index) => (
                        <div key={index} className="article-card">
                            <div className="article-image">
                                <LazyLoadImage
                                    src={article.image}
                                    alt={article.title}
                                    effect="blur"
                                />
                                <span className="category-tag">{article.category}</span>
                            </div>
                            <div className="article-info">
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <div className="article-meta">
                                    <span>{article.author}</span>
                                    <span>{article.readTime}</span>
                                    <FaBookmark className="bookmark-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Resources */}
            <div className="video-section">
                <div className="section-title">
                    <h2>Expert <span>Video Sessions</span></h2>
                    <p>Learn from leading child development specialists</p>
                </div>
                <div className="video-carousel">
                    {videoSessions.map((session, index) => (
                        <div key={index} className="video-card">
                            <div className="video-thumbnail">
                                <LazyLoadImage
                                    src={session.thumbnail}
                                    alt={session.title}
                                    effect="blur"
                                />
                                <div className="play-button">
                                    <FaPlay />
                                </div>
                                <span className="duration">{session.duration}</span>
                            </div>
                            <div className="video-info">
                                <h3>{session.title}</h3>
                                <p>{session.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="see-all-btn">View All Sessions</button>
            </div>

            {/* Age Groups */}
            <div className="age-section">
                <div className="section-title">
                    <h2>Resources by <span>Age Group</span></h2>
                    <p>Find content tailored to your child's developmental stage</p>
                </div>
                <div className="age-cards">
                    {ageCategories.map((age, index) => (
                        <div key={index} className="age-card">
                            <h3>{age}</h3>
                            <p>Explore articles, videos and tips specific to this age group</p>
                            <button className="explore-btn">Explore</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="testimonial-section">
                <div className="section-title">
                    <h2>What <span>Parents Say</span></h2>
                    <p>Hear from our community members</p>
                </div>
                <div className="testimonial-cards">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-image">
                                    <LazyLoadImage
                                        src={testimonialImg}
                                        alt={testimonial.author}
                                        effect="blur"
                                    />
                                </div>
                                <div className="author-info">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subscribe Section */}
            <div className="subscribe-section">
                <div className="subscribe-content">
                    <h2>Join Our <span>Parent Community</span></h2>
                    <p>Get weekly parenting tips and resources delivered to your inbox</p>
                    <form onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">
                            <FaEnvelope /> Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ParentThing;