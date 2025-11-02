import React from 'react';
import './AboutGrid.css';

function AboutGrid() {
  const aboutCards = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80',
      title: 'Our Mission',
      description: 'Simplify revenue operations and help medical practices achieve faster reimbursements, cleaner claims, and consistent cash flow.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&q=80',
      title: 'Expertise',
      description: 'Deep domain knowledge across Orthopedics, Neurology, Spine, and Primary Care with process precision for every client.'
    },
    {
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&q=80',
      title: 'Why Us',
      description: 'Minimize claim errors, reduce administrative workloads, and maintain full compliance with payer and HIPAA guidelines.'
    }
  ];

  return (
    <section className="about-compact">
      <div className="about-grid">
        {aboutCards.map((card, index) => (
          <div key={index} className="about-card">
            <img 
              src={card.image} 
              alt={card.title} 
              className="about-card-image"
              loading="lazy"
            />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutGrid;