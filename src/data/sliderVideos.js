// ─────────────────────────────────────────────────────────────────────────────
// ARTGRID HERO SLIDER CONFIGURATION (PERSONALIZED)
// ─────────────────────────────────────────────────────────────────────────────
// You can provide specific videos for different industries. 
// If a user's industry is detected (e.g. Pharma), the slider will play the 
// specific videos you provide for that industry. If no industry is detected, 
// it plays the DEFAULT videos.

export const PERSONALIZED_ARTGRID_VIDEOS = {
  // ─── Default Videos (General Logistics) ───
  default: [
    
    { type: 'video', src: 's3.mp4', alt: 'Logistics operations' },
    { type: 'video', src: 's4.mp4', alt: 'Global freight' },
    { type: 'video', src: 's1.mp4', alt: 'Logistics operations' },
  ],
  
  // ─── Industry: Fashion ───
  fashion: [
    { type: 'video', src: 'PASTE_FASHION_ARTGRID_URL_1_HERE', alt: 'Garment manufacturing' },
    { type: 'video', src: 'PASTE_FASHION_ARTGRID_URL_2_HERE', alt: 'Textile warehouse' }
  ],

  // ─── Industry: Pharma ───
  pharma: [
    { type: 'video', src: 'PASTE_PHARMA_ARTGRID_URL_1_HERE', alt: 'Cold chain logistics' },
    { type: 'video', src: 'PASTE_PHARMA_ARTGRID_URL_2_HERE', alt: 'Medical supplies' }
  ],

  // ─── Industry: Electronics ───
  electronics: [
    { type: 'video', src: 'PASTE_ELECTRONICS_ARTGRID_URL_1_HERE', alt: 'Tech manufacturing' },
    { type: 'video', src: 'PASTE_ELECTRONICS_ARTGRID_URL_2_HERE', alt: 'Circuit boards' }
  ],

  // ─── Industry: Automotive ───
  automotive: [
    { type: 'video', src: 'PASTE_AUTOMOTIVE_ARTGRID_URL_1_HERE', alt: 'Car assembly line' },
    { type: 'video', src: 'PASTE_AUTOMOTIVE_ARTGRID_URL_2_HERE', alt: 'Automotive parts warehouse' }
  ],

  // ─── Industry: Marble & Stone ───
  marble: [
    { type: 'video', src: 'PASTE_MARBLE_ARTGRID_URL_1_HERE', alt: 'Marble quarry' },
    { type: 'video', src: 'PASTE_MARBLE_ARTGRID_URL_2_HERE', alt: 'Heavy lifting crane' }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE FALLBACKS
// ─────────────────────────────────────────────────────────────────────────────
// Used if Artgrid videos are not filled out yet.

export const PERSONALIZED_IMAGE_FALLBACKS = {
  default: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2560&auto=format&fit=crop', alt: 'Port' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1601332069535-f8a8f12a5a74?q=80&w=2560&auto=format&fit=crop', alt: 'Warehouse' }
  ],
  fashion: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2560&auto=format&fit=crop', alt: 'Fashion racks' },
  ],
  pharma: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop', alt: 'Medical supplies' },
  ],
  electronics: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', alt: 'Circuit boards' },
  ],
  automotive: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070&auto=format&fit=crop', alt: 'Automotive parts' },
  ],
  marble: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop', alt: 'Stone quarry' },
  ]
};
