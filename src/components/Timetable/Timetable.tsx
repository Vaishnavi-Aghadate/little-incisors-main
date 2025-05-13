import React, { useState } from "react";
import "./Timetable.css"; // Import the CSS file

const DaycareSchedule = () => {
  const [currentImage, setCurrentImage] = useState("arrival.jpg");

  const imageMap = {
    arrival: " .assets/images/arrival.jpg",
    breakfast: "breakfast.jpg",
    "circle-time": "circletime.jpg",
    departure: "departure.jpg",
    lunch: "lunch.jpg",
    "nap-time": "nap-time.jpg",
    "snack-time": "snack-time.jpg",
    music: "music.jpg",
    "story-time": "story-time.jpg",
    "play-time": "play-time.jpg",
    "free-play": "free-play.jpg",
  };

  const handleImageChange = (activity) => {
    setCurrentImage(imageMap[activity] || "default.jpg");
  };

  return (
    <section className="daycare-schedule">
      <div className="schedule-container">
        <div className="timetable">
          <h2 className="timetable-title">
            A Day at <span>Little</span> <span>Incisors</span>
          </h2>
          <ul>
            {Object.keys(imageMap).map((activity) => (
              <li
                key={activity}
                onClick={() => handleImageChange(activity)}
                className={currentImage === imageMap[activity] ? "active" : ""}
              >
                <span className="dot"></span>
                {activity
                  .replace("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </li>
            ))}
          </ul>
        </div>
        <div className="image-display">
          <img id="schedule-image" src={currentImage} alt="Activity" />
        </div>
      </div>
    </section>
  );
};

export default DaycareSchedule;
