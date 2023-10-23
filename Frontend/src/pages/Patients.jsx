import React, { useState } from 'react';
import axios from 'axios';
import './AddPatient.css'; // Add your CSS file
import CustomNavbar from '../components/Navbar';

const AddPatient = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('/patients', formData)
            .then((response) => {
                console.log('Patient added:', response.data);
            })
            .catch((error) => {
                console.error('Error adding patient:', error);
            });
    };

    return (
        <div className="c">
        <CustomNavbar/>
        <div className="add-patient-container">
        
            <h1>Add Patient</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Description"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Patient</button>
            </form>
        </div></div>
    );
};

export default AddPatient;
