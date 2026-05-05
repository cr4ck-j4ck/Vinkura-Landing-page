'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaInstagram, FaYoutube, FaBlog, FaCertificate, FaShieldAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiHuggingface } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-col brand">
          <Link href="/" className="footer-logo">
            <img src="/VINKURA.png" alt="VINKURA Logo" style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            <span style={{ marginLeft: '12px' }}>VINKURA</span>
          </Link>

          <p className="footer-copyright">
            © 2026 Vinkura Innovations Network Pvt. Ltd.<br />
            Sovereign software for national governance.<br />
            New Delhi, India. 
          </p>
          <div className="social-links">
            <a href="https://x.com/vinkuraAI" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaXTwitter size={18} /></a>
            <a href="https://www.linkedin.com/company/vinkura/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
            <a href="https://github.com/vinkuraAI" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
            <a href="https://huggingface.co/VinkuraAI" target="_blank" rel="noopener noreferrer" aria-label="Hugging Face"><SiHuggingface size={18} /></a>
            <a href="https://instagram.com/Vinkura.IN" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={18} /></a>
            <a href="https://blogs.vinkura.in" target="_blank" rel="noopener noreferrer" aria-label="Blog"><FaBlog size={18} /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Infrastructure</h4>
          <ul className="footer-links">
            <li><Link href="/products/vinkura-core">Vinkura Core</Link></li>
            <li><Link href="/products/orbit">Orbit</Link></li>
            <li><Link href="/products/forge">Forge</Link></li>
            <li><Link href="/products/voice">Voice</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <ul className="footer-links">
            <li><Link href="/products/ddms">DDMS</Link></li>
            <li><Link href="/products/sentinel">Sentinel</Link></li>
            <li><Link href="/products/e-maalkhana">E-Maalkhana</Link></li>
            <li><Link href="/products/e-ctc">E-CTC</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul className="footer-links">
            <li><Link href="/solutions/public-safety">Public Safety</Link></li>
            <li><Link href="/solutions/sovereign-ai">Strategic AI</Link></li>
            <li><Link href="/research/automated-governance">Official Governance</Link></li>
            <li><Link href="/research/operational-visibility">Operational Visibility</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Archive & Research</h4>
          <ul className="footer-links">
            <li><Link href="/case-studies">Official Archive</Link></li>
            <li><Link href="/research/sovereign-intelligence">Sovereign Intelligence</Link></li>
            <li><Link href="/impact-studies">Impact Studies</Link></li>
            <li><Link href="/company/documentation">Documentation</Link></li>
          </ul>
        </div>

        <div className="footer-col hide-mobile">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link href="/company/about">About Us</Link></li>
            <li><Link href="/company/newsroom">Newsroom</Link></li>
            <li><Link href="/company/careers">Careers</Link></li>
            <li><Link href="/company/security">Security & Trust</Link></li>
            <li><Link href="/company/terms">Legal & Terms</Link></li>
          </ul>
        </div>

          <div className="certifications">
             <span className="cert-tag">
               <FaCertificate style={{ marginRight: '6px', fontSize: '0.8rem', verticalAlign: 'text-top' }} /> 
               ISO 27001
             </span>
             <span className="cert-tag">
               <FaShieldAlt style={{ marginRight: '6px', fontSize: '0.8rem', verticalAlign: 'text-top' }} /> 
               DPDP READY
             </span>
          </div>
        </div>

      <style jsx>{`
        .footer-section {
          padding: 8rem 0;
          background: #000;
          color: #fff;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.2fr 1fr;
          gap: 3rem;
        }
        .footer-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 300;
          letter-spacing: 4px;
          color: #fff;
          text-decoration: none;
          display: block;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .footer-copyright {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-links a {
          color: #888;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: #fff;
        }
        h4 {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fff;
          margin-bottom: 2rem;
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
          color: #666;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .footer-links :global(a) {
          color: #666;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .footer-links :global(a:hover), .footer-links li:hover {
          color: #fff !important;
          padding-left: 5px;
          cursor: pointer;
        }
        .certifications {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .cert-tag {
          font-size: 0.65rem;
          color: #444;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid #222;
          padding: 0.5rem 1rem;
          width: fit-content;
          display: flex;
          align-items: center;
        }

        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 768px) {
          .footer-section { padding: 4rem 0; }
          .container { padding: 0 1.5rem; }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hide-mobile { display: none; }
          .footer-logo { font-size: 1.4rem; }
          .certifications { flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
