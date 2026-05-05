'use client';

import React, { useState } from 'react';

const NewsroomUI = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Product Updates', 'Deployment Notes', 'Engineering', 'Perspectives', 'Company'];

  const newsItems: { category: string; date: string; title: string; desc: string; slug: string }[] = [
    {
      category: 'Product Updates',
      date: 'April 2024',
      title: 'Orbit 2.0: Sovereign Edge Orchestration',
      desc: 'Introducing advanced policy reconciliation for air-gapped deployments and zero-trust synchronization layers.',
      slug: 'orbit-20-sovereign-edge-orchestration'
    },
    {
      category: 'Deployment Notes',
      date: 'March 2024',
      title: 'Digital Maalkhana Expansion',
      desc: 'Case study on the deployment of E-Maalkhana across 15+ new districts, focusing on official audit integrity.',
      slug: 'digital-maalkhana-expansion'
    },
    {
      category: 'Engineering',
      date: 'February 2024',
      title: 'Voice AI in High-Noise Environments',
      desc: 'Technical breakdown of our field-first voice processing architecture designed for real-world operational noise.',
      slug: 'voice-ai-high-noise-environments'
    }
  ];

  const featuredNews = {
    category: 'Perspectives',
    date: 'April 2024',
    title: 'The Future of Sovereign Official Software',
    desc: 'How the shift toward sovereign infrastructure is redefining public safety and administrative efficiency in India.',
    img: 'https://images.unsplash.com/photo-1573163231162-717dfc4e0463?q=80&w=2000',
    slug: 'future-of-sovereign-official-software'
  };

  return (
    <main className="newsroom-page bg-white text-black">
      {/* 1. HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="eyebrow">Company / Newsroom</div>
          <h1 className="hero-title">Newsroom</h1>
          <p className="hero-subtext">
            Announcements, deployment notes, product updates, and writing from Vinkura on public systems, operational software, and official infrastructure.
          </p>
        </div>
      </section>

      {/* 2. FEATURED SECTION */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-label">Featured</h2>
          <div className="featured-card">
            <div className="f-content">
              <span className="f-meta">{featuredNews.category} • {featuredNews.date}</span>
              <h4 className="f-title">{featuredNews.title}</h4>
              <p className="f-desc">{featuredNews.desc}</p>
              <a href={`/company/newsroom/${featuredNews.slug}`} className="read-btn">Read Article</a>
            </div>
            <div className="f-visual" style={{ backgroundImage: `url(${featuredNews.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="visual-lines"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERS */}
      <section className="filter-section">
        <div className="container">
          <div className="tab-wrapper">
            <div className="tabs">
              {filters.map(filter => (
                <button
                  key={filter}
                  className={`tab ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEWS GRID */}
      <section className="grid-section">
        <div className="container">
          <div className="news-grid">
            {(activeFilter === 'All' ? newsItems : newsItems.filter(item => item.category === activeFilter)).map((item, i) => (
              <div key={i} className="news-card">
                <span className="n-meta">{item.category} • {item.date}</span>
                <h4 className="n-title">{item.title}</h4>
                <p className="n-desc">{item.desc}</p>
                <a href={`/company/newsroom/${item.slug}`} className="n-link">Read More</a>
              </div>
            ))}
            {(activeFilter !== 'All' && newsItems.filter(item => item.category === activeFilter).length === 0) && (
              <div className="no-news-grid-placeholder">
                <p>No publications found under <strong>{activeFilter}</strong> category for the current period.</p>
              </div>
            )}
            {newsItems.length === 0 && (
              <div className="no-news-grid-placeholder">
                <p>Archive currently being indexed.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE PUBLISH */}
      <section className="what-section bg-[#fafafa] border-t border-b">
        <div className="container grid-3">
          <div className="w-item">
            <h4>Product updates and release notes</h4>
            <p>Technical deep dives into the Vinkura platform and our core sovereign architecture.</p>
          </div>
          <div className="w-item">
            <h4>Deployment learnings</h4>
            <p>Direct notes from real-world official environments and adoption friction.</p>
          </div>
          <div className="w-item">
            <h4>Company announcements</h4>
            <p>Strategic updates on Vinkura's growth, partnerships, and mission trajectory.</p>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <h2 className="final-headline">Official Communication</h2>
          <p className="final-desc">For press, partnerships, or official inquiries, please reach out directly.</p>
          <div className="final-btns">
            <a href="mailto:founder@vinkura.in" className="dark-btn">Contact Us</a>
            <a href="/company/security#contact" className="light-btn">Request a Briefing</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .newsroom-page { font-family: var(--font-body); overflow-x: hidden; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 4rem; width: 100%; }
        
        .hero-section { padding: 160px 0 60px; }
        .eyebrow { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; margin-bottom: 2rem; display: block; }
        .hero-title { font-family: var(--font-hero); font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1; letter-spacing: -3px; font-weight: 500; margin-bottom: 2rem; }
        .hero-subtext { font-size: 1.4rem; line-height: 1.5; color: #444; max-width: 850px; font-weight: 300; }

        .section-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; margin-bottom: 2rem; display: block; }
        
        .featured-section { padding: 40px 0 100px; }
        .featured-card { display: grid; grid-template-columns: 1.2fr 1fr; border: 1px solid #eee; border-radius: 16px; overflow: hidden; background: #fff; min-height: 400px; }
        .f-content { padding: 4rem; display: flex; flex-direction: column; justify-content: center; }
        .f-meta { font-size: 0.7rem; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.5rem; display: block; }
        .f-title { font-family: var(--font-hero); font-size: 2.25rem; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -1.5px; }
        .f-desc { font-size: 1.05rem; color: #555; line-height: 1.6; margin-bottom: 2.5rem; }
        .read-btn { background: #000; color: #fff; border: none; padding: 1rem 2rem; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; border-radius: 0; width: fit-content; transition: 0.3s; text-decoration: none; display: inline-block; }
        .read-btn:hover { background: #333; }
        .f-visual { background: #fafafa; border-left: 1px solid #eee; position: relative; }
        .visual-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.05; background-image: repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 20px); }

        .no-news-placeholder { padding: 4rem; background: #fafafa; border: 1px dashed #eee; border-radius: 16px; text-align: center; color: #999; font-size: 0.9rem; }
        .no-news-grid-placeholder { grid-column: span 3; padding: 6rem 0; text-align: center; color: #999; border-top: 1px dashed #eee; }

        .filter-section { padding-bottom: 40px; }
        .tab-wrapper { border-bottom: 1px solid #eee; overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 3rem; }
        .tab-wrapper::-webkit-scrollbar { display: none; }
        .tabs { display: flex; gap: 0; min-width: max-content; }
        .tab { 
          padding: 1.25rem 2rem; 
          background: none; 
          border: none; 
          font-weight: 700; 
          color: #999; 
          cursor: pointer; 
          transition: 0.3s; 
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-bottom: 2px solid transparent;
        }
        .tab.active { color: #000; border-color: #000; }

        .grid-section { padding-bottom: 100px; }
        .news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .news-card { padding: 2.5rem; border: 1px solid #eee; border-radius: 16px; transition: 0.3s; }
        .news-card:hover { border-color: #000; }
        .n-meta { font-size: 0.65rem; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 1rem; }
        .n-title { font-family: var(--font-hero); font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.2; letter-spacing: -0.5px; }
        .n-desc { font-size: 0.9rem; color: #666; line-height: 1.6; margin-bottom: 2rem; }
        .n-link { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #000; text-decoration: none; border-bottom: 1px solid #eee; padding-bottom: 4px; transition: 0.3s; }
        .n-link:hover { border-color: #000; }

        .what-section { padding: 100px 0; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; }
        .w-item h4 { font-family: var(--font-hero); font-size: 1.25rem; margin-bottom: 1rem; }
        .w-item p { font-size: 0.95rem; line-height: 1.6; color: #666; }

        .final-cta { padding: 120px 0; }
        .final-headline { font-family: var(--font-hero); font-size: 3rem; letter-spacing: -2px; margin-bottom: 1.5rem; }
        .final-desc { font-size: 1.25rem; color: #666; margin-bottom: 3rem; }
        .final-btns { display: flex; justify-content: center; gap: 1.5rem; }
        .dark-btn { padding: 1.15rem 2.25rem; background: #000; color: #fff; border: none; font-weight: 700; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; text-decoration: none; display: inline-block; }
        .light-btn { padding: 1.15rem 2.25rem; background: transparent; color: #000; border: 1px solid #eee; font-weight: 700; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; text-decoration: none; display: inline-block; }

        @media (max-width: 1200px) {
          .featured-card { grid-template-columns: 1fr; }
          .f-visual { display: none; }
          .news-grid, .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .container { padding: 0 1.5rem; }
          .hero-section { padding: 100px 0 40px; }
          .f-content { padding: 2rem; }
          .f-title { font-size: 1.75rem; }
          .news-grid, .grid-3 { grid-template-columns: 1fr; }
          .news-card { padding: 2rem; }
          .final-headline { font-size: 2rem; }
          .final-btns { flex-direction: column; }
        }
      `}</style>
    </main>
  );
};

export default NewsroomUI;
