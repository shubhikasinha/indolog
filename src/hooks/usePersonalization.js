// ─── IPLocate Personalization Hook ───────────────────────────────────────────
// Fetches once per browser session (cached in sessionStorage).
// Non-blocking: returns defaults immediately, resolves asynchronously.
import { PERSONALIZED_ARTGRID_VIDEOS, PERSONALIZED_IMAGE_FALLBACKS } from '../data/sliderVideos';

const CACHE_KEY = 'indolog_iplocate_v5';
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toTitleCase(str) {
  return (str ?? '').replace(/\b\w/g, c => c.toUpperCase()).trim();
}

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

// ─── Geo label — fully dynamic, no hardcoded city list ───────────────────────
// IPLocate already returns accurate city + country for every IP on earth.
// We just format it cleanly.
function resolveGeoLabel(geo) {
  if (!geo) return null;

  const city    = toTitleCase(geo.city);
  const country = toTitleCase(geo.country);
  const code    = (geo.country_code ?? '').toUpperCase();

  if (!city && !country) return null;

  // For India: just show the city (everyone knows they're in India)
  if (code === 'IN') return city || 'India';

  // For international: "City, Country"
  if (city && country) return `${city}, ${country}`;

  return city || country || null;
}

// ─── Slides Resolution ───────────────────────────────────────────────────────
function resolveSlides(industry) {
  const isReady = (key) => {
    const list = PERSONALIZED_ARTGRID_VIDEOS[key];
    return list && list.length > 0 && list.every(s => !s.src.includes('PASTE_'));
  };

  if (industry && isReady(industry)) return PERSONALIZED_ARTGRID_VIDEOS[industry];
  if (isReady('default'))            return PERSONALIZED_ARTGRID_VIDEOS.default;
  if (industry && PERSONALIZED_IMAGE_FALLBACKS[industry]) return PERSONALIZED_IMAGE_FALLBACKS[industry];
  return PERSONALIZED_IMAGE_FALLBACKS.default;
}

// Default export fallback (used before async fetch resolves)
export const DEFAULT_SLIDES = PERSONALIZED_ARTGRID_VIDEOS.default || PERSONALIZED_IMAGE_FALLBACKS.default;

// ─── Main fetch function ──────────────────────────────────────────────────────
export async function fetchPersonalization() {
  // Return cached result if available (avoids repeat network calls)
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch (_) { /* ignore */ }

  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const apiKey = import.meta.env.VITE_IPLOCATE_KEY;
    const url    = apiKey ? `${IPLOCATE_URL}?apikey=${apiKey}` : IPLOCATE_URL;

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`IPLocate ${response.status}`);

    const data = await response.json();

    const geo = {
      city:         data.city         ?? null,
      subdivision:  data.subdivision  ?? null,
      country:      data.country      ?? null,
      country_code: data.country_code ?? null,
    };

    const company = {
      name:   data.company?.name   ?? data.asn?.name ?? null,
      domain: data.company?.domain ?? null,
      type:   data.company?.type   ?? null,
    };

    const industry = inferIndustry(data);
    const slides   = resolveSlides(industry);
    const geoLabel = resolveGeoLabel(geo);

    const result = { geo, company, industry, slides, geoLabel, loading: false };

    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(result)); } catch (_) {}

    return result;

  } catch (err) {
    clearTimeout(timeoutId);
    // Silent fallback — never crash the page
    return { geo: null, company: null, industry: null, slides: DEFAULT_SLIDES, geoLabel: null, loading: false };
  }
}
