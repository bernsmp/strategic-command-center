import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Monospace font for terminals
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Display font - bold condensed style matching the book cover
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strategic Command Center | Inside the Billion Dollar Mind",
  description:
    "Install Jay Abraham's strategic operating system. Access Genius Extractions™, AI-powered prompts, and breakthrough thinking frameworks.",
  keywords: [
    "Jay Abraham",
    "strategic thinking",
    "business strategy",
    "AI consulting",
    "Genius Extractions",
    "breakthrough thinking",
  ],
  openGraph: {
    title: "Strategic Command Center",
    description: "Decode Strategic Genius with AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${bebasNeue.variable}`}
    >
      <body className="bg-void text-paper antialiased">
        <div className="grid-overlay min-h-screen">{children}</div>
      </body>
    </html>
  );
}
