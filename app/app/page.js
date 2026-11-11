"use client";

import { useState } from "react";

// Add rooms here as you build them. Each entry becomes a door on the home page.
// Example: { href: "/study", name: "The Study", note: "A short line about the room." }
const doors = [];

export default function Home() {
  const [still, setStill] = useState(false);

  function toggleStill() {
    const next = !still;
    setStill(next);
    try {
      sessionStorage.setItem("still-candles", next ? "1" : "0");
    } catch (e) {}
    document.documentElement.classList.toggle("still", next);
  }

  return (
    <main>
      <section className="hall">
        <div className="fog" aria-hidden="true" />
        <div className="fog fog--slow" aria-hidden="true" />
        <div className="candle-glow" aria-hidden="true" />

        <div style={{ position: "relative" }}>
          <p className="label">Errant Archive Creations</p>
          <h1 className="hall__entrance">Candle Hall</h1>
          <p className="hall__intro margin-note">Choose a door to begin.</p>
          <p>
            <button type="button" onClick={toggleStill} aria-pressed={still}>
              {still ? "Candles are still" : "Still the candles"}
            </button>
          </p>
        </div>
      </section>

      <section className="doors" aria-label="Rooms">
        {doors.map((door) => (
          <a key={door.href} href={door.href} className="door">
            <span className="door__name" style={{ display: "block" }}>
              {door.name}
            </span>
            <span className="door__note" style={{ display: "block" }}>
              {door.note}
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
