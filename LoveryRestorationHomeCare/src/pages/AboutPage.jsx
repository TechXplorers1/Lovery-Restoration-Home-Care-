import { Link } from 'react-router-dom'
import { Heart, Star, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'
import aboutImage from '../assets/aboutsection.jpeg'

const ownerData = [
  {
    initials: 'IN',
    name: 'Imma Nadine Suh',
    role: 'Co-Founder & Care Director',
    bio: 'Imma brings a unique background in banking, finance, and healthcare that gives Lovery Restoration a foundation of both professional excellence and compassionate service. With certifications in home care and experience working with diverse clients across Canadian and American healthcare systems, she is dedicated to building systems that genuinely serve people.',
    tags: ['Home Care Certified', 'Banking & Finance', 'Canadian Healthcare', 'American Healthcare', 'English & French'],
  },
  {
    initials: 'LN',
    name: 'Love Ima Nvi Chuba',
    role: 'Co-Founder & Community Relations',
    bio: 'Love holds a Bachelor\'s degree in Political Science and Public Administration and has extensive experience in welfare management and human services. Her Diploma as a Social Support Worker and deep commitment to community well-being drive the relational and advocacy dimensions of Lovery Restoration\'s approach.',
    tags: ['Social Support Worker', 'Human Services', 'Welfare Management', 'Political Science', 'English & French'],
  },
]

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="about-hero">
        <div className="blob" style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(251,95,171,0.2) 0%, transparent 70%)',
          top: '-100px', right: '-100px'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">
            <Heart size={14} />
            About Us
          </span>
          <h1>We Bring <span className="gradient-text">Love and Hope</span> to Every Home</h1>
          <p>
            Lovery Restoration Home Care was founded on the belief that professional
            care and genuine compassion are not mutually exclusive — they are inseparable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding mission-section">
        <div className="container">
          <div className="mission-inner">
            <div className="mission-content">
              <span className="section-label">
                <Star size={14} />
                Our Mission
              </span>
              <h2 className="section-title">Compassionate Care That Goes Beyond the Task</h2>
              <p>
                Our mission is to provide professional, individualized home care that enables
                clients to maintain their independence, comfort, safety, and dignity within
                their own homes — while delivering peace of mind to their families.
              </p>
              <p>
                We understand that inviting a caregiver into your home is a profound act of
                trust. We honour that trust by building genuine relationships, treating every
                client as an individual, and adapting our services to evolving needs.
              </p>
              <p>
                With over 5 years of experience in the home care industry and collaborations
                with healthcare professionals, families, and community support networks, we
                deliver care that is as effective as it is compassionate.
              </p>

              <div className="mission-stats">
                {[
                  { number: '5+', label: 'Years of Experience' },
                  { number: '200+', label: 'Clients Served' },
                  { number: '100%', label: 'Client-Centered' },
                  { number: '2', label: 'Certified Co-Founders' },
                ].map((stat) => (
                  <div key={stat.label} className="mission-stat-card">
                    <div className="mission-stat-number">{stat.number}</div>
                    <div className="mission-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-image">
              <img
                src={aboutImage}
                alt="Dedicated care at home"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'var(--color-primary-bg)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">
              <Heart size={14} />
              Core Values
            </span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">
              Our values aren't just words on a page — they guide every interaction,
              every care plan, and every relationship we build.
            </p>
          </div>
          <div className="values-grid">
            {[
              { emoji: '❤️', title: 'Compassion', desc: 'Understanding and empathy in every interaction, treating clients as we would our own family.' },
              { emoji: '🤝', title: 'Respect', desc: 'Honouring each person\'s dignity, cultural background, personal preferences, and right to make their own decisions.' },
              { emoji: '🔒', title: 'Reliability', desc: 'Providing consistent, dependable support that clients and families can count on without hesitation.' },
              { emoji: '🏠', title: 'Comfort', desc: 'Making home the place where our clients feel most secure, supported, and at ease.' },
              { emoji: '🛡️', title: 'Safety', desc: 'Creating and maintaining a safe environment that minimizes risk while maximizing freedom.' },
              { emoji: '👤', title: 'Independence', desc: 'Empowering clients to remain as autonomous as possible — assistance without dependency.' },
            ].map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-emoji">{v.emoji}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">
              <Shield size={14} />
              Our Care Philosophy
            </span>
            <h2 className="section-title">Client-Centered Care</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.85', marginBottom: '32px' }}>
              At the heart of everything we do is a simple belief: care must begin with
              listening. We don't prescribe a standard service package — we start by
              understanding each client's unique situation, goals, challenges, and preferences.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '1.85', marginBottom: '32px' }}>
              From that understanding, we build a care plan together — one that evolves as needs
              change. We also work closely with healthcare professionals, family members, and
              community networks to provide truly holistic, well-coordinated support.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Continuous Improvement', 'Community Collaboration', 'Evidence-Based Practices'].map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Owners */}
      <section className="section-padding team-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">
              <Users size={14} />
              Leadership
            </span>
            <h2 className="section-title">Meet Our Founders</h2>
            <p className="section-subtitle">
              Two passionate leaders who built Lovery Restoration Home Care from a shared
              belief that compassionate, professional care can change lives.
            </p>
          </div>
          <div className="team-grid">
            {ownerData.map((owner) => (
              <div key={owner.name} className="team-card">
                <div className="team-card-header">
                  <div className="team-avatar-large">{owner.initials}</div>
                </div>
                <div className="team-card-body">
                  <h3>{owner.name}</h3>
                  <div className="team-role">{owner.role}</div>
                  <p>{owner.bio}</p>
                  <div className="team-tags">
                    {owner.tags.map((tag) => (
                      <span key={tag} className="team-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Experience the Difference?</h2>
            <p>
              Contact our team today to learn how we can support you or your loved one
              with professional, compassionate home care.
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
