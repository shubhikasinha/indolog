// ─── IPLocate Personalization Hook ───────────────────────────────────────────
// Fetches once per browser session (cached in sessionStorage).
// Non-blocking: returns defaults immediately, resolves asynchronously.
import { HERO_SLIDES } from '../data/sliderVideos';

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

// ─── Geo label map (text-only personalization) ────────────────────────────────
// Slides are ALWAYS from sliderVideos.js (Artgrid or fallback images).
// Only the city label badge and hero headline adapt per geo.
const GEO_LABEL_MAP = [
  {
    match: ({ city, subdivision }) =>
      /new delhi|delhi/i.test(city) || /delhi/i.test(subdivision),
    label: 'New Delhi'
  },
  {
    match: ({ city, subdivision }) =>
      /mumbai|bombay/i.test(city) || /maharashtra/i.test(subdivision),
    label: 'Mumbai'
  },
  {
    match: ({ city, subdivision }) =>
      /chennai|madras/i.test(city) || /tamil/i.test(subdivision),
    label: 'Chennai'
  },
  {
    match: ({ city, subdivision }) =>
      /kolkata|calcutta/i.test(city) || /west bengal/i.test(subdivision),
    label: 'Kolkata'
  },
  {
    match: ({ city, subdivision }) =>
      /bangalore|bengaluru/i.test(city) || /karnatak/i.test(subdivision),
    label: 'Bengaluru'
  },
  {
    match: ({ subdivision }) => /rajasthan/i.test(subdivision),
    label: 'Rajasthan'
  },
  {
    match: ({ city }) => /milan|milano/i.test(city),
    label: 'Milan'
  },
  {
    match: ({ city }) => /frankfurt/i.test(city),
    label: 'Frankfurt'
  },
  {
    match: ({ country_code }) => !/^IN$/i.test(country_code),
    label: null // falls back to country name
  }
];

// ─── Default slides — from centralized config (Artgrid or image fallback) ──
const DEFAULT_SLIDES = HERO_SLIDES;

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

// Slides are ALWAYS the Artgrid/image config — geo does not change visuals
function resolveSlides() {
  return DEFAULT_SLIDES;
}

function resolveGeoLabel(geo) {
  if (!geo) return null;

  for (const entry of GEO_LABEL_MAP) {
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
    const slides = resolveSlides();
    const geoLabel = resolveGeoLabel(geo);

    const result = { geo, company, industry, slides, geoLabel, loading: false };

    // 3. Cache in sessionStorage
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
    } catch (_) { /* quota exceeded or private mode */ }

    return result;

  } catch (err) {
    clearTimeout(timeoutId);
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
