import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If not home, always solid
  const isSolid = !isHome || scrolled;
  
  const navClass = `fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center px-6 md:px-12 transition-all duration-400 ${
    isSolid ? 'bg-white/95 border-b border-border backdrop-blur-md' : 'bg-transparent'
  }`;

  const linkClass = (path) => {
    const isActive = location.pathname === path;
    const base = "text-[13px] font-medium tracking-[0.03em] px-[18px] h-[72px] flex items-center border-b-[3px] transition-all duration-200 relative";
    if (isSolid) {
      if (isActive) return `${base} text-navy border-navy`;
      return `${base} text-text-mid border-transparent hover:text-navy hover:border-navy`;
    } else {
      if (isActive) return `${base} text-white border-white`;
      return `${base} text-white/85 border-transparent hover:text-white hover:border-white`;
    }
  };

  return (
    <nav className={navClass}>
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0">
          <img src={isSolid ? '/logo_dark.png' : '/logo_white.png'} alt="Indolog Logistics" className="h-[42px] object-contain transition-all duration-300" />
        </Link>

        <div className="hidden md:flex items-center">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <div className="relative group">
            <Link to="/services" className={linkClass('/services')}>Services ▾</Link>
            <div className="absolute top-[72px] left-0 min-w-[230px] bg-white border border-border shadow-[0_20px_60px_rgba(0,0,0,0.12)] py-2 opacity-0 pointer-events-none -translate-y-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <Link to="/services" className="block px-5 py-2.5 text-[13px] text-text-mid transition-all duration-150 hover:bg-slate hover:text-navy hover:pl-6">Ocean Freight</Link>
              <Link to="/services" className="block px-5 py-2.5 text-[13px] text-text-mid transition-all duration-150 hover:bg-slate hover:text-navy hover:pl-6">Air Freight</Link>
              <Link to="/services" className="block px-5 py-2.5 text-[13px] text-text-mid transition-all duration-150 hover:bg-slate hover:text-navy hover:pl-6">Road Freight</Link>
              <Link to="/services" className="block px-5 py-2.5 text-[13px] text-text-mid transition-all duration-150 hover:bg-slate hover:text-navy hover:pl-6">Customs Brokerage</Link>
              <Link to="/services" className="block px-5 py-2.5 text-[13px] text-text-mid transition-all duration-150 hover:bg-slate hover:text-navy hover:pl-6">Multimodal</Link>
              <Link to="/services" className="block px-5 py-2.5 text-[13px] text-text-mid transition-all duration-150 hover:bg-slate hover:text-navy hover:pl-6">Import Console</Link>
            </div>
          </div>
          <Link to="/qc-platform" className={linkClass('/qc-platform')}>QC Platform</Link>
          <Link to="/industries" className={linkClass('/industries')}>Industries</Link>
          <Link to="/offices" className={linkClass('/offices')}>Offices</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <Link 
            to="/#track" 
            className={`text-[13px] font-medium px-[18px] py-[9px] border-[1.5px] transition-all duration-200 tracking-[0.02em] hidden lg:block ${
              isSolid 
                ? 'border-navy text-navy hover:bg-navy hover:text-white' 
                : 'border-white/60 text-white hover:bg-white/15'
            }`}
          >
            Track Shipment
          </Link>
          <Link 
            to="/contact" 
            className="text-[13px] font-semibold px-5 py-[9px] bg-gold text-black tracking-[0.02em] transition-all duration-200 hover:bg-gold-light hover:-translate-y-px"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`md:hidden flex items-center justify-center p-2 z-[1001] transition-colors duration-300 ${isSolid || mobileMenuOpen ? 'text-navy' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt4 size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-white z-[999] flex flex-col px-6 py-8 border-t border-border overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-lora text-navy border-b border-border pb-4">Home</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-lora text-navy border-b border-border pb-4">Services</Link>
              <Link to="/qc-platform" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-lora text-navy border-b border-border pb-4">QC Platform</Link>
              <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-lora text-navy border-b border-border pb-4">Industries</Link>
              <Link to="/offices" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-lora text-navy border-b border-border pb-4">Offices</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-lora text-navy border-b border-border pb-4">Contact</Link>
              
              <div className="flex flex-col gap-4 mt-4">
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center font-bold tracking-[0.1em] uppercase py-4 bg-gold text-black"
                >
                  Get a Quote
                </Link>
                <Link 
                  to="/#track" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center font-medium tracking-[0.1em] uppercase py-4 border border-navy text-navy"
                >
                  Track Shipment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
