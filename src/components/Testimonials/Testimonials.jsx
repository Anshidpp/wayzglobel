import React, { useState } from 'react';

import './Testimonials.css';

const TestimonialsPage = () => {

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Cardiologist',
      rating: 5,
      content: 'Medical Recruitment Solutions helped me find the perfect position at a top-tier hospital. Their team was professional and understood exactly what I was looking for in my career.',
      date: '2023-05-15'
    },
    {
      id: 2,
      name: 'Nurse Michael Chen',
      position: 'ICU Nurse',
      rating: 4,
      content: 'The relocation support was exceptional. They handled all the paperwork and made my transition to a new country seamless.',
      date: '2023-03-22'
    },
    {
      id: 3,
      name: 'Dr. Ahmed Rahman',
      position: 'General Surgeon',
      rating: 5,
      content: 'I was impressed with how quickly they matched me with suitable opportunities. Within 3 weeks I had multiple interviews lined up.',
      date: '2023-01-10'
    }, {
      id: 3,
      name: 'Dr. Ahmed Rahman',
      position: 'General Surgeon',
      rating: 5,
      content: 'I was impressed with how quickly they matched me with suitable opportunities. Within 3 weeks I had multiple interviews lined up.',
      date: '2023-01-10'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    position: '',
    rating: 5,
    content: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewToAdd = {
      ...newReview,
      id: reviews.length + 1,
      date: new Date().toISOString().split('T')[0],
      rating: parseInt(newReview.rating)
    };
    setReviews([reviewToAdd, ...reviews]);
    setNewReview({
      name: '',
      position: '',
      rating: 5,
      content: ''
    });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="testimonials-page">
      {/* Success Popup */}
      {/* {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank You!</h3>
            <p>Your review has been submitted successfully.</p>
            <button 
              className="popup-close-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
{/* 
      <header className="testimonials-header">
        <h1>Client Testimonials</h1>
        <p>Hear what our medical professionals and healthcare institutions say about our services</p>
        
      </header> */}

      <main className="testimonials-main">
        <section className="testimonials-section">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            {reviews.map((review) => (
              <div className="testimonial-card" key={review.id}>
                <div className="testimonial-header">
                  <div className="reviewer-info">
                    <h3>{review.name}</h3>
                    <p className="position">{review.position}</p>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-content">"{review.content}"</p>
                <p className="review-date">{review.date}</p>
              </div>
            ))}
          </div>
        </section>
        <div className='open-review-btn-div'><button className="open-review-btn" onClick={() => setShowPopup(true)}>
  Write a Review
</button></div>

        


       {showPopup && (
  <div className="popup-overlay">
    <div className="popup-content">
      <button className="popup-close-x" onClick={() => setShowPopup(false)}>×</button>
      <h3>Share Your Experience</h3>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Your Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={newReview.position}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <div className="star-rating">
            {[5, 4, 3, 2, 1].map((star) => (
              <span
                key={star}
                className={star <= newReview.rating ? 'filled' : ''}
                onClick={() => handleInputChange({ target: { name: 'rating', value: star } })}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content">Your Review</label>
          <textarea
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleInputChange}
            required
            rows="5"
          ></textarea>
        </div>

        <div className="popup-buttons">
          <button type="submit" className="submit-button">Submit Review</button>
          {/* <button type="button" className="popup-close-btn" onClick={() => setShowPopup(false)}>Cancel</button> */}
        </div>
      </form>
    </div>
  </div>
)}


      </main>

      <footer className="testimonials-footer">
        <p>Have questions about our services? <a href="/contact">Contact us</a> today.</p>
      </footer>
    </div>
  );
};

export default TestimonialsPage;