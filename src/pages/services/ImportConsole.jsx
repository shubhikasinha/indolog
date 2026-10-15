import InnerPageHero from '../../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaShip, FaBoxOpen, FaFileAlt, FaPlane, FaArrowRight, FaUpload, FaDownload } from 'react-icons/fa';

const consolidationTypes = [
  {
    icon: <FaUpload />,
    label: 'EXPORT',
    title: 'Export Consolidation',
    color: 'bg-navy',
    points: [
      'LCL groupage from any Indian port — NSICT, JNPT, Chennai, Kolkata, Mundra',
      'Multi-supplier collection across India into a single FCL or groupage',
      'Weekly fixed-day sailings to Europe, Middle East, and Far East',
      'Full export documentation: SB filing, BL, cert. of origin',
      'Competitive freight rates with consolidator buying power',
    ],
  },
  {
    icon: <FaDownload />,
    label: 'IMPORT',
    title: 'Import Consolidation',
    color: 'bg-gold',
    textColor: 'text-black',
    points: [
      'Weekly air console from Frankfurt, Milan, and Paris into Delhi/Mumbai',
      'LCL sea console from Hamburg, Antwerp, Genova — cost-effective for smaller volumes',
      'Multi-vendor pickup across Europe/Asia consolidated into one shipment',
      'Full import customs filing, duty payment, and last-mile delivery',
      'Fashion season cycles accommodated with guaranteed cut-off schedules',
    ],
  },
];

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
        bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0]">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">

          {/* Intro */}
          <div className="max-w-[760px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />IMPORT CONSOLIDATION
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              Europe to India,<br /><em className="italic text-gold font-medium">Consolidated &amp; Cleared</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              Indolog operates weekly import consolidation services from European fashion hubs into India. Whether you're sourcing fabrics from Italy, machinery from Germany, or samples from multiple vendors across Europe, we collect, consolidate, and deliver to your door — fully cleared, duty paid.
            </p>
          </div>

          {/* Export / Import two-panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border mb-20">
            {consolidationTypes.map((type) => (
              <div key={type.label} className={`${type.color} p-10 text-white`}>
                <div className={`inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-black mb-6 ${type.textColor || 'text-white/70'}`}>
                  <span className="text-xl">{type.icon}</span>
                  {type.label} CONSOLIDATION
                </div>
                <h3 className={`font-lora text-[1.4rem] mb-6 ${type.textColor || 'text-white'}`}>{type.title}</h3>
                <ul className="flex flex-col gap-3">
                  {type.points.map((pt, i) => (
                    <li key={i} className={`flex gap-3 text-[13px] font-light leading-[1.7] ${type.textColor ? 'text-black/70' : 'text-white/70'}`}>
                      <FaArrowRight className={`text-[10px] mt-1 shrink-0 ${type.textColor ? 'text-black/40' : 'text-gold/70'}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Feature cards */}
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

          {/* CTA */}
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
