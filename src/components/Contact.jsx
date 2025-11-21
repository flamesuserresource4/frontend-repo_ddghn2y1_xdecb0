import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Spare part request",
    message: "",
    preferred_brand: "",
    preferred_model: "",
  });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", subject: "Spare part request", message: "", preferred_brand: "", preferred_model: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-blue-200/80 mb-4">Ajanta, TQ Sillod, District Aurangabad, Maharashtra, India</p>
            <div className="space-y-2 text-blue-100">
              <a href="tel:9096788080" className="flex items-center gap-2 hover:text-white"><Phone size={18}/> 9096788080</a>
              <a href="tel:8788644611" className="flex items-center gap-2 hover:text-white"><Phone size={18}/> 8788644611</a>
              <p className="flex items-center gap-2"><MapPin size={18}/> Ajanta, Sillod</p>
              <p className="flex items-center gap-2"><Mail size={18}/> sardarspares@example.com</p>
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-slate-700/60 p-6 bg-slate-800/40">
              <h4 className="text-white font-semibold mb-4">Request a Part or Callback</h4>
              <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your name" required className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-blue-100" />
                <input value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="Phone number" required className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-blue-100" />
                <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email (optional)" className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-blue-100 sm:col-span-2" />
                <input value={form.preferred_brand} onChange={(e)=>setForm({...form,preferred_brand:e.target.value})} placeholder="Preferred brand (e.g., Maruti)" className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-blue-100" />
                <input value={form.preferred_model} onChange={(e)=>setForm({...form,preferred_model:e.target.value})} placeholder="Model (e.g., Swift)" className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-blue-100" />
                <input value={form.subject} onChange={(e)=>setForm({...form,subject:e.target.value})} placeholder="Subject" className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-blue-100 sm:col-span-2" />
                <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Tell us what you need" rows={4} className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-blue-100 sm:col-span-2" />
                <button disabled={status==="loading"} className="sm:col-span-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50">
                  {status === "loading" ? "Sending..." : "Send Request"}
                </button>
                {status === "success" && <p className="text-green-400 sm:col-span-2">Thanks! We will contact you soon.</p>}
                {status === "error" && <p className="text-red-400 sm:col-span-2">Something went wrong. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
