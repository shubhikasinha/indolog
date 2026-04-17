import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-text py-16 pb-8 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-12">
          
          <div>
            <img src="/logo_white.png" alt="Indolog" className="h-[42px] mb-4 object-contain" />
            <p className="text-[13px] text-white/40 leading-[1.8] max-w-[280px] mt-5 font-light">
              India's premier logistics and quality inspection partner since 2012. IATA &middot; FIATA &middot; AMTOI &middot; MTO certified. Authorised JCTrans channel partner.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-semibold">LOGISTICS</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Ocean Freight</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Air Freight</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Road Freight</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Customs Brokerage</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Multimodal</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Import Console</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-semibold">VALUE ADDED</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/qc-platform" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">QC Platform</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Warehousing</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Supply Chain</Link>
              <Link to="/services" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Custom Packaging</Link>
              <Link to="/industries" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Industries</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-semibold">COMPANY</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">About Indolog</Link>
              <Link to="/offices" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Our Offices</Link>
              <Link to="/contact" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Contact Us</Link>
              <a href="#" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Track Shipment</a>
              <a href="https://app.fresatechnologies.com/ords/f?p=127:LOGIN_DESKTOP" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 transition-colors hover:text-gold font-light">Employee Login</a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} Indolog Logistics Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-3">
            <span className="text-[10px] tracking-[0.1em] px-2.5 py-1 border border-white/10 text-white/30">IATA</span>
            <span className="text-[10px] tracking-[0.1em] px-2.5 py-1 border border-white/10 text-white/30">FIATA</span>
            <span className="text-[10px] tracking-[0.1em] px-2.5 py-1 border border-white/10 text-white/30">AMTOI</span>
            <span className="text-[10px] tracking-[0.1em] px-2.5 py-1 border border-white/10 text-white/30">MTO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
