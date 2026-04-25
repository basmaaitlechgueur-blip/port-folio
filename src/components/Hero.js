import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!blobRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      blobRef.current.style.transform = `translate(${x * 40 - 20}px, ${y * 40 - 20}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" id="accueil">
      {/* Background blobs */}
      <div className="hero__blobs">
        <div className="blob blob--1" ref={blobRef} />
        <div className="blob blob--2" />
        <div className="blob blob--3" />
      </div>

      {/* Grid lines */}
      <div className="hero__grid" />

      <div className="hero__content">
        <div className="hero__badge animate-in" style={{ animationDelay: '0.1s' }}>
          <span className="hero__badge-dot" />
          Disponible pour de nouvelles opportunités
        </div>

        <h1 className="hero__title animate-in" style={{ animationDelay: '0.25s' }}>
          <span className="hero__title-hello">Bonjour, je suis</span>
          <br />
          <span className="hero__title-name">Basma</span>
          <span className="hero__title-accent"> Ait Lechgueur</span>
        </h1>

        <p className="hero__subtitle animate-in" style={{ animationDelay: '0.4s' }}>
          Développeuse <span className="highlight">Full Stack</span> passionnée par la création
          d'expériences digitales élégantes et performantes.
        </p>

        <div className="hero__actions animate-in" style={{ animationDelay: '0.55s' }}>
          <a href="#projets" className="btn btn--primary">
            Voir mes projets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost">Me contacter</a>
        </div>

        <div className="hero__socials animate-in" style={{ animationDelay: '0.7s' }}>
          {[
            { name: 'GitHub', url: 'https://github.com/basmaaitlechgueur-blip', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
            { name: 'LinkedIn', url: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
          ].map(s => (
            <a key={s.name} href={s.url} className="social-link" target="_blank" rel="noreferrer" aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator animate-in" style={{ animationDelay: '1s' }}>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
