'use client';

import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ target, suffix = "" }: { target: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className="counter-value">
      {count}{suffix}
    </div>
  );
};

const AtAGlance = () => {
  return (
    <section className="at-a-glance section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Vinkura at a Glance</h2>
          <div className="title-divider">
            <hr className="line-large" />
            <hr className="line-small" />
          </div>
          <div className="header-desc">
            <p>
              Architected for sovereign governance and operational integrity. 
              Vinkura provides the mission-critical substrate that powers India's 
              most vital public departments.

            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="stat-content">
              <Counter target={125} suffix="+" />
              <span className="stat-label">Departments Empowered</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </div>
            <div className="stat-content">
              <Counter target={50} suffix="K+" />
              <span className="stat-label">Operational Nodes</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </div>
            <div className="stat-content">
              <Counter target={5} suffix="M+" />
              <span className="stat-label">Monthly Intelligence Events</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div className="stat-content">
              <Counter target={25} suffix="+" />
              <span className="stat-label">State-wide Deployments</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .at-a-glance {
          background: #ffffff;
          color: #000000;
          padding: 4rem 0;
          border-bottom: 1px solid #eeeeee;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 500;
          margin-bottom: 1rem;
          letter-spacing: -2px;
        }

        .title-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 1.5rem;
        }

        .line-large {
          width: 80px;
          border: none;
          border-top: 2px solid #000;
          margin: 0;
        }

        .line-small {
          width: 40px;
          border: none;
          border-top: 2px solid #000;
          margin: 0;
        }

        .header-desc {
          max-width: 600px;
          margin: 0 auto;
        }

        .header-desc p {
          font-size: 1.1rem;
          color: #666666;
          line-height: 1.6;
          font-weight: 300;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
          background: #fafafa;
          border-radius: 12px;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: #f0f0f0;
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          color: #fff;
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }

        .stat-content :global(.counter-value) {
          font-size: 2.5rem;
          font-weight: 600;
          font-family: var(--font-hero);
          margin-bottom: 0.25rem;
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: #888888;
          display: block;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .section-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .at-a-glance {
            padding: 6rem 0;
          }
          .section-title {
            font-size: 2.2rem;
          }
          .stat-item {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AtAGlance;
