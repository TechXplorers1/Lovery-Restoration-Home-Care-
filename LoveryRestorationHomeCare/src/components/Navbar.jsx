import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img
              src="/logo-black.png"
              alt="Lovery Restoration Home Care"
              className="navbar-logo-img"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link${isActive(link.path) ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="navbar-cta">
            <a href="tel:7787101474" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
              <Phone size={15} />
              778-710-1474
            </a>
            <Link to="/request-care" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
              Request Care
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {/* Logo in mobile menu */}
        <div style={{ padding: '8px 0 16px', borderBottom: '1px solid var(--color-border)', marginBottom: '8px' }}>
          <img
            src="/logo-black.png"
            alt="Lovery Restoration Home Care"
            style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
          />
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-nav-link${isActive(link.path) ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <div className="mobile-menu-cta">
          <a href="tel:7787101474" className="btn btn-outline" style={{ justifyContent: 'center' }}>
            <Phone size={15} />
            778-710-1474
          </a>
          <Link to="/request-care" className="btn btn-primary" style={{ justifyContent: 'center' }}>
            Request Care
          </Link>
        </div>
      </div>
    </>
  )
}
