import { Link } from 'react-router-dom';
import { usePersonalization } from '../../context/PersonalizationContext';
import { motion, AnimatePresence } from 'framer-motion';

const INDUSTRY_COPY = {
  fashion: {
    headline: 'Ship your garments from Milan & Frankfurt',
    sub: '10 weekly PMC consolidations. Zero destination charges. GOH specialist.',
    cta: 'Get Garment Quote',
  },
  pharma: {
    headline: 'GDP-compliant cold chain logistics',
    sub: 'IATA certified. Temperature-controlled. Full documentation on every move.',
    cta: 'Cold Chain Solutions',
  },
  electronics: {
    headline: 'Express air freight for electronics',
    sub: 'ESD-safe handling. Duty optimisation. Pre-shipment QC platform included.',
    cta: 'Express Air Quote',
  },
  automotive: {
    headline: 'JIT delivery for your supply chain',
    sub: 'FTL/LTL across India. Tier 1 & 2 precision logistics. Breakbulk specialists.',
    cta: 'Automotive Logistics',
  },
  marble: {
    headline: 'Heavy cargo from Rajasthan to the world',
    sub: 'Specialised crating. FCL ocean freight. Rajasthan & Gujarat specialists.',
    cta: 'Heavy Cargo Quote',
  },
};

const DEFAULT = {
  headline: 'Ready to ship with confidence?',
  sub: 'Free quote within 24 hours. No obligation. Call us anytime.',
  cta: 'Request Free Quote',
};

export default function CtaBand() {
  const { industry, loading } = usePersonalization();
  const copy = (!loading && industry && INDUSTRY_COPY[industry]) ? INDUSTRY_COPY[industry] : DEFAULT;

  return (
    <section className="bg-gold py-16 px-6 md:px-12 overflow-hidden relative">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C/svg%3E')]" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between md:items-center gap-8 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={copy.headline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-lora text-3xl md:text-[2.1rem] text-black tracking-[-0.02em] font-medium leading-tight mb-2">
              {copy.headline}
            </h2>
            <p className="text-[14px] text-black/60 font-medium">
              {copy.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 mx-auto md:mx-0">
          <Link
            to="/contact"
            className="text-[12px] font-bold tracking-[0.08em] uppercase px-8 py-4 bg-black text-white transition-all hover:bg-[#111] hover:-translate-y-px text-center"
          >
            {copy.cta}
          </Link>
          <a
            href="tel:+919266896322"
            className="text-[12px] font-bold tracking-[0.08em] uppercase px-6 py-3.5 border-2 border-black/40 text-black bg-transparent transition-all hover:bg-black/5 flex items-center justify-center"
          >
            +91-9266896322
          </a>
        </div>
      </div>
    </section>
  );
}
