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
  title: "Vardhan Hotel | Pure Vegetarian & Suites",
  description: "Experience premium boutique hospitality, refined suites, and exceptional 100% vegetarian culinary dining in Hubballi at Vardhan Hotel.",
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

