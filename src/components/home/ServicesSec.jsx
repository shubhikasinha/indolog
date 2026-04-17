import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaShip, FaPlane, FaTruck, FaClipboardList, FaProjectDiagram, FaBoxOpen,
  FaSearch, FaWarehouse, FaLink, FaUserTie, FaBox, FaHandshake 
} from 'react-icons/fa';

const logisticsServices = [
  {
    num: '01',
    icon: <FaShip />,
    name: 'Ocean Freight',
    desc: 'FCL and LCL across major global shipping lines. Competitive rates, reliable schedules, hazardous and oversized cargo.',
    pills: ['FCL', 'LCL', 'Hazardous', 'Oversized']
  },
  {
    num: '02',
    icon: <FaPlane />,
    name: 'Air Freight',
    desc: 'Express and consolidated air cargo. Proprietary GOH steel containers for garments. ANA, Lufthansa, SriLankan.',
    pills: ['Express', 'Consolidated', 'GOH']
  },
  {
    num: '03',
    icon: <FaTruck />,
    name: 'Road / Inland Haulage',
    desc: 'FTL and LTL across India. Single point of contact for all domestic and cross-border movements with GPS.',
    pills: ['FTL', 'LTL', 'Pan-India']
  },
  {
    num: '04',
    icon: <FaClipboardList />,
    name: 'Customs Brokerage',
    desc: 'License-based clearance — save significantly on duty. Expert compliance at all Indian ports.',
    pills: ['License-Based', 'Duty Savings', 'All Ports']
  },
  {
    num: '05',
    icon: <FaProjectDiagram />,
    name: 'Multimodal Transport',
    desc: 'As a certified MTO, we integrate air, sea, rail and road under a single contract. End-to-end accountability.',
    pills: ['MTO Certified', 'Single Contract']
  },
  {
    num: '06',
    icon: <FaBoxOpen />,
    name: 'Import Console',
    desc: '10 weekly PMC consolidations from Milan and Frankfurt to Delhi, Mumbai, Kolkata and Chennai. Zero dest charges.',
    pills: ['Europe-India', '10 PMC/week', 'Zero Dest. Charges']
  }
];

const valueAddedServices = [
  {
    num: '01',
    icon: <FaSearch />,
    name: 'QC Inspection Platform',
    desc: '12,000 sq ft facility. AQL and 100% inspection. Customers save 20-25%. Live webcam access for overseas clients.',
    pills: ['AQL', '100% Check', 'GOH', 'Webcam']
  },
  {
    num: '02',
    icon: <FaWarehouse />,
    name: 'Warehousing & Distribution',
    desc: 'Strategically located warehouses for storage, JIT fulfillment and distribution. Fully computerised management.',
    pills: ['JIT', 'Fulfilment', 'B2C']
  },
  {
    num: '03',
    icon: <FaLink />,
    name: 'Supply Chain Management',
    desc: 'End-to-end supply chain visibility. Factory audits, production inspection, door-to-door — all under one contract.',
    pills: ['Factory Audit', 'End-to-End']
  },
  {
    num: '04',
    icon: <FaUserTie />,
    name: 'Dedicated Account Management',
    desc: 'A single dedicated manager who knows your cargo, timelines and clients. Available 24/7 for urgent shipments.',
    pills: ['Single PoC', '24/7']
  },
  {
    num: '05',
    icon: <FaBox />,
    name: 'Custom Packaging',
    desc: 'Any packaging type — flat, GOH, branded. Tailor-made steel boxes for Air GOH garments. Full marking.',
    pills: ['GOH Boxes', 'Branded', 'Flat Pack']
  },
  {
    customCta: true,
  }
];

export default function ServicesSec() {
  const [activeTab, setActiveTab] = useState('logistics');

  const services = activeTab === 'logistics' ? logisticsServices : valueAddedServices;

  return (
    <section id="services" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Core Services Img Header */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
           <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-navy font-semibold mb-3.5">
                <span className="w-7 h-[2px] bg-gold block"></span>
                COMPREHENSIVE SOLUTIONS
              </div>
              <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] tracking-tight text-text leading-tight mb-6">
                Our Core <em className="italic text-navy font-medium">Services</em>
              </h2>
              <p className="text-[15px] text-text-soft font-light leading-relaxed mb-6">Indolog offers end-to-end multimodal logistics solutions. Whether it is express air freight, reliable ocean shipping, or domestic haulage — we combine infrastructure, networks, and compliance to secure your global supply chain smoothly.</p>
              
              <div className="flex gap-[2px] mt-2">
                <button 
                  onClick={() => setActiveTab('logistics')}
                  className={`text-[12px] font-semibold tracking-[0.08em] uppercase px-8 py-3.5 transition-all w-full md:w-auto ${
                    activeTab === 'logistics' ? 'bg-navy text-white' : 'bg-[#f5f4f0] text-text-soft hover:bg-slate hover:text-navy'
                  }`}
                >
                  Logistics Mastery
                </button>
                <button 
                  onClick={() => setActiveTab('value')}
                  className={`text-[12px] font-semibold tracking-[0.08em] uppercase px-8 py-3.5 transition-all w-full md:w-auto ${
                    activeTab === 'value' ? 'bg-navy text-white' : 'bg-[#f5f4f0] text-text-soft hover:bg-slate hover:text-navy'
                  }`}
                >
                  Value Added
                </button>
              </div>
           </div>
           
           <div className="w-full lg:w-1/2 relative min-h-[380px] overflow-hidden order-1 lg:order-2 self-stretch bg-slate">
             <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt="Air freight logistics operations" />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
           </div>
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-border"
        >
          {services.map((svc, idx) => {
            if (svc.customCta) {
              return (
                <div key={idx} className="bg-slate border border-dashed border-gray-300 p-10 flex flex-col items-center justify-center text-center">
                  <FaHandshake className="text-5xl text-gold mb-4" />
                  <h3 className="font-lora text-xl text-navy mb-2">Need a custom solution?</h3>
                  <p className="text-[13px] text-text-soft mb-6 font-light">Our experts can tailor logistics precisely for your business processes.</p>
                  <a href="/contact" className="text-[12px] font-bold tracking-[0.1em] uppercase px-6 py-3.5 bg-gold text-black hover:bg-gold-light transition-all">
                    Talk to an Expert
                  </a>
                </div>
              );
            }

            return (
              <div key={idx} className="bg-white p-10 relative overflow-hidden group border-t-4 border-transparent hover:border-navy hover:bg-slate transition-all duration-300 cursor-pointer">
                <div className="font-outfit text-[11px] text-text-muted tracking-[0.15em] mb-6 font-bold group-hover:text-navy transition-colors">
                  {svc.num}
                </div>
                <div className="w-12 h-12 bg-slate flex items-center justify-center text-xl text-text-muted mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                  {svc.icon}
                </div>
                <h3 className="font-lora text-[1.15rem] text-text font-medium mb-3">
                  {svc.name}
                </h3>
                <p className="text-[13px] text-text-soft font-light leading-[1.8] mb-6 min-h-[70px]">
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {svc.pills.map((pill, pIdx) => (
                    <span key={pIdx} className="text-[10px] px-2.5 py-1 tracking-[0.05em] border border-border text-text-muted whitespace-nowrap bg-white font-medium">
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-6 font-bold text-[12px] tracking-[0.08em] text-navy uppercase opacity-0 transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1.5">
                  Learn more &rarr;
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
