import { useState } from 'react'
import { Heart, CheckCircle, User, Phone, Mail, MapPin, Calendar, MessageSquare, Send, ArrowRight } from 'lucide-react'

const SERVICES = [
  'Personal Care',
  'Companion Care',
  'Senior Care',
  'Respite Care',
  'Meal Assistance',
  'Medication Reminders',
  'Mobility Assistance',
  'Dementia Support',
  'Other / Multiple Services',
]

export default function RequestCarePage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    // Personal
    firstName: '', lastName: '', email: '', phone: '',
    relationship: '',
    // Client
    clientName: '', clientAge: '', clientAddress: '', livingArrangement: '',
    // Care Needs
    services: [], careStartDate: '', daysPerWeek: '', hoursPerDay: '', specialRequirements: '',
    // Emergency
    emergencyName: '', emergencyPhone: '', emergencyRelation: '',
    // Additional
    additionalNotes: '',
  })

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const STEPS = [
    { num: 1, label: 'Your Info' },
    { num: 2, label: 'Client Info' },
    { num: 3, label: 'Care Needs' },
    { num: 4, label: 'Review & Submit' },
  ]

  if (submitted) {
    return (
      <div className="page-enter" style={{ minHeight: '100vh', background: 'var(--color-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
        <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
          <div style={{
            width: '100px', height: '100px', background: 'linear-gradient(135deg, var(--color-primary), #BE123C)',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 32px', boxShadow: '0 12px 40px rgba(251,95,171,0.35)',
          }}>
            <CheckCircle size={48} color="white" />
          </div>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>
            Care Request <span className="gradient-text">Submitted!</span>
          </h1>
          <p style={{ color: 'var(--color-text)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px' }}>
            Thank you for reaching out to Lovery Restoration Home Care. Our team will review
            your request and contact you within <strong>24–48 hours</strong> to discuss next steps
            and schedule your care consultation.
          </p>
          <div style={{ background: 'white', borderRadius: '20px', padding: '24px', marginBottom: '32px', textAlign: 'left', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ marginBottom: '12px', color: 'var(--color-dark)' }}>What Happens Next?</h4>
            {[
              'Our team reviews your care request',
              'A care coordinator contacts you within 24–48 hours',
              'We schedule a free needs assessment',
              'Your personalized care plan is created',
              'Care begins at a time that works for you',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{
                  width: '24px', height: '24px', background: 'var(--color-primary)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>{item}</span>
              </div>
            ))}
          </div>
          <a href="tel:7787101474" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
            <Phone size={18} />
            Call Us: 778-710-1474
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="request-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
            <Heart size={14} />
            Request Care
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Start Your Care Journey Today
          </h1>
          <p style={{ maxWidth: '580px', margin: '0 auto' }}>
            Complete the form below and our care team will reach out within 24–48 hours
            to arrange a free, no-obligation needs assessment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="request-form-section section-padding">
        <div className="container">
          {/* Step Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            {STEPS.map((s, idx) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1,
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: step >= s.num ? 'var(--color-primary)' : 'white',
                    border: `2px solid ${step >= s.num ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: step >= s.num ? 'white' : 'var(--color-text)',
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    boxShadow: step >= s.num ? '0 4px 14px rgba(251,95,171,0.35)' : 'none',
                  }}>
                    {step > s.num ? <CheckCircle size={20} /> : s.num}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: '8px', color: step >= s.num ? 'var(--color-primary)' : 'var(--color-text)' }}>
                    {s.label}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div style={{
                    flex: 2, height: '2px',
                    background: step > s.num ? 'var(--color-primary)' : 'var(--color-border)',
                    marginBottom: '24px', transition: 'all 0.3s ease',
                  }} />
                )}
              </div>
            ))}
          </div>

          <div className="request-form-wrapper">
            <form onSubmit={handleSubmit}>

              {/* STEP 1: Your Info */}
              {step === 1 && (
                <>
                  <div className="form-section-title">Your Personal Information</div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="firstName" type="text" className="form-input" placeholder="First name" value={form.firstName} onChange={change} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" className="form-input" placeholder="Last name" value={form.lastName} onChange={change} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={change} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" className="form-input" placeholder="(xxx) xxx-xxxx" value={form.phone} onChange={change} required />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="relationship">Relationship to Client *</label>
                      <select id="relationship" name="relationship" className="form-select" value={form.relationship} onChange={change} required>
                        <option value="">Select your relationship</option>
                        <option>Self (I need care)</option>
                        <option>Spouse / Partner</option>
                        <option>Parent</option>
                        <option>Child / Adult Child</option>
                        <option>Sibling</option>
                        <option>Healthcare Professional</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2: Client Info */}
              {step === 2 && (
                <>
                  <div className="form-section-title">Client Information</div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="clientName">Client's Full Name *</label>
                      <input id="clientName" name="clientName" type="text" className="form-input" placeholder="Client full name" value={form.clientName} onChange={change} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="clientAge">Client's Age *</label>
                      <input id="clientAge" name="clientAge" type="number" className="form-input" placeholder="Age" value={form.clientAge} onChange={change} required min="1" max="120" />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="clientAddress">Client's Home Address *</label>
                      <input id="clientAddress" name="clientAddress" type="text" className="form-input" placeholder="Full address" value={form.clientAddress} onChange={change} required />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="livingArrangement">Living Arrangement</label>
                      <select id="livingArrangement" name="livingArrangement" className="form-select" value={form.livingArrangement} onChange={change}>
                        <option value="">Select living arrangement</option>
                        <option>Lives alone</option>
                        <option>Lives with spouse / partner</option>
                        <option>Lives with family</option>
                        <option>Lives with roommates</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-section-title">Emergency Contact</div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="emergencyName">Emergency Contact Name</label>
                      <input id="emergencyName" name="emergencyName" type="text" className="form-input" placeholder="Full name" value={form.emergencyName} onChange={change} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="emergencyPhone">Emergency Contact Phone</label>
                      <input id="emergencyPhone" name="emergencyPhone" type="tel" className="form-input" placeholder="(xxx) xxx-xxxx" value={form.emergencyPhone} onChange={change} />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="emergencyRelation">Relationship to Client</label>
                      <input id="emergencyRelation" name="emergencyRelation" type="text" className="form-input" placeholder="e.g. Daughter, Neighbour" value={form.emergencyRelation} onChange={change} />
                    </div>
                  </div>
                </>
              )}

              {/* STEP 3: Care Needs */}
              {step === 3 && (
                <>
                  <div className="form-section-title">Care Services Needed</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', marginBottom: '20px' }}>
                    Select all services that apply. You can always add or change services after your assessment.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '32px' }}>
                    {SERVICES.map((service) => (
                      <div
                        key={service}
                        onClick={() => toggleService(service)}
                        style={{
                          padding: '12px 16px',
                          border: `2px solid ${form.services.includes(service) ? 'var(--color-primary)' : 'var(--color-border)'}`,
                          borderRadius: '12px',
                          cursor: 'pointer',
                          background: form.services.includes(service) ? 'var(--color-primary-bg)' : 'white',
                          color: form.services.includes(service) ? 'var(--color-primary)' : 'var(--color-text)',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          userSelect: 'none',
                        }}
                      >
                        {form.services.includes(service) && <CheckCircle size={14} />}
                        {service}
                      </div>
                    ))}
                  </div>

                  <div className="form-section-title">Care Schedule</div>
                  <div className="form-3-grid" style={{ marginBottom: '24px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="careStartDate">Preferred Start Date</label>
                      <input id="careStartDate" name="careStartDate" type="date" className="form-input" value={form.careStartDate} onChange={change} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="daysPerWeek">Days Per Week</label>
                      <select id="daysPerWeek" name="daysPerWeek" className="form-select" value={form.daysPerWeek} onChange={change}>
                        <option value="">Select</option>
                        <option>1–2 days</option>
                        <option>3–4 days</option>
                        <option>5–7 days (daily)</option>
                        <option>As needed</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="hoursPerDay">Hours Per Day</label>
                      <select id="hoursPerDay" name="hoursPerDay" className="form-select" value={form.hoursPerDay} onChange={change}>
                        <option value="">Select</option>
                        <option>2–4 hours</option>
                        <option>4–6 hours</option>
                        <option>6–8 hours</option>
                        <option>Full day (8+ hours)</option>
                        <option>Live-in care</option>
                        <option>As needed</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="specialRequirements">Special Requirements or Notes</label>
                    <textarea id="specialRequirements" name="specialRequirements" className="form-textarea" placeholder="Describe any special needs, mobility challenges, medical conditions, language preferences, or anything else we should know..." value={form.specialRequirements} onChange={change} />
                  </div>
                </>
              )}

              {/* STEP 4: Review */}
              {step === 4 && (
                <>
                  <div className="form-section-title">Review Your Request</div>
                  <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                    {[
                      { label: 'Your Name', value: `${form.firstName} ${form.lastName}` },
                      { label: 'Email', value: form.email },
                      { label: 'Phone', value: form.phone },
                      { label: 'Relationship', value: form.relationship },
                      { label: 'Client Name', value: form.clientName },
                      { label: 'Client Age', value: form.clientAge },
                      { label: 'Client Address', value: form.clientAddress },
                      { label: 'Services Requested', value: form.services.join(', ') || 'None selected' },
                      { label: 'Preferred Start Date', value: form.careStartDate || 'Not specified' },
                      { label: 'Days Per Week', value: form.daysPerWeek || 'Not specified' },
                      { label: 'Hours Per Day', value: form.hoursPerDay || 'Not specified' },
                    ].map((item) => (
                      <div key={item.label} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                        padding: '14px 20px', background: 'var(--color-primary-bg)',
                        borderRadius: '12px', gap: '24px',
                      }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-dark)', flexShrink: 0 }}>
                          {item.label}
                        </span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', textAlign: 'right' }}>
                          {item.value || '—'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="additionalNotes">Anything Else We Should Know?</label>
                    <textarea id="additionalNotes" name="additionalNotes" className="form-textarea" placeholder="Any final notes or questions for our team..." value={form.additionalNotes} onChange={change} />
                  </div>
                </>
              )}

              {/* Navigation */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', gap: '16px' }}>
                {step > 1 && (
                  <button type="button" className="btn btn-outline" onClick={() => setStep(step - 1)}>
                    ← Back
                  </button>
                )}
                <div style={{ marginLeft: 'auto' }}>
                  {step < 4 ? (
                    <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>
                      Continue
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary btn-lg">
                      <Send size={18} />
                      Submit Care Request
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
