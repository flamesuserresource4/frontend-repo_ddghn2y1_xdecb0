import { ShoppingCart, Car, Recycle, Wrench } from "lucide-react";

const items = [
  {
    icon: ShoppingCart,
    title: "Spare Parts Sales",
    desc: "Brand new and second-hand parts available with warranty options.",
  },
  {
    icon: Wrench,
    title: "Part Exchange",
    desc: "Exchange your broken part and get a discount on replacements.",
  },
  {
    icon: Car,
    title: "Buy & Sell Used Cars",
    desc: "We purchase second-hand cars for resale and disposal.",
  },
  {
    icon: Recycle,
    title: "Vehicle Disposal",
    desc: "Hassle-free disposal with documentation support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-700/60 p-6 bg-slate-800/40">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-300 grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h4 className="text-white font-semibold">{title}</h4>
              <p className="text-blue-200/80 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
