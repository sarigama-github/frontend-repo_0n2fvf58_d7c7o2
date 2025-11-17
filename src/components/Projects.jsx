import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const ProjectCard = ({ project }) => {
  return (
    <div className="group rounded-xl bg-white/5 border border-white/10 backdrop-blur p-5 hover:border-emerald-400/40 transition-colors">
      {project.image_url && (
        <img src={project.image_url} alt={project.title} className="h-40 w-full object-cover rounded-lg mb-4" />
      )}
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech_stack?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.repo_url && (
          <a href={project.repo_url} target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 text-sm">Code</a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 text-sm">Live</a>
        )}
      </div>
    </div>
  )
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        setProjects(data.projects || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="relative py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-slate-400">Production-grade systems and platform tooling.</p>

        {loading ? (
          <p className="mt-8 text-slate-400">Loading projects...</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id || p.title} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects