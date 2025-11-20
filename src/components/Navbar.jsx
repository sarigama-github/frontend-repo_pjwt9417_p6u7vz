import { useState } from 'react'
import { Menu, X, Diamond } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-300 via-cyan-300 to-indigo-400 p-[1px]">
                <div className="h-full w-full rounded-full bg-black/80 grid place-content-center">
                  <Diamond className="h-4 w-4 text-white/90" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-wide">Rolex Aura</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#collections">Collections</NavLink>
              <NavLink href="#craft">Craft</NavLink>
              <NavLink href="#story">Our Story</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="hidden md:block">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">
                Explore Now
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-4 pt-4">
                <NavLink href="#collections">Collections</NavLink>
                <NavLink href="#craft">Craft</NavLink>
                <NavLink href="#story">Our Story</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">
                  Explore Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
