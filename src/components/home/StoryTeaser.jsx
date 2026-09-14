import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function StoryTeaser() {
  return (
    <section className="bg-navy py-24 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">

        {/* Label */}
        <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-10">
          <span className="w-7 h-[2px] bg-gold block" />
          THE INDOLOG STORY
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-lora text-[clamp(2rem,3.5vw,3.2rem)] text-white leading-[1.15] tracking-tight mb-6">
              Real people.{' '}
              <em className="italic text-gold-light font-light">Real cargo.</em>
              <br />A story worth knowing.
            </h2>

            <p className="text-[15px] text-white/55 font-light leading-[1.9] mb-4 max-w-[460px]">
              From a single desk in New Delhi to 7 offices across India — meet the team behind India's most trusted freight &amp; QC partner.
            </p>
            <p className="text-[13px] text-white/30 font-light leading-[1.8] mb-10 max-w-[420px]">
              Every event, every milestone, every face — it's all in our story. Click to find out who we are.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.12em] uppercase px-7 py-4 bg-gold text-black transition-all duration-300 hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(196,164,77,0.4)]"
              >
                Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.12em] uppercase px-7 py-4 border border-white/20 text-white/55 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Insights →
              </Link>
            </div>
          </motion.div>

          {/* Right — us.jpeg with dark navy overlay + click CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <Link to="/about" className="group block relative aspect-[4/3] overflow-hidden">
              {/* The photo */}
              <img
                src="/us.jpeg"
                alt="The Indolog Team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Dark navy film */}
              <div className="absolute inset-0 bg-navy/60 transition-colors duration-500 group-hover:bg-navy/45" />

              {/* Centered CTA text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8">
                <div className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold mb-1">
                  Our Team
                </div>
                <h3 className="font-lora text-[clamp(1.4rem,2.5vw,2rem)] text-white leading-[1.2]">
                  The people who make it happen
                </h3>
                <p className="text-[13px] text-white/55 font-light max-w-[300px] leading-[1.7]">
                  10+ years. 7 cities. One family.
                </p>

                {/* Button */}
                <div className="mt-4 inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.14em] uppercase px-7 py-3.5 border border-white/30 text-white/80 group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all duration-400">
                  Click to know more →
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/60 transition-all duration-300 group-hover:border-gold" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/60 transition-all duration-300 group-hover:border-gold" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
