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
    slug: 'submariner-nodate',
    name: 'Submariner',
    desc: 'No‑date purity, Oystersteel performance',
    price: '$9,100',
    accent: 'from-green-400/20 to-emerald-300/10',
    image: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1600&auto=format&fit=crop',
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
    slug: 'lady-datejust',
    name: 'Lady‑Datejust',
    desc: 'Refined proportions, precious dials',
    price: '$8,200',
    accent: 'from-pink-400/20 to-rose-300/10',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'datejust',
    name: 'Datejust 41',
    desc: 'Versatile classic with Jubilee bracelet',
    price: '$9,650',
    accent: 'from-blue-400/20 to-indigo-300/10',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1600&auto=format&fit=crop',
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
    slug: 'gmt-pepsi',
    name: 'GMT‑Master II “Pepsi”',
    desc: 'Red/blue Cerachrom bezel, Jubilee bracelet',
    price: '$15,250',
    accent: 'from-red-400/20 to-blue-300/10',
    image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'gmt-batman',
    name: 'GMT‑Master II “Batman”',
    desc: 'Black/blue bezel, sport travel icon',
    price: '$15,250',
    accent: 'from-sky-400/20 to-blue-300/10',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'daytona',
    name: 'Cosmograph Daytona',
    desc: 'Oysterflex bracelet, black cerachrom tachymetric scale',
    price: '$17,900',
    accent: 'from-fuchsia-400/20 to-violet-300/10',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'daytona-le-mans',
    name: 'Daytona Le Mans',
    desc: 'High-contrast dial, motorsport heritage',
    price: '$20,900',
    accent: 'from-purple-400/20 to-rose-300/10',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'explorer',
    name: 'Explorer',
    desc: 'Precision for pioneers, iconic 3-6-9 dial',
    price: '$7,700',
    accent: 'from-lime-400/20 to-emerald-300/10',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'explorer-ii',
    name: 'Explorer II',
    desc: '24‑hour hand for polar exploration',
    price: '$9,650',
    accent: 'from-emerald-400/20 to-teal-300/10',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'yachtmaster',
    name: 'Yacht-Master',
    desc: 'Regatta-ready elegance in precious metals',
    price: '$12,500',
    accent: 'from-sky-400/20 to-cyan-300/10',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'yachtmaster-ii',
    name: 'Yacht‑Master II',
    desc: 'Programmable regatta countdown',
    price: '$18,750',
    accent: 'from-cyan-400/20 to-indigo-300/10',
    image: 'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'skydweller',
    name: 'Sky‑Dweller',
    desc: 'Dual‑time annual calendar sophistication',
    price: '$15,650',
    accent: 'from-indigo-400/20 to-cyan-300/10',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'oysterperpetual',
    name: 'Oyster Perpetual',
    desc: 'Pure, essential Rolex with vivid dials',
    price: '$6,400',
    accent: 'from-rose-400/20 to-amber-300/10',
    image: 'https://images.unsplash.com/photo-1737479212469-abd4d0edb21d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPeXN0ZXIlMjBQZXJwZXR1YWx8ZW58MHwwfHx8MTc2MzY4Mjg1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    slug: 'airking',
    name: 'Air‑King',
    desc: 'Aviation‑inspired dial, bold numerals',
    price: '$7,700',
    accent: 'from-lime-400/20 to-green-300/10',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'milgauss',
    name: 'Milgauss',
    desc: 'Antimagnetic ingenuity, lightning bolt seconds',
    price: '$8,300',
    accent: 'from-teal-400/20 to-emerald-300/10',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'seadweller',
    name: 'Sea‑Dweller',
    desc: 'Deep-sea engineering, helium escape valve',
    price: '$13,250',
    accent: 'from-teal-400/20 to-blue-300/10',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'deepsea',
    name: 'Rolex Deepsea',
    desc: 'Extreme depth rating with Ringlock System',
    price: '$14,500',
    accent: 'from-blue-400/20 to-indigo-300/10',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'pearlmaster',
    name: 'Pearlmaster',
    desc: 'High jewelry expression of the Datejust',
    price: '$54,000',
    accent: 'from-amber-400/20 to-yellow-300/10',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    slug: 'perpetual-1908',
    name: 'Perpetual 1908',
    desc: 'Dress watch elegance, slim profile',
    price: '$22,000',
    accent: 'from-emerald-400/20 to-lime-300/10',
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1600&auto=format&fit=crop',
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
              key={w.slug}
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
