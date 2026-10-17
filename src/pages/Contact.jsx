import { useState, useRef } from 'react';
import { FaMapPin, FaPhone, FaEnvelope, FaLink, FaWhatsapp, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import InnerPageHero from '../components/InnerPageHero';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage('Email delivery is not configured yet. Please email us directly at nikhil@indologindia.com.');
      setStatus('error');
      return;
    }

    setErrorMessage('We couldn’t send your email. Please try again or email nikhil@indologindia.com.');
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Contact form email failed:', error);
      setStatus('error');
    }
  };

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
                  <a href="tel:+911145028662" className="text-navy font-medium hover:underline">+91 11-45028662 (Landline)</a>
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
                  <a href="mailto:nikhil@indologindia.com" className="text-navy font-medium hover:underline">nikhil@indologindia.com</a>
                </div>
              </div>
            </div>

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

            {/* Success state */}
            {status === 'success' && (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 px-5 py-4 mb-6 rounded-sm">
                <FaCheckCircle className="text-green-600 text-xl shrink-0" />
                <div>
                  <div className="font-semibold text-green-800 text-[14px]">Your email has been sent.</div>
                </div>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-5 py-4 mb-6 rounded-sm">
                <FaExclamationTriangle className="text-red-600 text-xl shrink-0" />
                <div>
                  <div className="font-semibold text-red-800 text-[14px]">We couldn’t send your email.</div>
                  <div className="text-[12px] text-red-700 font-light mt-0.5">{errorMessage.includes('nikhil@') ? <>{errorMessage.split('nikhil@')[0]}<a href="mailto:nikhil@indologindia.com" className="underline">nikhil@indologindia.com</a>.</> : errorMessage}</div>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="to_email" value="nikhil@indologindia.com" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Your Name *</label>
                  <input name="from_name" type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Company Name</label>
                  <input name="company" type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Email Address *</label>
                  <input name="from_email" type="email" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Phone Number</label>
                  <input name="phone" type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Service Required</label>
                <select name="service" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full appearance-none transition-colors border-r-8">
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
                  <input name="origin" type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Destination City/Port</label>
                  <input name="destination" type="text" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-semibold">Industry</label>
                <select name="industry" className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full appearance-none transition-colors">
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
                <textarea name="message" rows="3" placeholder="Weight, dimensions, commodity type, special requirements..." className="bg-[#f9f9f9] border-[1.5px] border-border text-[13px] px-3.5 py-3 outline-none focus:border-navy focus:bg-white w-full resize-none transition-colors"></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full p-4 bg-navy text-white font-bold text-[12px] tracking-[0.1em] uppercase mt-2 hover:bg-navy-dark hover:-translate-y-px transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Enquiry →'}
              </button>
              <p className="text-[11px] text-text-muted text-center font-light">
                Enquiries are sent to <strong>nikhil@indologindia.com</strong>
              </p>
            </form>
          </div>

        </div>
        </section>
      </div>
    </>
  );
}
