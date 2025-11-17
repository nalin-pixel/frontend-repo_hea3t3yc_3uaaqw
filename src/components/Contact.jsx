import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.03] ring-1 ring-white/10 p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-white text-2xl font-semibold">Let’s work together</h3>
            <p className="text-zinc-400 mt-3">Have a project in mind? I’m currently accepting new freelance opportunities and collaborations.</p>
            <div className="mt-6 flex items-center gap-3 text-zinc-300">
              <Mail size={18} /> hello@designer.studio
            </div>
          </div>

          <form className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input placeholder="Name" className="bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input placeholder="Email" type="email" className="bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input placeholder="Project Type (Branding, Editorial...)" className="sm:col-span-2 bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea placeholder="Tell me about your project" rows="4" className="sm:col-span-2 bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors">
              Send Inquiry <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
