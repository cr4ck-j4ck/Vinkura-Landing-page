'use client';

import Link from 'next/link';

const CTA = () => {
  return (
    <section className="cta-section">
      <Link href="/contact" className="cta-box gray">
        <div className="cta-content">
          <div className="cta-text-wrapper">
             <span className="cta-label">Ready to see it in your department?</span>
             <h2 className="cta-heading">Request a Demo</h2>
          </div>
          <span className="cta-arrow">→</span>
        </div>
      </Link>
      <Link href="/contact" className="cta-box black">
        <div className="cta-content">
          <div className="cta-text-wrapper">
             <span className="cta-label">Building something for public infrastructure?</span>
             <h2 className="cta-heading">Talk to our team</h2>
          </div>
          <span className="cta-arrow">→</span>
        </div>
      </Link>

      <style jsx>{`
        .cta-section {
          display: flex;
          height: 300px;
        }
        .cta-box {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 4rem;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-content {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
        .cta-label {
          display: block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 0.5rem;
          opacity: 0.6;
        }
        .cta-heading {
          font-size: 2.5rem;
          font-weight: 500;
          letter-spacing: -1.5px;
        }
        .cta-arrow {
          font-size: 2rem;
          font-weight: 300;
          transition: transform 0.3s;
        }
        .cta-box:hover .cta-arrow {
          transform: translateX(10px);
        }
        .cta-box.gray {
          background: #f0f0f0;
          color: #000;
        }
        .cta-box.black {
          background: #000;
          color: #fff;
        }
        .cta-box:hover {
          padding-left: 6rem;
        }
        .cta-box.gray:hover {
          background: #e5e5e5;
        }
        .cta-box.black:hover {
          background: #111;
        }
        @media (max-width: 968px) {
          .cta-section {
            flex-direction: column;
            height: auto;
          }
          .cta-box {
            padding: 4rem 2rem;
          }
          .cta-heading {
            font-size: 2rem;
          }
          .cta-box:hover {
            padding-left: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
