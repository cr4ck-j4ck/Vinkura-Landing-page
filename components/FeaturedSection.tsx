'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const cases = [
  {
    title: "Data-driven management for law enforcement. Connects personnel, cases, and operations.",
    tag: "DDMS",
    category: "POLICE",
    img: "/1.png",
    link: "/case-studies/ddms"
  },
  {
    title: "One operating layer across every department. Your data, your workflows, your control.",
    tag: "CORE",
    category: "ADMINISTRATION",
    img: "/4.png",
    link: "/case-studies/core"
  },
  {
    title: "Sovereign infrastructure for heavy-duty official operations and resource management.",
    tag: "ORBIT",
    category: "PSU",
    img: "/oRBIT.png",
    link: "/products/orbit"
  },
  {
    title: "Digital-first coordination for prosecution readiness and judicial deadline discipline.",
    tag: "E-CTC",
    category: "COURT",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000",
    link: "/case-studies/ectc"
  },
  {
    title: "Unified citizen view and real-time cross-departmental alert systems for critical governance.",
    tag: "SENTINEL",
    category: "GOVERNANCE",
    img: "/2.png",
    link: "/products/sentinel"
  }
];

const FeaturedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cases.length);
    }, 8000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    startTimer();
  };

  return (
    <section className="featured-section bg-white">
      <div className="container">
        <div className="featured-header">
          <div className="featured-tabs">
            {cases.map((item, idx) => (
              <button
                key={idx}
                className={`featured-tab ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => handleTabClick(idx)}
              >
                {item.category}
              </button>
            ))}
          </div>
          <Link href="/case-studies" className="see-all-btn hide-mobile">SEE ALL</Link>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {cases.map((item, idx) => (
              <div key={idx} className="carousel-slide">
                <Link href={item.link} className="slide-card-wrapper">
                  <div className="mobile-header show-mobile">
                    {item.category}
                  </div>

                  <div className="slide-card">
                    <div
                      className="slide-image"
                      style={{ backgroundImage: `url(${item.img})` }}
                    >
                      <div className="desktop-overlay hide-mobile">
                        <span className="overlay-tag">{item.tag}</span>
                        <h2 className="overlay-title">{item.title} ↗</h2>
                      </div>
                    </div>

                    <div className="mobile-content show-mobile">
                      <span className="mobile-tag">{item.tag}</span>
                      <h2 className="mobile-title">{item.title} ↗</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-footer show-mobile">
          <Link href="/case-studies" className="mobile-see-all">SEE ALL</Link>
        </div>
      </div>

      <style jsx>{`
        .featured-section {
          padding: 6rem 0;
          background: #fff;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid #f0f0f0;
        }
        .featured-tabs {
          display: flex;
          gap: 2rem;
        }
        .featured-tab {
          padding: 1rem 0;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          background: transparent;
          border: none;
          color: #999;
          cursor: pointer;
          transition: all 0.3s;
          border-bottom: 2px solid transparent;
          letter-spacing: 1px;
        }
        .featured-tab.active {
          color: #000;
          border-bottom-color: #000;
        }
        .see-all-btn {
          font-size: 0.7rem;
          font-weight: 700;
          color: #666;
          border: 1px solid #eee;
          padding: 0.5rem 1.2rem;
          border-radius: 4px;
        }

        .carousel-container {
          overflow: hidden;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .carousel-slide {
          min-width: 100%;
        }
        .slide-card-wrapper {
           text-decoration: none;
           display: block;
        }
        .slide-card {
           position: relative;
           width: 100%;
           aspect-ratio: 21 / 9;
           border-radius: 12px;
           overflow: hidden;
           background: #f7f7f7;
        }
        .slide-image {
           width: 100%;
           height: 100%;
           background-size: cover;
           background-position: center;
           position: relative;
        }
        .desktop-overlay {
           position: absolute;
           bottom: 0;
           left: 0;
           width: 100%;
           padding: 5rem;
           background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
           color: #fff;
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
        }
        .overlay-tag {
           font-size: 0.75rem;
           font-weight: 800;
           letter-spacing: 2px;
           text-transform: uppercase;
           margin-bottom: 1rem;
           opacity: 0.8;
        }
        .overlay-title {
           font-size: 3.5rem;
           font-weight: 500;
           letter-spacing: -2px;
           line-height: 1.1;
           max-width: 80%;
           font-family: var(--font-hero);
        }

        .show-mobile { display: none; }

        @media (max-width: 1024px) {
           .overlay-title { font-size: 2.5rem; }
           .desktop-overlay { padding: 3rem; }
        }

        @media (max-width: 768px) {
           .container { padding: 0 1.5rem; }
           .featured-section { padding: 4rem 0; }
           .featured-header { display: none; }
           
           .show-mobile { display: block; }
           .hide-mobile { display: none; }

           .mobile-header {
              text-align: center;
              font-size: 1rem;
              color: #666;
              margin-bottom: 1.5rem;
              letter-spacing: 0.5px;
           }
           .slide-card {
              aspect-ratio: auto;
              background: transparent;
              overflow: visible;
           }
           .slide-image {
              aspect-ratio: 4 / 3;
              border-radius: 12px;
           }
           .mobile-content {
              text-align: center;
              padding: 1.5rem 0;
           }
           .mobile-tag {
              display: block;
              font-size: 0.7rem;
              font-weight: 700;
              color: #bbb;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              margin-bottom: 0.75rem;
           }
           .mobile-title {
              font-size: 1.4rem;
              font-weight: 500;
              color: #000;
              line-height: 1.3;
              letter-spacing: -0.5px;
              max-width: 90%;
              margin: 0 auto;
           }
           .mobile-footer {
              margin-top: 2rem;
              display: flex;
              justify-content: center;
           }
           .mobile-see-all {
              padding: 0.75rem 2.5rem;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 0.75rem;
              font-weight: 700;
              color: #444;
              text-decoration: none;
              text-transform: uppercase;
              letter-spacing: 1px;
           }
        }
      `}</style>
    </section>
  );
};

export default FeaturedSection;
