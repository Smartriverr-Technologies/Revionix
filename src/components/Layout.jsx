import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="header">
        <nav className="nav-container">
          <Link to="/" className="logo">
            <img 
              src="/logo.png" 
              alt="Revionix Logo" 
              className="logo-img"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = '/assets/logo-fallback.png';
              }} 
            />
            <span className="logo-text">Revionix</span>
          </Link>
          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/specialities" className={location.pathname === '/specialities' ? 'active' : ''}>
                Specialities
              </Link>
            </li> */}
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Revionix. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout

