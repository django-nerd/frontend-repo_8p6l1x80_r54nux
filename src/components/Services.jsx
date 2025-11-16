import { motion } from 'framer-motion'
import { Search, Rocket, Share2, PenTool, Palette, Globe } from 'lucide-react'

const services = [
  { icon: Search, title: 'SEO', desc: 'Technical, on-page, and content SEO that compounds growth.' },
  { icon: Rocket, title: 'PPC', desc: 'Efficient paid media across Google, Meta, and LinkedIn.' },
  { icon: Share2, title: 'Social', desc: 'Organic and paid social with thumb-stopping creative.' },
  { icon: PenTool, title: 'Content', desc: 'Editorial strategy, production, and distribution.' },
  { icon: Palette, title: 'Branding', desc: 'Distinctive identity systems and guidelines.' },
  { icon: Globe, title: 'Web', desc: 'High-performance websites built for conversion.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What we do</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Full-funnel campaigns that mix creativity with rigorous testing.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-rose-500/0 group-hover:from-indigo-500/10 group-hover:via-fuchsia-500/10 group-hover:to-rose-500/10 transition-colors" />
              <s.icon className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
