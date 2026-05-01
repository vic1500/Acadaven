import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ links, buttons }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-[#F7F9FC] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/logo.png"
            alt="Acadaven"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={buttons[0].href}
            className="text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors px-3 py-2"
          >
            {buttons[0].label}
          </a>
          <a
            href={buttons[1].href}
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#1c6b3e' }}
          >
            {buttons[1].label}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5 pt-2 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-600 py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href={buttons[0].href} className="text-sm font-semibold text-gray-700 py-2">
              {buttons[0].label}
            </a>
            <a
              href={buttons[1].href}
              className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg"
              style={{ backgroundColor: '#1c6b3e' }}
            >
              {buttons[1].label}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
