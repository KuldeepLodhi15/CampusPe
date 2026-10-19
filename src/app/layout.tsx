import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CampusPe | Connecting Students, Colleges & Employers",
  description: "Connect 10X faster. CampusPe brings colleges, student opportunities, internships, and hiring employers together on one unified campus platform.",
  keywords: [
    "CampusPe",
    "campus recruitment",
    "college placements",
    "internships in India",
    "freshers hiring",
    "college admission",
  ],
  authors: [{ name: "CampusPe Technologies Pvt. Ltd." }],
  openGraph: {
    title: "CampusPe | Connecting Students, Colleges & Employers",
    description: "One platform connecting students, colleges & employers — faster.",
    type: "website",
    url: "https://campuspe.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
