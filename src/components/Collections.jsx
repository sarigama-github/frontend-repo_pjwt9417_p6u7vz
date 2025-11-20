import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const watches = [
  {
    slug: 'submariner',
    name: 'Submariner Date',
    desc: 'Cerachrom bezel, Oystersteel, waterproof to 300m',
    price: '$12,600',
    accent: 'from-emerald-400/20 to-emerald-300/10',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'daydate',
    name: 'Day-Date 40',
    desc: '18 ct Everose gold, fluted bezel, President bracelet',
    price: '$41,500',
    accent: 'from-amber-400/20 to-rose-300/10',
    image: 'https://images.unsplash.com/photo-1607647075471-9e457b4f7e38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'gmtmaster',
    name: 'GMT-Master II',
    desc: 'Oystersteel and Everose gold, bidirectional bezel',
    price: '$15,250',
    accent: 'from-cyan-400/20 to-indigo-300/10',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'submariner',
    name: 'Cosmograph Daytona',
    desc: 'Oysterflex bracelet, black cerachrom tachymetric scale',
    price: '$17,900',
    accent: 'from-fuchsia-400/20 to-violet-300/10',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Iconic Collections</h2>
            <p className="text-white/70 mt-2 max-w-xl">A selection shaped by innovation, crafted by mastery.</p>
          </div>
          <a href="#" className="hidden md:inline-flex rounded-full bg-white/10 text-white px-4 py-2 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition-colors">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {watches.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 overflow-hidden`}
            >
              <div className={`absolute -top-1/2 right-0 h-64 w-64 bg-gradient-to-br ${w.accent} blur-3xl`} />
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-4 sm:mb-5">
                  <img src={w.image} alt={w.name} className="h-full w-full object-cover" loading="lazy"/>
                </div>
                <h3 className="text-white font-semibold text-lg">{w.name}</h3>
                <p className="text-white/70 text-sm mt-1">{w.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white/90 font-medium">{w.price}</span>
                  <Link to={`/watch/${w.slug}`} className="text-emerald-300 hover:text-emerald-200 transition-colors text-sm">Explore</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 -z-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-24 sm:h-28 lg:h-32 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  )
}
