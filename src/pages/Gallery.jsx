import React, { useState } from 'react'
import PageBanner from '../components/PageBanner'
import './Gallery.css'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', cat: 'hotel', title: 'Hotel Exterior' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', cat: 'pool', title: 'Swimming Pool' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', cat: 'rooms', title: 'Standard Room' },
  { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80', cat: 'rooms', title: 'Deluxe Room' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', cat: 'dining', title: 'The Hibiscus Restaurant' },
  { src: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=800&q=80', cat: 'dining', title: 'Lobby Lounge' },
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80', cat: 'spa', title: 'Spa Treatment Room' },
  { src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', cat: 'beach', title: 'Nearby Beach' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', cat: 'rooms', title: 'Junior Suite' },
  { src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80', cat: 'pool', title: 'Pool at Night' },
  { src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80', cat: 'hotel', title: 'Conference Room' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', cat: 'beach', title: 'Caribbean Beach' },
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80', cat: 'rooms', title: 'Penthouse Suite' },
  { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', cat: 'rooms', title: 'Executive Suite' },
  { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80', cat: 'hotel', title: 'Banquet Hall' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', cat: 'hotel', title: 'Fitness Center' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', cat: 'spa', title: 'Beauty Salon' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', cat: 'pool', title: 'Poolside Bar' },
]

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'hotel', label: 'Hotel' },
  { key: 'rooms', label: 'Rooms' },
  { key: 'pool', label: 'Pool & Recreation' },
  { key: 'dining', label: 'Dining' },
  { key: 'spa', label: 'Spa' },
  { key: 'beach', label: 'Beach' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter(img => img.cat === filter)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevImg = () => setLightbox(l => (l - 1 + filtered.length) % filtered.length)
  const nextImg = () => setLightbox(l => (l + 1) % filtered.length)

  return (
    <div className="gallery-page">
      <PageBanner title="Photo Gallery" subtitle="Visual Tour" crumb="Gallery" />

      {/* FILTER */}
      <section className="gallery-filter-bar">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
                onClick={() => setFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div className="gallery-item" key={i} onClick={() => openLightbox(i)}>
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-item-hover">
                  <i className="fas fa-search-plus"></i>
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><i className="fas fa-times"></i></button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prevImg(); }}><i className="fas fa-chevron-left"></i></button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} />
            <div className="lightbox-caption">{filtered[lightbox].title}</div>
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); nextImg(); }}><i className="fas fa-chevron-right"></i></button>
        </div>
      )}
    </div>
  )
}
