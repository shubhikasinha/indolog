import { useState, useEffect, useRef } from 'react';
import { FaTshirt, FaLaptop, FaCapsules, FaCar, FaGem } from 'react-icons/fa';
import { HiVolumeUp, HiVolumeOff, HiLocationMarker } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePersonalization } from '../../context/PersonalizationContext';

const industries = [
  {
    id: 'fashion',
    icon: <FaTshirt />,
    name: 'Fashion',
    title: 'RMG & Fashion Logistics',
    desc: 'GOH air containers, AQL & 100% inspection, Import Console from Italy and Germany. Trusted by Twinset, MarcCain, Patrizia Pepe and Pinko.',
    tags: ['GOH Specialist', 'Live Webcam QC', '10 PMC/week', 'Zero Dest. Charges'],
    cta: 'Ship Garments from Europe',
  },
  {
    id: 'electronics',
    icon: <FaLaptop />,
    name: 'Electronics',
    title: 'Electronics Logistics',
    desc: 'Anti-static handling, express air freight, compliance and pre-shipment QC for electronics manufacturers.',
    tags: ['ESD-Safe', 'Express Air', 'QC Platform', 'Duty Optimised'],
    cta: 'Express Air Freight',
  },
  {
    id: 'pharma',
    icon: <FaCapsules />,
    name: 'Pharma',
    title: 'Pharma Logistics',
    desc: 'GDP-compliant, temperature-controlled pharmaceutical logistics. IATA certified. Every step documented.',
    tags: ['GDP Compliant', 'Cold Chain', 'IATA Certified', 'Full Documentation'],
    cta: 'Cold Chain Solutions',
  },
  {
    id: 'automotive',
    icon: <FaCar />,
    name: 'Auto',
    title: 'Automotive Logistics',
    desc: 'JIT delivery, FTL/LTL, ocean freight for parts and assemblies. Tier 1 and 2 suppliers across India.',
    tags: ['JIT Delivery', 'FTL/LTL', 'Tier 1 & 2', 'Breakbulk'],
    cta: 'JIT Automotive Supply',
  },
  {
    id: 'marble',
    icon: <FaGem />,
    name: 'Marble',
    title: 'Marble & Stone Logistics',
    desc: 'Specialised crating, FCL ocean freight and heavy cargo from Rajasthan and Gujarat to global markets.',
    tags: ['FCL Ocean', 'Specialised Crating', 'Heavy Lift', 'Rajasthan/Gujarat'],
    cta: 'Heavy Cargo Logistics',
  }
];

// Slide renderer — handles both image and video types
function Slide({ slide, isActive, onEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (slide.type === 'video' && videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, slide.type]);

  const cls = `absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ${
    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
  }`;

  if (slide.type === 'video') {
    return (
      <video
        ref={videoRef}
        src={slide.src}
        muted playsInline
        onEnded={isActive ? onEnded : undefined}
        className={cls}
        aria-label={slide.alt}
      />
    );
  }
  return (
    <img
      src={slide.src}
      alt={slide.alt}
      className={cls}
      loading="eager"
      fetchpriority={isActive ? 'high' : 'low'}
    />
  );
}

export default function Hero() {
  const { slides, industry, geoLabel, loading } = usePersonalization();

  const [activeIdx, setActiveIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [personalized, setPersonalized] = useState(false);
  const timerRef = useRef(null);

  const advanceSlide = () => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
  };

  // Auto-advance slides: intervals for images, onEnded for videos
  useEffect(() => {
    clearInterval(timerRef.current);
    const currentSlide = slides[activeIdx];
    
    // Only use interval if it's an image. Videos will trigger advanceSlide via onEnded.
    // Also provide a fallback 12s timer just in case a video freezes or fails to load
    const duration = currentSlide?.type === 'video' ? 25000 : 7000;
    
    timerRef.current = setInterval(advanceSlide, duration);
    return () => clearInterval(timerRef.current);
  }, [activeIdx, slides]);

  // When personalization resolves, update industry & animate in
  useEffect(() => {
    if (!loading && industry) {
      const found = industries.find(i => i.id === industry);
      if (found) {
        setActiveIndustry(found);
        setPersonalized(true);
      }
    }
    if (!loading && !industry) {
      setPersonalized(true); // Still mark as resolved even without match
    }
  }, [loading, industry]);

  const handleSlideClick = (idx) => {
    setActiveIdx(idx);
  };

  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">

      {/* ── Slide backgrounds ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-navy-dark">
        <AnimatePresence>
          {slides.map((slide, idx) => (
            <Slide key={`${slide.src}-${idx}`} slide={slide} isActive={idx === activeIdx} onEnded={advanceSlide} />
          ))}
        </AnimatePresence>
        {/* Gradient veil — kept light so video shows through */}
        <div className="absolute inset-0 z-[11] bg-gradient-to-r from-[#0b0d19cc] via-[#0b0d1960] to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 z-[12] bg-gradient-to-t from-[#0b0d19] to-transparent" />
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-[1320px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-20 h-full pt-28 pb-20 lg:pt-0 lg:pb-0">

        {/* Left — Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-white flex-1 flex flex-col justify-center max-w-[620px]"
        >
          {/* Geo badge — appears after personalization resolves */}
          <AnimatePresence>
            {personalized && geoLabel && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-white/50 mb-3 font-medium"
              >
                <HiLocationMarker className="text-gold text-sm" />
                Serving {geoLabel}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-gold mb-6 font-bold">
            <span className="w-10 h-[1px] bg-gold block" />
            India's Premier Freight Partner
          </div>

          {/* Headline — personalized subtitle when industry detected */}
          <h1 className="font-lora text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.08] tracking-[-0.025em] mb-7 drop-shadow-lg">
            {personalized && industry ? (
              <>
                Precision{' '}
                <em className="text-gold-light italic">
                  {industries.find(i => i.id === industry)?.name ?? 'Logistics'}
                </em>
                {' '}Solutions<br />
                <span className="text-white/90">for India & Beyond</span>
              </>
            ) : (
              <>
                Your Ultimate<br />
                <em className="text-gold-light italic tracking-tight">Logistics Partner</em><br />
                <span className="text-white/90">for Seamless Success</span>
              </>
            )}
          </h1>

          <p className="text-[14px] text-white/65 leading-[1.9] mb-8 font-light max-w-[420px]">
            {personalized && industry
              ? industries.find(i => i.id === industry)?.desc
              : 'Freight forwarding, QC inspection, and supply chain solutions — one trusted partner for India and 50+ countries.'
            }
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-4 bg-gold text-black transition-all duration-300 hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(196,164,77,0.4)]"
            >
              {personalized && industry
                ? industries.find(i => i.id === industry)?.cta ?? 'Get Free Quote'
                : 'Get Free Quote'
              }
            </Link>
            <Link
              to="/services"
              className="text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-4 border border-white/35 text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Right — Industry switcher (compact) */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="hidden lg:flex flex-col backdrop-blur-2xl bg-white/[0.05] border border-white/10 p-5 w-full max-w-[340px] relative"
        >
          {/* Personalized indicator */}
          <AnimatePresence>
            {personalized && industry && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-3 left-4 bg-gold text-black text-[8px] tracking-[0.15em] uppercase font-bold px-2.5 py-0.5"
              >
                Personalised
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-[9px] tracking-[0.25em] uppercase text-white/35 mb-3 font-bold">Industry</div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind)}
                className={`text-[10px] font-semibold px-2.5 py-1 flex items-center gap-1 transition-all duration-200 tracking-[0.05em] uppercase border ${
                  activeIndustry.id === ind.id
                    ? 'bg-gold border-gold text-black'
                    : 'border-white/20 text-white/50 hover:bg-white/8 hover:text-white'
                }`}
              >
                <span className="text-[9px]">{ind.icon}</span>
                {ind.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-lora text-[1.1rem] text-white mb-1.5 leading-snug">
                {activeIndustry.title}
              </h3>
              <div className="flex flex-wrap gap-1">
                {activeIndustry.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] px-2 py-0.5 bg-white/8 border border-white/12 text-white/55 whitespace-nowrap tracking-[0.04em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Progress dots ─────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSlideClick(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-[3px] rounded-full transition-all duration-400 ${
              idx === activeIdx ? 'w-8 bg-gold' : 'w-2 bg-white/30 hover:bg-white/55'
            }`}
          />
        ))}
      </div>

      {/* ── Mute toggle (only for video slides) ───────────────────── */}
      {slides[activeIdx]?.type === 'video' && (
        <button
          className="absolute bottom-7 right-7 lg:right-12 z-20 w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          onClick={() => setIsMuted(!isMuted)}
          aria-label="Toggle mute"
        >
          {isMuted ? <HiVolumeOff className="text-sm" /> : <HiVolumeUp className="text-sm" />}
        </button>
      )}
    </section>
  );
}
