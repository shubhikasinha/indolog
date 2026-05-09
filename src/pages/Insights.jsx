import InnerPageHero from '../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';

const articles = [
  {
    date: 'April 2026',
    category: 'Industry',
    title: 'Why Factory-Controlled QC is Risky for European Fashion Buyers',
    excerpt: 'When the supplier runs the QC, the inspector reports to the factory manager — not to the buyer. Here is why independent third-party inspection changes the risk equation completely.',
    readTime: '5 min read',
  },
  {
    date: 'March 2026',
    category: 'Trade Update',
    title: 'India-EU Trade: What the FTA Negotiations Mean for Garment Exporters',
    excerpt: 'A potential India-EU FTA could reduce import duties on Indian textiles and garments from 12% to near-zero. We break down what exporters should prepare for today.',
    readTime: '4 min read',
  },
  {
    date: 'March 2026',
    category: 'Operations',
    title: 'GOH Containers: The Definitive Guide for Garment Logistics',
    excerpt: 'Garments-on-Hanger containers eliminate folding damage, reduce re-pressing costs at destination, and speed up boutique replenishment. How do they work and when should you use them?',
    readTime: '6 min read',
  },
  {
    date: 'February 2026',
    category: 'Events',
    title: 'Indolog at Intermodal South America 2026, São Paulo',
    excerpt: 'Our team attended Intermodal SA this year, connecting with freight partners from Brazil, Argentina, and Chile. Key takeaways on South American logistics lanes and opportunities.',
    readTime: '3 min read',
  },
  {
    date: 'February 2026',
    category: 'Compliance',
    title: 'India DPDP Act 2023: What Exporters Need to Know',
    excerpt: 'The Digital Personal Data Protection Act 2023 comes into force for businesses collecting Indian customer data. Key obligations for logistics companies and exporters.',
    readTime: '4 min read',
  },
  {
    date: 'January 2026',
    category: 'Operations',
    title: 'Multimodal vs Full Air: The Real Cost Comparison for Time-Sensitive Cargo',
    excerpt: 'Air freight is fast but expensive. Sea freight is cheap but slow. Multimodal splits the difference — but the right answer depends on your specific lane, cargo, and buyer deadline.',
    readTime: '5 min read',
  },
];

const categoryColors = {
  Industry: 'bg-navy/10 text-navy',
  'Trade Update': 'bg-gold/15 text-gold',
  Operations: 'bg-green-100 text-green-700',
  Events: 'bg-purple-100 text-purple-700',
  Compliance: 'bg-red-100 text-red-700',
};

export default function Insights() {
  return (
    <>
      <InnerPageHero
        title="Insights & Updates"
        subtitle="Freight intelligence, trade updates, and operational guides from the Indolog team."
        bgImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0] min-h-screen">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">

          <div className="mb-16">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />LATEST
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy leading-tight">
              Freight Intelligence,<br /><em className="italic text-gold font-medium">From the Field</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <div key={i} className="bg-white border border-border flex flex-col group">
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 ${categoryColors[a.category] || 'bg-slate text-navy'}`}>
                      {a.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <FaCalendar className="text-[10px]" />{a.date}
                    </span>
                  </div>
                  <h3 className="font-lora text-[1.1rem] text-navy mb-3 leading-[1.35] group-hover:text-gold transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[13px] text-text-soft font-light leading-[1.75] flex-1">{a.excerpt}</p>
                </div>
                <div className="px-7 pb-7 flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">{a.readTime}</span>
                  <button className="flex items-center gap-1.5 text-[12px] font-semibold text-navy group-hover:text-gold transition-colors">
                    Read more <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-navy text-white p-12 text-center">
            <h3 className="font-lora text-[1.8rem] mb-4">Stay Ahead of the Freight Market</h3>
            <p className="text-[14px] text-white/60 mb-8 max-w-[480px] mx-auto font-light leading-[1.8]">
              Monthly rate alerts, regulatory updates, and trade news — direct to your inbox. No spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-3 text-[13px] outline-none focus:border-gold placeholder:text-white/30"
              />
              <button className="px-6 py-3 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors whitespace-nowrap">
                Subscribe →
              </button>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
