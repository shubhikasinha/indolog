import { useState, useEffect } from 'react';

export default function InnerPageHero({ title, subtitle, bgImage, slides }) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-advance when slides are provided
  useEffect(() => {
    if (!slides || slides.length < 2) return;
    const id = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides]);

  return (
    <div className="relative pt-[180px] pb-[90px] bg-navy-dark overflow-hidden border-b-4 border-gold">

      {/* ── Slideshow background ──────────────────────────────── */}
      {slides && slides.length > 0 ? (
        <div className="absolute inset-0 z-0">
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-[#0b0d19]/75 z-10" />
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ${
                i === activeIdx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Subtle dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'bg-gold w-4' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      ) : bgImage ? (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0b0d19]/80 z-10" />
          <img src={bgImage} alt="" className="w-full h-full object-cover scale-105" />
        </div>
      ) : null}

      {/* ── Text content ─────────────────────────────────────── */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-6">
            <span className="w-7 h-[2px] bg-gold block"></span>
            INDOLOG
            <span className="w-7 h-[2px] bg-gold block"></span>
        </div>
        <h1 className="font-lora text-[clamp(3rem,4.5vw,4rem)] text-white tracking-tight mb-5 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[16px] text-white/60 max-w-[650px] mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
