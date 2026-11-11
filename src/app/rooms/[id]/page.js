import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoom } from "../../../../lib/rooms";

const pageStyle = {
  minHeight: "100vh",
  padding: "3rem 2.5rem",
  background: "#15100c",
  color: "#ece0c4",
  fontFamily: '"Courier New", Courier, monospace',
};

const sheetStyle = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "2.5rem 2.2rem",
  background: "linear-gradient(180deg, #ece0c6, #e0cfa9)",
  border: "1px solid #a48d66",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
  color: "#2a2118",
};

export default async function RoomPage({ params }) {
  const { id } = await params;
  const room = getRoom(id);

  if (!room) {
    notFound();
  }

  return (
    <main style={pageStyle}>
      <div style={{ maxWidth: "760px", margin: "0 auto 1.5rem" }}>
        <Link href="/" style={{ color: "#e6d9b8" }}>
          ← Back to the Archive
        </Link>
      </div>

      <article style={sheetStyle}>
        <h1 style={{ fontWeight: 400, fontSize: "2rem", marginBottom: "0.6rem" }}>
          {room.name}
        </h1>
        <p style={{ fontStyle: "italic", color: "#3a2e20", marginBottom: "1.6rem" }}>
          {room.tone}
        </p>

        {room.soon && <p>(coming)</p>}
        {room.ready && !room.soon && (
          <p style={{ color: "#3a2e20" }}>Nothing is placed here yet.</p>
        )}
      </article>
    </main>
  );
}
