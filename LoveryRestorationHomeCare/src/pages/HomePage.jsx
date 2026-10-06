import { Link } from 'react-router-dom'
import {
  Heart, Shield, Users, Star, Clock, CheckCircle,
  Phone, ArrowRight, Stethoscope, Home, Coffee,
  Pill, Car, Activity, Brain
} from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import heroImage from '../assets/heroimage.jpeg'
import whyChooseUsImage from '../assets/whychooseus.jpeg'
import client1Image from '../assets/client1.jpeg'
import teamMember02Image from '../assets/team-member02.jpg'
import teamMember03Image from '../assets/team-member03.jpg'

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="hero">
      <div className="blob hero-blob-1" />
      <div className="blob hero-blob-2" />
      <div className="container">
        <div className="hero-inner">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Surrey, BC — Trusted Home Care</span>
            </div>

            <h1 className="hero-title">
              Compassionate Care.<br />
              <span>Comfort at Home.</span><br />
              Peace of Mind.
            </h1>
            <h3 style={{
              color: 'var(--color-primary)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: '700',
              marginTop: '-16px',
              marginBottom: '24px',
              letterSpacing: '0.5px'
            }}>
              (Love Brings Hope)
            </h3>

            <p className="hero-description">
              Lovery Restoration Home Care provides professional, personalized home care
              services that help clients maintain independence, dignity, and quality of life —
              right in the comfort of their own home.
            </p>

            <div className="hero-actions">
              <Link to="/request-care" className="btn btn-primary btn-lg">
                <Heart size={18} />
                Request Care Today
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">5+</span>
                <span className="hero-stat-label">Years of Experience</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">200+</span>
                <span className="hero-stat-label">Clients Served</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Compassionate Care</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <img
                  src={heroImage}
                  alt="Caregiver supporting an elderly person at home"
                />
                <div className="hero-image-overlay" />
              </div>

              {/* Float cards */}
              <div className="hero-float-card hero-float-card-1">
                <div className="hero-float-card-icon">
                  <CheckCircle size={22} />
                </div>
                <div className="hero-float-card-text">
                  <strong>Certified Caregivers</strong>
                  <span>Verified & Background-Checked</span>
                </div>
              </div>

              <div className="hero-float-card hero-float-card-2">
                <div className="hero-float-card-icon">
                  <Star size={22} />
                </div>
                <div className="hero-float-card-text">
                  <strong>5-Star Rated</strong>
                  <span>Trusted by Families in Surrey</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES OVERVIEW ─── */
const services = [
  {
    icon: <Heart size={28} />,
    title: 'Personal Care',
    desc: 'Assistance with bathing, dressing, grooming, and daily hygiene tasks with respect and dignity.',
  },
  {
    icon: <Users size={28} />,
    title: 'Companion Care',
    desc: 'Meaningful companionship, social interaction, and emotional support to combat loneliness.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Senior Care',
    desc: 'Specialized support for seniors to maintain independence and a comfortable home environment.',
  },
  {
    icon: <Coffee size={28} />,
    title: 'Meal Assistance',
    desc: 'Nutritious meal planning and preparation tailored to dietary needs and preferences.',
  },
  {
    icon: <Pill size={28} />,
    title: 'Medication Reminders',
    desc: 'Timely medication reminders to ensure health routines are followed consistently.',
  },
  {
    icon: <Brain size={28} />,
    title: 'Dementia Support',
    desc: 'Patient, compassionate care for those living with dementia and cognitive challenges.',
  },
]

function ServicesOverview() {
  return (
    <section className="section-padding services-section">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <span className="section-label">
              <Stethoscope size={14} />
              What We Offer
            </span>
            <h2 className="section-title">Personalized Home Care Services</h2>
            <p className="section-subtitle">
              We design each care plan around the unique needs, preferences, and goals
              of every individual we serve — because no two people are alike.
            </p>
          </div>
        </FadeIn>

        <div className="services-grid">
          {services.map((s, idx) => (
            <FadeIn key={s.title} delay={idx * 0.1}>
              <div className="service-card">
                <div className="service-icon-wrapper">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/services" className="btn btn-primary btn-lg">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── WHY CHOOSE US ─── */
const whyFeatures = [
  {
    icon: <Heart size={22} />,
    title: 'Compassionate & Personalized',
    desc: 'Every care plan is tailored to the individual. We treat every client as a valued member of our extended family.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Experienced & Certified',
    desc: 'With 5+ years in home care and certified professionals, we bring expertise you can rely on every day.',
  },
  {
    icon: <CheckCircle size={22} />,
    title: 'Reliable & Consistent',
    desc: 'We show up — every time. Consistent caregivers mean familiar faces and trusted relationships.',
  },
  {
    icon: <Users size={22} />,
    title: 'Family & Community Focused',
    desc: 'We collaborate with healthcare professionals, family members, and support networks for holistic care.',
  },
]

function WhyChooseUs() {
  return (
    <section className="section-padding why-section">
      <div className="blob" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(251,95,171,0.12) 0%, transparent 70%)',
        top: '-100px', right: '-100px'
      }} />
      <div className="container">
        <div className="why-inner">
          <FadeIn direction="right">
            <div className="why-image-container">
              <img
                src={whyChooseUsImage}
                alt="Caring caregiver with elderly client"
                className="why-main-image"
              />
              <div className="why-accent-card">
                <span className="accent-number">5+</span>
                <span className="accent-label">Years of trusted home care</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div>
              <span className="section-label">
                <Star size={14} />
                Why Choose Us
              </span>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                Care That Puts You First
              </h2>
              <p style={{ color: 'var(--color-text)', marginBottom: '40px', lineHeight: '1.8' }}>
                At Lovery Restoration Home Care, we believe care should go beyond tasks.
                It should nurture independence, preserve dignity, and bring genuine peace
                of mind to both clients and their families.
              </p>
              <div className="why-features">
                {whyFeatures.map((f) => (
                  <div key={f.title} className="why-feature">
                    <div className="why-feature-icon">{f.icon}</div>
                    <div className="why-feature-content">
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '40px' }}>
                <Link to="/about" className="btn btn-primary">
                  Learn About Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ─── */
const steps = [
  { num: '01', title: 'Contact Us', desc: 'Reach out by phone, email, or online form.' },
  { num: '02', title: 'Assessment', desc: 'We conduct a personalized needs assessment.' },
  { num: '03', title: 'Care Plan', desc: 'A tailored care plan is created for you.' },
  { num: '04', title: 'Caregiver Match', desc: 'We match you with the perfect caregiver.' },
  { num: '05', title: 'Care Begins', desc: 'Compassionate care starts right at home.' },
]

function HowItWorks() {
  return (
    <section className="section-padding how-section">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <span className="section-label">
              <CheckCircle size={14} />
              Simple Process
            </span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Getting started is simple. We guide you every step of the way.
            </p>
          </div>
        </FadeIn>
        <div className="how-steps">
          {steps.map((s, idx) => (
            <FadeIn key={s.num} delay={idx * 0.1} direction="up" distance={20}>
              <div className="how-step">
                <div className="how-step-number">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    image: client1Image,
    initials: 'PO',
    name: 'Prosper O.',
    role: 'Client',
    text: "I cannot thank the home care team enough for the support they've provided. From the very first day, they made my family feel at ease with their professionalism and compassion. The caregivers were not only skilled but also incredibly kind and attentive to my loved one's needs. They went above and beyond, offering both physical care and emotional support, which made a huge difference in our lives. We feel so fortunate to have found such a wonderful team that truly cares about our family's well-being. Thank you for everything!",
    stars: 5,
  },
  {
    image: teamMember02Image,
    initials: 'DP',
    name: 'Debra P.',
    role: 'Client\'s Daughter',
    text: "The team at Lovery Restoration Home Care truly cares. They have made a huge difference in my mother's life.",
    stars: 5,
  },
  {
    image: teamMember03Image,
    initials: 'MS',
    name: 'Mark S.',
    role: 'Client',
    text: "Professional, friendly, and reliable. I highly recommend their services!",
    stars: 5,
  },
]

function Testimonials() {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <span className="section-label" style={{ background: 'rgba(251,95,171,0.15)', borderColor: 'rgba(251,95,171,0.3)', color: '#FB5FAB' }}>
              <Star size={14} />
              Client Stories
            </span>
            <h2 className="section-title" style={{ color: 'white' }}>What Families Say About Us</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Real stories from the families and clients we've had the privilege to serve.
            </p>
          </div>
        </FadeIn>
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <FadeIn key={t.name} delay={idx * 0.1}>
              <div className="testimonial-card">
                <div className="testimonial-author" style={{ marginBottom: '20px' }}>
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="testimonial-avatar" style={{ objectFit: 'cover' }} />
                  ) : (
                    <div className="testimonial-avatar">{t.initials}</div>
                  )}
                  <div>
                    <div className="testimonial-author-name">{t.name}</div>
                    <div className="testimonial-author-role">{t.role}</div>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text" style={{ marginBottom: 0 }}>"{t.text}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── VALUES SNIPPET ─── */
const values = [
  { emoji: '❤️', title: 'Compassion', desc: 'We treat every client with genuine warmth and empathy.' },
  { emoji: '🤝', title: 'Respect', desc: 'Dignity and preferences of each person are always honored.' },
  { emoji: '🔒', title: 'Reliability', desc: 'Consistent, dependable care you can count on every day.' },
  { emoji: '🏠', title: 'Comfort', desc: 'Home is where people feel safest — we keep it that way.' },
  { emoji: '🛡️', title: 'Safety', desc: 'A secure environment is our top priority at all times.' },
  { emoji: '👤', title: 'Independence', desc: 'We empower clients to live as independently as possible.' },
]

function ValuesSection() {
  return (
    <section className="section-padding values-section">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <span className="section-label">
              <Heart size={14} />
              Our Core Values
            </span>
            <h2 className="section-title">The Heart of Our Care Philosophy</h2>
            <p className="section-subtitle">
              Everything we do is guided by these fundamental values that put people first.
            </p>
          </div>
        </FadeIn>
        <div className="values-grid">
          {values.map((v, idx) => (
            <FadeIn key={v.title} delay={idx * 0.05} direction="up" distance={20}>
              <div className="value-card">
                <span className="value-emoji">{v.emoji}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA BANNER ─── */
function CTABanner() {
  return (
    <section className="cta-section">
      <div className="blob" style={{
        width: '500px', height: '500px',
        background: 'rgba(255,255,255,0.08)',
        top: '-100px', left: '-100px'
      }} />
      <div className="blob" style={{
        width: '400px', height: '400px',
        background: 'rgba(255,255,255,0.06)',
        bottom: '-50px', right: '-50px'
      }} />
      <div className="container">
        <FadeIn direction="up">
          <div className="cta-inner">
            <h2>Ready to Get Started?</h2>
            <p>
              Let us help you or your loved one live safely, comfortably, and independently
              at home. Contact us today for a free care consultation.
            </p>
            <div className="cta-actions">
              <Link to="/request-care" className="btn btn-white btn-lg">
                <Heart size={18} />
                Request Care
              </Link>
              <a href="tel:7787101474" className="btn btn-lg" style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.4)',
                backdropFilter: 'blur(10px)'
              }}>
                <Phone size={18} />
                778-710-1474
              </a>
            </div>
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginTop: '48px', flexWrap: 'wrap' }}>
              {[
                { icon: <Clock size={18} />, text: 'Mon–Fri: 9AM–7PM, Sat–Sun: 10AM–2PM' },
                { icon: <MapPin size={18} />, text: 'Surrey, BC, Canada' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* Inline import for MapPin */
function MapPin({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
}

/* ─── HOME PAGE ─── */
export default function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <ValuesSection />
      <Testimonials />
      <CTABanner />
    </div>
  )
}
