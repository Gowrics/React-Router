import React from 'react';
import './Home.css'; // Import CSS for styling if needed

const Home = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to Our Company</h1>
        <p>Your partner in innovation and excellence.</p>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <section className="company-overview">
          <h2>About Us</h2>
          <p>
            We are a leading company dedicated to providing top-notch services 
            and solutions tailored to your needs. Our team of experts is here 
            to help you achieve your goals.
          </p>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2>Our Services</h2>
          <ul>
            <li>Consulting Services</li>
            <li>Software Development</li>
            <li>Project Management</li>
            <li>Customer Support</li>
            {/* More services can be added dynamically */}
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <h2>Get In Touch</h2>
          <p>Contact us today to learn more about how we can help you!</p>
          <button className="cta-button">Contact Us</button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          &copy; 2008-2024 Our Company. All rights reserved.
          <br />
          By continuing past this page, you agree to our 
          <a href="#terms">Terms of Service</a>, 
          <a href="#cookie">Cookie Policy</a>, 
          <a href="#privacy">Privacy Policy</a>, and 
          <a href="#content">Content Policies</a>.
        </p>
      </footer>
    </div>
  );
};

export default Home;
