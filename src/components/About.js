import React from 'react';
import './About.css';

export default function About() {
  const stats = [
    
    { value: '100%', label: 'Passion & Créativité' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__inner">
          {/* Avatar side */}
          <div className="about__visual">
            <div className="about__avatar-wrap">
             <div className="about__avatar">
  <img 
    src="/photo.jpg" 
    alt="Basma" 
    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
  />
</div>
              <div className="about__avatar-ring" />
              <div className="about__avatar-ring about__avatar-ring--2" />
            </div>

            <div className="about__stats">
              {stats.map(s => (
                <div key={s.label} className="stat-card">
                  <span className="stat-card__value">{s.value}</span>
                  <span className="stat-card__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="about__text">
            <p className="section__tag">À propos de moi</p>
            <h2 className="section__title">
              Créer avec passion,<br />
              <span className="accent-text">coder avec précision</span>
            </h2>

            <p className="about__desc">
              Je suis une développeuse Full Stack basée au Maroc, passionnée par la création
              d'interfaces modernes et d'applications web performantes. J'aime transformer
              des idées complexes en expériences digitales fluides et mémorables.
            </p>

            <p className="about__desc">
              Mon approche mêle rigueur technique et sens du design. Je m'investis
              dans chaque projet pour livrer un code propre, maintenable et une UI
              qui séduit les utilisateurs.
            </p>

            <div className="about__tags">
              {['React.js', 'Node.js', 'Java', 'MySql','Spring Boot', 'Git'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <a href="#contact" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Travailler ensemble
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
