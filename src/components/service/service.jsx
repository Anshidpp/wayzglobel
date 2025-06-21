import React from 'react';
import './service.css';
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
const services = [
    {
        title: 'Medical Job Placement',
        description: 'We connect doctors, nurses, technicians, and other professionals with top-tier hospitals and clinics.',
        points: [
            'Doctors (Dental Doctors,General Physicians, Specialists)',
            'Nurses (Registered Nurses, ICU Nurses, Home Nurses)',
            'Lab Technicians, Pharmacists, Radiologists',
            'Permanent, temporary, and contract placements'
        ],
        icon: img1
    },
    {
        title: 'Hospital & Clinic Staffing',
        description: 'Full-cycle recruitment for healthcare institutions to ensure efficient hiring.',
        points: [
            'Job Posting & Promotion',
            'Candidate Screening & Interviews',
            'Credential Verification & Onboarding'
        ],
        icon: img2
    },
    {
        title: 'International Medical Recruitment',
        description: 'We help medical professionals secure opportunities abroad.',
        points: [
            'Visa & Licensing Guidance',
            'Gulf, UK, Canada & more',
            'Pre-departure Orientation'
        ],
        icon: img3
    }
];

const ServicesPage = () => {
    return (
        <div className="services-page" id='service'>
            <header className="services-header">
                <div className="header-content">
                    <h1 className="highlight">Our <span >Services</span></h1>
                    <p className="subtitle">Recruitment solutions tailored exclusively for the medical and healthcare industry</p>
                    <div className="header-divider"></div>
                </div>
            </header>

            <main className="services-main">
                <div className="services-intro">
                    <p>With over a decade of experience in medical recruitment, we bridge the gap between healthcare professionals and institutions worldwide.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            {/* <div className="service-icon">
                                <img src={service.icon} alt={service.title} />
                            </div> */}
                            <h2>{service.title}</h2>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-points">
                                {service.points.map((point, idx) => (
                                    <li key={idx}>
                                        <span className="point-icon">✓</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    ))}
                </div>
            </main>

            <section className="cta-section">
                <h3>Ready to find your perfect medical career match?</h3>
                <p>Our specialists are available to guide you through every step of the process</p>
                <div className="cta-buttons">
                    <button className="primary-btn">Get Started</button>
                    <button className="secondary-btn">Contact Us</button>
                </div>
            </section>


        </div>
    );
};

export default ServicesPage;