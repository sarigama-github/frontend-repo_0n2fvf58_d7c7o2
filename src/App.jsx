import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">SE • Java / Spring Boot</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="about"><About /></div>
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} • Built with love for clean code.
      </footer>
    </div>
  )
}

export default App
