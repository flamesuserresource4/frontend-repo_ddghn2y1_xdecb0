import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Brands from './components/Brands'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-100">
      <Navbar />
      <Hero />
      <Services />
      <Brands />
      <Contact />
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-blue-200/70">
          © {new Date().getFullYear()} SARDAR Disposal & Spare Parts • Ajanta, TQ Sillod, Aurangabad, Maharashtra
        </div>
      </footer>
    </div>
  )
}

export default App
