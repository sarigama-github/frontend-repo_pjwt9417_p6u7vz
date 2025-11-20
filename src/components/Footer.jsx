export default function Footer() {
  return (
    <footer id="contact" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg">Rolex Aura</h3>
              <p className="text-white/70 text-sm">Inspired by precision. Driven by legacy.</p>
            </div>
            <div className="text-white/70 text-sm">
              © {new Date().getFullYear()} Rolex Aura. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
