import { FaVideo, FaTshirt, FaBan, FaShieldAlt } from 'react-icons/fa';

export default function QcPlatform() {
  return (
    <section id="qc" className="bg-navy py-24 text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column */}
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
            <span className="w-7 h-[2px] bg-gold block"></span>
            UNIQUE DIFFERENTIATOR
          </div>
          <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] tracking-tight text-white mb-4 leading-tight">
            Quality Inspection <br/>
            <em className="italic text-gold-light font-medium">Platform (QIP)</em>
          </h2>
          <p className="text-[15px] text-white/65 leading-[1.85] font-light max-w-[560px] mb-8">
            India's most advanced pre-shipment inspection facility. Factory has zero influence during inspections. Clients consistently save 20-25% on returns.
          </p>

          <div className="grid grid-cols-3 gap-px bg-white/10 mb-8 border border-white/20">
            <div className="bg-[#141b4d] p-5 text-center">
              <div className="font-lora text-2xl md:text-3xl text-gold mb-1 track">12,000</div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-white/40">Sq Ft Facility</div>
            </div>
            <div className="bg-[#141b4d] p-5 text-center">
              <div className="font-lora text-2xl md:text-3xl text-gold mb-1">7,000</div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-white/40">Pcs/Day</div>
            </div>
            <div className="bg-[#141b4d] p-5 text-center">
              <div className="font-lora text-2xl md:text-3xl text-gold mb-1">20-25%</div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-white/40">Client Savings</div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 pt-5 mt-4">
            <div className="flex gap-4 pb-5 border-b border-white/10">
              <div className="w-10 h-10 shrink-0 bg-white/10 flex items-center justify-center text-white">
                <FaVideo />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-white mb-1">Live Webcam Supervision</h4>
                <p className="text-[13px] text-white/55 leading-[1.7]">Overseas clients monitor in real-time from their office. Full transparency, every step.</p>
              </div>
            </div>
            <div className="flex gap-4 pb-5 border-b border-white/10">
              <div className="w-10 h-10 shrink-0 bg-white/10 flex items-center justify-center text-white">
                <FaTshirt />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-white mb-1">GOH Specialty — Rare Industry Capability</h4>
                <p className="text-[13px] text-white/55 leading-[1.7]">Garments-on-Hanger inspection with proprietary tailor-made steel air containers. AQL and 100% inspection.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/10 flex items-center justify-center text-white">
                <FaBan />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-white mb-1">Zero Factory Influence</h4>
                <p className="text-[13px] text-white/55 leading-[1.7]">Inspectors never contact suppliers. No bribery risk. Fully independent, air-conditioned, dust-free facility.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-[10px] tracking-[0.18em] uppercase text-white/35 mb-3">Trusted by global fashion brands</div>
            <div className="flex flex-wrap gap-2">
              {['TWINSET Milano', 'MarcCain', 'Patrizia Pepe', 'PINKO'].map(brand => (
                <span key={brand} className="font-lora text-[13px] px-[18px] py-2 border border-white/15 text-white/65 transition-colors hover:border-gold hover:text-gold cursor-default bg-navy">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 grid-rows-2 gap-[3px] aspect-square w-full">
            <div className="col-span-2 relative group overflow-hidden bg-white/5">
              <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[#1e2870]/30 transition-colors duration-300 group-hover:bg-[#1e2870]/10" />
            </div>
            <div className="relative group overflow-hidden bg-white/5">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[#1e2870]/30 transition-colors duration-300 group-hover:bg-[#1e2870]/10" />
            </div>
            <div className="relative group overflow-hidden bg-white/5">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[#1e2870]/30 transition-colors duration-300 group-hover:bg-[#1e2870]/10" />
            </div>
          </div>
          <div className="bg-gold/10 border border-gold p-4 flex items-center justify-center gap-3 w-full">
            <FaShieldAlt className="text-gold text-2xl shrink-0" />
            <div className="text-left font-outfit">
              <div className="text-gold font-bold text-[14px]">QIP Certified Facility</div>
              <div className="text-[12px] text-white/55">SOP-driven operations &middot; International QC Standards</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
