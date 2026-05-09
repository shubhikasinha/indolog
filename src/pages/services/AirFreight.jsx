import InnerPageHero from '../../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaPlane, FaFileAlt, FaBolt, FaSnowflake, FaShieldAlt, FaClock } from 'react-icons/fa';


const docs = ['Airway Bill (MAWB / HAWB)', 'Commercial Invoice', 'Packing List', 'Shipper\'s Declaration (DG if applicable)', 'Certificate of Origin', 'Export License (if controlled goods)', 'Insurance Certificate'];

const features = [
  { icon: <FaBolt />, title: 'Express & Economy', desc: 'Next-flight-out options for urgent cargo; economy consolidated services for cost-sensitive shipments.' },
  { icon: <FaSnowflake />, title: 'Temperature-Controlled', desc: 'Pharma GDP-compliant cold chain — 2–8°C and 15–25°C throughout the journey.' },
  { icon: <FaShieldAlt />, title: 'DG Cargo Handling', desc: 'IATA-trained team for dangerous goods — proper declaration, packaging, and aircraft acceptance.' },
  { icon: <FaClock />, title: 'Import Console (Europe)', desc: 'We consolidate shipments from multiple European suppliers into single weekly airlifts to India.' },
];

export default function AirFreight() {
  return (
    <>
      <InnerPageHero
        title="Air Freight"
        subtitle="Express and economy airfreight from all major Indian airports — door-to-door to 200+ countries."
        bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0]">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
          <div className="max-w-[760px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />AIR FREIGHT
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              Speed, Security,<br /><em className="italic text-gold font-medium">Sky-High Reliability</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              When time is critical, Indolog's air freight desk ensures your cargo moves on the next available flight. We work with all major carriers and have dedicated space allocations on key India-Europe and India-GCC lanes. From hazardous goods to cold-chain pharma, our IATA-certified team handles every cargo class.
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
              <h3 className="font-lora text-[1.4rem] mb-5">Get an Air Freight Quote</h3>
              <p className="text-[13px] text-white/60 mb-6 font-light">Share your origin airport, destination, weight and dimensions — we'll revert within 4 business hours.</p>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="block w-full text-center py-3.5 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors">Request Air Freight Quote →</Link>
                <a href="https://wa.me/919266896322?text=Hi%20Indolog%2C%20I%20need%20an%20air%20freight%20quote%20for..." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 bg-[#25d366] text-white font-bold text-[12px] tracking-[0.1em] uppercase hover:opacity-90 transition-opacity">WhatsApp Us →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



