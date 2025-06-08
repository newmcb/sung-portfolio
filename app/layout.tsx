import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Interactive Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              try {              
                const saved = localStorage.getItem("darkMode");                
                const isDark = saved === "true";
                
                if (isDark) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
                // document.body.dataset.theme = isDark ? "dark" : "light";
                // window.__themeLabel = isDark ? "☀️ Light" : "🌙 Dark";
              } catch (e) {}
            `,
        }}
      />
    </head>
    <body className={`${inter.className} transition-colors duration-500`} suppressHydrationWarning>
    <header
      className="fixed top-0 w-full z-50 border-b border-[#222] backdrop-blur bg-opacity-80 bg-[#0f0f0f] dark:bg-[#0f0f0f] [data-theme=light]:bg-white">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/"
              className="text-xl font-bold text-white dark:text-white [data-theme=light]:text-black hover:text-sky-400">SUNG</Link>
        <div className="flex items-center space-x-6 text-sm">
          <Link href="/about" className="text-white dark:text-white [data-theme=light]:text-black hover:text-sky-400">About</Link>
          <Link href="/career" className="text-white dark:text-white [data-theme=light]:text-black hover:text-sky-400">Career</Link>
          <Link href="/projects" className="text-white dark:text-white [data-theme=light]:text-black hover:text-sky-400">Projects</Link>
          <Link href="/contact" className="text-white dark:text-white [data-theme=light]:text-black hover:text-sky-400">Contact</Link>
          <div className="min-w-[100px] text-center">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
    <div className="pt-20">{children}</div>
    </body>
    </html>
  );
}
