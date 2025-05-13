import React, { useState } from 'react';
import './AdmissionEnquiry.css';
import { FaTimes } from 'react-icons/fa';

const AdmissionEnquiry = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        childName: '',
        childAge: '',
        parentName: '',
        email: '',
        phone: '',
        program: 'daycare',
        location: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="enquiry-modal-overlay">
            <div className="enquiry-modal">
                <button className="close-button" onClick={onClose}>
                    <FaTimes />
                </button>
                
                <div className="enquiry-content">
                    <h2>Admission Enquiry</h2>
                    <p>Fill out the form below and we'll get back to you shortly!</p>

                    <form onSubmit={handleSubmit} className="enquiry-form">
                        <div className="form-group">
                            <label htmlFor="childName">Child's Name*</label>
                            <input
                                type="text"
                                id="childName"
                                name="childName"
                                value={formData.childName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="childAge">Child's Age*</label>
                            <input
                                type="number"
                                id="childAge"
                                name="childAge"
                                value={formData.childAge}
                                onChange={handleChange}
                                min="0"
                                max="10"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="parentName">Parent's Name*</label>
                            <input
                                type="text"
                                id="parentName"
                                name="parentName"
                                value={formData.parentName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number*</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="program">Program Interest*</label>
                            <select
                                id="program"
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                required
                            >
                                <option value="daycare">Daycare</option>
                                <option value="preschool">Preschool</option>
                                <option value="afterschool">After School</option>
                                <option value="learning">Learning Advancement</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Preferred Location*</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Additional Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmissionEnquiry;