import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" style={{ display: 'inline-block', marginBottom: '0' }}>
                <img
                  src="/logo-white.png"
                  alt="Lovery Restoration Home Care"
                  style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
                />
              </Link>
              <p className="footer-brand-desc">
                Professional, compassionate home care services in Surrey, BC.
                We help clients maintain independence, dignity, and quality of life
                — in the comfort of their own home.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link" aria-label="Facebook">f</a>
                <a href="#" className="footer-social-link" aria-label="Instagram">ig</a>
                <a href="#" className="footer-social-link" aria-label="Twitter">tw</a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Our Services', path: '/services' },
                  { label: 'Our Team', path: '/team' },
                  { label: 'Request Care', path: '/request-care' },
                  { label: 'Contact Us', path: '/contact' },
                ].map((link) => (
                  <Link key={link.path} to={link.path} className="footer-link">
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <div className="footer-links">
                {[
                  'Personal Care',
                  'Companion Care',
                  'Senior Care',
                  'Respite Care',
                  'Meal Assistance',
                  'Medication Reminders',
                  'Mobility Assistance',
                  'Dementia Support',
                ].map((service) => (
                  <Link key={service} to="/services" className="footer-link">
                    → {service}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>12975 106 Avenue,<br />Surrey, BC V3T2C1, Canada</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:7787101474" style={{ color: 'inherit', textDecoration: 'none' }}>
                  778-710-1474
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:loveryrestorationhomecare@gmail.com" style={{ color: 'inherit', textDecoration: 'none', wordBreak: 'break-all' }}>
                  loveryrestorationhomecare@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <Clock size={16} />
                <span>
                  Mon–Fri: 9:00 AM – 7:00 PM<br />
                  Sat–Sun: 10:00 AM – 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {year} Lovery Restoration Home Care. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
