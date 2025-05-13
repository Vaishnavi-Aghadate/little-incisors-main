import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaBook, FaPaintBrush, FaGamepad, FaMusic, FaSeedling } from "react-icons/fa";
import './Schedule.css';
import img1 from '../../assets/story.jpg';
import img2 from '../../assets/craftdraw.jpg';
import img3 from '../../assets/games.jpg';
import img4 from '../../assets/dance.jpg';
import img5 from '../../assets/gardening.png';
import img6 from '../../assets/bgbg.png';
import img7 from '../../assets/timetable-bg.png'

export default function Schedule() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

    return (
        <>
            <div className="schedule-container" data-aos="fade-down">
                <h2 className='schedule-heading'>Daily Activities</h2>
                <div className="schedule-activities" data-aos="zoom-in">
                    <div className="schedule-activity">
                        <div className="schedule-flip-card">
                            <div className="schedule-flip-card-front">
                                <FaBook />
                                <h3>Story Time</h3>
                                <p>Engaging stories to spark imagination.</p>
                            </div>
                            <div className="schedule-flip-card-back">
                                <img src={img1} alt="Story Time Image" />
                            </div>
                        </div>
                    </div>
                    <div className="schedule-activity">
                        <div className="schedule-flip-card">
                            <div className="schedule-flip-card-front">
                                <FaPaintBrush />
                                <h3>Arts & Crafts</h3>
                                <p>Creative activities to enhance skills.</p>
                            </div>
                            <div className="schedule-flip-card-back">
                                <img src={img2} alt="Story Time Image" />
                            </div>
                        </div>
                    </div>
                    <div className="schedule-activity">
                        <div className="schedule-flip-card">
                            <div className="schedule-flip-card-front">
                                <FaGamepad />
                                <h3>Fun & Games</h3>
                                <p>Exciting games to boost teamwork and coordination.</p>
                            </div>
                            <div className="schedule-flip-card-back">
                                <img src={img3} alt="Story Time Image" />
                            </div>
                        </div>
                    </div>
                    <div className="schedule-activity">
                        <div className="schedule-flip-card">
                            <div className="schedule-flip-card-front">
                                <FaMusic />
                                <h3>Music & Dance</h3>
                                <p>Rhythmic activities to develop motor skills.</p>
                            </div>
                            <div className="schedule-flip-card-back">
                                <img src={img4} alt="Story Time Image" />
                            </div>
                        </div>
                    </div>
                    <div className="schedule-activity">
                        <div className="schedule-flip-card">
                            <div className="schedule-flip-card-front">
                                <FaSeedling />
                                <h3>Gardening</h3>
                                <p>Hands-on learning about plants and nature.</p>
                            </div>
                            <div className="schedule-flip-card-back">
                                <img src={img5} alt="Story Time Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}