import { FaGlobeAsia } from 'react-icons/fa';

const offices = [
  {
    city: 'MUMBAI',
    address: '#315, Shivaji Plaza, Marol Co-operative, Andheri (East), Mumbai-400059',
    contactLabel: 'Arvind Kumar',
    contact: '+91-9911666678',
    email: 'mumbai@indologindia.com',
  },
  {
    city: 'CHENNAI',
    address: '11, Thiruneer Malai Main Road, Nagalkeni, Chrompet, Chennai-600044 (Near Reliance Mart)',
    contactLabel: 'V. Ramesh',
    contact: '+91-9965244222',
    email: 'chennai@indologindia.com',
  },
  {
    city: 'KOLKATA',
    address: 'Suite No. 714, 7th Floor, PS Qube, Rajarhat New Town, Kolkata-700136',
    contactLabel: 'Aninda Chakraborty',
    contact: '+91-9212226303',
    email: 'kolkata@indologindia.com',
  },
  {
    city: 'AHMEDABAD',
    address: '401, Sakar V, Near Mithakhali Railway Crossing, Ashram Road, Ahmedabad-380009',
    contactLabel: 'Karishma Bisht',
    contact: '+91-8595511364',
    email: 'ahmedabad@indologindia.com',
  },
  {
    city: 'HYDERABAD',
    address: 'H No. 10-3-281/1/1/A, Khr. Nivas, Humayun Nagar, Mehdipatnam, Hyderabad-500008',
    contactLabel: 'Monica Sharma',
    contact: '+91-7838683199',
    email: 'hyderabad@indologindia.com',
  },
  {
    city: 'BANGALORE',
    address: '#935/786, M.R. Mansion, B.B. Road, Kempe Gowda Circle, Yelahanka, Bangalore-560064',
    contactLabel: 'Neha',
    contact: '+91-8285436575',
    email: 'bangalore@indologindia.com',
  },
];

const accreditations = [
  'IATA', 'FIATA', 'AMTOI', 'MTO', '5Star Network', 'WTC Alliance', 'WWPC World', 'AerOcea Network'
];

export default function OfficesSec() {
  return (
    <section id="offices" className="py-24 bg-navy text-white px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
            <span className="w-7 h-[2px] bg-gold block"></span>
            OUR PRESENCE
          </div>
          <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] tracking-tight text-white mb-4 leading-tight">
            India-Wide Network, <em className="italic text-gold-light font-light">Global Reach</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5px] bg-white/10 mt-12">
          
          {/* HQ Card */}
          <div className="bg-white/5 border-t-2 border-gold p-7 transition-colors hover:bg-white/10" style={{ backgroundColor: 'rgba(212,168,67,0.12)' }}>
            <h4 className="text-[13px] font-bold tracking-[0.08em] text-gold uppercase mb-1.5 flex items-center">
              NEW DELHI
              <span className="inline-block text-[9px] tracking-[0.15em] px-2 py-0.5 bg-gold text-black font-bold ml-2">H.O.</span>
            </h4>
            <p className="text-[12px] text-white/50 leading-[1.7] mb-2 font-light">
              Plot no. 249/1, Sector-24, Phase-2, Dhulsiras, Dwarka, New Delhi-110077
            </p>
            <div className="text-[12px] text-white/70 font-medium">
              Mr. Vishal Singh (Director) &middot; +91-9266896322 &middot; vishal@indologindia.com
            </div>
          </div>

          {/* Standard Office Cards */}
          {offices.map((off, i) => (
            <div key={i} className="bg-white/5 p-7 transition-colors hover:bg-white/10">
              <h4 className="text-[13px] font-bold tracking-[0.08em] text-gold uppercase mb-1.5">{off.city}</h4>
              <p className="text-[12px] text-white/50 leading-[1.7] mb-2 font-light">{off.address}</p>
              {off.contact && (
                <div className="flex flex-col gap-0.5">
                  <div className="text-[12px] text-white/70 font-medium">{off.contactLabel} &middot; {off.contact}</div>
                  {off.email && <a href={`mailto:${off.email}`} className="text-[11px] text-gold/70 hover:text-gold transition-colors">{off.email}</a>}
                </div>
              )}
            </div>
          ))}

          {/* Global Reach Card */}
          <div className="bg-white/5 p-7 flex flex-col items-center justify-center text-center transition-colors hover:bg-white/10 group">
            <FaGlobeAsia className="text-4xl text-white/40 mb-3 group-hover:text-white/60 transition-colors" />
            <div className="text-[15px] font-medium text-white/60 mb-1">50+ countries</div>
            <div className="text-[12px] text-white/40 font-light">Global agent network</div>
          </div>

        </div>

        {/* Accreditations */}
        <div className="flex flex-wrap gap-[1.5px] bg-white/10 mt-12 border-b border-t border-white/10 border-r border-l border-white/0">
          {accreditations.map(acc => (
            <div key={acc} className="bg-white/5 px-8 py-4 text-[13px] font-bold tracking-[0.1em] text-white/40 hover:bg-white/10 hover:text-gold transition-colors cursor-default grow text-center">
              {acc}
            </div>
          ))}
          <div className="bg-[#d4a8431f] border-t-2 border-gold px-8 py-4 text-[13px] font-bold tracking-[0.1em] text-gold grow text-center">
            JCTrans — Authorised Channel Partner
          </div>
        </div>

      </div>
    </section>
  );
}
