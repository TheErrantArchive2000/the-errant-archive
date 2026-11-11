import "./globals.css";

export const metadata = {
  title: "The Errant Archive",
  description: "Our calling is not to lay claim to the path, but rather to remain true to the way the path is trod.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-nav">
          <a href="/">The Errant Archive</a>
          <nav>
            <a href="/house-rules">House Rules</a>
            <a href="mailto:Itsurmyzone@gmail.com">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">Nothing here is finished.</footer>
      </body>
    </html>
  );
}
