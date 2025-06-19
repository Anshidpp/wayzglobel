import React from 'react';
import './contact.css';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="contact-section" id='contact'>
      <div className="contact-box">
        {/* Left Info Box */}
        <div className="contact-info">
          <h2>Let's get in touch</h2>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>

          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <p>+1235 2355 98</p>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>info@yoursite.com</p>
          </div>

          <div className="info-item">
            <i className="fas fa-globe"></i>
            <p>Website yoursite.com</p>
          </div>
        </div>

        {/* Right Form Box */}
        <div className="contact-form-box">
          <h2>Get in touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
