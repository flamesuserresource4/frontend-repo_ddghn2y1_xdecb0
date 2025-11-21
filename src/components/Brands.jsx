export default function Brands() {
  const brands = [
    {
      name: "Maruti Suzuki",
      models: ["Maruti 800", "Omni", "Zen", "Wagon R", "Swift", "Swift Dzire", "A-Star", "Zen Estilo", "Alto"],
    },
    { name: "Tata", models: ["Indica", "Indica Vista", "Indigo", "Magic"] },
    { name: "Chevrolet", models: ["Beat", "Spark"] },
    { name: "Hyundai", models: ["Santro"] },
  ];

  return (
    <section id="brands" className="py-16 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white mb-6">Brands & Models We Support</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <div key={b.name} className="rounded-xl border border-slate-700/60 p-6 bg-slate-800/40">
              <h4 className="text-white font-semibold mb-3">{b.name}</h4>
              <div className="flex flex-wrap gap-2">
                {b.models.map((m) => (
                  <span key={m} className="px-3 py-1 rounded-full text-xs bg-slate-700/60 text-blue-100 border border-slate-600/60">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
