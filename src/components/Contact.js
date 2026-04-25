import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | null

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section__header">
          <p className="section__tag">Travaillons ensemble</p>
          <h2 className="section__title">
            Me <span className="accent-text">contacter</span>
          </h2>
        </div>

        <div className="contact__inner">
          {/* Info */}
          <div className="contact__info">
            <p className="contact__intro">
              Vous avez un projet en tête ou envie de collaborer ? Je suis disponible
              pour des missions freelance, des CDI ou des échanges enrichissants.
            </p>

            {[
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                label: 'Email',
                value: 'aitlechgueurbasma@gmail.com',
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                label: 'Localisation',
                value: 'Maroc',
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                label: 'LinkedIn',
                value: 'https://www.linkedin.com/feed/',
              },
               {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                label: 'Instagram',
                value: 'https://www.instagram.com/accounts/onetap/',
              },
            ].map(item => (
              <div key={item.label} className="contact-info-item">
                <div className="contact-info-item__icon">{item.icon}</div>
                <div>
                  <div className="contact-info-item__label">{item.label}</div>
                  <div className="contact-info-item__value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contact__form" onSubmit={submit}>
            {status === 'success' ? (
              <div className="form-success">
                <span className="form-success__icon">✅</span>
                <h3>Message envoyé !</h3>
                <p>Merci ! Je vous répondrai dans les plus brefs délais.</p>
                <button type="button" className="btn btn--ghost" onClick={() => setStatus(null)}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      className="form-input"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      className="form-input"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    className="form-input form-textarea"
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn btn--primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                  {status === 'sending' ? (
                    <><span className="spinner" /> Envoi en cours...</>
                  ) : (
                    <>Envoyer le message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
