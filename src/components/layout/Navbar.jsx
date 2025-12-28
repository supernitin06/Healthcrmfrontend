import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/insurance', label: 'Insurance' },
    { path: '/checkups', label: 'Checkups' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    console.log(`Navigating to: ${path}`);
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <nav className="bg-gradient-to-r from-white to-gray-50 shadow-lg px-6 py-4 sticky top-0 z-50 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight flex items-center gap-0.5">
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Health
          </span>
          <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            CRM
          </span>
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`shimmer-link ${activeLink === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          
          <Button 
            text="Login" 
            variant="primary"
            onClick={handleLogin}
          />
        </div>
      </div>

      <style>{`
        /* Shimmer Link Styles */
        .shimmer-link {
          text-decoration: none;
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          color: #6b7280;
          transition: color 0.5s ease;
          padding: 0.5rem 0;
          cursor: pointer;
        }

        .shimmer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          background-size: 300% 100%;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .shimmer-link:hover {
          color: #2563eb;
        }

        .shimmer-link:hover::after {
          opacity: 1;
          animation: shimmer111 2s linear infinite;
        }

        .shimmer-link.active {
          color: #2563eb;
          font-weight: 600;
        }

        .shimmer-link.active::after {
          opacity: 1;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          animation: shimmer111 2s linear infinite;
        }

        @keyframes shimmer111 {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .shimmer-link {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 640px) {
          .shimmer-link:nth-child(2),
          .shimmer-link:nth-child(3) {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}