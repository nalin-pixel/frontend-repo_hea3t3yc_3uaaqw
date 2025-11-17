export default function About() {
  return (
    <section id="about" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">Design with intention</h2>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            I specialize in brand identity, editorial layout, and digital visual systems. My approach blends minimalism with thoughtful detail — creating work that feels timeless, functional, and distinct. Each project is driven by clear goals and a collaborative process.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-emerald-400 text-xs uppercase tracking-widest">Focus</p>
              <p className="text-white mt-1">Brand Identity</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-emerald-400 text-xs uppercase tracking-widest">Focus</p>
              <p className="text-white mt-1">Editorial Systems</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-emerald-400 text-xs uppercase tracking-widest">Focus</p>
              <p className="text-white mt-1">Digital Visuals</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-emerald-400 text-xs uppercase tracking-widest">Focus</p>
              <p className="text-white mt-1">Art Direction</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-lg object-cover w-full h-60 opacity-90" src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=1400&auto=format&fit=crop" alt="Studio 1" />
          <img className="rounded-lg object-cover w-full h-60 opacity-90" src="https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=1400&auto=format&fit=crop" alt="Studio 2" />
          <img className="rounded-lg object-cover w-full h-60 opacity-90" src="https://images.unsplash.com/photo-1673889579455-96220f5cb94d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW8lMjAzfGVufDB8MHx8fDE3NjMzNTE2OTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Studio 3" />
          <img className="rounded-lg object-cover w-full h-60 opacity-90" src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1400&auto=format&fit=crop" alt="Studio 4" />
        </div>
      </div>
    </section>
  )
}
