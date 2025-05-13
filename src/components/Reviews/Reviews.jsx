import React from 'react';
import './Reviews.css'; // Import the CSS file
import women1 from '../../assets/women1.jpg'; // Import images
import men2 from '../../assets/men2.jpg';
import men3 from '../../assets/men3.jpg';
import women2 from '../../assets/women2.jpg';
import men4 from '../../assets/men4.jpg';
import women3 from '../../assets/women3.jpg';

const Reviews = () => {
  return (
    <section className="student-reviews">
      <h2>Hear From Parents</h2>
      <br />
      <br />
      <div className="reviews-container">
       

        <div className="review">
          <div className="review-header">
            <img src={men2} alt="Siddhi Ghorpade" className="student-image" />
            <div>
              <span className="student-name">Siddhart Ghorpade</span>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
          </div>
          <div className="review-message">
            The best decision we made for our little one! The staff is incredibly patient and nurturing. My daughter has
            become more social and confident since joining. Thank you for creating such a loving space!
          </div>
        </div>

        <div className="review" data-aos="flip-right">
          <div className="review-header">
            <img src={men3} alt="Uday Kanawade" className="student-image" />
            <div>
              <span className="student-name">Uday Kanawade</span>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
          <div className="review-message">
            A wonderful daycare with amazing teachers! My child is always excited to go, and I love the fun activities
            they do every day. I feel at peace knowing my child is in great hands.
          </div>
        </div>

        {/* Second Row of Reviews */}
        <div className="review">
          <div className="review-header">
            <img src={women2} alt="Afifa Bagwan" className="student-image" />
            <div>
              <span className="student-name">Afifa Bagwan</span>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
          <div className="review-message">
            The daycare is clean, safe, and filled with so much positivity. The staff truly cares about each child’s
            well-being and development. I’ve seen so much growth in my son!
          </div>
        </div>

        <div className="review" data-aos="flip-right">
          <div className="review-header">
            <img src={men4} alt="Vipul Kolapkar" className="student-image" />
            <div>
              <span className="student-name">Vipul Kolapkar</span>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
          </div>
          <div className="review-message">
            From day one, my daughter has felt comfortable and happy here. The curriculum is well-balanced, and the
            teachers ensure every child gets personal attention. I highly recommend this daycare!
          </div>
        </div>

        <div className="review">
          <div className="review-header">
            <img src={women3} alt="Nida Tamboli" className="student-image" />
            <div>
              <span className="student-name">Nida Tamboli</span>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
          <div className="review-message">
            This daycare is like a second home for my child. The love and care shown by the staff are heartwarming. My
            child has learned so much, and I couldn’t be happier with our choice!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;