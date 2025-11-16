import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 1, title: 'Nimbus Growth SEO', tag: 'SEO', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, title: 'Kora Paid Media', tag: 'PPC', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'Alto Social Launch', tag: 'Social', img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'Orbit Rebrand', tag: 'Branding', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1400&auto=format&fit=crop' },
  { id: 5, title: 'Cobalt Website', tag: 'Web', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop' },
]

const tags = ['All', 'SEO', 'PPC', 'Social', 'Branding', 'Web']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(() => (filter === 'All' ? projects : projects.filter(p => p.tag === filter)), [filter])

  return (
    <section id="work" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected work</h2>
          <div className="flex gap-2">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1.5 rounded-full border ${filter === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-slate-300 text-slate-700 hover:border-slate-400'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
              >
                <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm text-indigo-600 font-medium">{p.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
