import { Car, Store, Recycle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs">Trusted since 2010</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              SARDAR Disposal & Spare Parts
            </h2>
            <p className="mt-4 text-blue-200/90 text-lg">
              We buy second-hand cars for resale and disposal, and supply both brand-new and used spare parts with exchange options for your broken parts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition">Request a Part</a>
              <a href="#services" className="px-6 py-3 rounded-lg border border-blue-500/30 text-blue-100 hover:border-blue-400/60 transition">Our Services</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-blue-200/80">
              <div className="flex items-center gap-2"><Store size={18}/> Genuine & Used</div>
              <div className="flex items-center gap-2"><Car size={18}/> Multi-brand</div>
              <div className="flex items-center gap-2"><Recycle size={18}/> Exchange Available</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 shadow-2xl p-6">
              <div className="h-full w-full rounded-xl border border-slate-700/50 grid place-items-center text-blue-200">
                Your reliable partner for parts and disposal in Aurangabad district
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
