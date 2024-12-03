import React from 'react';
import '../assets/styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your Doctor is here to simplify healthcare for everyone. Learn more about our mission and services.</p>
      </header>

      <section className="about-section">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>At Your Dr, our mission is to make healthcare accessible and convenient for everyone. We offer easy-to-use tools for booking doctor appointments, tracking health progress, and getting timely medical advice. We believe in providing top-notch medical services at your fingertips.</p>
        </div>
        
        <div className="about-card">
          <h2>Our Services</h2>
          <ul>
            <li>Book doctor appointments instantly</li>
            <li>Choose from a wide range of specialists</li>
            <li>Get reminders for upcoming appointments</li>
            <li>Track your medical history</li>
            <li>Consult with doctors remotely</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <p>We prioritize your health by offering:</p>
          <ul>
            <li>24/7 access to appointment scheduling</li>
            <li>Easy-to-use mobile and web interfaces</li>
            <li>Qualified doctors with verified profiles</li>
            <li>Secure, HIPAA-compliant patient data management</li>
          </ul>
        </div>
      </section>

      <section className="about-footer">
        <p>&copy; 2024 Your Dr. All rights reserved.</p>
      </section>
    </div>
  );
};

export default About;
