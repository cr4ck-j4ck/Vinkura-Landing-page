'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setNavReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    setIsClient(true);
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(max-width: 968px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(media.matches);
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    }

    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  }, [isMobile]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    html.style.scrollBehavior = previousBehavior;
    setScrolled(false);
  }, []);

  useEffect(() => {
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;

    if (mobileMenuOpen) {
      bodyStyle.overflow = 'hidden';
      htmlStyle.overflow = 'hidden';
    } else {
      bodyStyle.overflow = '';
      htmlStyle.overflow = '';
    }

    return () => {
      bodyStyle.overflow = '';
      htmlStyle.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    {
      name: 'Products',
      children: [
        {
          name: 'Vinkura Core',
          desc: 'The operational foundation for public systems',
          link: '/products/vinkura-core',
        },
        {
          name: 'Sentinel',
          desc: 'Real-time investigation and command intelligence',
          link: '/products/sentinel',
        },
        {
          name: 'Forge',
          desc: 'AI-driven workflow orchestration',
          link: '/products/forge',
        },
        {
          name: 'Orbit',
          desc: 'Secure edge and on-prem deployment',
          link: '/products/orbit',
        },
        {
          name: 'Voice',
          desc: 'Voice-first operational data entry',
          link: '/products/voice',
        },
        {
          name: 'DDMS',
          desc: 'Dynamic Duty Management System',
          link: '/products/ddms',
        },
        {
          name: 'E-Maalkhana',
          desc: 'Evidence lifecycle management',
          link: '/products/e-maalkhana',
        },
        {
          name: 'E-CTC',
          desc: 'Electronic Case Tracking Coordination',
          link: '/products/e-ctc',
        },
      ],
      tagline: 'Explore our platform',
    },
    {
      name: 'Company',
      children: [
        {
          name: 'About',
          desc: 'Our mission and team',
          link: '/company/about',
        },
        {
          name: 'Case Studies',
          desc: 'Impact in India and beyond',
          link: '/company/case-studies',
        },
        {
          name: 'Security',
          desc: 'Sovereign infrastructure standards',
          link: '/company/security',
        },
        {
          name: 'Careers',
          desc: 'Join the mission',
          link: '/company/careers',
        },
        {
          name: 'Newsroom',
          desc: 'Latest updates',
          link: '/company/newsroom',
        },
      ],
      tagline: 'Learn about our journey',
    },
    { name: 'Impact Studies', link: '/impact-studies' },
    { name: 'About Us', link: '/company/about' },
  ];

  const handleMouseEnter = (name: string) => {
    if (window.innerWidth > 968) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 968) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 220);
    }
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleMobileMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    if (!next) setActiveDropdown(null);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const currentDropdown = navItems.find((item) => item.name === activeDropdown);
  const hasDropdown = !!currentDropdown?.children;

  const router = useRouter();

  const handleContactClick = () => {
    closeAllMenus();
    router.push('/contact');
  };

  return (
    <div className={`nav-wrapper ${navReady ? 'nav-ready' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <Link href="/" className="nav-logo">
          <img src="/VINKURA.png" alt="VINKURA Logo" className="logo-img" />
          <span style={{ marginLeft: '12px' }}>VINKURA</span>
        </Link>

        <div className="nav-links">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="nav-item-group"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.link ? (
                <Link href={item.link} className="nav-link-item">
                  {item.name}
                </Link>
              ) : (
                <button
                  type="button"
                  className="nav-link-item nav-trigger"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="contact-btn desktop-only"
            onClick={handleContactClick}
            type="button"
          >
            Contact Us
          </button>

          {isClient && isMobile && (
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              type="button"
            >
              <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
              </div>
            </button>
          )}
        </div>
      </nav>

      {/* Desktop Mega Dropdown */}
      <div
        className={`mega-dropdown ${hasDropdown ? 'active' : ''}`}
        onMouseEnter={handleDropdownEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mega-container">
          <button
            className="mega-close-btn"
            onClick={() => setActiveDropdown(null)}
            aria-label="Close menu"
            type="button"
          >
            <span className="close-cross">×</span>
          </button>

          <div className="mega-dropdown-content">
            <div className="mega-info">
              <span className="mega-tag">{currentDropdown?.tagline || ''}</span>
              <h2 className="mega-title">{activeDropdown}</h2>
            </div>

            <div className="mega-grid">
              {currentDropdown?.children?.map((child: any, idx: number) => (
                <Link
                  key={idx}
                  href={child.link}
                  className="mega-item"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="mega-item-text">
                    <span className="mega-item-name">{child.name}</span>
                    <span className="mega-item-desc">{child.desc}</span>
                  </div>

                  <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mega-arrow">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isClient && isMobile && (
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <Link href="/" className="nav-logo" onClick={closeAllMenus}>
              <img src="/VINKURA.png" alt="VINKURA Logo" className="logo-img" />
              <span style={{ marginLeft: '12px' }}>VINKURA</span>
            </Link>

            <button
              className="mobile-close-btn"
              onClick={closeAllMenus}
              aria-label="Close menu"
              type="button"
            >
              <span className="close-cross">×</span>
            </button>
          </div>

          <div className="mobile-menu-content">
            {navItems.map((item, idx) => (
              <div key={idx} className="mobile-nav-item">
                <div
                  className="mobile-nav-link"
                  onClick={() => {
                    if (item.children) {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    }
                  }}
                >
                  {item.children ? (
                    <span className="mobile-nav-label">{item.name}</span>
                  ) : (
                    <Link
                      href={item.link || '#'}
                      className="mobile-main-link"
                      onClick={closeAllMenus}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.children && (
                    <svg
                      className={`chevron ${activeDropdown === item.name ? 'rotated' : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </div>

                {item.children && activeDropdown === item.name && (
                  <div className="mobile-dropdown-list">
                    {item.children.map((child: any, cIdx: number) => (
                      <Link
                        key={cIdx}
                        href={child.link}
                        className="mobile-dropdown-item"
                        onClick={closeAllMenus}
                      >
                        <span className="mobile-child-name">{child.name}</span>
                        <span className="mobile-child-desc">{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mobile-nav-item">
              <button
                className="mobile-contact-btn"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 1300px;
          z-index: 9999;
          transition: none;
        }

        .nav-wrapper.nav-ready {
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-wrapper.scrolled {
          top: 0.75rem;
          width: 92%;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 3.5rem 0.8rem 2.5rem;
          background: rgba(255, 255, 255, 0.96) !important;
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 999px;
          transition: none;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08);
          color: #000000;
        }

        .nav-ready .navbar {
          transition: all 0.35s ease;
        }

        /* HARD OVERRIDE: LOGO ALWAYS BLACK */
        :global(.nav-logo),
        .nav-logo,
        .nav-logo:link,
        .nav-logo:visited,
        .nav-logo:hover,
        .nav-logo:active,
        .nav-logo:focus {
          font-family: var(--font-hero, 'Outfit', sans-serif) !important;
          font-size: clamp(1.35rem, 1.8vw, 1.8rem) !important;
          font-weight: 700 !important;
          letter-spacing: 3px !important;
          color: #000000 !important;
          text-decoration: none !important;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          line-height: 1;
        }

        .logo-img {
          height: clamp(40px, 3.4vw, 56px);
          width: auto;
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-item-group {
          display: flex;
          align-items: center;
        }

        /* HARD OVERRIDE: ALL TOP NAV LINKS ALWAYS BLACK */
        :global(.nav-link-item),
        .nav-link-item,
        .nav-link-item:link,
        .nav-link-item:visited,
        .nav-link-item:hover,
        .nav-link-item:active,
        .nav-link-item:focus {
          color: #000000 !important;
          font-size: 0.85rem !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0.45rem 0;
          line-height: 1;
          font-family: inherit;
          display: block;
        }

        .nav-trigger {
          background: transparent;
        }

        .nav-link-item:hover {
          transform: translateY(-1px);
          opacity: 1;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .contact-btn {
          background: #000;
          color: #fff !important;
          border: none;
          padding: 0.65rem 1.6rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-right: 0.5rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .contact-btn:hover {
          background: #333;
          transform: translateY(-1.5px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .contact-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #000 !important;
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }

        .hamburger {
          width: 24px;
          height: 16px;
          position: relative;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: #000;
          transition: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 2px;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2) {
          bottom: 0;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg);
          top: 7px;
        }

        .hamburger.active span:nth-child(2) {
          transform: rotate(-45deg);
          bottom: 7px;
        }

        .mega-dropdown {
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 24px;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mega-dropdown.active {
          max-height: 640px;
          opacity: 1;
          visibility: visible;
          padding: 3rem 0;
        }

        .mega-container {
          width: 100%;
          position: relative;
        }

        .mega-close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: #f7f7f7;
          border: none;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .mega-close-btn:hover {
          background: #eeeeee;
          transform: scale(1.04);
        }

        .mega-dropdown-content {
          display: grid;
          grid-template-columns: 1fr 2.4fr;
          gap: 4rem;
          padding: 0 4rem;
        }

        .mega-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mega-tag {
          font-size: 0.7rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 0.6rem;
          display: block;
        }

        .mega-title {
          font-size: 2.25rem;
          font-weight: 500;
          color: #000;
          margin: 0;
          letter-spacing: -1.5px;
        }

        .mega-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .mega-item,
        .mega-item:link,
        .mega-item:visited,
        .mega-item:hover,
        .mega-item:active {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none !important;
          color: #000 !important;
          padding: 1rem 1.1rem;
          background: rgba(0, 0, 0, 0.025);
          border-radius: 14px;
          transition: all 0.25s ease;
        }

        .mega-item:hover {
          background: rgba(0, 0, 0, 0.05);
          transform: translateX(4px);
        }

        .mega-item-text {
          display: flex;
          flex-direction: column;
        }

        .mega-item-name {
          font-size: 1.05rem;
          font-weight: 600;
          color: #000 !important;
          display: block;
          margin-bottom: 0.15rem;
        }

        .mega-item-desc {
          font-size: 0.8rem;
          color: #777 !important;
        }

        .mega-arrow {
          color: #000;
          opacity: 0.2;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .mega-item:hover .mega-arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          background: #ffffff;
          z-index: 10000;
          padding: 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .mobile-menu-overlay::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.25rem;
          margin-bottom: 2rem;
        }

        .mobile-close-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 36px; /* Match logo height to avoid pushing header height */
          padding: 0;
          -webkit-tap-highlight-color: transparent;
          outline: none;
          line-height: 1;
        }

        .close-cross {
          line-height: 1;
          display: inline-block;
          font-weight: 300;
          font-size: 2.2rem;
          margin-top: -4px;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          padding: 0 1.25rem 3rem;
        }

        .mobile-nav-item {
          margin-bottom: 0.75rem;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 0.75rem;
        }

        .mobile-nav-link {
          font-size: 1.8rem;
          font-weight: 600;
          color: #000 !important;
          display: flex;
          justify-content: space-between;
          align-items: center;
          letter-spacing: -1px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        .mobile-nav-label {
          color: #000 !important;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        .mobile-main-link,
        .mobile-main-link:link,
        .mobile-main-link:visited,
        .mobile-main-link:hover,
        .mobile-main-link:active,
        .mobile-main-link:focus {
          color: #000 !important;
          text-decoration: none !important;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        .mobile-dropdown-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0;
        }

        .mobile-dropdown-item,
        .mobile-dropdown-item:link,
        .mobile-dropdown-item:visited,
        .mobile-dropdown-item:hover,
        .mobile-dropdown-item:active {
          text-decoration: none !important;
          color: #000 !important;
          display: block;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        .mobile-child-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #000 !important;
          display: block;
        }

        .mobile-child-desc {
          font-size: 0.8rem;
          color: #888 !important;
          display: block;
          margin-top: 0.25rem;
        }

        .mobile-contact-btn {
          width: 100%;
          background: #000;
          color: #fff;
          border: none;
          padding: 1.25rem;
          border-radius: 16px;
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 1rem;
          cursor: pointer;
          letter-spacing: -0.5px;
        }

        .chevron {
          color: #000;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .rotated {
          transform: rotate(180deg);
        }

        @media (max-width: 968px) {
          .nav-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
          }

          .navbar {
            width: 100% !important;
            border-radius: 0 !important;
            padding: 0.75rem 1.25rem !important;
            background: #ffffff !important;
            border-top: none;
            border-left: none;
            border-right: none;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05) !important;
            margin: 0 !important;
          }

          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-logo {
            font-size: 1.25rem !important;
          }

          .logo-img {
            height: 36px;
          }

          .desktop-only {
            display: none;
          }

          .mega-dropdown {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;