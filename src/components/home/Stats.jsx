import CountUp from 'react-countup';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { usePersonalization } from '../../context/PersonalizationContext';

const BASE_STATS = [
  { num: 12, suffix: '+', label: 'YEARS OF EXCELLENCE' },
  { num: 50, suffix: '+', label: 'COUNTRIES SERVED' },
  { num: 15000, suffix: '+', label: 'SHIPMENTS HANDLED' },
  { num: 7, suffix: '', label: 'INDIAN OFFICES' },
];

// For Indian visitors — emphasise domestic network
const INDIA_STATS = [
  { num: 12, suffix: '+', label: 'YEARS OF EXCELLENCE' },
  { num: 7, suffix: '', label: 'OFFICES ACROSS INDIA' },
  { num: 15000, suffix: '+', label: 'SHIPMENTS HANDLED' },
  { num: 50, suffix: '+', label: 'COUNTRIES CONNECTED' },
];

// For international visitors — emphasise global reach
const INTL_STATS = [
  { num: 50, suffix: '+', label: 'COUNTRIES REACHED' },
  { num: 12, suffix: '+', label: 'YEARS OF EXCELLENCE' },
  { num: 15000, suffix: '+', label: 'SHIPMENTS HANDLED' },
  { num: 7, suffix: '', label: 'INDIA OFFICES' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { geo, loading } = usePersonalization();

  const isIndian = !loading && geo?.country_code === 'IN';
  const isInternational = !loading && geo && geo.country_code !== 'IN';

  const stats = isIndian ? INDIA_STATS : isInternational ? INTL_STATS : BASE_STATS;

  return (
    <section
      ref={ref}
      className="bg-navy border-b-[4px] border-gold"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={String(loading)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={`${stat.label}-${idx}`}
              className={`py-10 px-4 text-center ${idx !== stats.length - 1 ? 'border-r border-white/10' : ''}`}
            >
              <div className="font-lora text-4xl md:text-[3rem] text-gold tracking-tight leading-none mb-2">
                {isInView ? (
                  <CountUp end={stat.num} duration={2.5} separator="," />
                ) : '0'}
                {stat.suffix}
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-white/50 font-semibold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
