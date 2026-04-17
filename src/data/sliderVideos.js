// ─────────────────────────────────────────────────────────────────────────────
// ARTGRID HERO SLIDER CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO GET ARTGRID CDN VIDEO URLS:
// 1. Go to artgrid.io and log in to your account
// 2. Search for a video (e.g. "freight logistics", "shipping port", "cargo")
// 3. Open the video details page
// 4. Right-click on the preview video player → "Copy Video Address"
//    OR press F12 → Network tab → reload → filter by "mp4" → copy Request URL
// 5. Paste the URL as the `src` below
//
// TIP: Use 1080p versions where available for best performance.
//      Format: https://cdn.artgrid.io/assets/{id}/{filename}.mp4
//
// ─────────────────────────────────────────────────────────────────────────────

const ARTGRID_SLIDES = [
  {
    type: 'video',
    // REPLACE with your Artgrid CDN URL
    src: 'PASTE_ARTGRID_VIDEO_URL_1_HERE',
    alt: 'Container port — global freight operations',
    // Optional poster image shown while video loads (Unsplash fallback)
    poster: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1920&auto=format&fit=crop'
  },
  {
    type: 'video',
    // REPLACE with your Artgrid CDN URL
    src: 'PASTE_ARTGRID_VIDEO_URL_2_HERE',
    alt: 'Air freight — cargo aircraft logistics',
    poster: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1920&auto=format&fit=crop'
  },
  {
    type: 'video',
    // REPLACE with your Artgrid CDN URL
    src: 'PASTE_ARTGRID_VIDEO_URL_3_HERE',
    alt: 'Warehouse — supply chain operations',
    poster: 'https://images.unsplash.com/photo-1601332069535-f8a8f12a5a74?q=80&w=1920&auto=format&fit=crop'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// FALLBACK: High-quality Unsplash images used until Artgrid URLs are filled in
// (or if user has no Artgrid account)
// ─────────────────────────────────────────────────────────────────────────────
const IMAGE_FALLBACK_SLIDES = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2560&auto=format&fit=crop',
    alt: 'Global freight container port'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2560&auto=format&fit=crop',
    alt: 'Aerial view container terminal'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2560&auto=format&fit=crop',
    alt: 'Air cargo freight operations'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1601332069535-f8a8f12a5a74?q=80&w=2560&auto=format&fit=crop',
    alt: 'Global supply chain logistics'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT: Automatically uses Artgrid if URLs are set, otherwise falls back
// ─────────────────────────────────────────────────────────────────────────────
const isArtgridConfigured = ARTGRID_SLIDES.every(
  (s) => s.src && !s.src.startsWith('PASTE_')
);

export const HERO_SLIDES = isArtgridConfigured
  ? ARTGRID_SLIDES
  : IMAGE_FALLBACK_SLIDES;
