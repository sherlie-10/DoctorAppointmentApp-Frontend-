import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/AccountwithAppointments.css';

function AccountWithAppointments() {
  const navigate = useNavigate();
  
  const [appointments] = useState([
    { id: 1, doctor: 'Dr. Smith', date: '2024-11-20', time: '10:00 AM', status: 'Completed' },
    { id: 2, doctor: 'Dr. Johnson', date: '2024-11-15', time: '2:00 PM', status: 'Completed' },
    { id: 3, doctor: 'Dr. Lee', date: '2024-11-10', time: '4:00 PM', status: 'Missed' },
  ]);

  const [patient, setPatient] = useState({
    name: 'Sherlie Waghmare',
    email: 'shirleywaghmare1023@gmail.com',
    profileImage: 'https://via.placeholder.com/150',
    progress: 75,
  });

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/login');
  };

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPatient((prevPatient) => ({
          ...prevPatient,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-container">
      {/* Patient Account Header */}
      <div className="account-header">
        <div className="profile-container">
          <img src={patient.profileImage} alt="Profile" className="profile-image" />
          {/* Change Photo Button */}
          <label htmlFor="profilePhotoInput" className="upload-button">
            <i className="fa fa-camera"></i>
          </label>
          <input
            type="file"
            id="profilePhotoInput"
            accept="image/*"
            onChange={handleProfilePhotoChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className="patient-info">
          <h2>{patient.name}</h2>
          <p>{patient.email}</p>
        </div>
      </div>

      {/* Health Progress Tracking */}
      <div className="progress-tracking">
        <h3>Health Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${patient.progress}%` }}></div>
        </div>
        <p>{patient.progress}% progress</p>
      </div>

      {/* Appointment List */}
      <div className="appointments">
        <h3>Previous Appointments</h3>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td className={`status ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AccountWithAppointments;
