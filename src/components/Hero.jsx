import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
              >
                The Timeless Aura of Luxury
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
              >
                Discover a curated collection inspired by precision engineering and eternal elegance. Crafted for those who see time as art.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-10 flex items-center gap-4"
              >
                <a href="#collections" className="rounded-full px-6 py-3 bg-white text-black font-semibold hover:scale-[1.03] active:scale-[0.99] transition-transform">
                  Browse Collections
                </a>
                <a href="#craft" className="rounded-full px-6 py-3 bg-white/10 text-white border border-white/20 backdrop-blur-xl hover:bg-white/20 transition-colors">
                  Learn More
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-300/20 via-cyan-300/20 to-indigo-400/20 blur-2xl" />
                <div className="relative rounded-2xl bg-black/40 border border-white/10 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {['Oyster Perpetual','Day-Date','Submariner','GMT-Master II','Cosmograph Daytona','Sea-Dweller'].map((name, i) => (
                      <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-lg flex items-center justify-center text-center p-2">
                        <span className="text-xs text-white/80">{name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-24 flex justify-center pointer-events-none">
        <div className="h-24 w-[700px] bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-3xl rounded-full" />
      </div>
    </section>
  )
}
