import InnerPageHero from '../../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaExchangeAlt, FaTruck, FaShip, FaPlane } from 'react-icons/fa';

export default function Multimodal() {
  const benefits = [
    { title: 'Cost Optimisation', desc: 'Combine sea and air legs to save 30–45% versus pure express airfreight while still meeting deadlines.' },
    { title: 'Single Point of Contact', desc: 'One Indolog account manager coordinates across all modes — no juggling between carriers.' },
    { title: 'Reduced Carbon Footprint', desc: 'Fewer air-only shipments means lower emissions per kg — preferred by EU sustainability teams.' },
    { title: 'Flexible Scheduling', desc: 'Weekly fixed-day departures on key corridors: India → Europe, India → USA, India → Middle East.' },
  ];
  return (
    <>
      <InnerPageHero
        title="Multimodal Transport"
        subtitle="One consignment, multiple modes — seamlessly coordinated for cost, speed, and reliability."
        bgImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0]">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
          <div className="max-w-[760px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />MTO LICENSED
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              The Best of Every Mode,<br /><em className="italic text-gold font-medium">Under One Contract</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              Indolog is an MTO-licensed Multimodal Transport Operator. We issue a single Multimodal Transport Document covering road pickup, ocean or air transport, and last-mile delivery. One contract, one liability, zero coordination gaps.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-20 flex-wrap">
            {[{ icon: <FaTruck />, label: 'Road' }, { icon: <FaShip />, label: 'Sea' }, { icon: <FaPlane />, label: 'Air' }].map((m, i, arr) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-white border border-border p-8 flex flex-col items-center gap-3 min-w-[120px]">
                  <div className="text-gold text-3xl">{m.icon}</div>
                  <span className="text-[12px] tracking-[0.12em] uppercase font-bold text-navy">{m.label}</span>
                </div>
                {i < arr.length - 1 && <FaExchangeAlt className="text-gold text-xl" />}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-border p-8">
                <div className="w-2 h-8 bg-gold mb-4" />
                <h3 className="font-lora text-[1.1rem] text-navy mb-2">{b.title}</h3>
                <p className="text-[13px] text-text-soft font-light leading-[1.7]">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-navy text-white p-10 max-w-[500px]">
            <h3 className="font-lora text-[1.4rem] mb-5">Get a Multimodal Quote</h3>
            <p className="text-[13px] text-white/60 mb-6 font-light">Share your origin, destination, cargo, and deadline. We'll design the optimal multimodal solution.</p>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="block w-full text-center py-3.5 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors">Request Quote →</Link>
              <a href="https://wa.me/919266896322?text=Hi%20Indolog%2C%20I%20need%20a%20multimodal%20transport%20quote..." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 bg-[#25d366] text-white font-bold text-[12px] tracking-[0.1em] uppercase hover:opacity-90">WhatsApp Us →</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



