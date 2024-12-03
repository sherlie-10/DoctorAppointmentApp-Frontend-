import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import '../assets/styles/Home.css';

const Home = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  const navigate = useNavigate();  // Create the navigate function for page redirection

  const handleCheckboxChange = () => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isRegister ? 'Registering a new user' : 'Logging in');
    setIsLoggedIn(true);  // Set the login status to true after successful login

    // Redirect to AccountWithAppointments page after login
    navigate('/account');
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to <span>Your Doctor </span></h1>
        <p>Your one-stop solution for booking doctor appointments easily.</p>
      </header>

      <section className="form-section">
        <div className="form-container">
          <h2>{isRegister ? 'Register' : 'Login'} to Your Account</h2>
          <form onSubmit={handleSubmit}>
            {isRegister && (
              <input
                type="text"
                placeholder="Full Name"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
            />
            <div className="form-options">
              <label>
                <input
                  type="checkbox"
                  checked={isRegister}
                  onChange={handleCheckboxChange}
                /> Register as a new user
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Only show logout button if logged in */}
      {isLoggedIn && (
        <section className="info-section">
          <h2>Welcome Back!</h2>
          <p>You are now logged in. You can now proceed to your account and view appointments.</p>
          <button onClick={() => navigate('/account')}>Go to your Account & Appointments</button>
        </section>
      )}

      <footer>
        <p>&copy; 2024 Your Dr. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
