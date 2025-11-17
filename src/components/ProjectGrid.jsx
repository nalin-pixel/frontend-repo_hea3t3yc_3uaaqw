import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Monochrome Brand System',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Editorial Layout Series',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Poster Exploration',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Digital Product Visuals',
    category: 'UI/Visual',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Typeface Experiment',
    category: 'Typography',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Minimal Packaging',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function ProjectGrid() {
  return (
    <section id="work" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">Selected Work</h2>
            <p className="text-zinc-400 mt-2">A mix of brand systems, editorial, and digital visuals</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">Request a Quote</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-emerald-400 text-xs uppercase tracking-widest">{p.category}</p>
                <h3 className="text-white font-medium mt-1">{p.title}</h3>
                <div className="mt-4 flex gap-2">
                  <a href="#" className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20 transition">View Project</a>
                  <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition">Hire for Similar</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
