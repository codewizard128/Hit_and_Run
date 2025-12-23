import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'
// Skewed Button Component
const NavButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 transform skew-x-[-12deg] focus:outline-none";
  const contentStyles = "transform skew-x-[12deg] inline-flex items-center"; 

  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.5)] border-l-2 border-red-400",
    outline: "bg-transparent text-white border border-slate-700 hover:border-red-500 hover:text-red-500",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <span className={contentStyles}>{children}</span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Rules', href: '/Rules' },
    { name: 'Sponsors', href: '/Sponsors' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 font-premium ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;0,900;1,900&display=swap');
        .font-premium { font-family: 'Montserrat', sans-serif; }
        
        /* Slash Hover Effect for Links */
        .nav-link {
          position: relative;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -10%;
          width: 0%;
          height: 100%;
          background: #dc2626;
          transform: skewX(-12deg);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
          opacity: 0.1;
        }
        .nav-link:hover::before {
          width: 120%;
        }
      `}</style>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#" className="group flex items-center gap-3 relative z-50">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-10 h-10 bg-slate-900 border border-slate-700 transform -skew-x-12 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black italic text-white leading-none tracking-tighter">
                HIT<span className="text-red-600">&</span>RUN
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] ml-1">
                Official League
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="nav-link px-6 py-2 text-sm font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

           

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Slash Design */}
      <div className={`fixed inset-0 bg-slate-950 z-40 transform transition-transform duration-500 cubic-bezier(0.7,0,0.3,1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-full h-full bg-red-900/10 transform -skew-x-12 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 blur-[80px]"></div>
        </div>

        <div className="h-full flex flex-col justify-center px-8 relative z-10">
          <div className="space-y-6">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-4xl font-black italic text-transparent text-stroke-white hover:text-white hover:text-stroke-0 transition-all duration-300 transform hover:translate-x-4 uppercase"
                style={{ 
                  WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

           
        </div>
      </div>
    </nav>
  );
};

export default Navbar;