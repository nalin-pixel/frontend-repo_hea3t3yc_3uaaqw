import { Menu, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-emerald-500" />
            <span className="text-white text-sm uppercase tracking-[0.25em]">Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm text-zinc-300 hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-sm text-zinc-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="p-2 rounded hover:bg-white/10 transition-colors" aria-label="Instagram">
              <Instagram size={18} className="text-zinc-200" />
            </a>
            <a href="#" className="p-2 rounded hover:bg-white/10 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} className="text-zinc-200" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors">
              <Mail size={16} /> Hire Me
            </a>
          </div>

          <button className="md:hidden p-2 rounded hover:bg-white/10">
            <Menu size={22} className="text-zinc-200" />
          </button>
        </div>
      </div>
    </header>
  )
}
