import Link from "next/link";

const ROOMS = [
  { id: "unsent-desk", name: "The Unsent Desk", blurb: "Poems, journal pieces, fragments, and drafts. Some were meant to be left unfinished." },
  { id: "gallery-half-light", name: "The Gallery of Half-Light", blurb: "Paintings, sketches, fails, and photographs (when they arrive)." },
  { id: "specimen-drawer", name: "The Specimen Drawer", blurb: "Scientific notes, facts, and small explanations. Immunology and cancer research lead." },
  { id: "morning-ledger", name: "The Morning Ledger", blurb: "One short entry a day on being alive. A plain archive below." },
  { id: "quiet-hands", name: "The Room of Quiet Hands", blurb: "Hands, words, and signs. Content coming.", comingSoon: true },
  { id: "unlit-landing", name: "The Unlit Landing", blurb: "Questions about God, meaning, and existence.", note: "I don't know yet." },
  { id: "shelf-of-quarrels", name: "The Shelf of Quarrels", blurb: "A few writers, one quote, one disagreement, and what the book did to me." },
  { id: "projection-room", name: "The Projection Room", blurb: "Films by their essence. A scene, a line in spirit, and what I think they get wrong." },
  { id: "antenna-room", name: "The Antenna Room", blurb: "Notes from talks and conversations. What I take from them, and where I push back." },
  { id: "resonance-chamber", name: "The Resonance Chamber", blurb: "Music by mood, voice, and memory. A few songs to live with." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>The Errant<br />Archive</h1>
          <p className="intro">
            A collection of wanderings, questions, studies, paintings, fragments, and other unfinished attempts at understanding this strange life.
          </p>
          <p className="tagline">Pull up a chair. Nothing here is finished.</p>
        </div>

        <aside className="key">
          <h2>Key to the Archive</h2>
          <div className="key-row">
            <span className="key-strike">text</span>
            <span>= struck through means abandoned</span>
          </div>
          <div className="key-row">
            <span className="key-chip">unfinished</span>
            <span>= work in progress or not yet complete</span>
          </div>
          <div className="key-row">
            <span className="key-frame"></span>
            <span>= dashed frame means photograph coming</span>
          </div>
        </aside>
      </section>

      <section id="rooms" className="rooms">
        <h2 className="section-title">The Rooms</h2>
        <p className="sub">Open the doors you relate to.</p>

        <div className="room-grid">
          {ROOMS.map((room) => (
            <Link key={room.id} href={`/rooms/${room.id}`} className="room-card">
              <h3>{room.name}</h3>
              <p>{room.blurb}</p>
              {room.note && <p><em>{room.note}</em></p>}
              {room.comingSoon && <span className="tag outline">coming</span>}
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="special">
        <Link href="/long-table" className="card">
          <h3>The Long Table</h3>
          <p><em>The Long Table is not open yet.</em></p>
          <span className="arrow">→</span>
        </Link>
        <Link href="/keepers-door" className="card">
          <h3>The Keeper&apos;s Door</h3>
          <p>Protected approval page for visitor notes. Sign-in required. (Deferred)</p>
          <span className="arrow">→</span>
        </Link>
        <Link href="/#house-rules" className="card sage">
          <h3>House Rules</h3>
          <p>A few quiet agreements for this place.</p>
          <span className="arrow">→</span>
        </Link>
      </section>

      <section id="house-rules" className="rules">
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
