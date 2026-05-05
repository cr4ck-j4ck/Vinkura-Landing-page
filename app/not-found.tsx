'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page bg-white min-h-screen flex items-center justify-center">
      <div className="container text-center">
        <span className="error-code">404</span>
        <h1 className="error-title">Resource not found.</h1>
        <p className="error-desc">
          The page you are looking for does not exist or has been moved to a different official archive.
        </p>
        <Link href="/" className="back-home-btn">
          Return to Foundation
        </Link>
      </div>

      <style jsx>{`
        .not-found-page {
          padding-top: 100px;
          font-family: var(--font-inter, sans-serif);
        }
        .container {
          max-width: 600px;
        }
        .error-code {
          display: block;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.5em;
          color: #999;
          margin-bottom: 2rem;
        }
        .error-title {
          font-family: var(--font-outfit, sans-serif);
          font-size: 4rem;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 2rem;
          color: #000;
        }
        .error-desc {
          font-size: 1.25rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 4rem;
          font-weight: 300;
        }
        .back-home-btn {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 1rem 2.5rem;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          transition: 0.3s;
        }
        .back-home-btn:hover {
          background: #333;
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}
