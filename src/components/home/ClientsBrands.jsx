// Brand list with Clearbit logo fallbacks (text if logo fails)
const brands = [
  { name: 'SMCP', domain: 'smcp.com' },
  { name: 'Sandro', domain: 'sandro-paris.com' },
  { name: 'Zadig & Voltaire', domain: 'zadig-et-voltaire.com' },
  { name: 'Isabel Marant', domain: 'isabelmarant.com' },
  { name: 'Paco Rabanne', domain: 'pacorabanne.com' },
  { name: 'Twin Set', domain: 'twinset.com' },
  { name: 'Tessilform', domain: 'tessilform.it' },
  { name: 'Hitachi', domain: 'hitachi.com' },
  { name: 'Tata', domain: 'tata.com' },
  { name: 'Dana USA', domain: 'dana.com' },
  { name: 'Versace', domain: 'versace.com' },
  { name: 'Sun Pharma', domain: 'sunpharma.com' },
  { name: 'Liu Jo', domain: 'liujo.com' },
  { name: 'Hugo Boss', domain: 'hugoboss.com' },
  { name: 'Bugatti', domain: 'bugatti.com' },
  { name: 'TJ Maxx', domain: 'tjmaxx.com' },
  { name: 'MRF Tyres', domain: 'mrftyres.com' },
  { name: 'Sir Safety', domain: 'sirsafety.it' },
  { name: 'Pittarello', domain: 'pittarello.it' },
  { name: 'JK Papers', domain: 'jkpaper.com' },
  { name: 'Taj Hotels', domain: 'tajhotels.com' },
  { name: 'JW Marriott', domain: 'marriott.com' },
  { name: 'Pan Parag', domain: 'panparag.com' },
  { name: 'Porsche', domain: 'porsche.com' },
  { name: 'Ara Shoes', domain: 'ara.de' },
  { name: 'Electa EV', domain: null },
  { name: 'Moke International', domain: 'moke.com' },
  { name: 'Fonz N Leather', domain: null },
  { name: 'Moxy Wear (USA)', domain: null },
  { name: 'Sajaco Nordic', domain: null },
  { name: 'Kaili Group', domain: null },
  { name: 'Landmark', domain: 'landmarkgroup.com' },
  { name: 'BA & SH', domain: 'ba-sh.com' },
  { name: 'Lola Spain', domain: null },
  { name: 'Envisage', domain: null },
  { name: 'ClassPromotion', domain: null },
];

function BrandLogo({ brand }) {
  const logoUrl = brand.domain
    ? `https://logo.clearbit.com/${brand.domain}`
    : null;

  return (
    <div className="bg-white border border-border flex flex-col items-center justify-center gap-2 p-4 h-20 hover:border-gold hover:shadow-sm transition-all duration-200 group cursor-default">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={brand.name}
          className="max-h-8 max-w-[100px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
      ) : null}
      <span
        className="text-[11px] font-bold tracking-[0.06em] text-text-muted group-hover:text-navy transition-colors text-center leading-tight"
        style={{ display: logoUrl ? 'none' : 'block' }}
      >
        {brand.name}
      </span>
    </div>
  );
}

export default function ClientsBrands() {
  return (
    <section className="py-24 bg-white px-6 md:px-12 border-t border-border">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              <span className="w-7 h-[2px] bg-gold block" />
              TRUSTED BY
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy leading-tight">
              Brands That Trust <em className="italic text-gold font-medium">Indolog</em>
            </h2>
          </div>
          <p className="text-[14px] text-text-soft font-light max-w-[360px] leading-[1.85]">
            From global luxury houses to Indian conglomerates — our clients span fashion, automotive, pharma, hospitality, and FMCG.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-[1px] bg-border">
          {brands.map((brand) => (
            <BrandLogo key={brand.name} brand={brand} />
          ))}
        </div>

        <p className="text-[12px] text-text-muted font-light mt-6 text-center">
          …and 100+ more clients across 50 countries.
        </p>
      </div>
    </section>
  );
}
