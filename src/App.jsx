import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Craft from './components/Craft'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradients for luxury vibe */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[900px] rounded-full bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-bl from-indigo-400/10 to-transparent blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Collections />
      <Craft />
      <Footer />
    </div>
  )
}

export default App
