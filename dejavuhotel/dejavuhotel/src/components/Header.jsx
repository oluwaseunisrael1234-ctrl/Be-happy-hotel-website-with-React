import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/rooms', label: 'Rooms & Suites' },
    { to: '/amenities', label: 'Amenities' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="header-top-info">
            <span><i className="fas fa-phone"></i> +1 (876) 974-2691</span>
            <span><i className="fas fa-envelope"></i> info@dejavuhotelandsuites.org</span>
          </div>
          <div className="header-top-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://tripadvisor.com" target="_blank" rel="noreferrer" aria-label="TripAdvisor"><i className="fab fa-tripadvisor"></i></a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-main-inner">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <span className="logo-dv">DV</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">Deja Vu</span>
              <span className="logo-tagline">Hotel &amp; Suites</span>
            </div>
          </Link>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/booking" className="btn-book">Book Now</Link>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
