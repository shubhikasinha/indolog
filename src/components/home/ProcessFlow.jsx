import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaTruckLoading, FaSearch, FaPlane, FaGlobeAsia, FaHandshake
} from 'react-icons/fa';
import { MdWarehouse } from 'react-icons/md';

const steps = [
  {
    num: '01',
    icon: FaTruckLoading,
    label: 'Pickup',
    title: 'Collected from Your Door',
    body: 'Our team personally arrives at your warehouse, factory or office — anywhere in India. No middle-men, no confusion. Real people handling your cargo from the very first moment.',
    accent: '#c4a44d',
  },
  {
    num: '02',
    icon: FaSearch,
    label: 'Inspection & Planning',
    title: 'Smart Routing + Optional QC',
    body: 'We analyse the optimal air, sea or hybrid route for your cargo. On request, our 12,000 sq ft QC facility verifies quality, packaging, labelling and documentation before anything moves.',
    accent: '#c4a44d',
  },
  {
    num: '03',
    icon: FaPlane,
    label: 'Secure Loading',
    title: 'Secure Load & Global Dispatch',
    body: 'Cargo is carefully loaded into aircraft or ships with real-time tracking activated from the moment it leaves shore. Air, sea, multimodal — all under one contract, one accountability.',
    accent: '#c4a44d',
  },
  {
    num: '04',
    icon: FaGlobeAsia,
    label: 'Destination Arrival',
    title: 'In-Country Customs & Handling',
    body: 'Cargo arrives at the destination hub — Europe, Asia, Americas. We manage full customs clearance, local documentation and last-mile logistics so you face zero stress at the receiving end.',
    accent: '#c4a44d',
  },
  {
    num: '05',
    icon: FaHandshake,
    label: 'Final Delivery',
    title: 'Person-to-Person Handover',
    body: 'Direct, verifiable delivery to the recipient company. Human-to-human handover — not a drop at the gate. Full accountability from origin pickup to destination delivery, documented.',
    accent: '#c4a44d',
  },
];

const routePoints = [
  { x: '22%', y: '38%', label: 'New Delhi' },
  { x: '38%', y: '50%', label: 'Mumbai' },
  { x: '52%', y: '42%', label: 'Dubai' },
  { x: '62%', y: '28%', label: 'Frankfurt' },
  { x: '58%', y: '32%', label: 'Milan' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={item}
      className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Step number + icon column */}
      <div className="flex-shrink-0 flex flex-col items-center gap-3 w-16 md:w-20">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#111828] border border-[#c4a44d]/30 flex items-center justify-center relative group-hover:border-gold transition-colors duration-300">
          <Icon className="text-[#c4a44d] text-2xl md:text-3xl" />
          <span className="absolute -top-2.5 -right-2.5 text-[10px] font-bold tracking-[0.15em] text-[#c4a44d] bg-[#0b0d19] px-1.5">
            {step.num}
          </span>
        </div>
        {/* Connector line */}
        {index < steps.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="w-px h-16 md:h-20 bg-gradient-to-b from-[#c4a44d]/50 to-transparent origin-top hidden md:block"
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-10 md:pb-0 ${isEven ? '' : 'md:text-right'}`}>
        <div className={`inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#c4a44d] font-bold mb-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <span className="w-6 h-px bg-[#c4a44d]" />
          {step.label}
        </div>
        <h3 className="font-lora text-[1.35rem] md:text-[1.6rem] text-white leading-tight mb-3 tracking-tight">
          {step.title}
        </h3>
        <p className="text-[14px] text-white/55 font-light leading-relaxed max-w-[480px]">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessFlow() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="py-28 bg-[#0b0d19] relative overflow-hidden px-6 md:px-12">

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#c4a44d 1px, transparent 1px), linear-gradient(90deg, #c4a44d 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c4a44d]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-[640px]"
        >
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-[#c4a44d] font-bold mb-4">
            <span className="w-8 h-[2px] bg-[#c4a44d] block" />
            HOW IT WORKS
          </div>
          <h2 className="font-lora text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-tight tracking-tight mb-5">
            We understand your business.<br />
            <em className="italic text-[#c4a44d] font-medium">You matter.</em>
          </h2>
          <p className="text-[15px] text-white/50 font-light leading-relaxed">
            From the moment you hand over your cargo, we take complete ownership. Every step — from pickup to final delivery — is handled by our team with full accountability.
          </p>
        </motion.div>

        {/* Two-column layout: steps left, route map right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Steps */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-2"
          >
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </motion.div>

          {/* Route Map */}
          <div className="hidden lg:block sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Process video */}
              <div className="relative w-full overflow-hidden rounded-xl">
                <video
                  src="/process.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              {/* Stats below map */}
              <div className="grid grid-cols-3 gap-px bg-[#c4a44d]/15 mt-px">
                {[
                  { val: '50+', lab: 'Countries' },
                  { val: '12+', lab: 'Years Active' },
                  { val: '7', lab: 'India Offices' },
                ].map((s) => (
                  <div key={s.val} className="bg-[#111828] p-5 text-center">
                    <div className="font-lora text-[1.8rem] text-[#c4a44d] leading-none mb-1">{s.val}</div>
                    <div className="text-[10px] tracking-[0.15em] uppercase text-white/40">{s.lab}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
