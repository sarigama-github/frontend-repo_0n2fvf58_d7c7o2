import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-400">Let's build something great together.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" required />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" required />
          </div>
          <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" required />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" required />
          <button type="submit" disabled={status==='loading'} className="mt-2 rounded-md bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-900 font-semibold px-5 py-3 transition-colors">
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && <p className="text-emerald-300">Thanks! I’ll reply shortly.</p>}
          {status === 'error' && <p className="text-red-300">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact