'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {NAV_LINKS} from "@/components/Header";

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="md:hidden fixed bottom-0 left-0 w-full bg-[#111] border-t border-[#333] py-3 text-[15px] min-h-[44px] z-50">
      <div className="flex justify-around">
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
    </footer>
  )
}
