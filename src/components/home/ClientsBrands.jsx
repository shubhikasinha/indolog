const brands = [
  { name: 'SMCP', domain: 'smcp.com' },
  { name: 'Sandro', domain: 'sandro-paris.com' },
  { name: 'Zadig & Voltaire', domain: 'zadig-et-voltaire.com' },
  { name: 'Isabel Marant', domain: 'isabelmarant.com' },
  { name: 'Paco Rabanne', domain: 'pacorabanne.com' },
  { name: 'Twin Set', domain: 'twinset.com' },
  { name: 'Hitachi', domain: 'hitachi.com' },
  { name: 'Tata', domain: 'tata.com' },
  { name: 'Dana', domain: 'dana.com' },
  { name: 'Versace', domain: 'versace.com' },
  { name: 'Sun Pharma', domain: 'sunpharma.com' },
  { name: 'Liu Jo', domain: 'liujo.com' },
  { name: 'Hugo Boss', domain: 'hugoboss.com' },
  { name: 'Bugatti', domain: 'bugatti.com' },
  { name: 'TJ Maxx', domain: 'tjmaxx.tjx.com' },
  { name: 'MRF Tyres', domain: 'mrftyres.com' },
  { name: 'JK Papers', domain: 'jkpaper.com' },
  { name: 'Taj Hotels', domain: 'tajhotels.com' },
  { name: 'JW Marriott', domain: 'marriott.com' },
  { name: 'Pan Parag', domain: 'panparag.com' },
  { name: 'Porsche', domain: 'porsche.com' },
  { name: 'Ara Shoes', domain: 'ara-shoes.com' },
  { name: 'Moke Intl', domain: 'mokeinternational.com' },
  { name: 'BA & SH', domain: 'ba-sh.com' },
  { name: 'Landmark', domain: 'landmarkgroup.com' },
  { name: 'Pittarello', domain: 'pittarello.com' },
  { name: 'Sir Safety', domain: 'sirsafety.com' },
  { name: 'Sajaco Nordic', domain: 'sajaco.dk' },
  { name: 'Electa EV', domain: 'one-moto.com' },
  { name: 'Fonz N Leather', domain: 'fonzleatherstyles.com' },
  { name: 'Moxy Wear (USA)', domain: 'moxy-wear.creator-spring.com' },
  { name: 'Kaili Group', domain: 'store.kailigroup.it' },
  { name: 'Tessilform', domain: 'patriziapepe.com' },
  { name: 'Lola Spain', domain: 'lola.com.es' },
  { name: 'Envisage', domain: 'envisage.com' },
  { name: 'ClassPromotion', domain: 'classpromotion.com' },
];

function BrandCard({ brand }) {
  const logoUrl = brand.domain
    ? `https://cdn.brandfetch.io/${brand.domain}/w/400/h/140`
    : null;

  return (
    <div className="bg-white border border-border flex flex-col items-center justify-center gap-2 p-4 h-28 cursor-default">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={brand.name}
          className="h-10 w-10 object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'block'; }}
        />
      ) : null}
      <span className="hidden text-[9px] text-text-muted text-center" style={{ display: logoUrl ? 'none' : 'block' }}>
        {brand.domain || brand.name}
      </span>
      <span className="text-[9px] font-bold tracking-[0.08em] text-text-muted text-center leading-tight uppercase">
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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-[1px] bg-border">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>

        <p className="text-[12px] text-text-muted font-light mt-6 text-center">
          …and 100+ more clients across 50 countries.
        </p>
      </div>
    </section>
  );
}
