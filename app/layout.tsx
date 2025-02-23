import type { Metadata } from "next";
import { Montserrat, Zain, Monoton, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./commons/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mohit Soni | Portfolio | Fullstack Developer",
  description:
    "This is my portfolio, feel free to contact me for work. You can find my past projects and also my CV here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${zain.variable} ${poppins.variable} ${monoton.variable} font-montserrat antialiased`}
      >
        <Navbar />
        {/* <div className="h-20"></div> */}
        {children}
      </body>
    </html>
  );
}
