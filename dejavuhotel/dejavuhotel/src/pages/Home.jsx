import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const heroSlides = [
  {
    bg: 'linear-gradient(135deg, #1a0f05 0%, #3d2810 40%, #1a1a0a 100%)',
    title: 'Welcome to Deja Vu',
    subtitle: 'Hotel & Suites',
    desc: 'Experience luxurious comfort nestled in the heart of Ocho Rios, Jamaica. Your paradise awaits.',
  },
  {
    bg: 'linear-gradient(135deg, #0a1520 0%, #1a3050 40%, #0a0f15 100%)',
    title: 'Luxury Rooms',
    subtitle: '& Suites',
    desc: 'Discover our elegantly appointed rooms and suites, designed for your ultimate relaxation.',
  },
  {
    bg: 'linear-gradient(135deg, #0f1a0f 0%, #1a3020 40%, #0a150a 100%)',
    title: 'Unforgettable',
    subtitle: 'Experiences',
    desc: 'From stunning ocean views to world-class amenities — create memories that last a lifetime.',
  },
]

const rooms = [
  {
    name: 'Standard Room',
    price: '$120',
    period: '/night',
    desc: 'Comfortable and well-appointed with all essential amenities for a pleasant stay.',
    features: ['King or Queen Bed', 'Air Conditioning', 'Free WiFi', 'Flat Screen TV'],
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
  },
  {
    name: 'Deluxe Room',
    price: '$180',
    period: '/night',
    desc: 'Spacious deluxe rooms with premium furnishings and enhanced comfort features.',
    features: ['King Bed', 'Ocean View', 'Mini Fridge', 'Luxury Toiletries'],
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
  },
  {
    name: 'Junior Suite',
    price: '$240',
    period: '/night',
    desc: 'A separate sitting area and bedroom create the perfect suite experience.',
    features: ['King Bed', 'Sitting Area', 'Kitchenette', 'Premium Amenities'],
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
  },
]

const amenities = [
  { icon: 'fas fa-swimming-pool', title: 'Swimming Pool', desc: 'Relax in our crystal-clear outdoor pool with stunning garden views.' },
  { icon: 'fas fa-wifi', title: 'Free WiFi', desc: 'Stay connected with complimentary high-speed internet throughout.' },
  { icon: 'fas fa-utensils', title: 'Restaurant', desc: 'Savor authentic Jamaican cuisine and international dishes.' },
  { icon: 'fas fa-spa', title: 'Spa & Wellness', desc: 'Rejuvenate with our range of luxury spa treatments.' },
  { icon: 'fas fa-car', title: 'Free Parking', desc: 'Secure and complimentary parking for all our guests.' },
  { icon: 'fas fa-concierge-bell', title: '24/7 Service', desc: 'Our dedicated team is available around the clock for your needs.' },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'New York, USA',
    rating: 5,
    text: 'Absolutely stunning hotel! The staff were incredibly welcoming and the rooms were beautifully appointed. Will definitely return to Deja Vu on our next Jamaica trip!',
    avatar: 'S',
  },
  {
    name: 'James T.',
    location: 'London, UK',
    rating: 5,
    text: 'Perfect location in Ocho Rios. The pool area is gorgeous, breakfast was delicious, and the views from our suite were breathtaking. Highly recommended!',
    avatar: 'J',
  },
  {
    name: 'Michelle R.',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'We had the most wonderful honeymoon at Deja Vu. The attention to detail and personalized service made our stay truly special. Thank you for everything!',
    avatar: 'M',
  },
]

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [rooms2, setRooms2] = useState('1')

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(s => (s + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" style={{ background: heroSlides[slide].bg }}>
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="container hero-content">
          <span className="hero-script">Welcome to</span>
          <h1 className="hero-title">
            <span className="hero-title-main">{heroSlides[slide].title}</span>
            <span className="hero-title-accent">{heroSlides[slide].subtitle}</span>
          </h1>
          <p className="hero-desc">{heroSlides[slide].desc}</p>
          <div className="hero-btns">
            <Link to="/rooms" className="btn-primary">Explore Rooms</Link>
            <Link to="/booking" className="btn-hero-outline">Book Now</Link>
          </div>
        </div>

        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === slide ? 'active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* BOOKING BAR */}
      <section className="booking-bar">
        <div className="container">
          <div className="booking-form">
            <div className="booking-field">
              <label><i className="fas fa-calendar-alt"></i> Check In</label>
              <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
            </div>
            <div className="booking-divider"><i className="fas fa-arrow-right"></i></div>
            <div className="booking-field">
              <label><i className="fas fa-calendar-check"></i> Check Out</label>
              <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
            </div>
            <div className="booking-field">
              <label><i className="fas fa-user-friends"></i> Guests</label>
              <select value={guests} onChange={e => setGuests(e.target.value)}>
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
            <div className="booking-field">
              <label><i className="fas fa-bed"></i> Rooms</label>
              <select value={rooms2} onChange={e => setRooms2(e.target.value)}>
                {[1,2,3,4].map(n => <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
            <Link to="/booking" className="booking-submit">
              <i className="fas fa-search"></i> Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section-about">
        <div className="container about-grid">
          <div className="about-images">
            <div className="about-img-main">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80" alt="Hotel exterior" />
            </div>
            <div className="about-img-secondary">
              <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80" alt="Hotel pool" />
            </div>
            <div className="about-experience-badge">
              <span className="badge-years">20+</span>
              <span className="badge-text">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-subtitle">About Our Hotel</span>
            <h2 className="section-title">A Legacy of Luxury<br />in Ocho Rios</h2>
            <div className="section-divider left"></div>
            <p>Nestled in the heart of Ocho Rios, Jamaica, Deja Vu Hotel and Suites has been a premier destination for discerning travelers since 2004. Our boutique property combines Jamaican charm with contemporary luxury to create an unforgettable experience.</p>
            <p>Whether you're visiting for leisure or business, our attentive staff and world-class facilities ensure every stay exceeds expectations. From our stunning pool terrace to our signature restaurant, every detail is crafted with care.</p>
            <div className="about-highlights">
              <div className="highlight">
                <i className="fas fa-award"></i>
                <div>
                  <strong>Award Winning</strong>
                  <span>TripAdvisor Excellence</span>
                </div>
              </div>
              <div className="highlight">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Prime Location</strong>
                  <span>Ocho Rios, Jamaica</span>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn-primary">Discover Our Story</Link>
          </div>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section className="section-rooms">
        <div className="container">
          <div className="section-header center">
            <span className="section-subtitle">Accommodations</span>
            <h2 className="section-title">Rooms &amp; Suites</h2>
            <div className="section-divider"></div>
            <p className="section-desc">Each room is thoughtfully designed to provide maximum comfort and relaxation during your stay with us.</p>
          </div>
          <div className="rooms-grid">
            {rooms.map((room, i) => (
              <div className="room-card" key={i}>
                <div className="room-img-wrap">
                  <img src={room.img} alt={room.name} />
                  <div className="room-overlay">
                    <Link to="/rooms" className="room-overlay-btn">View Details</Link>
                  </div>
                  <div className="room-badge">From {room.price}<small>{room.period}</small></div>
                </div>
                <div className="room-body">
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-desc">{room.desc}</p>
                  <ul className="room-features">
                    {room.features.map((f, j) => (
                      <li key={j}><i className="fas fa-check"></i> {f}</li>
                    ))}
                  </ul>
                  <div className="room-footer">
                    <Link to="/booking" className="btn-primary">Book Now</Link>
                    <Link to="/rooms" className="room-more">Details <i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/rooms" className="btn-outline">View All Rooms</Link>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section-amenities">
        <div className="amenities-bg-text">AMENITIES</div>
        <div className="container">
          <div className="section-header center">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title" style={{ color: 'white' }}>Hotel Amenities</h2>
            <div className="section-divider"></div>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.6)' }}>Indulge in our world-class facilities designed to make your stay extraordinary.</p>
          </div>
          <div className="amenities-grid">
            {amenities.map((a, i) => (
              <div className="amenity-card" key={i}>
                <div className="amenity-icon">
                  <i className={a.icon}></i>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <span className="section-subtitle">Special Offer</span>
          <h2>Book Direct &amp; Save Up to 20%</h2>
          <p>Enjoy exclusive benefits when you book directly with us. Best rate guaranteed plus complimentary breakfast for stays of 3+ nights.</p>
          <Link to="/booking" className="btn-primary">Book Now &amp; Save</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-testimonials">
        <div className="container">
          <div className="section-header center">
            <span className="section-subtitle">Guest Reviews</span>
            <h2 className="section-title">What Our Guests Say</h2>
            <div className="section-divider"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <i key={j} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM/GALLERY STRIP */}
      <section className="section-gallery-strip">
        <div className="container">
          <div className="section-header center">
            <span className="section-subtitle">Follow Our Journey</span>
            <h2 className="section-title">Photo Gallery</h2>
            <div className="section-divider"></div>
          </div>
          <div className="gallery-strip">
            {[
              'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80',
              'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&q=80',
              'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80',
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
              'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80',
            ].map((src, i) => (
              <div className="gallery-strip-item" key={i}>
                <img src={src} alt={`Gallery ${i + 1}`} />
                <div className="gallery-strip-hover">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/gallery" className="btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="section-location">
        <div className="container location-grid">
          <div className="location-info">
            <span className="section-subtitle">Find Us</span>
            <h2 className="section-title">Our Location</h2>
            <div className="section-divider left"></div>
            <p>Perfectly situated in Ocho Rios — minutes from Dunn's River Falls, local markets, and pristine beaches.</p>
            <ul className="location-list">
              <li><i className="fas fa-map-marker-alt"></i> 2 James Avenue, Ocho Rios, Saint Ann, Jamaica</li>
              <li><i className="fas fa-phone"></i> +1 (876) 974-2691</li>
              <li><i className="fas fa-envelope"></i> info@dejavuhotelandsuites.org</li>
              <li><i className="fas fa-clock"></i> 24 Hours / 7 Days a Week</li>
            </ul>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '20px' }}>Get Directions</Link>
          </div>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.4!2d-77.1075!3d18.4056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzIwLjIiTiA3N8KwMDYnMjcuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
