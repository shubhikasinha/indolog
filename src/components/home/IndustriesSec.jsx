import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTshirt, FaLaptop, FaCapsules, FaCar, FaGem } from 'react-icons/fa';

const industryContent = [
  {
    id: 'rmg',
    icon: <FaTshirt />,
    name: 'RMG & Fashion',
    sub: 'Garments, footwear, leather and accessories',
    heading: 'RMG & Fashion Logistics',
    desc: "Indolog is India's foremost fashion supply chain specialist. We handle garments, footwear, leather, accessories and home furnishings for major European brands. Our GOH capability is one of the rarest in Indian logistics.",
    bullets: [
      'GOH air export with proprietary steel containers',
      'AQL and 100% inspection at our 12,000 sq ft facility',
      'Live webcam for overseas buyers during inspection',
      'Zero destination charges at Chennai and Kolkata',
      'Import console: 10 PMCs per week from Milan and Frankfurt'
    ],
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'electronics',
    icon: <FaLaptop />,
    name: 'Electronics',
    sub: 'High-value, ESD-safe, express delivery',
    heading: 'Electronics Logistics',
    desc: "High-value, ESD-sensitive electronics demand flawless handling. Our teams handle consumer devices to industrial components with full compliance and anti-static protocols.",
    bullets: [
      'Anti-static, climate-controlled handling throughout',
      'High-value cargo insurance and security protocols',
      'Express air freight via ANA, Lufthansa and Condor',
      'Pre-shipment QC inspection at our facility',
      'License-based customs clearance and duty optimisation'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'pharma',
    icon: <FaCapsules />,
    name: 'Pharma & Healthcare',
    sub: 'GDP-compliant, temperature-controlled',
    heading: 'Pharma & Healthcare Logistics',
    desc: "Pharmaceutical cargo demands the highest compliance. IATA certified, GDP-trained team. Every shipment is tracked and documented from pickup to delivery.",
    bullets: [
      'GDP-compliant handling and full documentation',
      'Temperature monitoring across entire journey',
      'IATA certified pharma-grade air freight',
      'Express cold chain solutions available',
      'Regulatory compliance support and guidance'
    ],
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'auto',
    icon: <FaCar />,
    name: 'Automotive',
    sub: 'JIT, FTL/LTL, heavy and precision parts',
    heading: 'Automotive Logistics',
    desc: "Precision parts to large sub-assemblies — Indolog serves Tier 1 and Tier 2 suppliers across India with JIT delivery and full road and ocean freight solutions.",
    bullets: [
      'JIT delivery schedules for assembly lines',
      'Heavy and oversized cargo handling',
      'FTL and LTL road freight across all of India',
      'Ocean freight for bulk auto parts export',
      'Warehousing near major manufacturing clusters'
    ],
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'marble',
    icon: <FaGem />,
    name: 'Marble & Stone',
    sub: 'Heavy cargo, specialised crating, FCL',
    heading: 'Marble, Stone and Heavy Cargo',
    desc: "Specialised crating, weight distribution expertise and careful port handling for marble and stone exports from Rajasthan and Gujarat to global markets.",
    bullets: [
      'Specialised wooden crating and steel framing',
      'Heavy lift and breakbulk capability',
      'FCL ocean freight with weight distribution management',
      'Export from Rajasthan and Gujarat ports',
      'Pre-shipment photo documentation included'
    ],
    image: 'https://images.unsplash.com/photo-1620241608701-94ef138c7ea9?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function IndustriesSec() {
  const [active, setActive] = useState(industryContent[0]);

  return (
    <section id="industries" className="py-24 bg-off px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex justify-center items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-navy font-semibold mb-3.5 mx-auto">
            <span className="w-7 h-[2px] bg-gold block"></span>
            TAILORED TO YOU
            <span className="w-7 h-[2px] bg-gold block"></span>
          </div>
          <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] tracking-tight text-text leading-tight mb-4">
            Solutions by <em className="italic text-navy">Industry</em>
          </h2>
          <p className="text-[15px] text-text-soft mx-auto max-w-[600px] font-light">
            Click your industry — we show you exactly how Indolog serves your specific cargo, quality and compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-[3px] bg-border mt-12">
          {industryContent.map((item) => {
            const isActive = active.id === item.id;
            return (
              <div 
                key={item.id}
                onClick={() => setActive(item)}
                className={`p-6 cursor-pointer transition-colors duration-300 border-t-4 relative ${
                  isActive ? 'bg-navy border-gold' : 'bg-white border-transparent hover:border-gold hover:bg-navy group'
                }`}
              >
                <div className={`text-3xl mb-4 ${isActive ? 'text-white' : 'text-text group-hover:text-white'}`}>
                  {item.icon}
                </div>
                <h4 className={`font-bold text-[13px] tracking-[0.05em] uppercase mb-1.5 ${isActive ? 'text-white' : 'text-text group-hover:text-white'}`}>
                  {item.name}
                </h4>
                <p className={`text-[12px] leading-[1.6] ${isActive ? 'text-white/60' : 'text-text-soft group-hover:text-white/60'}`}>
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-border mt-[3px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0"
            >
              <div className="p-12">
                <h3 className="font-lora text-[1.4rem] text-navy mb-3 font-medium">{active.heading}</h3>
                <p className="text-[14px] text-text-soft leading-[1.85] mb-6 font-light">{active.desc}</p>
                <div className="flex flex-col gap-2.5">
                  {active.bullets.map((b, i) => (
                    <div key={i} className="flex gap-2.5 items-start text-[13px] text-text-mid font-light">
                      <span className="text-gold font-bold shrink-0 mt-[1px]">&rarr;</span>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[320px] bg-cover bg-center" style={{ backgroundImage: `url(${active.image})`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e2870]/60 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
