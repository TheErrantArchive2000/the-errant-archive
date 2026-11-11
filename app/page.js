import Link from "next/link";
import { rooms } from "@/lib/rooms";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>The Errant Archive</h1>
        <p className="tagline">Nothing here is finished.</p>
        <p className="bio">
          Our calling is not to lay claim to the path, but rather to remain true to the way the path is trod.
          The collections and works housed here are born from an unending wandering, a steady reckoning of
          thoughts, ideas, and fleeting inspirations, reflecting my ever-evolving, metanoiac self. There is no
          mastery but the worthiness of the act itself.
        </p>
        <p>
          <Link href="/house-rules">House Rules</Link> · <a href="mailto:Itsurmyzone@gmail.com">Itsurmyzone@gmail.com</a>
        </p>
      </section>

      <section className="room-grid">
        {rooms.map((room) => (
          <Link
            key={room.slug}
            href={`/rooms/${room.slug}`}
            className={`room-card ${room.ready ? "" : "coming"}`}
            style={{ "--accent": room.accent }}
          >
            <strong>{room.name}</strong>
            <small>{room.tone}</small>
            {!room.ready && <small>Coming later</small>}
          </Link>
        ))}
      </section>
    </>
  );
}
