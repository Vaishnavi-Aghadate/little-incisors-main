import React from 'react';
import './Values.css'; // Import your CSS file for styling
import img1 from '../../assets/shiavjimaharaj.jpg';

const Values = () => {
    return (
        <div className="container">
            <h2>Education and Values</h2>
            <div className="shivaji-section">
                <div className="shivaji-content" id='values'>
                    <h3>Importance of Knowledge & Character</h3>
                    <p>
                        "विद्या ददाति विनयं, विनयाद् याति पात्रताम्।<br />
                        पात्रत्वाद् धनमाप्नोति, धनात् धर्मं ततः सुखम्॥"
                    </p>
                    <p>
                        This ancient Sanskrit verse teaches that knowledge brings humility, leading to worthiness.
                        Worthiness results in prosperity, and prosperity fosters righteousness and happiness.
                        In early childhood education, fostering kindness, humility, and discipline ensures
                        that children grow into responsible and noble individuals.
                    </p>
                </div>
                <div className="shivaji-image">
                    <img src={img1} alt="Shivaji Maharaj and Jijabai" />
                </div>
            </div>
        </div>
    );
};

export default Values;