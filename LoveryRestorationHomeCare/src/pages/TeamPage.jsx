import { Link } from 'react-router-dom'
import { Heart, Users, ArrowRight } from 'lucide-react'

const owners = [
  {
    initials: 'IN',
    name: 'Imma Nadine Suh',
    role: 'Co-Founder & Care Director',
    bio: `Imma Nadine Suh brings a remarkable blend of professional expertise and personal commitment to Lovery Restoration Home Care. With a background in banking and finance management, she developed strong organizational and client-relation skills that she now applies to structuring reliable, high-quality care systems.

After earning her home-care certification and gaining extensive hands-on experience working with diverse clients across Canadian and American healthcare environments, Imma recognized the critical need for compassionate, professionally delivered home care in her community — and set out to provide it.

Her dual Canadian and American healthcare certifications, combined with her fluency in both English and French, allow her to serve a broad range of clients with cultural sensitivity and professional excellence.`,
    tags: ['Home Care Certified', 'Banking & Finance Background', 'Canadian Healthcare', 'American Healthcare', 'Bilingual: English & French', 'Client-Centered Approach'],
  },
  {
    initials: 'LN',
    name: 'Love Ima Nvi Chuba',
    role: 'Co-Founder & Community Relations Director',
    bio: `Love Ima Nvi Chuba co-founded Lovery Restoration Home Care driven by a lifelong dedication to community welfare and human services. Holding a Bachelor's degree in Political Science and Public Administration, she brings a deep understanding of social systems, policy, and advocacy that shapes the company's community-first approach.

Her Diploma as a Social Support Worker, combined with extensive experience in welfare management and human services in Canada, gives her rare insight into the systemic barriers clients often face — and how to navigate them with grace and effectiveness.

Fluent in English and French, Love serves as a bridge between the company and the wider community, building the partnerships and networks that make truly holistic care possible.`,
    tags: ['Social Support Worker', 'Political Science Graduate', 'Human Services Expert', 'Welfare Management', 'Community Advocacy', 'Bilingual: English & French'],
  },
]

export default function TeamPage() {
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
            <Users size={14} />
            Our Team
          </span>
          <h1>Meet the People Behind <span className="gradient-text">Lovery Restoration</span></h1>
          <p>
            Two dedicated founders with complementary expertise and a single shared vision:
            to deliver care that truly makes a difference in people's lives.
          </p>
        </div>
      </section>

      {/* Owner Profiles */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          {owners.map((owner, idx) => (
            <div
              key={owner.name}
              style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1fr 1.8fr' : '1.8fr 1fr',
                gap: '64px',
                alignItems: 'start',
                marginBottom: idx < owners.length - 1 ? '80px' : 0,
                paddingBottom: idx < owners.length - 1 ? '80px' : 0,
                borderBottom: idx < owners.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              {/* Profile Card */}
              {idx % 2 === 0 && (
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-primary-bg) 0%, var(--color-primary-light) 100%)',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  position: 'sticky',
                  top: '100px',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--color-primary), #BE123C)',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: '100px', height: '100px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.25)', border: '3px solid rgba(255,255,255,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2.2rem', color: 'white',
                    }}>
                      {owner.initials}
                    </div>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <h3 style={{ marginBottom: '4px' }}>{owner.name}</h3>
                    <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px' }}>{owner.role}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {owner.tags.map((tag) => (
                        <span key={tag} className="team-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Bio */}
              <div>
                {idx % 2 !== 0 && (
                  <div>
                    <h2 style={{ marginBottom: '8px' }}>{owner.name}</h2>
                    <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '28px' }}>{owner.role}</p>
                  </div>
                )}
                {idx % 2 === 0 && (
                  <div>
                    <h2 style={{ marginBottom: '8px' }}>{owner.name}</h2>
                    <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '28px' }}>{owner.role}</p>
                  </div>
                )}
                {owner.bio.split('\n\n').map((para, i) => (
                  <p key={i} style={{ color: 'var(--color-text)', lineHeight: '1.85', marginBottom: '20px', fontSize: '1.05rem' }}>
                    {para}
                  </p>
                ))}

                {idx % 2 !== 0 && (
                  <div style={{ marginTop: '28px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {owner.tags.map((tag) => (
                        <span key={tag} className="team-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Card on Right */}
              {idx % 2 !== 0 && (
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-primary-bg) 0%, var(--color-primary-light) 100%)',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  position: 'sticky',
                  top: '100px',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--color-primary), #BE123C)',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: '100px', height: '100px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.25)', border: '3px solid rgba(255,255,255,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2.2rem', color: 'white',
                    }}>
                      {owner.initials}
                    </div>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <h3 style={{ marginBottom: '4px' }}>{owner.name}</h3>
                    <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px' }}>{owner.role}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="section-padding" style={{ background: 'var(--color-primary-bg)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">
              <Heart size={14} />
              Why Trust Us
            </span>
            <h2 className="section-title">Leadership You Can Rely On</h2>
            <p className="section-subtitle">
              When you choose Lovery Restoration, you're not just hiring a service —
              you're building a relationship with people who genuinely care.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { emoji: '🎓', title: 'Certified Professionals', desc: 'Our founders hold recognized healthcare certifications in both Canada and the United States.' },
              { emoji: '🌍', title: 'Cultural Sensitivity', desc: 'Bilingual in English and French, we serve clients from diverse cultural backgrounds with respect.' },
              { emoji: '💼', title: '5+ Years Experience', desc: 'Half a decade of hands-on home care experience that you can trust for your loved one.' },
            ].map((item) => (
              <div key={item.title} className="value-card">
                <span className="value-emoji">{item.emoji}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Meet Our Team?</h2>
            <p>Contact us today to speak directly with our care coordinators and learn how we can help.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white btn-lg">Contact Us Today</Link>
              <Link to="/request-care" className="btn btn-lg" style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.4)',
              }}>
                <Heart size={18} />
                Request Care
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
