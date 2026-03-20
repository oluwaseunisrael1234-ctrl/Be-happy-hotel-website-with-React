import React, { useState } from 'react'
import PageBanner from '../components/PageBanner'
import './Booking.css'

export default function Booking() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    rooms: '1',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    requests: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  })
  const [booked, setBooked] = useState(false)

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const roomOptions = [
    { value: 'standard', label: 'Standard Room', price: 120 },
    { value: 'deluxe', label: 'Deluxe Room', price: 180 },
    { value: 'junior', label: 'Junior Suite', price: 240 },
    { value: 'executive', label: 'Executive Suite', price: 320 },
    { value: 'penthouse', label: 'Penthouse Suite', price: 520 },
  ]

  const selectedRoom = roomOptions.find(r => r.value === form.roomType)
  const nights = form.checkIn && form.checkOut
    ? Math.max(0, Math.round((new Date(form.checkOut) - new Date(form.checkIn)) / (1000*60*60*24)))
    : 0
  const subtotal = selectedRoom ? selectedRoom.price * nights * parseInt(form.rooms) : 0
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax

  const handleFinalSubmit = () => {
    setBooked(true)
  }

  if (booked) {
    return (
      <div className="booking-page">
        <PageBanner title="Booking Confirmed" subtitle="Thank You!" crumb="Booking" />
        <div className="booking-confirmed">
          <div className="confirmed-box">
            <div className="confirmed-icon"><i className="fas fa-check-circle"></i></div>
            <h2>Your Reservation is Confirmed!</h2>
            <p>Thank you, <strong>{form.firstName} {form.lastName}</strong>! Your booking at Be Happie Hotel and Suites has been confirmed. A confirmation email has been sent to <strong>{form.email}</strong>.</p>
            <div className="confirmed-details">
              <div><span>Room</span><strong>{roomOptions.find(r => r.value === form.roomType)?.label}</strong></div>
              <div><span>Check-in</span><strong>{form.checkIn}</strong></div>
              <div><span>Check-out</span><strong>{form.checkOut}</strong></div>
              <div><span>Total</span><strong>${total.toLocaleString()}</strong></div>
            </div>
            <p className="confirmed-note">Our team will contact you within 24 hours to confirm your arrangements. We look forward to welcoming you!</p>
            <button className="btn-primary" onClick={() => { setBooked(false); setStep(1); }}>Make Another Booking</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-page">
      <PageBanner title="Book Your Stay" subtitle="Reservations" crumb="Booking" />

      {/* STEPS */}
      <div className="booking-steps-bar">
        <div className="container">
          <div className="booking-steps">
            {['Room Selection', 'Guest Details', 'Payment', 'Confirm'].map((s, i) => (
              <div key={i} className={`step-item ${step > i + 1 ? 'done' : ''} ${step === i + 1 ? 'active' : ''}`}>
                <div className="step-num">{step > i + 1 ? <i className="fas fa-check"></i> : i + 1}</div>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="booking-main">
        <div className="container booking-layout">
          <div className="booking-form-area">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="booking-step-content">
                <h3 className="step-title">Select Your Dates &amp; Room</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Check-in Date *</label>
                    <input type="date" name="checkIn" value={form.checkIn} onChange={change} required min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="form-group">
                    <label>Check-out Date *</label>
                    <input type="date" name="checkOut" value={form.checkOut} onChange={change} required min={form.checkIn || new Date().toISOString().split('T')[0]} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Adults *</label>
                    <select name="adults" value={form.adults} onChange={change}>
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Children</label>
                    <select name="children" value={form.children} onChange={change}>
                      {[0,1,2,3,4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Number of Rooms *</label>
                    <select name="rooms" value={form.rooms} onChange={change}>
                      {[1,2,3,4].map(n => <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Room Type *</label>
                  <select name="roomType" value={form.roomType} onChange={change} required>
                    <option value="">-- Select Room Type --</option>
                    {roomOptions.map(r => (
                      <option key={r.value} value={r.value}>{r.label} — from ${r.price}/night</option>
                    ))}
                  </select>
                </div>
                <button
                  className="btn-primary step-next"
                  onClick={() => { if (form.checkIn && form.checkOut && form.roomType) setStep(2) }}
                >
                  Continue to Guest Details <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="booking-step-content">
                <h3 className="step-title">Guest Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={change} placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={change} placeholder="Smith" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={change} placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={change} placeholder="+1 (000) 000-0000" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Country of Residence</label>
                  <select name="country" value={form.country} onChange={change}>
                    <option value="">Select Country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Jamaica</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea name="requests" value={form.requests} onChange={change} rows={4} placeholder="Any dietary requirements, accessibility needs, or special occasions we should know about..."></textarea>
                </div>
                <div className="step-actions">
                  <button className="btn-outline" onClick={() => setStep(1)}><i className="fas fa-arrow-left"></i> Back</button>
                  <button
                    className="btn-primary step-next"
                    onClick={() => { if (form.firstName && form.email && form.phone) setStep(3) }}
                  >
                    Continue to Payment <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="booking-step-content">
                <h3 className="step-title">Payment Information</h3>
                <div className="payment-secure-notice">
                  <i className="fas fa-lock"></i>
                  Your payment information is encrypted and secure. We use SSL technology to protect your data.
                </div>
                <div className="form-group">
                  <label>Name on Card *</label>
                  <input type="text" name="cardName" value={form.cardName} onChange={change} placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label>Card Number *</label>
                  <input type="text" name="cardNumber" value={form.cardNumber} onChange={change} placeholder="•••• •••• •••• ••••" maxLength={19} required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date *</label>
                    <input type="text" name="cardExpiry" value={form.cardExpiry} onChange={change} placeholder="MM/YY" maxLength={5} required />
                  </div>
                  <div className="form-group">
                    <label>CVV *</label>
                    <input type="text" name="cardCVV" value={form.cardCVV} onChange={change} placeholder="•••" maxLength={4} required />
                  </div>
                </div>
                <div className="payment-cards">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-amex"></i>
                  <i className="fab fa-cc-discover"></i>
                </div>
                <div className="step-actions">
                  <button className="btn-outline" onClick={() => setStep(2)}><i className="fas fa-arrow-left"></i> Back</button>
                  <button
                    className="btn-primary step-next"
                    onClick={() => { if (form.cardName && form.cardNumber) setStep(4) }}
                  >
                    Review Booking <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="booking-step-content">
                <h3 className="step-title">Confirm Your Booking</h3>
                <div className="confirm-grid">
                  <div className="confirm-section">
                    <h4>Stay Details</h4>
                    <table className="confirm-table">
                      <tbody>
                        <tr><td>Room Type</td><td>{selectedRoom?.label}</td></tr>
                        <tr><td>Check-in</td><td>{form.checkIn}</td></tr>
                        <tr><td>Check-out</td><td>{form.checkOut}</td></tr>
                        <tr><td>Nights</td><td>{nights}</td></tr>
                        <tr><td>Guests</td><td>{form.adults} Adults, {form.children} Children</td></tr>
                        <tr><td>Rooms</td><td>{form.rooms}</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="confirm-section">
                    <h4>Guest Details</h4>
                    <table className="confirm-table">
                      <tbody>
                        <tr><td>Name</td><td>{form.firstName} {form.lastName}</td></tr>
                        <tr><td>Email</td><td>{form.email}</td></tr>
                        <tr><td>Phone</td><td>{form.phone}</td></tr>
                        <tr><td>Country</td><td>{form.country || '—'}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {form.requests && (
                  <div className="confirm-section">
                    <h4>Special Requests</h4>
                    <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', padding: '14px', background: 'var(--cream)', borderLeft: '3px solid var(--gold)' }}>{form.requests}</p>
                  </div>
                )}
                <div className="step-actions">
                  <button className="btn-outline" onClick={() => setStep(3)}><i className="fas fa-arrow-left"></i> Back</button>
                  <button className="btn-primary step-next confirm-btn" onClick={handleFinalSubmit}>
                    <i className="fas fa-check"></i> Confirm &amp; Book — ${total.toLocaleString()}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR SUMMARY */}
          <div className="booking-summary">
            <div className="summary-card">
              <h4 className="summary-title">Booking Summary</h4>
              {selectedRoom && (
                <div className="summary-room">
                  <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80" alt="Room" />
                  <div>
                    <strong>{selectedRoom.label}</strong>
                    <span>${selectedRoom.price}/night</span>
                  </div>
                </div>
              )}
              <div className="summary-details">
                <div className="summary-row">
                  <span>Check-in</span>
                  <strong>{form.checkIn || '—'}</strong>
                </div>
                <div className="summary-row">
                  <span>Check-out</span>
                  <strong>{form.checkOut || '—'}</strong>
                </div>
                <div className="summary-row">
                  <span>Nights</span>
                  <strong>{nights || '—'}</strong>
                </div>
                <div className="summary-row">
                  <span>Rooms</span>
                  <strong>{form.rooms}</strong>
                </div>
                <div className="summary-row">
                  <span>Guests</span>
                  <strong>{form.adults} Adults</strong>
                </div>
              </div>
              {subtotal > 0 && (
                <div className="summary-pricing">
                  <div className="pricing-row">
                    <span>Room ({nights} nights × {form.rooms} room{form.rooms > 1 ? 's' : ''})</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="pricing-row">
                    <span>Taxes & Fees (10%)</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                  <div className="pricing-total">
                    <strong>Total</strong>
                    <strong>${total.toLocaleString()}</strong>
                  </div>
                </div>
              )}
              <div className="summary-perks">
                <div className="perk"><i className="fas fa-check"></i> Free Cancellation (48h)</div>
                <div className="perk"><i className="fas fa-check"></i> Best Rate Guaranteed</div>
                <div className="perk"><i className="fas fa-check"></i> No Hidden Fees</div>
                <div className="perk"><i className="fas fa-check"></i> Secure Payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
