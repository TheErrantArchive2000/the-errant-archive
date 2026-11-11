import Link from "next/link";
import { rooms } from "@/lib/rooms";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>The Errant Archive</h1>
          <p className="bio">
            A collection of wanderings, questions, studies, paintings, fragments, and other unfinished
            attempts at understanding this strange life.
          </p>
          <p className="stamp">Pull up a chair. Nothing here is finished.</p>
        </div>
        <aside className="key">
          <p><strong>Key to the Archive</strong></p>
          <p><span className="strike">text</span> means abandoned</p>
          <p><span className="unf">unfinished</span> means work in progress or not yet complete</p>
          <p><span className="dash" /> dashed frame means photograph coming</p>
        </aside>
      </section>

      <h2 className="rooms-title" id="rooms">The Rooms</h2>
      <p className="center muted">Open the doors you relate to.</p>

      <section className="room-grid">
        {rooms.map((room) => (
          <Link key={room.slug} href={`/rooms/${room.slug}`} className="room-card" style={{ "--accent": room.accent }}>
            <strong>{room.name}</strong>
            <small>{room.tone}</small>
            {room.soon && <span className="soon">coming</span>}
          </Link>
        ))}
      </section>

      <section className="wide-row">
        <div className="wide-card">
          <strong>The Long Table</strong>
          <small>The Long Table is not open yet.</small>
        </div>
        <div className="wide-card">
          <strong>The Keeper&apos;s Door</strong>
          <small>Protected approval page for visitor notes. Sign-in required. (Deferred)</small>
        </div>
        <Link href="/house-rules" className="wide-card">
          <strong>House Rules</strong>
          <small>A few quiet agreements for this place.</small>
        </Link>
      </section>
    </>
  );
}
