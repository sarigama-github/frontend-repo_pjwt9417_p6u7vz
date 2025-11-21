import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      {/* Full-bleed background aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[28rem] w-[80rem] rounded-full bg-gradient-to-r from-emerald-400/15 via-cyan-400/15 to-indigo-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-bl from-indigo-400/10 to-transparent blur-3xl" />
      </div>

      {/* Rotating Rolex visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Soft glow */}
          <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-emerald-300/20 via-cyan-300/20 to-indigo-400/20 blur-3xl" />
          {/* Rotating image */}
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1800&auto=format&fit=crop"
            alt="Rolex Submariner rotating"
            className="relative z-10 h-[46vh] sm:h-[54vh] md:h-[60vh] w-auto object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.6)] animate-[spin_28s_linear_infinite] will-change-transform"
            loading="eager"
          />
        </div>
      </div>

      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Headline and CTAs (no container, full-width) */}
      <div className="relative z-10 px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.6)]"
          >
            The Timeless Aura of Luxury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-5 max-w-3xl text-lg md:text-xl text-white/85"
          >
            Discover a curated collection inspired by precision engineering and eternal elegance. Crafted for those who see time as art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#collections" className="rounded-full px-6 py-3 bg-white text-black font-semibold hover:scale-[1.03] active:scale-[0.99] transition-transform">
              Browse Collections
            </a>
            <a href="#craft" className="rounded-full px-6 py-3 bg-white/10 text-white border border-white/20 backdrop-blur-xl hover:bg-white/20 transition-colors">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Ambient line */}
      <div className="absolute inset-x-0 bottom-14 flex justify-center pointer-events-none">
        <div className="h-24 w-[700px] bg-gradient-to-r from-emerald-400/15 via-cyan-400/15 to-indigo-400/15 blur-3xl rounded-full" />
      </div>
    </section>
  )
}
