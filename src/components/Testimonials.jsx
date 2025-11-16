import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Alex Chen', title: 'CMO, Nimbus', quote: 'They scaled our paid search while lowering CPA by 28%. The team is fast and thoughtful.' },
  { name: 'Priya Kapoor', title: 'VP Growth, Kora', quote: 'Their SEO roadmap delivered steady month-over-month gains. True partners.' },
  { name: 'Miguel Santos', title: 'Founder, Alto', quote: 'Crisp creative and clean execution. Our best-performing campaigns to date.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What clients say</h2>
        <div className="relative mt-10 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-2xl"
            >
              <p className="text-xl text-slate-700">“{testimonials[index].quote}”</p>
              <p className="mt-4 font-semibold text-slate-900">{testimonials[index].name}</p>
              <p className="text-slate-600">{testimonials[index].title}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-indigo-600' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
