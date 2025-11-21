import { Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black">S</div>
          <div>
            <h1 className="text-white font-bold leading-tight">SARDAR Disposal & Spare Parts</h1>
            <p className="text-xs text-blue-200/80">Buy • Sell • Dispose • Genuine & Used Spares</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-blue-200 hover:text-white transition">Services</a>
          <a href="#brands" className="text-blue-200 hover:text-white transition">Brands</a>
          <a href="#contact" className="text-blue-200 hover:text-white transition">Contact</a>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:9096788080" className="inline-flex items-center gap-2 text-blue-100 hover:text-white">
            <Phone size={18} /> 9096788080
          </a>
          <span className="text-slate-600">|</span>
          <a href="#map" className="inline-flex items-center gap-2 text-blue-100 hover:text-white">
            <MapPin size={18} /> Ajanta, Sillod
          </a>
        </div>
      </div>
    </header>
  );
}
