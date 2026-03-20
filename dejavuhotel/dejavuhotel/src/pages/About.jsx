import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './About.css'

const team = [
  { name: 'Michael Thompson', role: 'General Manager', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80' },
  { name: 'Sophia Clarke', role: 'Head of Hospitality', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
  { name: 'David Williams', role: 'Executive Chef', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Angela Brown', role: 'Spa Director', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
]

const values = [
  { icon: 'fas fa-star', title: 'Excellence', desc: 'We strive for excellence in every service, every detail, and every interaction with our guests.' },
  { icon: 'fas fa-heart', title: 'Warmth', desc: 'Jamaican warmth and hospitality are the heart of everything we do at Deja Vu.' },
  { icon: 'fas fa-leaf', title: 'Sustainability', desc: 'We are committed to responsible tourism and protecting Jamaica\'s natural beauty.' },
  { icon: 'fas fa-handshake', title: 'Integrity', desc: 'Honesty, transparency, and genuine care for our guests guide all of our decisions.' },
]

export default function About() {
  return (
    <div className="about-page">
      <PageBanner title="About Us" subtitle="Our Story" crumb="About Us" />

      {/* OUR STORY */}
      <section className="section-story">
        <div className="container story-grid">
          <div className="story-images">
            <div className="story-img-main">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=80" alt="Hotel" />
            </div>
            <div className="story-img-side">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80" alt="Hotel lobby" />
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80" alt="Pool" />
            </div>
          </div>
          <div className="story-content">
            <span className="section-subtitle">Est. 2004</span>
            <h2 className="section-title">The Deja Vu Story</h2>
            <div className="section-divider left"></div>
            <p>Founded in 2004 by the Campbell family, Deja Vu Hotel and Suites was born from a passionate vision — to create a destination in Ocho Rios that blended authentic Jamaican spirit with world-class luxury hospitality.</p>
            <p>What started as a small boutique property with just 12 rooms has grown into one of Ocho Rios' most beloved hotels, now boasting over 40 elegantly appointed rooms and suites, award-winning dining, and a full-service spa.</p>
            <p>Our name, "Deja Vu," reflects the experience so many of our guests describe upon their first visit — a feeling of immediate familiarity, warmth, and belonging. Like coming home to a place you've loved before.</p>

            <div className="story-stats">
              <div className="stat">
                <span className="stat-num">40+</span>
                <span className="stat-label">Rooms & Suites</span>
              </div>
              <div className="stat">
                <span className="stat-num">20+</span>
                <span className="stat-label">Years of Service</span>
              </div>
              <div className="stat">
                <span className="stat-num">10K+</span>
                <span className="stat-label">Happy Guests</span>
              </div>
              <div className="stat">
                <span className="stat-num">15+</span>
                <span className="stat-label">Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-values">
        <div className="container">
          <div className="section-header center">
            <span className="section-subtitle">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="section-divider"></div>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon"><i className={v.icon}></i></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-timeline">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '60px' }}>
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title" style={{ color: 'white' }}>Milestones</h2>
            <div className="section-divider"></div>
          </div>
          <div className="timeline">
            {[
              { year: '2004', event: 'Deja Vu Hotel & Suites opens with 12 rooms in Ocho Rios' },
              { year: '2008', event: 'Major expansion adds 20 new rooms and the signature pool terrace' },
              { year: '2012', event: 'The Hibiscus Restaurant opens, celebrating authentic Jamaican cuisine' },
              { year: '2016', event: 'Deja Vu Spa & Wellness Center launches, offering luxury treatments' },
              { year: '2020', event: 'Full renovation of all suites with contemporary luxury furnishings' },
              { year: '2024', event: 'Celebrating 20 years of excellence and Jamaican hospitality' },
            ].map((item, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-team">
        <div className="container">
          <div className="section-header center">
            <span className="section-subtitle">The People Behind the Magic</span>
            <h2 className="section-title">Meet Our Team</h2>
            <div className="section-divider"></div>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-img">
                  <img src={member.img} alt={member.name} />
                  <div className="team-overlay">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="mailto:info@dejavuhotelandsuites.org" aria-label="Email"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="section-subtitle">Ready to Visit?</span>
          <h2>Experience Deja Vu for Yourself</h2>
          <p>Book your stay today and discover why our guests keep coming back.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/booking" className="btn-primary">Book Your Stay</Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
