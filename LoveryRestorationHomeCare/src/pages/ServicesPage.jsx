import { Link } from 'react-router-dom'
import { Heart, Users, Activity, Coffee, Pill, Car, Brain, Home, Shield, Clock, CheckCircle, ArrowRight, Stethoscope } from 'lucide-react'

const services = [
  {
    icon: '❤️',
    title: 'Personal Care',
    desc: 'Dignified assistance with bathing, dressing, grooming, and personal hygiene — supporting independence while ensuring comfort.',
    features: [
      'Bathing and showering assistance',
      'Dressing and grooming support',
      'Oral hygiene assistance',
      'Skin care and positioning',
      'Toileting and continence care',
    ],
  },
  {
    icon: '🤝',
    title: 'Companion Care',
    desc: 'Meaningful social interaction, emotional support, and companionship to enrich daily life and reduce isolation.',
    features: [
      'Friendly conversation and engagement',
      'Accompanying to appointments',
      'Recreational activities and hobbies',
      'Reading and reminiscing',
      'Emotional encouragement',
    ],
  },
  {
    icon: '👴',
    title: 'Senior Care',
    desc: 'Specialized support designed to help seniors maintain their quality of life, independence, and comfort at home.',
    features: [
      'Fall prevention support',
      'Light exercise encouragement',
      'Daily routine maintenance',
      'Health monitoring assistance',
      'Social engagement activities',
    ],
  },
  {
    icon: '🌿',
    title: 'Respite Care',
    desc: 'Relief for family caregivers — ensuring your loved one is in safe, capable hands while you rest and recharge.',
    features: [
      'Temporary caregiver relief',
      'Weekend and holiday coverage',
      'Emergency respite support',
      'Planned time-off care',
      'Family caregiver support resources',
    ],
  },
  {
    icon: '🍽️',
    title: 'Meal Assistance',
    desc: 'Nutritious, delicious meal planning and preparation tailored to dietary needs, restrictions, and personal preferences.',
    features: [
      'Meal planning and preparation',
      'Dietary restriction accommodation',
      'Grocery shopping assistance',
      'Kitchen safety supervision',
      'Hydration monitoring',
    ],
  },
  {
    icon: '💊',
    title: 'Medication Reminders',
    desc: 'Timely reminders and organizational support to ensure health routines and prescriptions are followed consistently.',
    features: [
      'Scheduled medication reminders',
      'Medication organization support',
      'Prescription pickup assistance',
      'Health log maintenance',
      'Reporting health concerns',
    ],
  },
  {
    icon: '🚶',
    title: 'Mobility Assistance',
    desc: 'Safe, supportive help with movement, transfers, and getting around — inside and outside the home.',
    features: [
      'Safe transfer and positioning',
      'Walking and mobility support',
      'Exercise and stretching assistance',
      'Wheelchair and mobility aid support',
      'Fall prevention strategies',
    ],
  },
  {
    icon: '🧠',
    title: 'Dementia Support',
    desc: 'Patient, compassionate, specialist-informed care for individuals living with dementia and cognitive challenges.',
    features: [
      'Routine-based structured care',
      'Memory activity engagement',
      'Safe environment management',
      'Family communication and updates',
      'Behavioural support strategies',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="services-hero">
        <div className="blob" style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(251,95,171,0.2) 0%, transparent 70%)',
          top: '-100px', right: '-100px'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">
            <Stethoscope size={14} />
            Our Services
          </span>
          <h1>Personalized Home Care <span className="gradient-text">Services</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text)', maxWidth: '620px', margin: '20px auto 0', lineHeight: '1.8' }}>
            Every service we provide is thoughtfully designed around the individual —
            because great care starts with truly understanding who you're caring for.
          </p>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service) => (
              <div key={service.title} className="service-detail-card">
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features-list">
                  {service.features.map((f) => (
                    <li key={f} className="service-feature-item">{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: 'var(--color-primary-bg)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">
              <CheckCircle size={14} />
              Our Process
            </span>
            <h2 className="section-title">How We Deliver Care</h2>
            <p className="section-subtitle">
              Getting the right care shouldn't be complicated. Here's how we make it simple.
            </p>
          </div>
          <div className="how-steps">
            {[
              { num: '01', title: 'Initial Contact', desc: 'Call, email, or fill out our care request form.' },
              { num: '02', title: 'Needs Assessment', desc: 'We assess your specific needs and situation together.' },
              { num: '03', title: 'Personalized Plan', desc: 'A care plan designed uniquely around you.' },
              { num: '04', title: 'Caregiver Match', desc: 'We match you with the most suitable caregiver.' },
              { num: '05', title: 'Care Begins', desc: 'Professional, compassionate care starts at home.' },
            ].map((s) => (
              <div key={s.num} className="how-step">
                <div className="how-step-number">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span className="section-label">
                <Shield size={14} />
                Our Approach
              </span>
              <h2 className="section-title">Care Designed Around You</h2>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '24px' }}>
                We don't believe in a one-size-fits-all approach to home care. Every client
                receives a personalized plan built around their specific needs, goals, and daily rhythms.
              </p>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '32px' }}>
                Our team works collaboratively with family members and healthcare professionals
                to ensure continuity of care and the best possible outcomes for every client.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                {[
                  'Flexible scheduling to fit your life',
                  'Regular care plan reviews and updates',
                  'Direct communication with care team',
                  'Family updates and involvement',
                  'Emergency support available',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={18} color="var(--color-primary)" />
                    <span style={{ color: 'var(--color-text)', fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/request-care" className="btn btn-primary btn-lg">
                <Heart size={18} />
                Request Care Today
              </Link>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary-bg), var(--color-primary-light))',
              borderRadius: '32px',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>
              {[
                { icon: <Clock size={24} />, title: 'Flexible Hours', desc: 'Part-time or full-time — we fit around your schedule.' },
                { icon: <Users size={24} />, title: 'Experienced Team', desc: 'Certified, vetted caregivers with hands-on experience.' },
                { icon: <Shield size={24} />, title: 'Trusted & Safe', desc: 'All caregivers are background-checked and insured.' },
                { icon: <Heart size={24} />, title: 'Ongoing Support', desc: 'We\'re with you every step of the care journey.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '52px', height: '52px', background: 'white', borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-primary)', flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', fontSize: '1rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Not Sure Which Service You Need?</h2>
            <p>
              Our care coordinators are happy to guide you. Reach out today
              and we'll help find the perfect care plan for your situation.
            </p>
            <div className="cta-actions">
              <Link to="/request-care" className="btn btn-white btn-lg">
                <Heart size={18} />
                Request Care
              </Link>
              <Link to="/contact" className="btn btn-lg" style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.4)',
              }}>
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
