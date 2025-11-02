import React from 'react'
import { Link } from 'react-router-dom'
import './CTA.css'

function CTA() {
  return (
    <section className="cta-section" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(30, 58, 138, 0.8) 100%), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="cta-content">
        <h2>Ready to Transform Your Revenue Cycle?</h2>
        <p>Join hundreds of healthcare organizations already benefiting from our solutions.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary btn-large">Schedule a Consultation</Link>
          <Link to="/contact" className="btn btn-secondary btn-large">Contact Us Today</Link>
        </div>
      </div>
    </section>
  )
}

export default CTA