import { useState } from 'react'
import { postJSON, track } from '../lib/api'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading'); setError('')
    try {
      await postJSON('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', company: '', budget: '', message: '' })
      track('contact_submitted')
    } catch (err) {
      setStatus('error')
      setError(err.message?.slice(0, 180) || 'Something went wrong')
    }
  }

  return (
    <section id="contact" className="bg-slate-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Let’s talk</h2>
          <p className="mt-3 text-slate-300">Tell us about your goals and we’ll craft a plan to reach them.</p>
          <div className="mt-6 space-y-2 text-slate-300">
            <p><strong>HQ:</strong> 500 Market St, San Francisco, CA</p>
            <p><strong>Email:</strong> hello@youragency.com</p>
          </div>
          <div className="mt-6">
            <iframe 
              title="Agency Location Map"
              className="w-full h-64 rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=San%20Francisco&output=embed"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white/5 p-6 rounded-2xl backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input id="name" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full rounded-md bg-white text-slate-900 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full rounded-md bg-white text-slate-900 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="company">Company</label>
              <input id="company" value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} className="w-full rounded-md bg-white text-slate-900 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="budget">Budget</label>
              <select id="budget" value={form.budget} onChange={(e)=>setForm({...form, budget:e.target.value})} className="w-full rounded-md bg-white text-slate-900 px-3 py-2">
                <option value="">Select</option>
                <option>Under $5k</option>
                <option>$5k–$15k</option>
                <option>$15k–$50k</option>
                <option>$50k+</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea id="message" required rows="5" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="w-full rounded-md bg-white text-slate-900 px-3 py-2" />
          </div>
          <button disabled={status==='loading'} className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold disabled:opacity-60">
            {status==='loading' ? 'Sending…' : 'Send message'}
          </button>
          <div role="status" aria-live="polite" className="mt-3 text-sm">
            {status==='success' && <span className="text-emerald-400">Thanks! We’ll be in touch.</span>}
            {status==='error' && <span className="text-rose-400">{error}</span>}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <NewsletterSignup />
          </div>
        </form>
      </div>
    </section>
  )
}

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [err, setErr] = useState('')

  async function subscribe(e) {
    e.preventDefault()
    setState('loading'); setErr('')
    try {
      await postJSON('/api/subscribe', { email })
      setState('success'); setEmail(''); track('newsletter_subscribed')
    } catch (e) { setState('error'); setErr(e.message) }
  }

  return (
    <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 items-start">
      <div className="flex-1 w-full">
        <label htmlFor="newsletter" className="sr-only">Email</label>
        <input id="newsletter" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Get monthly growth tactics"
          className="w-full rounded-md bg-white text-slate-900 px-3 py-2" />
      </div>
      <button disabled={state==='loading'} className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 font-semibold disabled:opacity-60">{state==='loading' ? 'Joining…' : 'Subscribe'}</button>
      <div role="status" aria-live="polite" className="text-sm mt-1">
        {state==='success' && <span className="text-emerald-400">You’re in! 🎉</span>}
        {state==='error' && <span className="text-rose-400">{err}</span>}
      </div>
    </form>
  )
}
