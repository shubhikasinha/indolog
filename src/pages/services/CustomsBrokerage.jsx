import InnerPageHero from '../../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaStamp, FaFileContract, FaShieldAlt, FaLock, FaCheckCircle } from 'react-icons/fa';

const features = [
  { icon: <FaStamp />, title: 'Export Customs Clearance', desc: 'Filing of Shipping Bills, SB verification, LEO (Let Export Order) — all major ports covered.' },
  { icon: <FaFileContract />, title: 'Import Customs Clearance', desc: 'BoE filing, duty calculation, advance customs coordination, and ICES2.0 system filing.' },
  { icon: <FaShieldAlt />, title: 'Free Trade Agreement (FTA)', desc: 'Leveraging ASEAN, EU, UAE, and other FTAs to reduce your effective import duty.' },
  { icon: <FaLock />, title: 'Drawback & IGST Refunds', desc: 'Duty drawback claims, IGST refund follow-ups, and RoDTEP benefit maximisation.' },
];

const docs = [
  'Import Export Code (IEC) Assistance',
  'AD Code Registration at Ports',
  'Shipping Bill Filing (ICEGATE)',
  'Bill of Entry Filing',
  'DGFT Licence Applications (SEIS, AA, EPCG)',
  'Preferential Certificate of Origin',
  'Free Trade Agreement Guidance',
  'Post-Shipment Documentation',
];

export default function CustomsBrokerage() {
  return (
    <>
      <InnerPageHero
        title="Customs Brokerage"
        subtitle="ICEGATE-registered customs agents handling all export and import clearances across India's major ports."
        bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0]">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
          <div className="max-w-[760px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />CUSTOMS & COMPLIANCE
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              Compliant. Fast.<br /><em className="italic text-gold font-medium">Zero Surprises at the Port</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              Indian customs regulations are complex and constantly evolving. Indolog's licensed customs brokers operate at JNPT, Mundra, Chennai, Kolkata, Delhi Air Cargo, and Delhi ICD — covering export, import, and transit clearances with full ICEGATE access. We handle the filings so you focus on your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-border p-8 flex gap-5">
                <div className="text-gold text-2xl shrink-0 mt-1">{f.icon}</div>
                <div>
                  <h3 className="font-lora text-[1.1rem] text-navy mb-2">{f.title}</h3>
                  <p className="text-[13px] text-text-soft font-light leading-[1.7]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-lora text-[1.6rem] text-navy mb-6">Services & Filings</h3>
              <div className="flex flex-col gap-3">
                {docs.map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-gold shrink-0" />
                    <span className="text-[14px] text-text-soft">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy text-white p-10">
              <h3 className="font-lora text-[1.4rem] mb-5">Customs Clearance Query</h3>
              <p className="text-[13px] text-white/60 mb-6 font-light">Have a classification question, duty concern, or urgent clearance need? Reach us directly.</p>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="block w-full text-center py-3.5 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors">Speak to Our CHA →</Link>
                <a href="https://wa.me/919266896322?text=Hi%20Indolog%2C%20I%20have%20a%20customs%20clearance%20query..." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 bg-[#25d366] text-white font-bold text-[12px] tracking-[0.1em] uppercase hover:opacity-90">WhatsApp Us →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



