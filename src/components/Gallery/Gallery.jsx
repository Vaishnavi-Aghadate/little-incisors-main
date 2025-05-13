import React, { useState } from "react";
import "./Gallery.css"; // Importing the CSS file

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", alt: "Cybersecurity Training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", alt: "Hands-on Training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998", alt: "Certification Program", category: "Training" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", alt: "Lab Session", category: "Training" },

  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095", alt: "Classroom Session", category: "Classroom" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", alt: "Student Presentation", category: "Classroom" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", alt: "Learning Session", category: "Classroom" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998", alt: "Group Study", category: "Classroom" },

  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", alt: "Workshop Training", category: "Workshop" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", alt: "Workshop Discussion", category: "Workshop" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", alt: "Technical Workshop", category: "Workshop" },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095", alt: "Hands-on Workshop", category: "Workshop" },

  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998", alt: "Guest Lecture", category: "Events" },
  { src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", alt: "Award Ceremony", category: "Events" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", alt: "Placement Drive", category: "Events" },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095", alt: "Networking Event", category: "Events" },

  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", alt: "Industry Visit", category: "Industry" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", alt: "Corporate Training", category: "Industry" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", alt: "Industry Seminar", category: "Industry" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998", alt: "Factory Visit", category: "Industry" }
];

const categories = ["Training", "Classroom", "Workshop", "Events", "Industry"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Training");
  const [modalImage, setModalImage] = useState(null);

  const filteredImages = galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Gallery</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setModalImage(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage.src} alt={modalImage.alt} />
          <div className="caption">{modalImage.alt}</div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
