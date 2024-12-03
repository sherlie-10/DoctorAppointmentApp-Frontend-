import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './components/Service';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import AppointmentForm from './components/AppointmentForm'; 
import AccountwithAppointments from './components/AccountwithAppointments';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      {/* Header and Footer are inside Router, so they can use React Router hooks */}
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountwithAppointments />} />
        <Route path="/appointment-form" element={<AppointmentForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      
   
      <Footer />
    </Router>
  );
}

export default App;
