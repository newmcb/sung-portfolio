import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sung Portfolio",
  description: "Frontend Developer Sung Portfolio",
  openGraph: {
    title: "Sung Portfolio",
    description:
      "Frontend Developer Sung Portfolio",
    url: "https://sung-portfolio-chi.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/ffffff/000000?text=Sung+Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <head>
      <Script id="theme-init" strategy="beforeInteractive">
        {`try {
              const saved = localStorage.getItem("darkMode");
              const isDark = saved === "true";
              document.documentElement.classList.toggle("dark", isDark);
            } catch {}`}
      </Script>
    </head>
    <body className="transition-colors duration-500">
      <Header />
        <main className="pt-20">{children}</main>
        <Analytics/>
      <Footer />
    </body>
    </html>
  );
}
