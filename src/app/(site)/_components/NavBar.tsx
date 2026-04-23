'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Menu', href: '/menu' },
  { label: 'Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`ak-nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="ak-nav-logo">
        <span className="kanji">茜</span>
        <span className="mark">Akane</span>
      </Link>

      <div className="ak-nav-links">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="ak-nav-link hidden md:block"
          >
            {label}
          </Link>
        ))}
        <Link href="/booking" className="ak-nav-cta">
          Reserve
        </Link>
      </div>
    </nav>
  )
}
