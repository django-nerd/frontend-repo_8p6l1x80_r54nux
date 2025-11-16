import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mt-6 flex items-center justify-between rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-3 text-white">
          <a href="#" className="font-bold tracking-tight">NovaLab</a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm hover:text-white/90">{l.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-semibold">Get proposal</a>
          </nav>
          <button className="md:hidden" aria-label="Open menu" onClick={()=>setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-black/60" onClick={()=>setOpen(false)} />
      )}
      <aside className={`md:hidden fixed top-0 right-0 h-full w-72 bg-slate-900 text-white p-6 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Menu</span>
          <button aria-label="Close menu" onClick={()=>setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-6 grid gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-lg" onClick={()=>setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="mt-2 inline-flex items-center rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 font-semibold" onClick={()=>setOpen(false)}>Get proposal</a>
        </nav>
      </aside>
    </header>
  )
}
