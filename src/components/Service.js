import React from 'react';
import '../assets/styles/Service.css';

function Service() {
    const services = [
        { id: 1, name: 'Regular Healthcare Package', description: 'Comprehensive health check-ups for all age groups.' },
        { id: 2, name: 'CT-Scan | X-Ray', description: 'State-of-the-art imaging services.' },
        { id: 3, name: 'Lab Test', description: 'Accurate and timely diagnostic testing.' },
        { id: 4, name: 'Gynae Health', description: 'Specialized care for women health.' },
        { id: 5, name: 'Ayurveda Treatment', description: 'Natural treatments rooted in Ayurveda.' },
        { id: 6, name: 'Dental Checkup', description: 'Complete dental care and hygiene services.' },
        { id: 7, name: 'Dermatologist ', description: 'Complete Skin checkup.' },
    ];

    return (
        <div className="service-container">
            <h1 className="service-title">Our Services</h1>
            <div className="service-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <h3 className="service-name">{service.name}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
