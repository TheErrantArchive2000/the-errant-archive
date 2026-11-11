export const EMAIL = "theerrantarchive@gmail.com";

// "ready" rooms have content. "soon" adds a "coming" tag.
export const rooms = [
  { slug: "unsent-desk", name: "The Unsent Desk", tone: "Poems, journal pieces, fragments, and drafts. Some were meant to be left unfinished.", wall: "#2a1f17", accent: "#c9a46a", ready: true },
  { slug: "gallery-of-half-light", name: "The Gallery of Half-Light", tone: "Paintings, sketches, fails, and photographs (when they arrive).", wall: "#1d2430", accent: "#8fa3b8" },
  { slug: "specimen-drawer", name: "The Specimen Drawer", tone: "Scientific notes, facts, and small explanations. Immunology and cancer research lead.", wall: "#1f2622", accent: "#8aa58a" },
  { slug: "morning-ledger", name: "The Morning Ledger", tone: "One short entry a day on being alive. A plain archive below.", wall: "#2b2320", accent: "#d88f5e" },
  { slug: "quiet-hands", name: "The Room of Quiet Hands", tone: "Hands, words, and signs. Content coming.", wall: "#2a2623", accent: "#b5a48f", ready: true, soon: true },
  { slug: "unlit-landing", name: "The Unlit Landing", tone: "Questions about God, meaning, and existence. I don't know yet.", wall: "#0f1220", accent: "#6f7ca8" },
  { slug: "shelf-of-quarrels", name: "The Shelf of Quarrels", tone: "A few writers, one quote, one disagreement, and what the book did to me.", wall: "#241a14", accent: "#a0703f" },
  { slug: "projection-room", name: "The Projection Room", tone: "Films by their essence. A scene, a line in spirit, and what I think they get wrong.", wall: "#101010", accent: "#c7c0a8" },
  { slug: "antenna", name: "The Antenna Room", tone: "Notes from talks and conversations. What I take from them, and where I push back.", wall: "#1a1f1c", accent: "#d1a24a", ready: true },
  { slug: "resonance-chamber", name: "The Resonance Chamber", tone: "Music by mood, voice, and memory. A few songs to live with.", wall: "#221a1a", accent: "#b86b6b" },
];

export const getRoom = (slug) => rooms.find((r) => r.slug === slug);
