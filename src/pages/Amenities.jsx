import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './Amenities.css'

const amenityCategories = [
  {
    category: 'Dining & Bar',
    icon: 'fas fa-utensils',
    items: [
      { name: 'The Hibiscus Restaurant', desc: 'Our signature restaurant serves authentic Jamaican cuisine alongside international favorites, using fresh local ingredients. Open for breakfast, lunch, and dinner.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
      { name: 'Poolside Bar', desc: 'Refresh with tropical cocktails, fresh juices, and light bites while lounging by our beautiful pool. Open daily from 10 AM to 10 PM.', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80' },
      { name: 'Lobby Lounge', desc: 'Unwind in our elegant lobby lounge with premium spirits, wines, and light snacks. The perfect spot for an evening cocktail or morning coffee.', img: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=600&q=80' },
    ],
  },
  {
    category: 'Pool & Recreation',
    icon: 'fas fa-swimming-pool',
    items: [
      { name: 'Outdoor Swimming Pool', desc: 'Take a refreshing dip in our stunning outdoor pool surrounded by tropical landscaping. Towels, sunbeds, and poolside service are provided.', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80' },
      { name: 'Fitness Center', desc: 'Maintain your routine in our fully equipped gym featuring cardio machines, free weights, and resistance equipment. Open 24 hours for your convenience.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
      { name: 'Jacuzzi & Hot Tub', desc: 'Soak away your cares in our bubbling jacuzzi overlooking the tropical gardens. Available for private bookings or shared relaxation.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80' },
    ],
  },
  {
    category: 'Spa & Wellness',
    icon: 'fas fa-spa',
    items: [
      { name: 'Be Happie Spa', desc: 'Immerse yourself in total relaxation with our full menu of treatments including massages, facials, body wraps, and traditional Jamaican healing therapies.', img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80' },
      { name: 'Beauty Salon', desc: 'Look your best with services from our expert stylists including haircuts, coloring, manicures, pedicures, and complete beauty makeovers.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
    ],
  },
  {
    category: 'Business & Events',
    icon: 'fas fa-briefcase',
    items: [
      { name: 'Conference Center', desc: 'Host successful meetings and events in our fully equipped conference center with state-of-the-art AV equipment, breakout rooms, and dedicated event planning support.', img: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80' },
      { name: 'Banquet Hall', desc: 'Celebrate life\'s special moments in our elegant banquet hall, accommodating up to 200 guests for weddings, galas, and corporate events.', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80' },
    ],
  },
]

const quickAmenities = [
  'Free High-Speed WiFi', '24-Hour Front Desk', 'Airport Transfer', 'Concierge Service',
  'Laundry & Dry Cleaning', 'Currency Exchange', 'Room Service (24/7)', 'Valet Parking',
  'Tour Desk', 'Medical Assistance', 'Baby-Sitting', 'Car Rental',
]

export default function Amenities() {
  return (
    <div className="amenities-page">
      <PageBanner title="Hotel Amenities" subtitle="Facilities & Services" crumb="Amenities" />

      {/* QUICK LIST */}
      <section className="amenities-quick">
        <div className="container">
          <div className="quick-grid">
            {quickAmenities.map((a, i) => (
              <div className="quick-item" key={i}>
                <i className="fas fa-check-circle"></i>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {amenityCategories.map((cat, ci) => (
        <section key={ci} className={`amenities-section ${ci % 2 !== 0 ? 'alt-bg' : ''}`}>
          <div className="container">
            <div className="amenities-cat-header">
              <div className="cat-icon"><i className={cat.icon}></i></div>
              <div>
                <span className="section-subtitle">Our Facilities</span>
                <h2 className="section-title">{cat.category}</h2>
                <div className="section-divider left"></div>
              </div>
            </div>
            <div className={`amenities-items ${cat.items.length === 2 ? 'two-cols' : 'three-cols'}`}>
              {cat.items.map((item, ii) => (
                <div className="amenity-detail-card" key={ii}>
                  <div className="amenity-detail-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="amenity-detail-body">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="amenities-cta">
        <div className="amenities-cta-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="section-subtitle">Experience It All</span>
          <h2>Ready to Enjoy Our Amenities?</h2>
          <p>Book your stay and gain full access to all of our world-class facilities and services.</p>
          <Link to="/booking" className="btn-primary">Book Your Stay</Link>
        </div>
      </section>
    </div>
  )
}
