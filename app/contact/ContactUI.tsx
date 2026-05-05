'use client';

import React, { useState } from 'react';

const ContactUI = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="contact-page bg-white min-h-screen">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-header">
            <span className="eyebrow">Direct Engagement</span>
            <h1 className="contact-title text-black">Connect with Vinkura.</h1>
            <p className="contact-subtitle text-black/60">
              Building for public infrastructure requires deep collaboration and technical alignment.
              Let's start a conversation about your operational context.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Inquiry Received</h3>
                  <p>Our project team will review your message and reach out within 48 hours.</p>
                </div>
              ) : (
                <form
                  className="contact-form"
                  action="https://formsubmit.co/info.vinkura@gmail.com"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                >
                  <input type="hidden" name="_subject" value="New Contact Inquiry — Vinkura" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://vinkura.in/contact" />
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="name" placeholder="e.g. Rajesh Kumar" required />
                    </div>
                    <div className="form-group">
                      <label>Organization</label>
                      <input type="text" name="organization" placeholder="Department / Agency" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Work Email</label>
                      <input type="email" name="email" placeholder="name@gov.in" required />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" name="subject" placeholder="Project / Demo Inquiry" />
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label>Message</label>
                    <textarea name="message" placeholder="Briefly describe your operational requirements or challenges..." rows={4}></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Inquiry <span className="arrow">→</span>
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="info-block">
                <h4>Official Headquarters</h4>
                <p>Vinkura Innovations Network Pvt. Ltd.</p>
                <p>New Delhi, India</p>
              </div>
              <div className="info-block">
                <h4>General Inquiries</h4>
                <p>info@vinkura.in</p>
              </div>
              <div className="info-block">
                <h4>Project Support</h4>
                <p>support@vinkura.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style jsx>{`
        .contact-page {
          font-family: var(--font-inter, sans-serif);
          color: #000;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #888;
          margin-bottom: 1rem;
        }

        .contact-hero {
          padding-top: 180px;
          padding-bottom: 80px;
        }

        .contact-header {
          margin-bottom: 5rem;
          max-width: 700px;
        }

        .contact-title {
          font-family: var(--font-outfit, sans-serif);
          font-size: clamp(3rem, 6vw, 4.5rem);
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 1.5rem;
          font-weight: 500;
          color: #000 !important;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: #444 !important;
          line-height: 1.5;
          font-weight: 300;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-form-wrapper {
          background: #fff;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #000;
        }

        input, textarea {
          padding: 1rem 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e5e5e5;
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
          font-family: inherit;
          color: #000 !important;
        }

        input::placeholder, textarea::placeholder {
          color: #aaa;
        }

        input:focus, textarea:focus {
          border-bottom-color: #000;
        }

        .submit-btn {
          width: fit-content;
          background: #000;
          color: #fff;
          padding: 1rem 3rem;
          border: none;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .arrow {
          transition: 0.3s;
        }

        .submit-btn:hover .arrow {
          transform: translateX(4px);
        }

        .success-message {
          padding: 4rem 2rem;
          text-align: center;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
        }

        .success-icon {
          width: 56px;
          height: 56px;
          background: #000;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 1.5rem;
        }

        .success-message h3 {
          font-family: var(--font-outfit, sans-serif);
          font-size: 1.75rem;
          font-weight: 500;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .success-message p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          padding-top: 2rem;
        }

        .info-block h4 {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #888;
          margin-bottom: 1rem;
        }

        .info-block p {
          font-size: 1rem;
          color: #000;
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-header {
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 640px) {
          .contact-hero {
            padding-top: 120px;
          }
          .contact-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </main>
  );
};

export default ContactUI;
