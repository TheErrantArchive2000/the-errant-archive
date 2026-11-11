import Link from "next/link";
import styles from "./home.module.css";

/* Simple line icons, drawn in the same ink style as the reference. */
function Icon({ name }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: styles.icon,
    "aria-hidden": true,
  };

  switch (name) {
    case "candle":
      return (
        <svg {...common}>
          <path d="M32 10 C37 18 38 23 32 28 C26 23 27 18 32 10 Z" />
          <rect x="27" y="28" width="10" height="22" />
          <path d="M20 54 H44" />
          <ellipse cx="32" cy="52" rx="14" ry="3" />
        </svg>
      );
    case "landscape":
      return (
        <svg {...common}>
          <rect x="10" y="12" width="44" height="40" />
          <circle cx="42" cy="24" r="4" />
          <path d="M10 42 L22 30 L32 39 L40 32 L54 44" />
        </svg>
      );
    case "microscope":
      return (
        <svg {...common}>
          <path d="M26 12 H36 L40 34 H30 Z" />
          <path d="M40 22 L48 36" />
          <path d="M22 40 H44" />
          <path d="M30 40 L28 50" />
          <path d="M14 56 H50" />
          <path d="M22 50 L14 56" />
        </svg>
      );
    case "sunrise":
      return (
        <svg {...common}>
          <path d="M14 44 A18 18 0 0 1 50 44" />
          <path d="M6 50 H58" />
          <path d="M32 14 V20" />
          <path d="M14 24 L18 28" />
          <path d="M50 24 L46 28" />
          <path d="M4 40 H9" />
          <path d="M55 40 H60" />
          <path d="M10 56 H54" />
        </svg>
      );
    case "hand":
      return (
        <svg {...common}>
          <path d="M22 58 C16 48 14 40 18 32 L24 22 C26 19 30 21 28 25 L26 32" />
          <path d="M30 34 C33 26 40 24 44 28 L48 40 C50 50 44 58 36 58" />
          <path d="M44 30 C47 30 50 34 50 38" />
        </svg>
      );
    case "bookshelf":
      return (
        <svg {...common}>
          <path d="M8 56 H56" />
          <rect x="10" y="16" width="8" height="40" />
          <rect x="19" y="18" width="7" height="38" />
          <rect x="27" y="14" width="9" height="42" />
          <path d="M42 56 L48 18 L55 20 L50 56" />
        </svg>
      );
    case "projector":
      return (
        <svg {...common}>
          <circle cx="22" cy="28" r="12" />
          <circle cx="22" cy="28" r="3" />
          <rect x="18" y="42" width="24" height="12" />
          <path d="M42 34 L58 22 V46 L42 40" />
          <path d="M14 56 H34" />
        </svg>
      );
    case "radio":
      return (
        <svg {...common}>
          <rect x="8" y="24" width="48" height="30" rx="3" />
          <circle cx="22" cy="39" r="7" />
          <path d="M36 32 H48" />
          <path d="M36 38 H48" />
          <path d="M36 44 H48" />
          <path d="M46 24 L58 6" />
        </svg>
      );
    case "gramophone":
      return (
        <svg {...common}>
          <path d="M12 26 Q26 52 42 36 L54 14" />
          <path d="M42 36 L54 14 L58 18 L44 40" />
          <rect x="10" y="44" width="30" height="8" />
          <circle cx="40" cy="48" r="4" />
        </svg>
      );
    case "table":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="30" rx="20" ry="6" />
          <path d="M32 36 V50" />
          <path d="M22 54 H42" />
          <path d="M6 30 V38 M58 30 V38" />
          <path d="M14 22 V26 M50 22 V26" />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="20" cy="32" r="9" />
          <path d="M29 32 H56" />
          <path d="M46 32 V40" />
          <path d="M55 32 V38" />
        </svg>
      );
    case "sprig":
      return (
        <svg {...common}>
          <path d="M32 58 V14" />
          <path d="M32 28 C24 28 20 22 20 16 C28 16 32 22 32 28 Z" />
          <path d="M32 38 C40 38 44 32 44 26 C36 26 32 32 32 38 Z" />
          <path d="M32 48 C25 48 22 43 22 38 C29 38 32 43 32 48 Z" />
        </svg>
      );
    default:
      return null;
  }
}

const ROOMS = [
  { id: "unsent-desk", name: "The Unsent Desk", icon: "candle", blurb: "Poems, journal pieces, fragments, and drafts. Some were meant to be left unfinished." },
  { id: "gallery-half-light", name: "The Gallery of Half-Light", icon: "landscape", blurb: "Paintings, sketches, fails, and photographs (when they arrive)." },
  { id: "specimen-drawer", name: "The Specimen Drawer", icon: "microscope", blurb: "Scientific notes, facts, and small explanations. Immunology and cancer research lead." },
  { id: "morning-ledger", name: "The Morning Ledger", icon: "sunrise", blurb: "One short entry a day on being alive. A plain archive below." },
  { id: "quiet-hands", name: "The Room of Quiet Hands", icon: "hand", blurb: "Hands, words, and signs. Content coming.", comingSoon: true },
  { id: "unlit-landing", name: "The Unlit Landing", icon: "landscape", blurb: "Questions about God, meaning, and existence.", note: "I don't know yet." },
  { id: "shelf-of-quarrels", name: "The Shelf of Quarrels", icon: "bookshelf", blurb: "A few writers, one quote, one disagreement, and what the book did to me." },
  { id: "projection-room", name: "The Projection Room", icon: "projector", blurb: "Films by their essence. A scene, a line in spirit, and what I think they get wrong." },
  { id: "antenna-room", name: "The Antenna Room", icon: "radio", blurb: "Notes from talks and conversations. What I take from them, and where I push back." },
  { id: "resonance-chamber", name: "The Resonance Chamber", icon: "gramophone", blurb: "Music by mood, voice, and memory. A few songs to live with." },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>The Errant<br />Archive</h1>
         <p className={styles.intro}>
  It is not for us to lay claim to the path, but only to remain true to how it is trod. The collections and works housed here are born from an unending wandering, a steady reckoning of thoughts, ideas, and fleeting inspirations of an ever-evolving, metanoiac self. I hold no illusion of mastery, but am in the pursuit of the worthiness of the deed itself.
</p>

          <p className={styles.tagline}>Pull up a chair. Nothing here is finished.</p>
        </div>

        <aside className={styles.key}>
          <h2>Key to the Archive</h2>
          <div className={styles.keyRow}>
            <span className={styles.keyStrike}>text</span>
            <span>= struck through means abandoned</span>
          </div>
          <div className={styles.keyRow}>
            <span className={styles.keyChip}>unfinished</span>
            <span>= work in progress or not yet complete</span>
          </div>
          <div className={styles.keyRow}>
            <span className={styles.keyFrame} />
            <span>= dashed frame means photograph coming</span>
          </div>
        </aside>
      </section>

      <section id="rooms" className={styles.rooms}>
        <h2 className={styles.sectionTitle}>The Rooms</h2>
        <p className={styles.sub}>Open the doors you relate to.</p>

        <div className={styles.roomGrid}>
          {ROOMS.map((room) => (
            <Link key={room.id} href={`/rooms/${room.id}`} className={styles.slab}>
              <div className={styles.slabIcon}>
                <Icon name={room.icon} />
              </div>
              <div className={styles.slabBody}>
                <h3>{room.name}</h3>
                <p>{room.blurb}</p>
                {room.note && <p className={styles.note}>{room.note}</p>}
                {room.comingSoon && <span className={styles.comingTag}>coming</span>}
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.special}>
        <Link href="/long-table" className={styles.slab}>
          <div className={styles.slabIcon}>
            <Icon name="table" />
          </div>
          <div className={styles.slabBody}>
            <h3>The Long Table</h3>
            <p className={styles.note}>The Long Table is not open yet.</p>
          </div>
        </Link>

        <Link href="/keepers-door" className={styles.slab}>
          <div className={styles.slabIcon}>
            <Icon name="key" />
          </div>
          <div className={styles.slabBody}>
            <h3>The Keeper&apos;s Door</h3>
            <p>Protected approval page for visitor notes. Sign-in required. (Deferred)</p>
          </div>
        </Link>

        <Link href="/#house-rules" className={`${styles.slab} ${styles.sage}`}>
          <div className={styles.slabIcon}>
            <Icon name="sprig" />
          </div>
          <div className={styles.slabBody}>
            <h3>House Rules</h3>
            <p>A few quiet agreements for this place.</p>
          </div>
          <span className={styles.arrow}>→</span>
        </Link>
      </section>

      <section id="house-rules" className={styles.rules}>
        <h2>House Rules</h2>
        <ol>
          <li>Read slowly, and leave what you feel.</li>
          <li>Reactions are free and anonymous.</li>
          <li>Guestbook notes should be kind and honest.</li>
          <li>Please credit the keeper if you share a work.</li>
          <li>Nothing here is finished, so be patient with the drafts.</li>
        </ol>
      </section>
    </main>
  );
}
