import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for freelance & full-time
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Java & Spring Boot Software Engineer
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            I build robust backend systems, cloud-native microservices, and delightful developer experiences. Clean code, strong architecture, and performance-first.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-2.5 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="rounded-md border border-white/15 hover:border-white/30 px-5 py-2.5 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero