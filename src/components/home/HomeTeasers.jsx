import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePersonalization } from '../../context/PersonalizationContext';

// Industry → recommended teaser card id
const INDUSTRY_TEASER_MAP = {
  fashion: 'services',
  electronics: 'qc-platform',
  pharma: 'services',
  automotive: 'services',
  marble: 'offices',
};

const teasers = [
  {
    id: 'services',
    to: '/services',
    label: 'CORE SERVICES',
    title: 'Freight Mastery',
    desc: 'Sea, air, and road freight configured to your specific scale and compliance needs.',
    cta: 'Explore',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8ae7c8c4a4?q=80&w=2070&auto=format&fit=crop',
    industryDesc: {
      pharma: 'GDP-compliant cold chain air & sea freight with full documentation.',
      fashion: 'GOH air containers & import console from Italy and Frankfurt.',
      electronics: 'ESD-safe express air freight with duty optimisation.',
      automotive: 'JIT FTL/LTL delivery for Tier 1 & 2 automotive suppliers.',
    }
  },
  {
    id: 'qc-platform',
    to: '/qc-platform',
    label: 'QC PLATFORM',
    title: 'Zero-Influence Inspection',
    desc: '12,000 sq ft facility. AQL & 100% check. Live webcam access for overseas buyers.',
    cta: 'Inspect',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    industryDesc: {
      fashion: 'AQL & 100% garment inspection. Live webcam for Milan & Frankfurt buyers.',
      electronics: 'Pre-shipment electronics QC — ESD-safe inspection booths.',
      pharma: 'Pharma batch inspections with full compliance documentation.',
    }
  },
  {
    id: 'industries',
    to: '/industries',
    label: 'BY INDUSTRY',
    title: 'Tailored Solutions',
    desc: 'Dedicated supply chains for fashion, electronics, pharma, automotive, and marble.',
    cta: 'Discover',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop',
    industryDesc: {}
  },
  {
    id: 'offices',
    to: '/offices',
    label: 'OUR NETWORK',
    title: 'India-Wide Presence',
    desc: '7 offices across India connecting you securely to 50+ countries worldwide.',
    cta: 'View',
    img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
    industryDesc: {}
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function HomeTeasers() {
  const { industry } = usePersonalization();
  const recommendedId = industry ? INDUSTRY_TEASER_MAP[industry] : null;

  return (
    <section className="py-24 bg-[#f5f4f0] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-4">
            <span className="w-8 h-[2px] bg-gold block" />
            OUR EXPERTISE
            <span className="w-8 h-[2px] bg-gold block" />
          </div>
          <h2 className="font-lora text-[clamp(2.4rem,4vw,3.4rem)] tracking-tight text-navy leading-tight">
            Comprehensive{' '}
            <em className="italic text-gold font-medium">Logistics Framework</em>
          </h2>
          {industry && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[14px] text-text-soft mt-4 font-light"
            >
              Highlighted for your industry
            </motion.p>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teasers.map((t, i) => {
            const isRecommended = t.id === recommendedId;
            const desc = (industry && t.industryDesc?.[industry]) ? t.industryDesc[industry] : t.desc;
            const offset = i % 2 !== 0 ? 'lg:mt-10' : '';

            return (
              <motion.div key={t.id} variants={item} className={offset}>
                <Link to={t.to} className="group block h-full">
                  {/* Image */}
                  <div className={`relative h-[310px] overflow-hidden mb-5 ${isRecommended ? 'ring-2 ring-gold ring-offset-2 ring-offset-[#f5f4f0]' : ''}`}>
                    {isRecommended && (
                      <div className="absolute top-3 left-3 z-20 bg-gold text-black text-[9px] tracking-[0.15em] uppercase font-bold px-2.5 py-1">
                        Recommended
                      </div>
                    )}
                    <div className="absolute inset-0 bg-navy/40 transition-colors duration-500 group-hover:bg-navy/15 z-10" />
                    <img
                      src={t.img}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-[10px] tracking-[0.2em] text-text-muted font-bold uppercase mb-2">{t.label}</div>
                  <h3 className="font-lora text-[1.4rem] text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="text-[13.5px] text-text-soft font-light leading-relaxed mb-4 min-h-[50px]">
                    {desc}
                  </p>
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-navy group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    {t.cta} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
