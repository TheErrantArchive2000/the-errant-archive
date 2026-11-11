// app/layout.js
import "./globals.css";
import { Special_Elite, Courier_Prime, IBM_Plex_Mono, Caveat } from "next/font/google";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-elite",
  display: "swap",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  title: "The Errant Archive",
  description: "Errant Archive Creations.",
};

// Runs before the page paints. If this visitor chose "Still the candles",
// it adds the "still" class to <html>, which the CSS uses to stop the motion.
const stillScript = `
try {
  if (sessionStorage.getItem("still-candles") === "1") {
    document.documentElement.classList.add("still");
  }
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: stillScript }} />
      </head>
      <body
        className={`${specialElite.variable} ${courierPrime.variable} ${plexMono.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
