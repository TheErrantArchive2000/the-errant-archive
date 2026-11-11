import Link from "next/link";

const ROOMS = [
  { id: "unsent-desk", name: "The Unsent Desk", blurb: "Poems, journal pieces, fragments, and drafts. Some were meant to be left unfinished." },
  { id: "gallery-half-light", name: "The Gallery of Half-Light", blurb: "Paintings, sketches, fails, and photographs when they arrive." },
  { id: "specimen-drawer", name: "The Specimen Drawer", blurb: "Scientific notes, facts, and small explanations. Immunology and cancer research lead." },
  { id: "morning-ledger", name: "The Morning Ledger", blurb: "One short entry a day on being alive." },
  { id: "quiet-hands", name: "The Room of Quiet Hands", blurb: "Hands, words, and signs. Content coming.", comingSoon: true },
  { id: "unlit-landing", name: "The Unlit Landing", blurb: "Questions about God, meaning, and existence. I don't know yet." },
  { id: "shelf-of-quarrels", name: "The Shelf of Quarrels", blurb: "A few writers, one quote, one disagreement, and what the book did to me." },
  { id: "projection-room", name: "The Projection Room", blurb: "Films by their essence. A scene, a line in spirit, and what I think they get wrong." },
  { id: "antenna-room", name: "The Antenna Room", blurb: "Notes from talks and conversations. What I take from them, and where I push back." },
  { id: "resonance-chamber", name: "The Resonance Chamber", blurb: "Music by mood, voice, and memory. A few songs to live with." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>The Errant Archive</h1>
        <p className="intro">A collection of wanderings, questions, studies, paintings, fragments, and other unfinished attempts at understanding this strange life.</p>
        <p className="tagline">Pull up a chair. Nothing here is finished.</p>
      </section>

      <section id="rooms" className="rooms">
        <h2>The Rooms</h2>
        <p className="sub">Open the doors you relate to.</p>
        <div className="room-grid">
          {ROOMS.map((room) => (
            <Link key={room.id} href={`/rooms/${room.id}`} className="room-card">
              <h3>{room.name}</h3>
              <p>{room.blurb}</p>
              {room.comingSoon && <span className="tag dashed-tag">coming</span>}
            </Link>
          ))}
        </div>
      </section>

      <section className="special">
        <article className="card dashed">
          <h3>The Long Table</h3>
          <p>Not open yet.</p>
        </article>
        <article className="card dashed">
          <h3>The Keeper&apos;s Door</h3>
          <p>Protected approval page. Deferred.</p>
        </article>
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
