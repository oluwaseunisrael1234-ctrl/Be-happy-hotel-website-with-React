import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './Rooms.css'

const roomsList = [
  {
    name: 'Standard Room',
    price: '$120',
    size: '280 sq ft',
    guests: 2,
    beds: '1 King or 2 Queen',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    desc: 'Our Standard Rooms offer a comfortable and well-appointed retreat with all the essential amenities needed for a relaxing and pleasant stay. Decorated in warm Caribbean tones with modern furnishings.',
    features: ['Air Conditioning', 'Free WiFi', 'Flat Screen TV', 'Mini Fridge', 'Coffee Maker', 'In-Room Safe', 'Hair Dryer', 'Complimentary Toiletries'],
    type: 'standard',
  },
  {
    name: 'Deluxe Room',
    price: '$180',
    size: '360 sq ft',
    guests: 2,
    beds: '1 King Bed',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    desc: 'Step up to our Deluxe Rooms featuring premium furnishings, enhanced comfort, and stunning views of our tropical garden or the Caribbean Sea. Perfect for those seeking an elevated experience.',
    features: ['Garden or Ocean View', 'King Bed', 'Premium Bedding', 'Larger Bathroom', 'Bathtub & Shower', 'Mini Bar', 'Working Desk', 'Nespresso Machine'],
    type: 'deluxe',
  },
  {
    name: 'Junior Suite',
    price: '$240',
    size: '480 sq ft',
    guests: 3,
    beds: '1 King Bed',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    desc: 'Our Junior Suites feature a separate sitting area and bedroom, creating the perfect space for extended stays or those who simply enjoy having more room to relax and unwind in style.',
    features: ['Separate Sitting Area', 'King Bed', 'Kitchenette', 'Dining Area', 'Large Balcony', 'Premium Sound System', 'Soaking Tub', 'Butler Service'],
    type: 'suite',
  },
  {
    name: 'Executive Suite',
    price: '$320',
    size: '640 sq ft',
    guests: 4,
    beds: '1 King Bed + Sofa Bed',
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    desc: 'Experience ultimate luxury in our Executive Suites — expansive living spaces with premium amenities, stunning ocean views, and dedicated butler service for an unforgettable Jamaican getaway.',
    features: ['Ocean View', 'Full Living Room', 'Full Kitchen', 'Private Balcony', 'Jacuzzi Tub', 'Butler Service', 'Premium Bar Setup', 'VIP Amenities'],
    type: 'suite',
  },
  {
    name: 'Penthouse Suite',
    price: '$520',
    size: '1,200 sq ft',
    guests: 6,
    beds: '2 King Beds',
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    desc: 'The crown jewel of Deja Vu — our Penthouse Suite offers the ultimate in luxury accommodation with panoramic ocean views, a private rooftop terrace, and bespoke service tailored to your every need.',
    features: ['Panoramic Ocean Views', 'Rooftop Terrace', 'Full Gourmet Kitchen', 'Private Pool', 'Personal Butler', '2 Bedrooms', 'Home Theater', 'Limousine Transfer'],
    type: 'penthouse',
  },
]

export default function Rooms() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? roomsList : roomsList.filter(r => r.type === filter)

  return (
    <div className="rooms-page">
      <PageBanner title="Rooms & Suites" subtitle="Accommodations" crumb="Rooms & Suites" />

      {/* FILTER */}
      <section className="rooms-filter-bar">
        <div className="container">
          <div className="filter-buttons">
            {[
              { key: 'all', label: 'All Rooms' },
              { key: 'standard', label: 'Standard' },
              { key: 'deluxe', label: 'Deluxe' },
              { key: 'suite', label: 'Suites' },
              { key: 'penthouse', label: 'Penthouse' },
            ].map(btn => (
              <button
                key={btn.key}
                className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
                onClick={() => setFilter(btn.key)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS LIST */}
      <section className="section-rooms-list">
        <div className="container">
          {filtered.map((room, i) => (
            <div className={`room-row ${i % 2 !== 0 ? 'reverse' : ''}`} key={i}>
              <div className="room-row-img">
                <img src={room.img} alt={room.name} />
                <div className="room-row-price">{room.price}<small>/night</small></div>
              </div>
              <div className="room-row-content">
                <h2 className="room-row-name">{room.name}</h2>
                <div className="room-row-meta">
                  <span><i className="fas fa-expand-arrows-alt"></i> {room.size}</span>
                  <span><i className="fas fa-user-friends"></i> Up to {room.guests} Guests</span>
                  <span><i className="fas fa-bed"></i> {room.beds}</span>
                </div>
                <div className="section-divider left"></div>
                <p className="room-row-desc">{room.desc}</p>
                <div className="room-row-features">
                  {room.features.map((f, j) => (
                    <span key={j} className="feature-tag"><i className="fas fa-check"></i> {f}</span>
                  ))}
                </div>
                <div className="room-row-actions">
                  <Link to="/booking" className="btn-primary">Book This Room</Link>
                  <div className="room-row-price-mobile">{room.price}<small>/night</small></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOTE / POLICY */}
      <section className="rooms-policy">
        <div className="container">
          <div className="policy-grid">
            <div className="policy-card">
              <i className="fas fa-clock"></i>
              <h4>Check-in / Check-out</h4>
              <p>Check-in from 3:00 PM — Check-out by 11:00 AM. Early check-in and late check-out available on request.</p>
            </div>
            <div className="policy-card">
              <i className="fas fa-ban"></i>
              <h4>Cancellation Policy</h4>
              <p>Free cancellation up to 48 hours before arrival. Cancellations within 48 hours are subject to a one-night charge.</p>
            </div>
            <div className="policy-card">
              <i className="fas fa-dog"></i>
              <h4>Pet Policy</h4>
              <p>We welcome well-behaved pets in designated pet-friendly rooms. Please inform us in advance. Additional fee applies.</p>
            </div>
            <div className="policy-card">
              <i className="fas fa-smoking-ban"></i>
              <h4>Smoking Policy</h4>
              <p>All rooms are non-smoking. Designated smoking areas are available on our outdoor terraces and garden areas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
