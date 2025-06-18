'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DarkModeToggle from './DarkModeToggle'

export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/career', label: 'Career' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#222] backdrop-blur bg-opacity-80 bg-[#0f0f0f] dark:bg-[#0f0f0f] [data-theme=light]:bg-white">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl font-bold hover:text-sky-400 ${
            pathname === '/' ? 'text-sky-400' : 'text-white dark:text-white [data-theme=light]:text-black'
          }`}
        >
          SUNG
        </Link>
        <div className="flex items-center space-x-6 text-sm">
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`hover:text-sky-400 ${
                    isActive
                      ? 'text-sky-400'
                      : 'text-white dark:text-white [data-theme=light]:text-black'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  )
}
