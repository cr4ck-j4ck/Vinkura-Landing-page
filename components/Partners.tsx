'use client';

import React, { useState, useEffect } from 'react';

const partners = [
  { 
    company: "J&K Police", 
    logo: "/J&K.png",
    quote: "Trinetra provided a real-time operational picture during major official deployments that redefined our field coordination.",
    link: "Official Record"
  },
  { 
    company: "Bareilly Traffic Police", 
    logo: "/BTP.png",
    quote: "The integration of digital identifiers into our evidence management has established absolute accountability across our repositories.",
    link: "Deployment Log"
  },
  { 
    company: "Uttar Pradesh Police", 
    logo: "/UPP.png",
    quote: "Vinkura's personnel deployment systems have optimized our force allocation and standardized our administrative audit trails.",
    link: "Strategic Report"
  }
];


const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % partners.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header mobile-carousel-header">
          <h2 className="section-subtitle">VOICE OF OUR PARTNERS</h2>
          <div className="carousel-controls" aria-label="Partner carousel controls">
            <button className="nav-btn prev" onClick={prev} aria-label="Previous partner">
              <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button className="nav-btn next" onClick={next} aria-label="Next partner">
              <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="carousel-wrapper">
          <div className="active-card-container">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className={`partner-card ${i === currentIndex ? 'active' : ''}`}
                style={{
                  display: i === currentIndex ? 'flex' : 'none'
                }}
              >
                <div className={`partner-visual ${partner.company.includes('Bareilly') ? 'large-logo' : ''}`}>
                  <img src={partner.logo} alt={partner.company} className="partner-logo-img" />
                </div>
                <div className="quote-icon">“</div>
                <div className="partner-brand">{partner.company}</div>
                <p className="partner-quote">{partner.quote}</p>
                <a href="/company/case-studies" className="partner-link">
                  {partner.link}
                  <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline-block' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

        </div>

        <div className="carousel-indicators">
          {partners.map((_, i) => (
            <button 
              key={i} 
              className={`indicator ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          padding: 8rem 0;
          background: #fff;
          border-top: 1px solid #f0f0f0;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        .section-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #999;
          margin-bottom: 5rem;
          text-align: center;
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
        }

        .mobile-carousel-header .section-subtitle {
          margin-bottom: 0;
          text-align: left;
        }

        .carousel-controls {
          display: none;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .carousel-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        .active-card-container {
          flex: 1;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-card {
           width: 100%;
           padding: 5rem 4rem;
           background: #fafafa;
           border-radius: 24px;
           flex-direction: column;
           align-items: center;
           text-align: center;
           animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
           position: relative;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .partner-visual {
          width: 140px;
          height: 140px;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .partner-visual.large-logo {
          width: 280px;
          height: 180px;
        }
        
        .partner-logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          opacity: 1;
          transition: all 0.5s ease;
        }

        .partner-card:hover .partner-logo-img {
          transform: scale(1.05);
        }

        .quote-icon {
          font-size: 8rem;
          color: #eee;
          line-height: 1;
          font-family: serif;
          position: absolute;
          top: 2rem;
          left: 4rem;
          pointer-events: none;
        }

        .partner-brand {
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          color: #999;
        }

        .partner-quote {
          font-family: var(--font-hero);
          font-size: 2.2rem;
          line-height: 1.2;
          color: #000;
          margin-bottom: 3rem;
          max-width: 850px;
          font-weight: 500;
          letter-spacing: -1px;
        }

        .partner-link {
          font-size: 0.75rem;
          font-weight: 700;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 2px solid #eee;
          padding-bottom: 8px;
          transition: all 0.3s;
        }

        .partner-link:hover {
          border-color: #000;
        }


        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #000;
          padding: 10px;
          opacity: 0.2;
          transition: all 0.3s;
        }

        .nav-btn:hover {
          opacity: 1;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 4rem;
        }

        .indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #eee;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .indicator.active {
          background: #000;
          width: 30px;
          border-radius: 10px;
        }

        @media (max-width: 1024px) {
          .partner-quote { font-size: 1.8rem; }
          .quote-icon { font-size: 6rem; top: 1rem; left: 2rem; }
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 1.5rem;
          }
          .carousel-controls {
            display: flex;
            align-items: flex-start;
            margin-top: 0.1rem;
          }
          .nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 999px;
            border: 1px solid rgba(0, 0, 0, 0.12);
            background: rgba(255, 255, 255, 0.92);
            color: #000;
            opacity: 1;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
            backdrop-filter: blur(10px);
          }
          .nav-char { font-size: 1rem; }
          .carousel-wrapper { gap: 1rem; }
          .partner-quote { font-size: 1.4rem; }
          .partner-card { padding: 4rem 2rem; border-radius: 16px; }
          .quote-icon { font-size: 4rem; top: 0.5rem; left: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Partners;
