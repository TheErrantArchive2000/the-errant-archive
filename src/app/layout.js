import "./globals.css";

export const metadata = {
  title: "The Errant Archive",
  description:
    "A collection of wanderings, questions, studies, paintings, fragments, and other unfinished attempts at understanding this strange life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="topbar">
          <a className="brand" href="/">The Errant Archive</a>
          <nav>
            <a className="active" href="/">Home</a>
            <a href="/#rooms">Rooms</a>
            <a href="/#house-rules">House Rules</a>
            <a href="/#rooms">Archive</a>
            <span className="moon" aria-hidden="true">☾</span>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <p>Contact: theerrantarchive@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}
