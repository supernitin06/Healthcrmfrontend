export default function Button({ text, variant = "primary", className = "", onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`liquid-morph-btn ${variant} ${className}`}
      {...props}
    >
      <span className="relative z-10 font-semibold tracking-wide">{text}</span>
      
      <style>{`
        .liquid-morph-btn {
          width: 130px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius: 25px;
          overflow: hidden;
          border: none;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
          color: white;
          font-size: 0.95rem;
        }

        .liquid-morph-btn.primary {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        }

        .liquid-morph-btn.secondary {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
        }

        .liquid-morph-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: conic-gradient(
            #60a5fa 0deg, 
            #2563eb 120deg, 
            #60a5fa 240deg
          );
          transition: all 0.6s ease;
          opacity: 0;
          transform: scale(0);
        }

        .liquid-morph-btn:hover {
          border-radius: 12px;
          transform: rotate(5deg) scale(1.05);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        }

        .liquid-morph-btn.secondary:hover {
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .liquid-morph-btn:hover::before {
          opacity: 0.6;
          transform: scale(2) rotate(180deg);
        }

        .liquid-morph-btn:active {
          transform: rotate(5deg) scale(0.98);
        }

        @media (max-width: 768px) {
          .liquid-morph-btn {
            width: 110px;
            height: 40px;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </button>
  );
}