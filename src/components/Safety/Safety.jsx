import React from 'react';
import './Safety.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaWhatsapp } from 'react-icons/fa';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import images
import temperatureCheck from '../../assets/Teaching.jpg';
import programZone from '../../assets/Playing.jpg';
import outdoorPlay from '../../assets/infastr.jpg';
import pantry from '../../assets/foodn.jpg';
import training from '../../assets/Teaching.jpg';
import electrical from '../../assets/infaf2.jpg';
import fireSafety from '../../assets/Playing.jpg';
import pocso from '../../assets/infastr.jpg';
import cctv from '../../assets/infaf2.jpg';
import security from '../../assets/Teaching.jpg';
import caregiver from '../../assets/women1.jpg';
import safetyOfficer from '../../assets/women2.jpg';

const Safety = () => {
    const safetyMeasures = [
        {
            title: 'Pick Up and Drop Off Zones',
            image: temperatureCheck,
            description: 'Monitored by our staff monitoring temperature check, sanitization and checkin details. And ofcourse a warm welcome to our little ones.'
        },
        {
            title: 'Program Zones',
            image: programZone,
            description: 'Well-lit, ventilated and temperature-controlled spaces with child-friendly furniture and safety measures like bottom locks in place.'
        },
        {
            title: 'Outdoor Play Area',
            image: outdoorPlay,
            description: 'Large spaces protected by child friendly barricades and adequate edge guards. Safe toys and equipment provided for free play under adult supervision.'
        },
        {
            title: 'Pantry',
            image: pantry,
            description: 'Kitchens authorized by FSSAI that utilize induction stoves for preparing and serving wholesome, child-friendly meals.'
        },
        {
            title: 'Health & Safety Training',
            image: training,
            description: 'Our staff is trained and regularly upskilled to maintain robust physical standards as well as be mindful of emotional safety of our little ones.'
        },
        {
            title: 'Electrical Safety',
            image: electrical,
            description: 'Switch points placed at adult height. All plug points at child height are secured by dummy sockets. Regular audits for equipment maintenance.'
        },
        {
            title: 'Fire Safety',
            image: fireSafety,
            description: 'Installation of NBC approved fire safety equipment and regular training with fire drills are conducted to prepare them for emergency.'
        },
        {
            title: 'POCSO',
            image: pocso,
            description: 'Regular training is provided to handle child-friendly reporting, evidence recording, and incident investigations with precision and care.'
        },
        {
            title: 'CCTV Coverage',
            image: cctv,
            description: '24/7 CCTV surveillance at all centres and voice recording in washrooms. 30 days recording available for audit.'
        },
        {
            title: 'Security Guards',
            image: security,
            description: 'Well trained and fully vaccinated security guards available at centre entrances at all times.'
        },
        {
            title: 'Caregiver and Nurse',
            image: caregiver,
            description: 'Caregivers responsible for the health and hygiene of children through the day. Nurse maintains and tracks medical records of each child.'
        },
        {
            title: 'Safety Officers',
            image: safetyOfficer,
            description: 'Our fully trained Regional Safety Officers support Safety officers nominated at every centre through day to day safety checks.'
        }
    ];

    return (
        <div className="safety-container">
            {/* Hero Section */}
            <div className="safety-hero">
                <h1>Health & <span>Safety</span></h1>
                <p>
                    At Little Incisors, we take the safety of our children, teachers and staff very seriously and all our operations 
                    are aligned to ensure Little Incisors is always a safe and happy place for all. Here are the safety protocols 
                    we ensure at all our Little Incisors centres across our various touchpoints.
                </p>
            </div>

            {/* Safety Measures Grid */}
            <div className="safety-measures">
                {safetyMeasures.map((measure, index) => (
                    <div key={index} className="safety-card">
                        <LazyLoadImage
                            src={measure.image}
                            alt={measure.title}
                            effect="blur"
                            className="safety-image"
                        />
                        <div className="safety-content">
                            <h3>{measure.title}</h3>
                            <p>{measure.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* WhatsApp Button */}
            <a href="https://wa.me/1234567890" className="whatsapp-button">
                <FaWhatsapp className="whatsapp-icon" />
                WhatsApp us / Schedule a Tour
            </a>
        </div>
    );
};

export default Safety;