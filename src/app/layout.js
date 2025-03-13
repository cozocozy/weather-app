import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
