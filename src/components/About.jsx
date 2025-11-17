import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a software engineer focused on Java and Spring Boot, building scalable microservices, event-driven systems, and reliable APIs. I care deeply about clean architecture, testing, and developer experience.
          </p>
          <ul className="mt-6 space-y-2 text-slate-300">
            <li>• Spring Boot, Spring Cloud, WebFlux</li>
            <li>• Kafka, RabbitMQ, Redis</li>
            <li>• PostgreSQL, MongoDB</li>
            <li>• Docker, Kubernetes, CI/CD</li>
            <li>• Observability: OpenTelemetry, Grafana, Prometheus</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="p-4 rounded-lg bg-slate-800/40">
              <div className="text-3xl font-bold text-emerald-400">7+</div>
              <div>Years Experience</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/40">
              <div className="text-3xl font-bold text-emerald-400">25+</div>
              <div>Services Launched</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/40">
              <div className="text-3xl font-bold text-emerald-400">99.9%</div>
              <div>Uptime Delivered</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/40">
              <div className="text-3xl font-bold text-emerald-400">~ms</div>
              <div>P99 Latency Targets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About