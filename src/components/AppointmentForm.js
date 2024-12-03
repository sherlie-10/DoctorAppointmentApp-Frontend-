import React, { useState } from 'react';
import "../assets/styles/AppointmentForm.css";

function AppointmentForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prescription, setPrescription] = useState(null); 
  const [showNotification, setShowNotification] = useState(false); // State for notification

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
    setError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrescription(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];
    if (date < currentDate) {
      setError('Please select a valid future appointment date.');
      return;
    }

    if (!name || !email || !doctor || !date) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate successful submission
    setTimeout(() => {
      alert('Appointment request submitted successfully!');
      setShowNotification(true); // Show notification
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds

      setName('');
      setEmail('');
      setPhone('');
      setDoctor('');
      setDate('');
      setMessage('');
      setPrescription(null);
      setIsSubmitting(false);
      setFormVisible(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={toggleFormVisibility}>
        {formVisible ? 'Close Appointment Form' : 'Book an Appointment'}
      </button>

      {formVisible && (
        <form onSubmit={handleSubmit} className="appointment-form">
          <h2>Book Your Appointment</h2>

          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="doctor">Select Doctor:</label>
            <select
              id="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Lee">Dr. Lee</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Appointment Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (Optional):</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter any additional details"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="prescription">Upload Prescription (Optional):</label>
            <input
              type="file"
              id="prescription"
              accept="image/*, .pdf"
              onChange={handleFileChange}
            />
            {prescription && <p>File Selected: {prescription.name}</p>}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Appointment'}
          </button>
        </form>
      )}

      {showNotification && (
        <div className="notification">
          Appointment booked successfully!
        </div>
      )}
    </div>
  );
}

export default AppointmentForm;
