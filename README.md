# Deja Vu Hotel & Suites — React Clone

A complete, pixel-faithful React rebuild of [dejavuhotelandsuites.org](https://dejavuhotelandsuites.org/)

---

## 🏨 Site Analysis

**Original website:** Deja Vu Hotel and Suites — Ocho Rios, Jamaica  
**Style:** Luxury boutique hotel with gold/dark color scheme, serif headings, clean layouts

### Pages Identified & Rebuilt
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero slider, booking bar, about teaser, rooms preview, amenities, CTA, testimonials, gallery strip, map |
| About | `/about` | Story, core values, timeline, team members, CTA |
| Rooms & Suites | `/rooms` | Filterable room listing with alternate row layout |
| Amenities | `/amenities` | Quick list, categorized facility cards |
| Gallery | `/gallery` | Filterable photo grid with lightbox viewer |
| Contact | `/contact` | Info strip, contact form, embedded map, social links |
| Booking | `/booking` | 4-step booking flow with summary sidebar |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ 
- **npm** v9+

### Installation

```bash
# 1. Navigate to project
cd dejavu-hotel-suites

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview   # Preview production build locally
```

---

## 📁 Project Structure

```
dejavu-hotel-suites/
├── index.html                    # HTML entry point (loads Google Fonts + Font Awesome)
├── vite.config.js                # Vite configuration
├── package.json
└── src/
    ├── main.jsx                  # React root (BrowserRouter wraps App)
    ├── App.jsx                   # Route definitions + ScrollToTop
    ├── styles/
    │   └── global.css            # Global variables, resets, utility classes
    ├── components/
    │   ├── Header.jsx / .css     # Fixed header with top info bar + nav + mobile menu
    │   ├── Footer.jsx / .css     # 4-column footer with links, contact, social
    │   └── PageBanner.jsx / .css # Reusable page title banner with breadcrumb
    └── pages/
        ├── Home.jsx / .css       # Full homepage with all sections
        ├── About.jsx / .css      # About page with timeline and team
        ├── Rooms.jsx / .css      # Room listing with filter
        ├── Amenities.jsx / .css  # Amenities by category
        ├── Gallery.jsx / .css    # Photo gallery with lightbox
        ├── Contact.jsx / .css    # Contact form + map
        └── Booking.jsx / .css    # Multi-step booking flow
```

---

## 🎨 Design System

### Colors
```css
--gold:       #c9a84c   /* Primary accent */
--gold-light: #e2c97e   /* Light accent */
--gold-dark:  #a07830   /* Dark accent */
--dark:       #1a1a1a   /* Backgrounds */
--cream:      #f9f5ee   /* Section backgrounds */
```

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Lato (sans-serif)
- **Script accents:** Dancing Script

### Tech Stack
- **React 18** with functional components + hooks
- **React Router v6** for client-side routing
- **Vite 5** for fast development
- **Pure CSS Modules** (no Tailwind or CSS-in-JS)
- **Font Awesome 6** via CDN for icons

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Desktop (1200px+) | Full multi-column layouts |
| Tablet (1024px) | 2-column adjustments |
| Mobile (768px) | Single column, hamburger nav |
| Small (480px) | Compact single column |

---

## ✨ Features Implemented

- ✅ Auto-sliding hero with dot navigation
- ✅ Fixed header that transforms on scroll
- ✅ Mobile hamburger menu
- ✅ Quick booking bar with date pickers
- ✅ Room filter by type
- ✅ Gallery lightbox with keyboard/button navigation
- ✅ Contact form with success message
- ✅ 4-step booking wizard with summary sidebar
- ✅ Booking confirmation screen
- ✅ Embedded Google Maps
- ✅ Breadcrumb navigation on all inner pages
- ✅ Hover animations throughout
- ✅ Scroll to top on route change

---

## 📝 Notes

- Image assets use **Unsplash** URLs for demonstration. Replace with actual hotel photography.
- The Google Maps embed uses a placeholder coordinate. Update with exact hotel coordinates.
- The booking and contact forms do **not** connect to a backend. Wire up to your API/email service.
- Font Awesome and Google Fonts load from CDN — requires internet connection.
