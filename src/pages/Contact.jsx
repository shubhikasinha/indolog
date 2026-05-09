import { FaMapPin, FaPhone, FaEnvelope, FaLink, FaWhatsapp } from 'react-icons/fa';
import InnerPageHero from '../components/InnerPageHero';

export default function Contact() {
  return (
    <>
      <InnerPageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team for enquiries, quotes, or support." 
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&auto=format&fit=crop" 
      />
      <div className="bg-[#f5f4f0] min-h-screen">
        <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
          
          <div className="flex flex-col gap-7">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-3.5">
                <span className="w-7 h-[2px] bg-gold block"></span>
                GET IN TOUCH
              </div>
              <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] tracking-tight text-text leading-tight mb-4">
                Let's Move Your <em className="italic text-navy">Cargo Forward</em>
              </h2>
              <p className="text-[15px] text-text-soft font-light leading-[1.85]">
                Our team responds within 4 business hours. Available 24/7 for urgent shipments.
              </p>
              {/* Response promise badge */}
              <div className="mt-4 inline-flex items-center gap-2.5 bg-gold/10 border border-gold/30 px-4 py-2.5 rounded-sm">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse shrink-0" />
                <span className="text-[12px] font-semibold text-navy tracking-wide">We reply within 4 business hours</span>
              </div>
            </div>


            <div className="flex gap-4">
              <div className="w-11 h-11 bg-navy shrink-0 flex items-center justify-center text-white mt-0.5">
                <FaMapPin />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold mb-1">HEAD OFFICE</div>
                <div className="text-[14px] text-text leading-[1.6]">Plot no. 249/1, Sector-24, Phase-2, Dhulsiras, Dwarka, New Delhi-110077</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 bg-navy shrink-0 flex items-center justify-center text-white mt-0.5">
                <FaPhone />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold mb-1">PHONE</div>
                <div className="text-[14px] text-text leading-[1.6] flex flex-col gap-1">
                  <a href="tel:+919266896322" className="text-navy font-medium hover:underline">+91-9266896322</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 bg-navy shrink-0 flex items-center justify-center text-white mt-0.5">
                <FaEnvelope />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold mb-1">EMAIL</div>
                <div className="text-[14px] text-text leading-[1.6]">
                  <a href="mailto:vishal@indologindia.com" className="text-navy font-medium hover:underline">vishal@indologindia.com</a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="w-11 h-11 bg-[#25d366] shrink-0 flex items-center justify-center text-white mt-0.5">
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold mb-1">WHATSAPP</div>
                <div className="text-[14px] text-text leading-[1.6]">
                  <a href="https://wa.me/919266896322?text=Hi%20Indolog%2C%20I%27d%20like%20a%20quote%20for..." target="_blank" rel="noopener noreferrer" className="text-[#25d366] font-medium hover:underline">
                    +91-9266896322 — Chat with us →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 bg-navy shrink-0 flex items-center justify-center text-white mt-0.5">
                <FaLink />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold mb-1">PORTALS</div>
                <div className="text-[14px] text-text leading-[1.6] flex flex-col gap-1">
                  <span className="text-text-muted text-[13px] font-light">Shipment tracking: call or WhatsApp us with your AWB / B/L number and we'll respond within 1 hour.</span>
                  <a href="https://app.fresatechnologies.com/ords/f?p=127:LOGIN_DESKTOP" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:underline">Employee Login →</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 border border-border mt-3 lg:mt-0">
            <h3 className="font-lora text-[1.3rem] text-navy mb-7 font-medium">Quick Enquiry</h3>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Your Name *</label>
                  <input type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Company Name</label>
                  <input type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Email Address *</label>
                  <input type="email" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Phone Number</label>
                  <input type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Service Required</label>
                <select className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full appearance-none transition-colors border-r-8">
                  <option>Ocean Freight — Export</option>
                  <option>Ocean Freight — Import</option>
                  <option>Air Freight — Export</option>
                  <option>Air Freight — Import / Console</option>
                  <option>Road / Inland Freight</option>
                  <option>Customs Brokerage</option>
                  <option>QC Inspection Platform</option>
                  <option>Warehousing and Distribution</option>
                  <option>Multimodal Transport</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Origin City/Port</label>
                  <input type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Destination City/Port</label>
                  <input type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Industry</label>
                <select className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full appearance-none transition-colors">
                  <option>RMG / Fashion and Garments</option>
                  <option>Electronics</option>
                  <option>Pharmaceuticals</option>
                  <option>Automotive</option>
                  <option>Marble and Stone</option>
                  <option>Leather Goods</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Cargo Details</label>
                <textarea rows="3" placeholder="Weight, dimensions, commodity type, special requirements..." className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full resize-none transition-colors"></textarea>
              </div>
              <button type="button" className="w-full p-4 bg-navy text-white font-bold text-[12px] tracking-[0.1em] uppercase mt-2 hover:bg-navy-dark hover:-translate-y-px transition-all">
                Send Enquiry &rarr;
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  </>
  );
}
