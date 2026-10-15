import { Link } from 'react-router-dom';
import { FaTruck, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const corridors = [
  {
    id: 'kol-delhi',
    from: 'Kolkata',
    to: 'New Delhi',
    via: 'NH-19 · ~1,480 km',
    desc: 'Our primary east-west highway corridor — connecting ICD Kolkata/KICT port to Delhi NCR distribution hubs and Dwarka HQ.',
    transit: '36–48 hrs',
    fromX: 72, fromY: 52,
    toX: 42, toY: 34,
  },
  {
    id: 'kol-jnpt',
    from: 'Kolkata',
    to: 'JNPT Mumbai',
    via: 'NH-16 / NH-44 · ~2,100 km',
    desc: 'Long-haul FTL/LTL from Kolkata port and ICD to JNPT (Nhava Sheva) for FCL ocean consolidation.',
    transit: '48–60 hrs',
    fromX: 72, fromY: 52,
    toX: 26, toY: 60,
  },
  {
    id: 'jnpt-vdra',
    from: 'JNPT Mumbai',
    to: 'Vadodara',
    via: 'NH-48 · ~450 km',
    desc: 'Fast industrial corridor from JNPT for automotive and pharma clients in the Vadodara–Anand belt.',
    transit: '8–12 hrs',
    fromX: 26, fromY: 60,
    toX: 28, toY: 47,
  },
  {
    id: 'delhi-chennai',
    from: 'New Delhi',
    to: 'Chennai',
    via: 'NH-44 · ~2,200 km',
    desc: 'North–South backbone corridor serving pan-India distribution from Delhi NCR down to Chennai port.',
    transit: '48–60 hrs',
    fromX: 42, fromY: 34,
    toX: 52, toY: 80,
  },
];

// Simple SVG India outline — major city dots only (approximate screen coords)
const cities = [
  { name: 'New Delhi',  x: 42, y: 34 },
  { name: 'Kolkata',   x: 72, y: 52 },
  { name: 'JNPT',      x: 26, y: 60 },
  { name: 'Vadodara',  x: 28, y: 47 },
  { name: 'Chennai',   x: 52, y: 80 },
  { name: 'Bangalore', x: 47, y: 85 },
  { name: 'Hyderabad', x: 48, y: 70 },
  { name: 'Ahmedabad', x: 28, y: 42 },
];

export default function RoadCorridors() {
  return (
    <section className="py-24 bg-[#f5f4f0] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
            <span className="w-7 h-[2px] bg-gold block" />
            ROAD LOGISTICS
          </div>
          <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] text-navy leading-tight mb-4">
            Key Road <em className="italic text-gold font-medium">Corridors</em>
          </h2>
          <p className="text-[15px] text-text-soft font-light leading-[1.85] max-w-[560px]">
            Indolog operates dedicated FTL and LTL services across India's primary highway corridors — connecting major ports, ICDs, and industrial hubs with guaranteed transit windows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">

          {/* Route cards */}
          <div className="flex flex-col gap-4">
            {corridors.map((c, i) => (
              <div
                key={c.id}
                className="bg-white border border-border p-7 flex gap-5 hover:border-navy transition-colors group"
              >
                {/* Number */}
                <div className="w-10 h-10 bg-navy text-white flex items-center justify-center font-bold text-[13px] shrink-0 group-hover:bg-gold transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Route label */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className="flex items-center gap-2 text-navy font-bold text-[14px]">
                      <FaMapMarkerAlt className="text-gold text-[11px]" />
                      {c.from}
                    </div>
                    <FaArrowRight className="text-gold/60 text-[10px]" />
                    <div className="flex items-center gap-2 text-navy font-bold text-[14px]">
                      <FaMapMarkerAlt className="text-gold text-[11px]" />
                      {c.to}
                    </div>
                    <span className="ml-auto text-[10px] tracking-[0.12em] uppercase text-gold font-bold border border-gold/30 px-2.5 py-1">
                      {c.transit}
                    </span>
                  </div>

                  <div className="text-[11px] text-text-muted tracking-[0.06em] uppercase font-medium mb-2">
                    <FaTruck className="inline mr-1.5 text-[10px]" />{c.via}
                  </div>

                  <p className="text-[13px] text-text-soft font-light leading-[1.7]">{c.desc}</p>
                </div>
              </div>
            ))}

            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-4 bg-navy text-white hover:bg-navy-dark hover:-translate-y-px transition-all"
              >
                Get a Road Freight Quote →
              </Link>
            </div>
          </div>

          {/* India SVG Map */}
          <div className="sticky top-24">
            <div className="bg-white border border-border p-6 relative">
              <div className="text-[10px] tracking-[0.18em] uppercase text-text-muted font-semibold mb-4">Coverage Map</div>
              <svg
                viewBox="0 0 100 110"
                className="w-full"
                style={{ maxHeight: 460 }}
              >
                {/* India outline — simplified polygon */}
                <polygon
                  points="28,8 35,6 45,7 52,8 62,10 70,16 78,22 80,32 76,42 74,50 76,56 74,62 70,68 66,76 60,82 56,88 52,94 50,100 48,94 44,88 40,82 36,76 30,70 26,62 22,58 18,54 16,48 18,40 20,32 22,22 24,15 26,10"
                  fill="#eef1f7"
                  stroke="#c8d0e0"
                  strokeWidth="0.8"
                />

                {/* Route lines */}
                {corridors.map((c) => (
                  <line
                    key={c.id}
                    x1={c.fromX} y1={c.fromY}
                    x2={c.toX} y2={c.toY}
                    stroke="#c4a44d"
                    strokeWidth="0.8"
                    strokeDasharray="2 1.5"
                    opacity="0.75"
                  />
                ))}

                {/* Animated route dots */}
                {corridors.map((c) => (
                  <g key={`anim-${c.id}`}>
                    <circle r="0.7" fill="#c4a44d" opacity="0.9">
                      <animateMotion dur="3s" repeatCount="indefinite" begin={`${corridors.indexOf(c) * 0.75}s`}>
                        <mpath href={`#path-${c.id}`} />
                      </animateMotion>
                    </circle>
                    <path
                      id={`path-${c.id}`}
                      d={`M ${c.fromX},${c.fromY} L ${c.toX},${c.toY}`}
                      fill="none"
                    />
                  </g>
                ))}

                {/* City dots */}
                {cities.map((city) => (
                  <g key={city.name}>
                    <circle
                      cx={city.x} cy={city.y} r="1.4"
                      fill="#0b1d3a"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <text
                      x={city.x + 1.8} y={city.y + 0.6}
                      fontSize="2.6"
                      fill="#0b1d3a"
                      fontFamily="sans-serif"
                      fontWeight="600"
                    >
                      {city.name}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4 text-[11px]">
                <div className="flex items-center gap-2 text-text-muted">
                  <div className="w-6 h-[1.5px] bg-gold border-dashed" style={{ borderTop: '1.5px dashed #c4a44d' }} />
                  Active corridor
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <div className="w-2.5 h-2.5 rounded-full bg-navy" />
                  Office / Port city
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
