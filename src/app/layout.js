import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "The Errant Archive",
  description: "A collection of wanderings, questions, studies, paintings, fragments, and unfinished attempts at understanding this strange life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <Link href="/" className="brand">The Errant Archive</Link>
          <nav>
            <Link href="/#rooms">Rooms</Link>
            <Link href="/long-table">Long Table</Link>
            <Link href="/#house-rules">House Rules</Link>
            <span className="moon">☾</span>
          </nav>
        </header>

        {children}

        <footer className="footer">
          The Errant Archive. Nothing here is finished.
        </footer>
      </body>
    </html>
  );
}
