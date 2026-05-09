import InnerPageHero from '../components/InnerPageHero';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const openings = [
  { title: 'Ocean Freight Executive', location: 'New Delhi', type: 'Full-time', desc: 'Handle FCL/LCL export bookings, coordinate with shipping lines, manage documentation for European fashion clients.' },
  { title: 'Import Operations Executive', location: 'New Delhi / Mumbai', type: 'Full-time', desc: 'Manage import clearances, coordinate with CHA, handle client communication for inbound shipments.' },
  { title: 'QC Inspection Coordinator', location: 'Delhi NCR', type: 'Full-time', desc: 'Coordinate live QC inspections at vendor factories. Proficiency in garment inspection standards preferred.' },
  { title: 'Business Development Manager', location: 'Any Branch', type: 'Full-time', desc: 'Identify and onboard new export clients, particularly in RMG/fashion, pharma, and marble sectors.' },
  { title: 'Customer Service Executive', location: 'New Delhi', type: 'Full-time', desc: 'Single point of contact for key accounts — shipment tracking, documentation follow-up, issue resolution.' },
];

const perks = [
  'Competitive salary + performance bonus',
  'Medical insurance coverage',
  'Exposure to international freight & European fashion clients',
  'Fast career growth in a scaling freight forwarder',
  'Collaborative team culture across 7 cities',
  'Learning support for FIATA/IATA certifications',
];

export default function Careers() {
  return (
    <>
      <InnerPageHero
        title="Careers at Indolog"
        subtitle="Join a fast-growing freight forwarder with 7 offices, 50+ country reach, and a premium client base."
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&auto=format&fit=crop"
      />
      <div className="bg-[#f5f4f0] min-h-screen">
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">

          {/* Intro */}
          <div className="max-w-[720px] mb-20">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />JOIN OUR TEAM
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy mb-5 leading-tight">
              Build Your Career<br /><em className="italic text-gold font-medium">in Global Logistics</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.9]">
              Indolog is growing fast. We serve European fashion brands, pharmaceutical exporters, and marble manufacturers — and we need sharp, driven people to grow with us. Whether you're fresh to logistics or an experienced freight professional, we'd love to hear from you.
            </p>
          </div>

          {/* Open Positions */}
          <h3 className="font-lora text-[1.6rem] text-navy mb-8">Current Openings</h3>
          <div className="flex flex-col gap-4 mb-20">
            {openings.map((job, i) => (
              <div key={i} className="bg-white border border-border p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h4 className="font-lora text-[1.1rem] text-navy">{job.title}</h4>
                    <span className="text-[10px] tracking-[0.1em] px-2.5 py-1 bg-gold/15 text-gold font-semibold uppercase">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-text-muted mb-3">
                    <FaMapMarkerAlt className="text-gold" />{job.location}
                  </div>
                  <p className="text-[13px] text-text-soft font-light leading-[1.7]">{job.desc}</p>
                </div>
                <a
                  href={`mailto:hr@indologindia.com?subject=Application: ${job.title}`}
                  className="shrink-0 px-6 py-3 bg-navy text-white text-[12px] font-bold tracking-[0.1em] uppercase hover:bg-navy-dark transition-colors text-center"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>

          {/* Perks + Apply */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-lora text-[1.6rem] text-navy mb-6">Why Indolog?</h3>
              <div className="flex flex-col gap-3">
                {perks.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaBriefcase className="text-gold shrink-0 mt-0.5" />
                    <span className="text-[14px] text-text-soft">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy text-white p-10">
              <h3 className="font-lora text-[1.4rem] mb-4">Don't See Your Role?</h3>
              <p className="text-[13px] text-white/60 mb-6 font-light leading-[1.8]">
                We're always interested in talented people. Send us your CV and tell us where you think you'd add value.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <FaEnvelope className="text-gold text-xl" />
                <a href="mailto:hr@indologindia.com" className="text-[14px] text-gold hover:underline">hr@indologindia.com</a>
              </div>
              <a
                href="mailto:hr@indologindia.com?subject=Open Application — Indolog Logistics"
                className="block w-full text-center py-3.5 bg-gold text-black font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors"
              >
                Send Open Application →
              </a>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
