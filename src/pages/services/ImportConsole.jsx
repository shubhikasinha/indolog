import InnerPageHero from '../../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaShip, FaBoxOpen, FaFileAlt, FaPlane } from 'react-icons/fa';

const features = [
  { icon: <FaPlane />, title: 'Weekly Air Console (Europe → India)', desc: 'Consolidated weekly airlifts from Frankfurt, Milan, and Paris — ideal for fashion buyers sourcing from multiple European vendors.' },
  { icon: <FaShip />, title: 'LCL Sea Console', desc: 'Less-than-container groupage from Hamburg, Antwerp, and Genova — cost-effective for smaller import volumes.' },
  { icon: <FaBoxOpen />, title: 'Multi-Vendor Consolidation', desc: 'We collect from multiple suppliers across Europe or Asia and consolidate into a single shipment to India.' },
  { icon: <FaFileAlt />, title: 'Full Import Clearance', desc: 'Our team handles import customs filing, duty payment, and last-mile delivery to your warehouse.' },
];

export default function ImportConsole() {
  return (
    <>
      <InnerPageHero
        title="Import Console"
        subtitle="Consolidated imports from Europe and Asia — one collection, one shipment, one delivery to your door."
        bgImage="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0]">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
          <div className="max-w-[760px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />IMPORT CONSOLIDATION
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              Europe to India,<br /><em className="italic text-gold font-medium">Consolidated & Cleared</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              Indolog operates weekly import consolidation services from European fashion hubs into India. Whether you're sourcing fabrics from Italy, machinery from Germany, or samples from multiple vendors across Europe, we collect, consolidate, and deliver to your door — fully cleared, duty paid.
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
          <div className="bg-navy text-white p-10 max-w-[500px]">
            <h3 className="font-lora text-[1.4rem] mb-5">Import Console Enquiry</h3>
            <p className="text-[13px] text-white/60 mb-6 font-light">Tell us your suppliers' locations, volumes, and delivery schedule.</p>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="block w-full text-center py-3.5 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors">Request Import Quote →</Link>
              <a href="https://wa.me/919266896322?text=Hi%20Indolog%2C%20I%20need%20an%20import%20console%20quote..." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 bg-[#25d366] text-white font-bold text-[12px] tracking-[0.1em] uppercase hover:opacity-90">WhatsApp Us →</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



