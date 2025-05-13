import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyChoose.css";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: "🏠",
      title: "Infrastructure",
      description: "We create for your children a ‘home away from home’, a place where they feel loved and happy.",
      gradient: "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
    },
    {
      icon: "🔒",
      title: "Health & Safety",
      description: "We follow the highest standards of hygiene, security, and nutrition to ensure well-being.",
      gradient: "linear-gradient(135deg, #D4FC79, #96E6A1)",
    },
    {
      icon: "📜",
      title: "Foundational Development",
      description: "Our pedagogy aligns with the National Education Policy to encourage children’s exploration.",
      gradient: "linear-gradient(135deg, #A1C4FD, #C2E9FB)",
    },
    {
      icon: "🤝",
      title: "Trusted by Corporates",
      description: "Over 450 corporates trust us for world-class childcare facilities and professional nanny services.",
      gradient: "linear-gradient(135deg, #FDCB82, #F8A170)",
    },
    {
      icon: "🌎",
      title: "Pan-India Presence",
      description: "With centers in Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, and Chennai, we are everywhere.",
      gradient: "linear-gradient(135deg, #F6D365, #FDA085)",
    },
  ];

  return (
    <section className="why-choose">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Why Choose <span>Little Incisors</span>
      </motion.h2>

      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            style={{ background: feature.gradient }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            data-aos="fade-up"
          >
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;