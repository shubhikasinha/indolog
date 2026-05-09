import InnerPageHero from '../../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaTruck, FaRoute, FaFileAlt, FaWarehouse, FaMapMarkerAlt } from 'react-icons/fa';

const features = [
  { icon: <FaTruck />, title: 'FTL & LTL', desc: 'Full truckload and part-load groupage across India — PAN-India coverage from 7 branch offices.' },
  { icon: <FaRoute />, title: 'Door-to-Port', desc: 'Factory pickups in any city, consolidated to the nearest port or ICD for export loading.' },
  { icon: <FaWarehouse />, title: 'Cross-Docking', desc: 'Intermediate warehousing and consolidation before onward shipment — no double-handling surcharges.' },
  { icon: <FaMapMarkerAlt />, title: 'Inland Container Depots', desc: 'CFS and ICD stuffing at Delhi, Ludhiana, Kanpur, Ahmedabad, Hyderabad, and Bangalore.' },
];

const routes = [
  { from: 'Delhi NCR', to: 'JNPT (Mumbai)' },
  { from: 'Ludhiana', to: 'JNPT (Mumbai)' },
  { from: 'Surat / Ahmedabad', to: 'Mundra' },
  { from: 'Tirupur / Coimbatore', to: 'Chennai Port' },
  { from: 'Bangalore', to: 'Chennai Port' },
  { from: 'Kolkata', to: 'Kolkata Port' },
];

export default function RoadFreight() {
  return (
    <>
      <InnerPageHero
        title="Road Freight"
        subtitle="Reliable inland transport connecting your factory gate to India's major ports and ICDs."
        bgImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0]">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
          <div className="max-w-[760px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />INLAND TRANSPORT
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              Factory to Port,<br /><em className="italic text-gold font-medium">Without the Chaos</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              Our road freight network covers all major garment clusters, industrial zones, and manufacturing hubs across India. With 7 branch offices and a trusted fleet of container trucks and trailers, Indolog moves your cargo from your factory floor to the port — safely, on schedule, with full documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-border p-7">
                <div className="text-gold text-2xl mb-4">{f.icon}</div>
                <h3 className="font-lora text-[1.1rem] text-navy mb-2">{f.title}</h3>
                <p className="text-[13px] text-text-soft font-light leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mb-20">
            <h3 className="font-lora text-[1.6rem] text-navy mb-8">Key Road Corridors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-border">
              {routes.map((r, i) => (
                <div key={i} className="bg-white p-6 flex items-center gap-4">
                  <FaTruck className="text-gold text-xl shrink-0" />
                  <div>
                    <div className="text-[13px] font-medium text-navy">{r.from}</div>
                    <div className="text-[12px] text-text-soft">→ {r.to}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy text-white p-10 max-w-[500px]">
            <h3 className="font-lora text-[1.4rem] mb-5">Get a Road Freight Quote</h3>
            <p className="text-[13px] text-white/60 mb-6 font-light">Share your pickup location, destination port, and cargo size — we'll quote within 4 hours.</p>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="block w-full text-center py-3.5 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors">Request Road Freight Quote →</Link>
              <a href="https://wa.me/919266896322?text=Hi%20Indolog%2C%20I%20need%20a%20road%20freight%20quote..." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 bg-[#25d366] text-white font-bold text-[12px] tracking-[0.1em] uppercase hover:opacity-90">WhatsApp Us →</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



