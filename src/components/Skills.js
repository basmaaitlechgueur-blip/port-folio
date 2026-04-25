import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 88 },
     
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 82 },
     
      { name: 'REST APIs', level: 85 },
      { name: 'MySql', level: 85 },
    ],
  },
  {
    category: 'Outils',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Intellij Idea', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 55 },
    ],
  },
];

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills section" id="compétences">
      <div className="container">
        <div className="section__header">
          <p className="section__tag">Ce que je maîtrise</p>
          <h2 className="section__title">
            Mes <span className="accent-text">compétences</span>
          </h2>
        </div>

        <div className="skills__grid">
          {skillsData.map(cat => (
            <div key={cat.category} className="skills__card">
              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.category}</h3>
              </div>
              <div className="skills__bars">
                {cat.skills.map(s => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
