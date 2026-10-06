import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, Heart } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="contact-page-hero">
        <div className="blob" style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(251,95,171,0.2) 0%, transparent 70%)',
          top: '-100px', right: '-100px'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">
            <Phone size={14} />
            Contact Us
          </span>
          <h1>Let's <span className="gradient-text">Talk</span> About Care</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text)', maxWidth: '580px', margin: '20px auto 0', lineHeight: '1.8' }}>
            Whether you have a question, need a care consultation, or are ready to get started —
            we're here to help. Reach out and we'll respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding contact-section">
        <div className="container">
          <div className="contact-inner">
            {/* Info */}
            <div className="contact-info">
              <span className="section-label">
                <MapPin size={14} />
                Get in Touch
              </span>
              <h2 className="section-title">We'd Love to Hear From You</h2>
              <p>
                Our team is available during business hours to answer your questions,
                discuss care options, and guide you through the process of getting
                started with home care.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-item-content">
                    <strong>Phone</strong>
                    <a href="tel:7787101474">778-710-1474</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-item-content">
                    <strong>Email</strong>
                    <a href="mailto:loveryrestorationhomecare@gmail.com">
                      loveryrestorationhomecare@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-item-content">
                    <strong>Address</strong>
                    <span>12975 106 Avenue, Surrey, BC V3T2C1, Canada</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Clock size={20} />
                  </div>
                  <div className="contact-item-content">
                    <strong>Business Hours</strong>
                    <span>Monday – Friday: 9:00 AM – 7:00 PM</span>
                    <span style={{ display: 'block', marginTop: '4px' }}>Saturday – Sunday: 10:00 AM – 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Quick Trust Badges */}
              <div style={{ marginTop: '48px', padding: '28px', background: 'var(--color-white)', borderRadius: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ marginBottom: '16px', fontSize: '1rem' }}>Why Contact Us?</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Free initial care consultation',
                    'Fast response within 24 hours',
                    'No obligation assessment',
                    'Bilingual support (English & French)',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                      <CheckCircle size={16} color="var(--color-primary)" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{
                    width: '80px', height: '80px', background: 'var(--color-primary-bg)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', margin: '0 auto 24px',
                  }}>
                    <CheckCircle size={40} color="var(--color-primary)" />
                  </div>
                  <h3 style={{ marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text)' }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll respond as soon as possible.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="(xxx) xxx-xxxx"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="subject">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          className="form-select"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option>General Inquiry</option>
                          <option>Request a Care Consultation</option>
                          <option>Learn About Services</option>
                          <option>Caregiver Employment</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group full-width">
                        <label className="form-label" htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-textarea"
                          placeholder="Tell us how we can help you..."
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary form-submit">
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ background: 'var(--color-white)', padding: '0 0 80px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--color-primary-bg), var(--color-primary-light))',
            borderRadius: '24px',
            height: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '16px',
            border: '1px solid var(--color-border)',
          }}>
            <MapPin size={48} color="var(--color-primary)" />
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '8px' }}>12975 106 Avenue</h3>
              <p style={{ color: 'var(--color-text)' }}>Surrey, BC V3T2C1, Canada</p>
            </div>
            <a
              href="https://maps.google.com/?q=12975+106+Ave,+Surrey,+BC+V3T+2C1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
