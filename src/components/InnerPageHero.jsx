export default function InnerPageHero({ title, subtitle, bgImage }) {
  return (
    <div className="relative pt-[180px] pb-[90px] bg-navy-dark overflow-hidden border-b-4 border-gold">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0b0d19]/80 z-10" />
          <img src={bgImage} alt="" className="w-full h-full object-cover scale-105" />
        </div>
      )}
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
