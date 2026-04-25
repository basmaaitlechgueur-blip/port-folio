import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#accueil" className="footer__logo">
          <span style={{ color: 'var(--accent)' }}>B</span>asma
        </a>
        <p className="footer__copy">
          © {new Date().getFullYear()} Basma Ait Lechgueur — Fait avec 💗
        </p>
        <a href="#accueil" className="footer__top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
