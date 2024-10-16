import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobApplication.css'; // Adjust the path as necessary

const JobApplication = () => {
  const { id } = useParams(); // Get the job ID from the URL params

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: ''
  });

  // State to track submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to the server
    console.log(`Applying for job ID: ${id}`);
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="job-application-container">
      <h1>Apply for Job ID: {id}</h1>
  
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for applying!</h2>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <label htmlFor="coverLetter">Cover Letter:</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            />
          </div>
  
          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
  
};

export default JobApplication;
