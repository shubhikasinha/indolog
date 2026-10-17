import { FaGlobeAsia } from 'react-icons/fa';

const offices = [
  {
    city: 'MUMBAI',
    address: 'Office No 316, 3rd Floor, Thapar Complex, Plot No 51, Sector 15, CBD Belapur, Navi Mumbai-400614',
    contactLabel: 'Arvind Kumar',
    contact: '+91-9911666678',
    email: 'cs@indologindia.com',
  },
  {
    city: 'CHENNAI',
    address: '11, Thiruneer Malai Main Road, Nagalkeni, Chrompet, Chennai-600044 (Near Reliance Mart)',
    contactLabel: 'Anupam Sarkar',
    contact: '+91-80560 83370',
    email: 'anupam@indologindia.com',
  },
  {
    city: 'KOLKATA',
    address: 'Suite No. 714, 7th Floor, PS Qube, Rajarhat New Town, Kolkata-700136',
    contactLabel: 'Aninda Chakraborty',
    contact: '+91-9212226303',
    email: 'aninda@indologindia.com',
  },
  {
    city: 'AHMEDABAD',
    address: '510-511, Fifth Floor, ECHELON, B/S Satyadeep Heights, Nr. Orchid Whitefield, Makarba, Ahmedabad-380051',
    contactLabel: 'Vijaya',
    contact: '+91-88252 17745',
    email: 'vijaya@indologindia.com',
  },
  {
    city: 'HYDERABAD',
    address: '1-8-215/16, Jainam Towers, 3rd Floor, Lal Bahadur Colony, P.G. Road, Secunderabad, Hyderabad-500003',
    contactLabel: 'Monica Sharma',
    contact: '+91-7838683199',
    email: 'monica@indologindia.com',
  },
  {
    city: 'BANGALORE',
    address: '#B02, ECONEST, 9th Main, 11th Cross, Near HMR International School, Hennur, Bangalore-560043',
    contactLabel: 'Neha',
    contact: '+91-8285436575',
    email: 'seaexpo@indologindia.com',
  },
  {
    city: 'COIMBATORE',
    address: 'No 2/7, Vivekananda Nagar, 4th Street, Coimbatore-641015',
    contactLabel: 'V. Ramesh',
    contact: '+91-99652 44222',
    email: 'cs2@indologindia.com',
  },
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
              <span>Mr. Vishal Singh (Director)</span>
              <a href="tel:+919266896322" className="hover:text-white">+91-9266896322</a>
              <a href="mailto:vishal@indologindia.com" className="text-gold/70 hover:text-gold">vishal@indologindia.com</a>
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
          <div className="bg-white/5 p-7 flex flex-col items-center justify-center text-center transition-colors hover:bg-white/10 group lg:col-span-4">
            <FaGlobeAsia className="text-4xl text-white/40 mb-3 group-hover:text-white/60 transition-colors" />
            <div className="text-[15px] font-medium text-white/60 mb-1">50+ countries</div>
            <div className="text-[12px] text-white/40 font-light">Global agent network</div>
          </div>

        </div>

        {/* Accreditations */}
        <div className="mt-12">
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 font-semibold mb-4">Memberships &amp; Alliances</div>
          <div className="flex flex-wrap gap-[1.5px] bg-white/10 border-b border-t border-white/10">
            {[
              { name: 'IATA', domain: 'iata.org' },
              { name: 'FIATA', domain: 'fiata.org' },
              { name: 'FFI', domain: 'ffionline.org' },
              { name: 'ACCAI', domain: 'accai.org' },
              { name: 'AMTOI', domain: 'amtoi.org' },
              { name: 'MTO', domain: 'dgshipping.gov.in' },
              { name: '5STAR', domain: '5starnetwork.com' },
              { name: 'AON', domain: null },
              { name: 'WTC Alliance', domain: 'wtca.org' },
              { name: 'IFN', domain: 'ifn.network' },
              { name: 'YNP', domain: null },
              { name: 'WFC', domain: 'worldfreightgroup.com' },
              { name: 'AerOceaNetwork', domain: 'aeroceanetwork.net' },
            ].map((acc) => (
              <div key={acc.name} className="bg-white/5 px-5 py-4 flex flex-col items-center justify-center gap-2 grow text-center min-w-[110px]">
                {acc.domain ? (
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${acc.domain}&sz=128`}
                    alt={acc.name}
                    className="h-8 w-8 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                  />
                ) : null}
                <span className="hidden h-8 w-8 items-center justify-center border border-white/20 text-white/70 text-[10px] font-bold" style={{ display: acc.domain ? 'none' : 'flex' }} aria-hidden="true">
                  {acc.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 3)}
                </span>
                <span className="text-[11px] font-bold tracking-[0.06em] text-white/65">{acc.name}</span>
              </div>
            ))}
            <div className="bg-[#d4a8431f] border-t-2 border-gold px-6 py-4 flex flex-col items-center justify-center gap-2 grow text-center">
              <img
                src="https://www.google.com/s2/favicons?domain=jctrans.com&sz=128"
                alt="JCTrans"
                className="h-8 w-8 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="text-[11px] font-bold tracking-[0.06em] text-gold">JCTrans — Authorised Channel Partner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
