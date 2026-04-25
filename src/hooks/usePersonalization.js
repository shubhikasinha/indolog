// ─── IPLocate Personalization Hook ───────────────────────────────────────────
// Fetches once per browser session (cached in sessionStorage).
// Non-blocking: returns defaults immediately, resolves asynchronously.
import { PERSONALIZED_ARTGRID_VIDEOS, PERSONALIZED_IMAGE_FALLBACKS } from '../data/sliderVideos';

const CACHE_KEY = 'indolog_iplocate_v3';
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
const GEO_LABEL_MAP = [
  { match: ({ city, subdivision }) => /new delhi|delhi/i.test(city) || /delhi/i.test(subdivision), label: 'New Delhi' },
  { match: ({ city, subdivision }) => /mumbai|bombay/i.test(city) || /maharashtra/i.test(subdivision), label: 'Mumbai' },
  { match: ({ city, subdivision }) => /chennai|madras/i.test(city) || /tamil/i.test(subdivision), label: 'Chennai' },
  { match: ({ city, subdivision }) => /kolkata|calcutta/i.test(city) || /west bengal/i.test(subdivision), label: 'Kolkata' },
  { match: ({ city, subdivision }) => /bangalore|bengaluru/i.test(city) || /karnatak/i.test(subdivision), label: 'Bengaluru' },
  { match: ({ subdivision }) => /rajasthan/i.test(subdivision), label: 'Rajasthan' },
  { match: ({ city }) => /milan|milano/i.test(city), label: 'Milan' },
  { match: ({ city }) => /frankfurt/i.test(city), label: 'Frankfurt' },
  { match: ({ country_code }) => !/^IN$/i.test(country_code), label: null }
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

// ─── Slides Resolution ───────────────────────────────────────────────────────
// Uses industry-specific videos if user added Artgrid URLs, else falls back to images.
function resolveSlides(industry) {
  const isArtgridReady = (industryKey) => {
    const list = PERSONALIZED_ARTGRID_VIDEOS[industryKey];
    return list && list.length > 0 && list.every(s => !s.src.includes('PASTE_'));
  };

  const hasSpecificArtgrid = industry && isArtgridReady(industry);
  const hasDefaultArtgrid = isArtgridReady('default');

  if (hasSpecificArtgrid) {
    return PERSONALIZED_ARTGRID_VIDEOS[industry];
  } else if (hasDefaultArtgrid) {
    return PERSONALIZED_ARTGRID_VIDEOS.default;
  } else if (industry && PERSONALIZED_IMAGE_FALLBACKS[industry]) {
    return PERSONALIZED_IMAGE_FALLBACKS[industry];
  } else {
    return PERSONALIZED_IMAGE_FALLBACKS.default;
  }
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

// Default export fallback
export const DEFAULT_SLIDES = PERSONALIZED_ARTGRID_VIDEOS.default || PERSONALIZED_IMAGE_FALLBACKS.default;

// ─── Main fetch function ──────────────────────────────────────────────────────

export async function fetchPersonalization() {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch (_) { /* ignore */ }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const apiKey = import.meta.env.VITE_IPLOCATE_KEY;
    const url = apiKey ? `${IPLOCATE_URL}?apikey=${apiKey}` : IPLOCATE_URL;

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`IPLocate ${response.status}`);

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
    const slides = resolveSlides(industry);
    const geoLabel = resolveGeoLabel(geo);

    const result = { geo, company, industry, slides, geoLabel, loading: false };

    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
    } catch (_) { /* ignore */ }

    return result;

  } catch (err) {
    clearTimeout(timeoutId);
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
