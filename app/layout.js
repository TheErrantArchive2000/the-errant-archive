import "./globals.css";
import Link from "next/link";
import { EMAIL } from "@/lib/rooms";

export const metadata = {
  title: "The Errant Archive",
  description: "A collection of wanderings, questions, studies, paintings, fragments, and other unfinished attempts at understanding this strange life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">The Errant Archive</Link>
          <nav>
            <Link href="/#rooms">Rooms</Link>
            <Link href="/house-rules">House Rules</Link>
            <a href={`mailto:${EMAIL}`}>Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>Contact: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </footer>
      </body>
    </html>
  );
}
