'use client';

import React from 'react';
import Link from 'next/link';

interface Article {
  category: string;
  date: string;
  title: string;
  desc: string;
  content: string;
  img: string;
}

export default function NewsArticleUI({ article, slug }: { article: Article; slug: string }) {
  return (
    <main className="article-page">
      <div className="hero-section">
        <div className="hero-container">
          <Link href="/company/newsroom" className="back-link">← Newsroom</Link>
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="meta-sep">·</span>
            <span className="article-date">{article.date}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-desc">{article.desc}</p>
        </div>
      </div>

      <div className="hero-img-wrapper">
        <img src={article.img} alt={article.title} className="hero-img" />
      </div>

      <div className="content-wrapper">
        <div className="content-container">
          <div className="article-body">
            {article.content.split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i} className="article-para">{para}</p>
            ))}
          </div>
          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h4 className="sidebar-label">Filed Under</h4>
              <span className="category-tag">{article.category}</span>
            </div>
            <div className="sidebar-card">
              <h4 className="sidebar-label">From the Newsroom</h4>
              <div className="sidebar-links">
                <Link href="/company/newsroom" className="sidebar-link">All Articles</Link>
                <Link href="/research/sovereign-intelligence" className="sidebar-link">Research Papers</Link>
                <Link href="/case-studies" className="sidebar-link">Case Studies</Link>
              </div>
            </div>
            <div className="sidebar-card cta-card">
              <h4 className="sidebar-label">Get in Touch</h4>
              <p className="cta-desc">For press inquiries or official briefings, contact us directly.</p>
              <Link href="/contact" className="cta-link">Contact Vinkura →</Link>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .article-page {
          background: #fff;
          color: #000;
          min-height: 100vh;
          font-family: var(--font-inter, sans-serif);
        }
        .hero-section {
          padding-top: 140px;
          padding-bottom: 60px;
          border-bottom: 1px solid #eee;
        }
        .hero-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .back-link {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #999;
          text-decoration: none;
          margin-bottom: 2.5rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: #000; }
        .article-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .article-category {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #000;
          background: #f5f5f5;
          padding: 0.3rem 0.75rem;
        }
        .meta-sep { color: #ccc; }
        .article-date {
          font-size: 0.7rem;
          color: #999;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .article-title {
          font-family: var(--font-outfit, sans-serif);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 500;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #000;
        }
        .article-desc {
          font-size: 1.2rem;
          color: #555;
          line-height: 1.6;
          font-weight: 300;
        }
        .hero-img-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 2rem 0;
        }
        .hero-img {
          width: 100%;
          aspect-ratio: 21/7;
          object-fit: cover;
          filter: grayscale(1);
          display: block;
        }
        .content-wrapper {
          padding: 5rem 0 8rem;
        }
        .content-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 5rem;
          align-items: start;
        }
        .article-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .article-para {
          font-size: 1.1rem;
          line-height: 1.85;
          color: #333;
          margin: 0;
        }
        .article-sidebar {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .sidebar-card {
          background: #fafafa;
          border: 1px solid #eee;
          padding: 1.75rem;
        }
        .sidebar-label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #999;
          margin-bottom: 1rem;
        }
        .category-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #000;
          background: #efefef;
          padding: 0.35rem 0.75rem;
        }
        .sidebar-links {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .sidebar-link {
          font-size: 0.875rem;
          color: #444;
          text-decoration: none;
          padding: 0.65rem 0;
          border-bottom: 1px solid #f0f0f0;
          transition: color 0.2s;
          display: block;
        }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #000; }
        .cta-card { background: #000; border-color: #000; }
        .cta-card .sidebar-label { color: rgba(255,255,255,0.4); }
        .cta-desc { font-size: 0.875rem; color: rgba(255,255,255,0.7); line-height: 1.5; margin-bottom: 1.25rem; }
        .cta-link {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .cta-link:hover { border-color: #fff; }
        @media (max-width: 1024px) {
          .content-container { grid-template-columns: 1fr; }
          .article-sidebar { position: static; }
          .hero-img { aspect-ratio: 16/7; }
        }
        @media (max-width: 640px) {
          .hero-section { padding-top: 110px; }
          .hero-img { aspect-ratio: 4/3; }
        }
      `}</style>
    </main>
  );
}
