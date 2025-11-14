import type { Metadata } from "next";
import { Poppins, Rajdhani } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans-base",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const rajdhani = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CWA Sciences Classes | Maheshkhunt Coaching for Classes 8-12",
  description:
    "CWA Sciences Classes maheshkhunt me class 8 se 12 tak ke liye maths aur science ki offline coaching. Regular batches, concept mastery aur YouTube support.",
  keywords: [
    "CWA Sciences Classes",
    "Maheshkhunt coaching",
    "Maths tuition",
    "Science coaching",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "Bihar coaching institute",
  ],
  openGraph: {
    title: "CWA Sciences Classes | Maths & Science Coaching Maheshkhunt",
    description:
      "Maheshkhunt me class 8 se 12 tak comprehensive maths aur science coaching batches. Offline classrooms + YouTube channel CWA Sciences Classes.",
    url: "https://agentic-0d908f96.vercel.app",
    siteName: "CWA Sciences Classes",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rajdhani.variable} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
