import InnerPageHero from '../../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaAnchor, FaShip, FaFileAlt, FaBoxOpen, FaClock } from 'react-icons/fa';


const docs = ['Commercial Invoice', 'Packing List', 'Bill of Lading (OBL/Telex)', 'Certificate of Origin', 'Phytosanitary Certificate (if applicable)', 'Fumigation Certificate', 'Insurance Certificate', 'Letter of Credit (if applicable)'];

const features = [
  { icon: <FaShip />, title: 'FCL & LCL', desc: 'Full container loads and less-than-container groupage — we consolidate small shipments weekly.' },
  { icon: <FaAnchor />, title: 'Port-to-Port & Door-to-Door', desc: 'We handle pickup, documentation, port clearance, and last-mile delivery in the destination country.' },
  { icon: <FaBoxOpen />, title: 'GOH & Specialised Containers', desc: 'Garments-on-Hanger (GOH) containers and temperature-controlled reefer units for sensitive cargo.' },
  { icon: <FaClock />, title: 'Real-time Tracking', desc: 'Live container status updates via our ops team throughout the voyage.' },
];

export default function OceanFreight() {
  return (
    <>
      <InnerPageHero
        title="Ocean Freight"
        subtitle="FCL and LCL shipments from every major Indian port to 150+ global destinations — door-to-door."
        bgImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0]">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">

          {/* Intro */}
          <div className="max-w-[760px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />SEA FREIGHT
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              India to the World,<br /><em className="italic text-gold font-medium">by Sea</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              Indolog manages ocean freight exports from all major Indian ports — JNPT/Nhava Sheva, Mundra, Chennai, Kolkata, and Hazira. Whether you need a single LCL box or a full programme of weekly FCL containers, our team handles booking, documentation, customs, and coordination with destination agents.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-border p-7">
                <div className="text-gold text-2xl mb-4">{f.icon}</div>
                <h3 className="font-lora text-[1.1rem] text-navy mb-2">{f.title}</h3>
                <p className="text-[13px] text-text-soft font-light leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>


          {/* Documentation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="font-lora text-[1.6rem] text-navy mb-6">Documentation We Handle</h3>
              <div className="flex flex-col gap-3">
                {docs.map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaFileAlt className="text-gold shrink-0" />
                    <span className="text-[14px] text-text-soft">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy text-white p-10">
              <h3 className="font-lora text-[1.4rem] mb-5">Get a Sea Freight Quote</h3>
              <p className="text-[13px] text-white/60 mb-6 font-light">Tell us your origin, destination, cargo details and we'll revert within 4 business hours.</p>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="block w-full text-center py-3.5 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors">Request Ocean Freight Quote →</Link>
                <a href="https://wa.me/919266896322?text=Hi%20Indolog%2C%20I%20need%20a%20sea%20freight%20quote%20for..." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 bg-[#25d366] text-white font-bold text-[12px] tracking-[0.1em] uppercase hover:opacity-90 transition-opacity">WhatsApp Us →</a>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}



