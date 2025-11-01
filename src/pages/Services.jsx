import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      number: '01',
      title: 'Verification of Benefits',
      icon: '🔍',
      description: 'Accurate verification is the foundation of successful claim processing.',
      highlights: [
        'Real-time eligibility checks',
        'Detailed benefit summaries',
        'Prevent coverage issues'
      ]
    },
    {
      number: '02',
      title: 'Prior Authorization',
      icon: '✍️',
      description: 'Complete authorization management to ensure services are approved before treatment.',
      highlights: [
        'Complete documentation',
        'Regular follow-ups',
        'Reduce denials'
      ]
    },
    {
      number: '03',
      title: 'Scheduling Support',
      icon: '📅',
      description: 'Seamless appointment coordination for patients and providers.',
      highlights: [
        'Insurance verification',
        'Reduce no-shows',
        'Improved satisfaction'
      ]
    },
    {
      number: '04',
      title: 'Claim Submission',
      icon: '📋',
      description: 'Clean and compliant claims for faster payments.',
      highlights: [
        'Electronic submissions',
        'CMS compliance',
        'Pre-submission audits'
      ]
    },
    {
      number: '05',
      title: 'A/R Follow-Up',
      icon: '💼',
      description: 'Timely follow-ups for outstanding claim recovery.',
      highlights: [
        'Continuous tracking',
        'Carrier communication',
        'Aging reports'
      ]
    },
    {
      number: '06',
      title: 'Denial Management',
      icon: '🔄',
      description: 'Efficient handling of denials to maximize recoveries.',
      highlights: [
        'Root-cause analysis',
        'Appeal preparation',
        'Prevent recurring denials'
      ]
    },
    {
      number: '07',
      title: 'Payment Posting',
      icon: '💰',
      description: 'Accurate posting and reconciliation for clean records.',
      highlights: [
        'ERA posting',
        'Daily reconciliation',
        'Discrepancy identification'
      ]
    },
    {
      number: '08',
      title: 'Reporting & Analytics',
      icon: '📊',
      description: 'Visibility into revenue performance with actionable insights.',
      highlights: [
        'Custom reports',
        'Performance summaries',
        'Profitability insights'
      ]
    }
  ]

  return (
    <div className="page">
      <div className="page-header" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        borderRadius: '16px',
        marginBottom: '3rem'
      }}>
        <h1>Our Core RCM Services</h1>
        <p className="page-subtitle">
          Comprehensive Revenue Cycle Management services designed to enhance financial performance 
          and operational efficiency for healthcare providers
        </p>
      </div>

      <div className="services-cards-grid">
        {services.map((service, index) => {
          const serviceImages = [
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80'
          ]
          return (
            <div key={index} className="service-card-modern">
              <img 
                src={serviceImages[index]} 
                alt={service.title}
                className="service-card-image"
              />
              <div className="card-header-modern">
                <div className="service-icon-large">{service.icon}</div>
                <div className="service-number-badge">{service.number}</div>
              </div>
              <h3 className="service-title-card">{service.title}</h3>
              <p className="service-description-card">{service.description}</p>
              <div className="service-highlights-modern">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-check">✓</span>
                    <span className="highlight-text">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <section className="services-cta" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.85) 0%, rgba(30, 58, 138, 0.75) 100%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <h2 style={{ color: 'white' }}>Ready to Transform Your Revenue Cycle?</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Contact our team to learn how our comprehensive RCM services can benefit your healthcare organization.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Services

