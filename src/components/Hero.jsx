import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Scale with Creative Precision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-slate-200"
        >
          Data-backed marketing that blends bold ideas with technical excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold transition-colors">
            Book a Strategy Call
          </a>
          <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold backdrop-blur transition-colors">
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
