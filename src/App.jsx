import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Designer Studio. All rights reserved.</p>
          <p className="text-zinc-500 text-sm">Built with care — minimalist & modern</p>
        </div>
      </footer>
    </div>
  )
}

export default App
