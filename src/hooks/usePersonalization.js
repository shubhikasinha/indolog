// ─── IPLocate Personalization Hook ───────────────────────────────────────────
// Fetches once per browser session (cached in sessionStorage).
// Non-blocking: returns defaults immediately, resolves asynchronously.

const CACHE_KEY = 'indolog_iplocate_v1';
const IPLOCATE_URL = 'https://iplocate.io/api/lookup/';
const FETCH_TIMEOUT_MS = 3000;

// ─── Industry inference keyword map ──────────────────────────────────────────
const INDUSTRY_KEYWORDS = {
  pharma: [
    'pharma', 'pharmaceutical', 'medic', 'health', 'drug', 'labs',
    'lab ', 'bio', 'clinical', 'hospital', 'therapeut', 'sanofi',
    'pfizer', 'novartis', 'abbott', 'cipla', 'sun pharma', 'dr.reddy',
    'lupin', 'glenmark'
  ],
  fashion: [
    'fashion', 'apparel', 'garment', 'textile', 'cloth', 'wear',
    'rmg', 'retail', 'brand', 'twinset', 'marccain', 'patrizia',
    'pinko', 'zara', 'h&m', 'levis', 'polo', 'design', 'boutique',
    'fabric', 'denim', 'luxury', 'couture'
  ],
  electronics: [
    'electron', 'tech', 'semiconductor', 'component', 'compute',
    'hardware', 'software', 'it ', 'digital', 'samsung', 'apple',
    'dell', 'hp', 'lenovo', 'infosys', 'wipro', 'tcs', 'tata consultan',
    'intel', 'nvidia', 'circuit', 'telecom', 'nokia', 'ericsson'
  ],
  automotive: [
    'auto', 'automobile', 'motor', 'vehicle', 'tyre', 'ancillar',
    'maruti', 'honda', 'toyota', 'ford', 'bmw', 'mercedes', 'mahindra',
    'tata motor', 'hyundai', 'bosch', 'denso', 'auto parts', 'tier 1',
    'tier 2', 'drivetrain', 'chassis'
  ],
  marble: [
    'marble', 'stone', 'granit', 'mineral', 'mining', 'quarry',
    'natural stone', 'travertine', 'slate', 'rajasthan', 'rajstone'
  ]
};

// ─── Location → Hero slide config ────────────────────────────────────────────
// Each entry: { label, slides: [{ type, src, alt }] }
const GEO_SLIDE_MAP = [
  {
    match: ({ city, subdivision }) =>
      /new delhi|delhi/i.test(city) || /delhi/i.test(subdivision),
    label: 'New Delhi',
    slides: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop',
        alt: 'India Gate, New Delhi'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1597517697687-3bd9cd5fd7ac?q=80&w=2070&auto=format&fit=crop',
        alt: 'Red Fort, Delhi'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?q=80&w=2070&auto=format&fit=crop',
        alt: 'Delhi Cargo Hub'
      }
    ]
  },
  {
    match: ({ city, subdivision }) =>
      /mumbai|bombay/i.test(city) || /maharashtra/i.test(subdivision),
    label: 'Mumbai',
    slides: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070&auto=format&fit=crop',
        alt: 'Gateway of India, Mumbai'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=2070&auto=format&fit=crop',
        alt: 'Mumbai port'
      }
    ]
  },
  {
    match: ({ city, subdivision }) =>
      /chennai|madras/i.test(city) || /tamil/i.test(subdivision),
    label: 'Chennai',
    slides: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=2070&auto=format&fit=crop',
        alt: 'Chennai port & city'
      }
    ]
  },
  {
    match: ({ city, subdivision }) =>
      /kolkata|calcutta/i.test(city) || /west bengal/i.test(subdivision),
    label: 'Kolkata',
    slides: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=2070&auto=format&fit=crop',
        alt: 'Howrah Bridge, Kolkata'
      }
    ]
  },
  {
    match: ({ city, subdivision }) =>
      /bangalore|bengaluru/i.test(city) || /karnatak/i.test(subdivision),
    label: 'Bengaluru',
    slides: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop',
        alt: 'Bengaluru tech city skyline'
      }
    ]
  },
  {
    match: ({ subdivision }) => /rajasthan/i.test(subdivision),
    label: 'Rajasthan',
    slides: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1477587458883-47145ed6736c?q=80&w=2070&auto=format&fit=crop',
        alt: 'Rajasthan marble region'
      }
    ]
  },
  // International
  {
    match: ({ country_code }) => !/^IN$/i.test(country_code),
    label: null, // use country name
    slides: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
        alt: 'Global freight international'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop',
        alt: 'International shipping containers'
      }
    ]
  }
];

// Default slides (videos) when geo is unknown
const DEFAULT_SLIDES = [
  {
    type: 'video',
    src: 'https://cdn.davinci.ai/assets/Giant_Product_d9a6e38ef5/Giant_Product_d9a6e38ef5.mp4',
    alt: 'Logistics operations'
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/davinciweb-b8892.appspot.com/v2/images/homepage/home-video-generator.webm',
    alt: 'Freight forwarding'
  },
  {
    type: 'video',
    src: 'https://cdn.davinci.ai/assets/Macro_Scene_bbbeda81b0/Macro_Scene_bbbeda81b0.mp4',
    alt: 'Supply chain'
  }
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function inferIndustry(ipData) {
  if (!ipData) return null;
  
  const haystack = [
    ipData?.company?.name ?? '',
    ipData?.company?.type ?? '',
    ipData?.asn?.name ?? '',
    ipData?.asn?.netname ?? '',
  ].join(' ').toLowerCase();

  for (const [industry, keywords] of Object.entries(INDUSTRY_KEYWORDS)) {
    if (keywords.some(kw => haystack.includes(kw))) {
      return industry;
    }
  }
  return null;
}

function resolveSlides(geo) {
  if (!geo) return DEFAULT_SLIDES;
  
  for (const entry of GEO_SLIDE_MAP) {
    if (entry.match(geo)) {
      return entry.slides;
    }
  }
  return DEFAULT_SLIDES;
}

function resolveGeoLabel(geo) {
  if (!geo) return null;
  
  for (const entry of GEO_SLIDE_MAP) {
    if (entry.match(geo)) {
      return entry.label ?? geo.country ?? null;
    }
  }
  return geo.city || geo.country || null;
}

// ─── Main fetch function ──────────────────────────────────────────────────────

export async function fetchPersonalization() {
  // 1. Return cached result immediately
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (_) { /* sessionStorage unavailable */ }

  // 2. Fetch from IPLocate with abort timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const apiKey = import.meta.env.VITE_IPLOCATE_KEY;
    const url = apiKey
      ? `${IPLOCATE_URL}?apikey=${apiKey}`
      : IPLOCATE_URL;

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`IPLocate responded ${response.status}`);

    const data = await response.json();

    const geo = {
      city: data.city ?? null,
      subdivision: data.subdivision ?? null,
      country: data.country ?? null,
      country_code: data.country_code ?? null,
    };

    const company = {
      name: data.company?.name ?? data.asn?.name ?? null,
      domain: data.company?.domain ?? null,
      type: data.company?.type ?? null,
    };

    const industry = inferIndustry(data);
    const slides = resolveSlides(geo);
    const geoLabel = resolveGeoLabel(geo);

    const result = { geo, company, industry, slides, geoLabel, loading: false };

    // 3. Cache in sessionStorage
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
    } catch (_) { /* quota exceeded or private mode */ }

    return result;

  } catch (err) {
    clearTimeout(timeoutId);
    // Graceful fallback — never crash
    if (err.name !== 'AbortError') {
      console.warn('[Indolog] IPLocate unavailable, using defaults.', err.message);
    }
    return {
      geo: null,
      company: null,
      industry: null,
      slides: DEFAULT_SLIDES,
      geoLabel: null,
      loading: false
    };
  }
}

export { DEFAULT_SLIDES };
