import React, { useState } from 'react'
import PageBanner from '../components/PageBanner'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      <PageBanner title="Contact Us" subtitle="Get In Touch" crumb="Contact" />

      {/* INFO STRIP */}
      <section className="contact-strip">
        <div className="container contact-strip-grid">
          <div className="contact-strip-item">
            <div className="contact-strip-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div>
              <h4>Our Location</h4>
              <p>2 James Avenue, Ocho Rios<br />Saint Ann, Jamaica</p>
            </div>
          </div>
          <div className="contact-strip-item">
            <div className="contact-strip-icon"><i className="fas fa-phone-alt"></i></div>
            <div>
              <h4>Phone Number</h4>
              <p>+1 (876) 974-2691<br />+1 (876) 974-2692</p>
            </div>
          </div>
          <div className="contact-strip-item">
            <div className="contact-strip-icon"><i className="fas fa-envelope"></i></div>
            <div>
              <h4>Email Address</h4>
              <p>info@dejavuhotelandsuites.org<br />reservations@dejavuhotelandsuites.org</p>
            </div>
          </div>
          <div className="contact-strip-item">
            <div className="contact-strip-icon"><i className="fas fa-clock"></i></div>
            <div>
              <h4>Opening Hours</h4>
              <p>Front Desk: 24/7<br />Check-in: 3 PM — Check-out: 11 AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="contact-main">
        <div className="container contact-grid">
          <div className="contact-form-wrap">
            <span className="section-subtitle">Send a Message</span>
            <h2 className="section-title">We'd Love to Hear From You</h2>
            <div className="section-divider left"></div>
            <p className="contact-form-intro">Have a question, special request, or want to discuss your upcoming stay? Fill out the form below and our team will respond within 24 hours.</p>

            {submitted && (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                Thank you! Your message has been sent. We'll be in touch shortly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="events">Events & Weddings</option>
                    <option value="complaint">Feedback / Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary contact-submit">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          <div className="contact-map-wrap">
            <span className="section-subtitle">Find Us</span>
            <h2 className="section-title">Our Location</h2>
            <div className="section-divider left"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.4!2d-77.1075!3d18.4056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzIwLjIiTiA3N8KwMDYnMjcuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Deja Vu Hotel Location"
            ></iframe>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="contact-social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="cs-icon facebook">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="cs-icon instagram">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="cs-icon twitter">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://tripadvisor.com" target="_blank" rel="noreferrer" className="cs-icon tripadvisor">
                  <i className="fab fa-tripadvisor"></i> TripAdvisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
