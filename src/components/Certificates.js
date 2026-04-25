import React from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Développement Front-End moderne avec React',
    issuer: 'MLIAEdu',
    date: 'Mars 2026',
   
    link: 'https://mliaedu.toubkalit.com/student/courses/26',
    color: '#f953a8',
    logo: '⚛️',
  },
  {
    id: 2,
    title: 'Développement JakartaEE : Spring',
    issuer: 'MLIAEdu',
    date: 'Avril 2026',
   
    link: 'https://mliaedu.toubkalit.com/student/courses/17',
    color: '#a855f7',
   
  },
  {
    id: 3,
    title: 'Hibernate & JPA',
    issuer: 'MLIAEdu',
    date: 'Mars 2026',
   
    link: 'https://mliaedu.toubkalit.com/student/courses/28',
    color: '#06b6d4',
   
  },
  
];

export default function Certificates() {
  return (
    <section className="certificates section" id="certificats">
      <div className="container">
        <div className="section__header">
          <p className="section__tag">Mes formations</p>
          <h2 className="section__title">
            Mes <span className="accent-text">certificats</span>
          </h2>
        </div>

        <div className="certificates__grid">
          {certificates.map(cert => (
            <div
              key={cert.id}
              className="cert-card"
              style={{ '--cert-color': cert.color }}
            >
              {/* Top bar colorée */}
              <div className="cert-card__bar" />

              <div className="cert-card__inner">
                {/* Logo + issuer */}
                <div className="cert-card__top">
                  <span className="cert-card__logo">{cert.logo}</span>
                  <span className="cert-card__issuer">{cert.issuer}</span>
                </div>

                {/* Titre */}
                <h3 className="cert-card__title">{cert.title}</h3>

                {/* Infos */}
                <div className="cert-card__meta">
                  <div className="cert-meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {cert.date}
                  </div>
                  <div className="cert-meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    {cert.credential}
                  </div>
                </div>

                {/* Lien */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-card__link"
                >
                  Voir le certificat
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}