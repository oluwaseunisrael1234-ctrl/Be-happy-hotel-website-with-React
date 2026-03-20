import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <span className="footer-logo-dv">DV</span>
              <div>
                <span className="footer-logo-name">Be Happie</span>
                <span className="footer-logo-sub">Hotel &amp; Suites</span>
              </div>
            </div>
            <p>Experience unmatched comfort and hospitality at Be Happie Hotel and Suites — your home away from home in Ocho Rios, Jamaica.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://tripadvisor.com" target="_blank" rel="noreferrer" aria-label="TripAdvisor"><i className="fab fa-tripadvisor"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
              <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
              <li><Link to="/rooms"><i className="fas fa-chevron-right"></i> Rooms &amp; Suites</Link></li>
              <li><Link to="/amenities"><i className="fas fa-chevron-right"></i> Amenities</Link></li>
              <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Gallery</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Our Rooms</h4>
            <ul className="footer-links">
              <li><Link to="/rooms"><i className="fas fa-chevron-right"></i> Standard Room</Link></li>
              <li><Link to="/rooms"><i className="fas fa-chevron-right"></i> Deluxe Room</Link></li>
              <li><Link to="/rooms"><i className="fas fa-chevron-right"></i> Junior Suite</Link></li>
              <li><Link to="/rooms"><i className="fas fa-chevron-right"></i> Executive Suite</Link></li>
              <li><Link to="/rooms"><i className="fas fa-chevron-right"></i> Penthouse Suite</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>2 James Avenue, Ocho Rios, Saint Ann, Jamaica</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 (876) 974-2691</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@dejavuhotelandsuites.org</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Check-in: 3:00 PM — Check-out: 11:00 AM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Be Happie Hotel and Suites. All Rights Reserved.</p>
          <p>Designed with <i className="fas fa-heart" style={{color:'var(--gold)'}}></i> for our guests</p>
        </div>
      </div>
    </footer>
  )
}
