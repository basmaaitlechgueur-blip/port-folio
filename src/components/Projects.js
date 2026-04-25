import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Application de Gestion de Parking',
    category: 'jdbc+java swing',
    description: 'Application d organisation efficace des places de stationnement ,le suivi des vehicules et la gestion des entrees/sorties',
    tags: ['java swing', 'MySql', 'jdbc'],
    color: '#f953a8',
    
    github: 'https://github.com/basmaaitlechgueur-bliphttps://github.com/basmaaitlechgueur-blip/gestion_parking',
    demo: '#',
    
  },
  {
    id: 2,
    title: 'Inventory Management',
    category: 'Backend',
    description: 'Application web de gestion d inventaire avec JSP, Servlet, Hibernate et Jakarta EE.',
    tags: ['Java', 'JEE', 'Tomcat', 'Hibernate '],
    color: '#a855f7',
    
    github: 'https://github.com/basmaaitlechgueur-blip/-Inventory-Management-',
    demo: '#',
  },
  {
    id: 3,
    title: 'Gestion d une Ecole De Musique',
    category: 'Backend/Frontend',
    description: 'Mini projet Spring Boot pour gérer une école de musique (professeurs, instruments, cours).',
    tags: ['Java17', 'Spring Boot', 'Thymleaf'],
    color: '#ec4899',
    emoji: '🎵',
    github: 'https://github.com/basmaaitlechgueur-blip',
    demo: '#',
  },
  {
    id: 4,
    title: 'Système de Gestion de Projets',
    category: 'Frontend/Backend',
    description: 'Application web fullstack de gestion de projets développée dans le cadre d un projet académique ',
    tags: ['React', 'Spring boot'],
    color: '#06b6d4',
    
    github: 'https://github.com/HAJAR22204/ProjectFlow',
    demo: '#',
  },
  
];

const filters = ['Tous', 'Full Stack', 'Frontend', 'Backend', 'UI/UX'];

export default function Projects() {
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous' ? projects : projects.filter(p => p.category === active);

  return (
    <section className="projects section" id="projets">
      <div className="container">
        <div className="section__header">
          <p className="section__tag">Ce que j'ai créé</p>
          <h2 className="section__title">
            Mes <span className="accent-text">projets</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="projects__filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map(p => (
            <div key={p.id} className="project-card" style={{ '--card-color': p.color }}>
              <div className="project-card__top">
                <span className="project-card__emoji">{p.emoji}</span>
                <span className="project-card__category">{p.category}</span>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>

              <div className="project-card__links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
                </a>
                <a href={p.demo} className="project-link project-link--primary">
                  Demo
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
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
