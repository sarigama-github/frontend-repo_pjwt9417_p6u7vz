import { motion } from 'framer-motion'

export default function Craft() {
  const items = [
    {
      title: 'Chronometric Precision',
      text: 'Each movement is rigorously tested and certified, ensuring the utmost accuracy in every tick.',
    },
    {
      title: 'Materials of Distinction',
      text: 'Oystersteel, Everose Gold, and Cerachrom. Materials engineered for resilience and beauty.',
    },
    {
      title: 'Enduring Waterproofness',
      text: 'From the depths of the ocean to the heights of ambition, reliability meets elegance.',
    },
  ]

  return (
    <section id="craft" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Craft</h2>
          <p className="text-white/70 mt-2 max-w-2xl">A legacy forged at the intersection of innovation and artistry. Explore what makes these timepieces endure through generations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="absolute inset-0 rounded-3xl [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
                <div className="absolute -top-12 right-6 h-24 w-24 bg-emerald-300/20 blur-2xl" />
                <div className="absolute -bottom-12 left-6 h-24 w-24 bg-cyan-300/20 blur-2xl" />
              </div>
              <div className="relative">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
