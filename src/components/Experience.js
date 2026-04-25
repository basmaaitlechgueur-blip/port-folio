import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    poste: 'Stagiaire Développeuse',
    entreprise: 'ONCA',
    lieu: 'Maroc',
    debut: 'Février 2026',
    fin: "Aujourd'hui",
    actuel: true,
    description: 'Stage de fin d\'études au sein de l\'Office National du Conseil Agricole. Participation au développement et à la maintenance d\'applications web internes.',
    taches: [
      'Développement d\'interfaces web avec React.js',
      'Intégration d\'APIs REST avec Spring Boot',
      'Gestion de base de données MySQL',
      'Collaboration en équipe avec Git / GitHub',
    ],
    color: '#f953a8',
  },
  // ── Ajoutez d'autres expériences ici ──
  // {
  //   id: 2,
  //   poste: 'Stagiaire Frontend',
  //   entreprise: 'Autre entreprise',
  //   lieu: 'Maroc',
  //   debut: 'Juin 2025',
  //   fin: 'Août 2025',
  //   actuel: false,
  //   description: 'Description du stage...',
  //   taches: ['Tâche 1', 'Tâche 2'],
  //   color: '#a855f7',
  // },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section__header">
          <p className="section__tag">Mon parcours</p>
          <h2 className="section__title">
            Mon <span className="accent-text">expérience</span>
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline__item" style={{ '--exp-color': exp.color }}>

              {/* Ligne verticale + point */}
              <div className="timeline__line">
                <div className={`timeline__dot ${exp.actuel ? 'timeline__dot--active' : ''}`} />
                {index < experiences.length - 1 && <div className="timeline__connector" />}
              </div>

              {/* Carte */}
              <div className="timeline__card">

                {/* Header */}
                <div className="exp-card__header">
                  <div>
                    <h3 className="exp-card__poste">{exp.poste}</h3>
                    <div className="exp-card__entreprise">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      {exp.entreprise} — {exp.lieu}
                    </div>
                  </div>

                  <div className="exp-card__dates">
                    <div className={`exp-badge ${exp.actuel ? 'exp-badge--actuel' : ''}`}>
                      {exp.actuel && <span className="exp-badge__dot" />}
                      {exp.actuel ? 'En cours' : exp.fin}
                    </div>
                    <div className="exp-card__periode">
                      {exp.debut} → {exp.fin}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="exp-card__desc">{exp.description}</p>

                {/* Tâches */}
                <ul className="exp-card__taches">
                  {exp.taches.map((t, i) => (
                    <li key={i} className="exp-tache">
                      <span className="exp-tache__bullet" />
                      {t}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}