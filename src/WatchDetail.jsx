import { useMemo, useRef, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const WATCHES = {
  submariner: {
    name: 'Submariner Date',
    tagline: 'Legendary underwater performance with iconic design.',
    price: '$12,600',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1860&auto=format&fit=crop' },
      { type: 'video', src: 'https://cdn.coverr.co/videos/coverr-waves-4243/1080p.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1860&auto=format&fit=crop' },
      { type: 'video', src: 'https://cdn.coverr.co/videos/coverr-water-surface-6085/1080p.mp4' },
    ],
    specs: [
      ['Case', 'Oystersteel, 41 mm'],
      ['Bezel', 'Unidirectional rotatable, Cerachrom'],
      ['Waterproofness', '300 m / 1,000 ft'],
      ['Movement', 'Perpetual, mechanical, self-winding'],
    ],
  },
  daydate: {
    name: 'Day-Date 40',
    tagline: 'The ultimate status watch: precious metals and prestige.',
    price: '$41,500',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1607647075471-9e457b4f7e38?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXktRGF0ZSUyMDQwfGVufDB8MHx8fDE3NjM2ODE4ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
      { type: 'video', src: 'https://cdn.coverr.co/videos/coverr-abstract-luxury-1731/1080p.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?q=80&w=1860&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1860&auto=format&fit=crop' },
    ],
    specs: [
      ['Case', '18 ct Everose gold, 40 mm'],
      ['Bezel', 'Fluted'],
      ['Bracelet', 'President'],
      ['Dial', 'Sundust, Roman numerals'],
    ],
  },
  gmtmaster: {
    name: 'GMT‑Master II',
    tagline: 'Dual-time elegance for global travelers.',
    price: '$15,250',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1860&auto=format&fit=crop' },
      { type: 'video', src: 'https://cdn.coverr.co/videos/coverr-luxury-abstraction-6478/1080p.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=1860&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1860&auto=format&fit=crop' },
    ],
    specs: [
      ['Case', 'Oystersteel and Everose gold, 40 mm'],
      ['Bezel', 'Bidirectional rotatable, 24-hour graduated'],
      ['Function', 'Second time zone'],
      ['Crystal', 'Scratch-resistant sapphire'],
    ],
  },
}

export default function WatchDetail() {
  const { slug } = useParams()
  const data = useMemo(() => WATCHES[slug] ?? WATCHES.submariner, [slug])

  const railRef = useRef(null)
  const slideRefs = useRef([])

  const scrollBy = useCallback((delta) => {
    const el = railRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }, [])

  const scrollToIndex = useCallback((idx) => {
    const node = slideRefs.current[idx]
    const el = railRef.current
    if (!node || !el) return
    el.scrollTo({ left: node.offsetLeft, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Ambient gradient accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[900px] rounded-full bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-bl from-indigo-400/10 to-transparent blur-3xl" />
      </div>

      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Header */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{data.name}</h1>
                <p className="text-white/70 mt-2 max-w-2xl text-sm sm:text-base">{data.tagline}</p>
              </div>
              <div className="md:text-right">
                <div className="text-white/80 text-xs sm:text-sm">From</div>
                <div className="text-lg sm:text-xl font-semibold">{data.price}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Gallery - horizontal scroll snap with glass controls */}
        <section className="relative mt-6 sm:mt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="absolute -inset-0.5 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-300/10 via-cyan-300/10 to-indigo-400/10 blur-2xl" />
              <div className="relative">
                <div className="group relative">
                  <div ref={railRef} className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth touch-pan-x">
                    {data.media.map((m, i) => (
                      <div key={i} ref={(el) => (slideRefs.current[i] = el)} className="min-w-full snap-center">
                        <motion.div initial={{ opacity: 0.6, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-[16/9] sm:aspect-video bg-black">
                          {m.type === 'image' ? (
                            <img src={m.src} alt={`${data.name} media ${i + 1}`} className="h-full w-full object-cover" loading="lazy" sizes="(max-width: 640px) 100vw, 75vw" />
                          ) : (
                            <div className="relative h-full w-full">
                              <video className="h-full w-full object-cover" src={m.src} autoPlay muted loop playsInline preload="auto" />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                              <div className="pointer-events-none absolute left-3 sm:left-4 bottom-3 sm:bottom-4 flex items-center gap-2 text-white/80 text-[10px] sm:text-sm">
                                <Play className="h-3 w-3 sm:h-4 sm:w-4" /> Cinematic loop
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  {/* Controls hint */}
                  <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center">
                    <div className="rounded-full bg-black/40 backdrop-blur-xl border border-white/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white/70">Swipe • Scroll • Arrow keys</div>
                  </div>

                  {/* Controls */}
                  <div className="absolute inset-y-0 left-0 flex items-center p-2 sm:p-3">
                    <button aria-label="Previous media" onClick={() => scrollBy(-window.innerWidth)} className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/40 border border-white/10 text-white hover:bg-black/60 transition-colors">
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center p-2 sm:p-3">
                    <button aria-label="Next media" onClick={() => scrollBy(window.innerWidth)} className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/40 border border-white/10 text-white hover:bg-black/60 transition-colors">
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 sm:mt-4 flex gap-2.5 sm:gap-3 overflow-x-auto scrollbar-hide">
              {data.media.map((m, i) => (
                <button key={i} onClick={() => scrollToIndex(i)} className="relative h-14 w-24 sm:h-16 sm:w-28 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-400/40">
                  {m.type === 'image' ? (
                    <img src={m.src} alt={`${data.name} thumbnail ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="h-full w-full relative">
                      <video src={m.src} className="h-full w-full object-cover" muted preload="metadata" />
                      <div className="absolute inset-0 bg-black/30 grid place-content-center">
                        <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Details & Specs */}
        <section className="relative py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold">About the {data.name}</h3>
                <p className="text-white/70 mt-3 text-sm sm:text-base">A study in precision and endurance. Built to traverse depths and decades with unshakable elegance. From its robust case architecture to the signature dial legibility, every detail honors a heritage of exploration and excellence.</p>
                <p className="text-white/70 mt-3 text-sm sm:text-base">This model integrates state-of-the-art materials and a chronometric heart that beats with unwavering accuracy. The result is a timepiece that ascends beyond instrument to become an icon.</p>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
                <h4 className="text-base sm:text-lg font-semibold">Specifications</h4>
                <dl className="mt-4 grid grid-cols-1 gap-3">
                  {data.specs.map(([k, v]) => (
                    <div key={k} className="flex items-start justify-between gap-4 sm:gap-6 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <dt className="text-white/60 text-xs sm:text-sm">{k}</dt>
                      <dd className="text-white/90 text-xs sm:text-sm text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-white/80 text-xs">From</div>
                    <div className="text-lg sm:text-xl font-semibold">{data.price}</div>
                  </div>
                  <a href="#" className="rounded-full px-4 sm:px-5 py-2 bg-white text-black font-semibold hover:scale-[1.03] active:scale-[0.99] transition-transform">Book a viewing</a>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/60">
                Looking for other models? <Link to="/" className="text-emerald-300 hover:text-emerald-200">Back to collections</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
