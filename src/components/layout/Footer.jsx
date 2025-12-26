import React, { useState } from 'react';


export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Health Insurance', href: '/insurance' },
      { name: 'Regular Checkups', href: '/checkups' },
      { name: 'Telemedicine', href: '/telemedicine' },
      { name: 'Lab Tests', href: '/lab-tests' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Community', href: '/community' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', 
      href: '#',
      color: '#1877F2'
    },
    { 
      name: 'Twitter', 
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', 
      href: '#',
      color: '#1DA1F2'
    },
    { 
      name: 'Instagram', 
      icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z', 
      href: '#',
      color: '#E4405F'
    },
    { 
      name: 'LinkedIn', 
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', 
      href: '#',
      color: '#0A66C2'
    },
  ];

  return (
    <footer className="footer-container">
      {/* Background Image with Overlay */}
      <div className="footer-background"></div>
      <div className="footer-overlay"></div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          
          {/* Column 1: Logo & Description */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="logo-health">Health</span>
              <span className="logo-crm">CRM</span>
            </h2>
            <p className="footer-tagline">
              Your trusted partner in healthcare management. We provide comprehensive solutions for all your health insurance and wellness needs.
            </p>
            
            {/* Social Media Icons */}
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-icon effect-1"
                  aria-label={social.name}
                  title={social.name}
                  style={{'--hover-color': social.color}}
                >
                  <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="footer-links-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="footer-links-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources Links */}
          <div className="footer-links-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter Subscription */}
          <div className="footer-newsletter">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to our newsletter for health tips and updates.
            </p>
            
            <div className="subscribe-form">
              <div className="input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                  placeholder="Enter your email"
                  className="subscribe-input"
                />
                <button
                  onClick={handleSubscribe}
                  className="subscribe-button"
                >
                  {isSubscribed ? '✓' : '→'}
                </button>
              </div>
              {isSubscribed && (
                <p className="success-message">
                  Thank you for subscribing! 🎉
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 HealthCRM. All rights reserved.
            </p>
            
            <div className="legal-links">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a href={link.href} className="legal-link">
                    {link.name}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="separator">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Footer Container */
        .footer-container {
          position: relative;
          overflow: hidden;
          margin-top: 5rem;
        }

        /* Background Image */
        .footer-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1600&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }

        /* Overlay */
        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(17, 24, 39, 0.95) 100%);
          backdrop-filter: blur(3px);
          z-index: 1;
        }

        /* Footer Content */
        .footer-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem 0;
        }

        /* Grid Layout */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1.3fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        /* Brand Column */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .logo-health {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-crm {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-tagline {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
        }

        /* Social Icons */
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          text-decoration: none;
          color: #9ca3af;
          position: relative;
          overflow: hidden;
        }

        /* User requested inner white-circle scale effect (approx 50px icon) */
        .effect-1 .social-icon {
          border: 2px solid #ffffff;
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
        }

        .effect-1 .social-icon::after{
          position: absolute;
          content: "";
          top: 3px;
          right: 3px;
          bottom: 3px;
          left: 3px;
          background: #ffffff;
          border-radius: 50%;
          transform-origin: 50% 50%;
          transform: scale(0);
          transition: all .35s ease;
          z-index: 0;
          opacity: 0.06;
        }

        .effect-1 .social-icon:hover:after{
          transform: scale(1);
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--hover-color);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }

        .social-svg {
          width: 22px;
          height: 22px;
          position: relative;
          z-index: 1;
          transition: all 0.5s ease;
        }

        .social-icon:hover {
          transform: translateY(-6px) scale(1.12);
          border-color: var(--hover-color);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.25), 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        /* Ring pulse effect (round round) */
        .effect-1 .social-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.12);
          transform: scale(0.6);
          opacity: 0;
          transition: transform 0.35s ease, opacity 0.35s ease;
          z-index: 0;
        }

        .effect-1 .social-icon:hover::before {
          transform: scale(1);
          opacity: 1;
          animation: ringPulse 1s ease-out;
        }

        @keyframes ringPulse {
          0% { transform: scale(0.6); opacity: 0.8; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .effect-1 .social-icon:hover:after{
          transform: scale(0.95);
          opacity: 0.12;
        }

        .social-icon:hover .social-svg {
          color: var(--hover-color);
          transform: scale(1.25);
        }

        .social-icon:active {
          transform: translateY(-5px) scale(1.05);
        }

        /* Links Columns */
        .footer-links-column {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .footer-heading {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #3b82f6);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #60a5fa;
          transform: translateX(5px);
        }

        .footer-link:hover::before {
          width: 100%;
        }

        /* Newsletter Column */
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .newsletter-text {
          color: #d1d5db;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Subscribe Form */
        .subscribe-form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .input-wrapper:focus-within {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }

        .subscribe-input {
          flex: 1;
          padding: 0.9rem 1rem;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
        }

        .subscribe-input::placeholder {
          color: #9ca3af;
        }

        .subscribe-button {
          padding: 0 1.3rem;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subscribe-button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: scale(1.05);
        }

        .success-message {
          color: #34d399;
          font-size: 0.875rem;
          margin: 0;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: #9ca3af;
          font-size: 0.9rem;
          margin: 0;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .legal-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #60a5fa;
        }

        .separator {
          color: #4b5563;
          font-size: 0.875rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 2.5rem;
          }

          .footer-newsletter {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 3rem 1.5rem 0;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-newsletter {
            grid-column: 1 / -1;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .legal-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-logo {
            font-size: 1.75rem;
          }

          .social-icons {
            justify-content: center;
          }

          .footer-links-column {
            text-align: center;
          }

          .footer-link {
            display: inline-block;
          }
        }
      `}</style>
    </footer>
  );
}
