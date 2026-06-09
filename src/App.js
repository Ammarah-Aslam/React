import React, { useState, useEffect, useRef } from 'react';
import './App.css';

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="logo-dot" />
        <strong>Sinnergy</strong>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['Home','About','Services','Team','Contact'].map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a></li>
        ))}
      </ul>
      <button className="nav-cta">Get Started</button>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

/* ─── HERO ─── */
const AVATARS = [
  { initials:'AB', color:'#e8531a' },
  { initials:'CK', color:'#7c5cbf' },
  { initials:'DM', color:'#3db85a' },
  { initials:'EL', color:'#e8531a' },
  { initials:'FN', color:'#1a6ef5' },
];

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <section id="home" className={`hero ${visible ? 'visible' : ''}`}>
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">Strategy · Growth · Innovation</span>
          <h1 className="hero-title">
            The thinkers and<br />
            <span className="hero-highlight">change-makers</span><br />
            changing the Quo.
          </h1>
          <p className="hero-sub">
            We partner with bold companies to rethink what's possible — building strategies that outlast trends and teams that deliver real results.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Work with us</button>
            <button className="btn-ghost">See our work ↓</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-cluster">
            {AVATARS.map((a, i) => (
              <div key={i} className="avatar" style={{ '--c': a.color, '--i': i }}>{a.initials}</div>
            ))}
            <div className="avatar-badge">10+ Partners</div>
          </div>
          <div className="hero-card">
            <span className="card-label">Projects delivered</span>
            <span className="card-num">240+</span>
          </div>
          <div className="hero-card card2">
            <span className="card-label">Client satisfaction</span>
            <span className="card-num">98%</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint">scroll</div>
    </section>
  );
}

/* ─── BANNER ─── */
function Banner() {
  return (
    <section className="banner" id="about">
      <div className="banner-inner">
        <div className="banner-text">
          <span className="banner-tag">Our belief</span>
          <h2>Tomorrow should<br />be better than today.</h2>
          <p>We exist to make that happen — for our clients, their customers, and the communities they serve.</p>
          <button className="btn-white">Learn more</button>
        </div>
        <div className="banner-img">
          <div className="img-placeholder">
            <div className="img-icon">💼</div>
            <span>Our team at work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW WE HELP ─── */
function HowWeHelp() {
  const items = [
    { icon:'🧭', title:'Strategic Direction', desc:'Defining the North Star and mapping every step to get there.' },
    { icon:'🤝', title:'Team Alignment', desc:'Bringing people together around a shared vision and clear priorities.' },
    { icon:'📈', title:'Growth Acceleration', desc:'Identifying leverage points that produce outsized, measurable outcomes.' },
  ];
  return (
    <section className="how-help" id="services">
      <div className="section-inner">
        <div className="how-header">
          <span className="section-tag">How we work</span>
          <h2>See how we can<br />help you progress</h2>
        </div>
        <div className="how-grid">
          {items.map((it, i) => (
            <div className="how-card" key={i}>
              <div className="how-icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT WE OFFER ─── */
function Offer() {
  const services = [
    { label:'Collaboration & partnership', desc:'Deep-dive engagements where we work shoulder to shoulder with your team.' },
    { label:'We talk about our weight', desc:'Honest, candid conversations about what is working and what needs to change.' },
    { label:'Piloting digital confidence', desc:'Building the systems and mindsets for sustainable digital transformation.' },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="offer" id="offer">
      <div className="section-inner offer-inner">
        <div className="offer-left">
          <span className="section-tag">What we offer</span>
          <h2>What we<br />offer you</h2>
          <p>Three core practices, deeply integrated, endlessly adaptable.</p>
        </div>
        <div className="offer-right">
          {services.map((s, i) => (
            <div
              className={`offer-row ${active === i ? 'active' : ''}`}
              key={i}
              onClick={() => setActive(i)}
            >
              <div className="offer-row-head">
                <span className="offer-num">0{i+1}</span>
                <span className="offer-label">{s.label}</span>
                <span className="offer-arrow">{active === i ? '↑' : '↓'}</span>
              </div>
              {active === i && <p className="offer-desc">{s.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS = [
  { name:'Sarah Chen', role:'CEO, NovaTech', text:'Sinnergy didn\'t just advise us — they transformed how we think about growth. 18 months later we\'re twice the company we were.', avatar:'SC' },
  { name:'Marcus Webb', role:'Founder, Clearpath', text:'The honesty alone was worth it. They told us hard truths others were too polite to say, and it saved us a year of wasted effort.', avatar:'MW' },
  { name:'Priya Nair', role:'COO, Meridian Group', text:'Their frameworks are simple enough to explain to a board and powerful enough to actually drive change. Rare combination.', avatar:'PN' },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  return (
    <section className="testimonials" id="team">
      <div className="section-inner">
        <span className="section-tag">What clients say</span>
        <h2>What our customers<br />say about us</h2>
        <div className="testi-card">
          <p className="testi-text">"{t.text}"</p>
          <div className="testi-author">
            <div className="testi-avatar">{t.avatar}</div>
            <div>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        </div>
        <div className="testi-dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`dot ${i===idx?'active':''}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── NEWSLETTER ─── */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); if(email) setSent(true); };
  return (
    <section className="newsletter" id="contact">
      <div className="section-inner news-inner">
        <div className="news-left">
          <span className="section-tag light">Stay in the loop</span>
          <h2>Subscribe to<br />our newsletter</h2>
          <p>Monthly insights on strategy, leadership, and the future of work.</p>
        </div>
        <div className="news-form">
          {sent ? (
            <div className="sent-msg">✅ You're subscribed! Welcome aboard.</div>
          ) : (
            <form onSubmit={submit}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          )}
          <p className="news-note">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const cols = {
    Company: ['About','Careers','Press','Contact'],
    Services: ['Strategy','Digital','Leadership','Workshops'],
    Resources: ['Blog','Case Studies','Newsletter','Docs'],
  };
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-dot" />
            <strong>Sinnergy</strong>
          </div>
          <p>Making tomorrow better<br />than today — since 2015.</p>
          <div className="social-row">
            {['𝕏','in','📧'].map((s,i) => <a key={i} href="#" className="social-btn">{s}</a>)}
          </div>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div className="footer-col" key={title}>
            <h4>{title}</h4>
            <ul>{links.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2025 Sinnergy. All rights reserved.</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}

/* ─── APP ─── */
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Banner />
      <HowWeHelp />
      <Offer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
