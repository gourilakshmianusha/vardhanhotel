import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Vardhhan Hospitality | Premium Boutique Hotel & Pure Vegetarian Suites Hubballi",
    template: "%s | Vardhhan Hospitality"
  },
  description: "Experience premium boutique hospitality, refined suites, Ayurvedic-focused wellness, and exquisite 100% vegetarian culinary dining in Hubballi at Vardhhan Hotel & Kitchen.",
  keywords: ["Vardhhan Hotel", "Vardhhan Kitchen", "pure vegetarian restaurant Hubballi", "luxury boutique hotel Hubballi", "hotel near Hubli", "vegetarian dining Karnataka", "wellness hotel karnataka", "Vardhhan luxury suites"],
  authors: [{ name: "Vardhhan Hospitality Team" }],
  creator: "Vardhhan Hospitality",
  metadataBase: new URL("https://vardhhan.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vardhhan.com",
    title: "Vardhhan Hospitality | Premium Boutique Hotel & Dietary Suites",
    description: "Indulge in pure vegetarian culinary heritage, Ayurvedic wellness, and luxury suites at Vardhhan Hotel & Kitchen, Hubballi.",
    siteName: "Vardhhan Hospitality",
    images: [
      {
        url: "https://vardhhan.com/seo_featured_image.png",
        width: 1200,
        height: 630,
        alt: "Vardhhan Hotel - Timeless Luxury and Pure Vegetarian Dining Pavilion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardhhan Hospitality | Boutique Hotel & Pure Veg Kitchen",
    description: "Experience premium boutique suites and organic pure-vegetarian dining curated with heritage and love in Hubballi, Karnataka.",
    images: ["https://vardhhan.com/seo_featured_image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-[#1C1917] bg-[#FAF9F5]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

