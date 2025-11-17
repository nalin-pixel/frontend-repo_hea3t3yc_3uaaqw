import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-left">
          <p className="text-emerald-400 tracking-[0.35em] uppercase text-xs mb-4">Graphic Designer</p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl">
            Crafting sleek, modern visuals that move people
          </h1>
          <p className="mt-6 text-zinc-300 max-w-xl">
            A curated selection of brand systems, editorial layouts, and digital assets — designed with precision and intention.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors">
              View Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
