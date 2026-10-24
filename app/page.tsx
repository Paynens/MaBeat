
"use client";

import { useState } from "react";
import { Play, Search, ShoppingCart, Headphones, Menu, X } from "lucide-react";

const beats = [
  { id: 1, title: "Red Empire", genre: "TRAP • DARK", price: 29, color: "#571515", bpm: 140 },
  { id: 2, title: "Midnight", genre: "DRILL • UK", price: 39, color: "#182947", bpm: 145 },
  { id: 3, title: "No Mercy", genre: "TRAP • HARD", price: 25, color: "#382020", bpm: 150 },
  { id: 4, title: "Cold Streets", genre: "DRILL • DARK", price: 35, color: "#26352e", bpm: 142 },
  { id: 5, title: "Last Chance", genre: "EMOTIONAL • RAP", price: 29, color: "#34304a", bpm: 128 },
  { id: 6, title: "Blackout", genre: "TRAP • AGGRESSIVE", price: 45, color: "#242424", bpm: 155 }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const [menu, setMenu] = useState(false);

  const filtered = beats.filter((beat) =>
    `${beat.title} ${beat.genre}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#" className="text-3xl font-black tracking-tight">
            Ma<span className="text-[#ff3030]">Beat</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-gray-300 md:flex">
            <a href="#beats" className="hover:text-red-400">Explore Beats</a>
            <a href="#licenses" className="hover:text-red-400">Licenses</a>
            <a href="#about" className="hover:text-red-400">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Cart" className="relative">
              <ShoppingCart size={22} />
              {cart.length > 0 && <span className="absolute -right-2 -top-2 rounded-full bg-[#ff3030] px-1.5 text-xs">{cart.length}</span>}
            </button>
            <button onClick={() => setMenu(!menu)} className="md:hidden" aria-label="Menu">
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menu && <nav className="flex flex-col gap-4 border-t border-white/10 px-5 py-4 text-gray-300 md:hidden"><a href="#beats" onClick={() => setMenu(false)}>Explore Beats</a><a href="#licenses" onClick={() => setMenu(false)}>Licenses</a><a href="#about" onClick={() => setMenu(false)}>About</a></nav>}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(255,48,48,0.22),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#ff5555]"><Headphones size={16} /> Independent Beat Store</p>
            <h1 className="text-5xl font-black leading-[1.05] md:text-7xl">YOUR SOUND.<br /><span className="text-[#ff3030]">YOUR LEGACY.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400">Find your next signature sound. Discover beats made for artists who refuse to sound like everyone else.</p>
            <a href="#beats" className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ff3030] px-6 py-3.5 font-bold transition hover:bg-red-700"><Play size={18} fill="currentColor" /> Explore Beats</a>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-full bg-red-600/10 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#381313] via-[#171717] to-black p-7 shadow-2xl shadow-red-950/40">
              <div className="flex h-full flex-col justify-between border border-white/10 p-6">
                <div className="text-xs font-bold tracking-[0.4em] text-red-400">MABEAT EXCLUSIVE</div>
                <div><div className="text-6xl font-black tracking-tighter md:text-7xl">MB<span className="text-red-500">/</span>01</div><p className="mt-2 text-xs tracking-[0.3em] text-gray-400">SOUND WITHOUT LIMITS</p></div>
                <div className="flex items-end justify-between"><span className="text-sm text-gray-400">BEATS THAT HIT DIFFERENT</span><Headphones size={28} className="text-red-500" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beats" className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-red-500">Find your sound</p><h2 className="text-3xl font-black md:text-4xl">Featured Beats</h2><p className="mt-2 text-sm text-gray-400">Explore the sound. Choose your license.</p></div>
          <label className="flex items-center gap-3 rounded-md border border-white/15 bg-[#141414] px-4 py-3 sm:w-72"><Search size={18} className="text-gray-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search beats..." className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500" /></label>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {filtered.map((beat) => (
            <article key={beat.id} className="group min-w-0">
              <div style={{ background: `linear-gradient(145deg, ${beat.color}, #090909 85%)` }} className="relative aspect-square overflow-hidden rounded-lg border border-white/10 p-3 transition duration-300 group-hover:-translate-y-1 group-hover:border-red-500/60 sm:p-4">
                <div className="absolute inset-3 border border-white/15" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white/70">MABEAT • {String(beat.id).padStart(2, "0")}</span>
                  <div><div className="text-2xl font-black leading-none sm:text-3xl">{beat.title.split(" ")[0].toUpperCase()}</div><div className="mt-1 text-[9px] tracking-[0.2em] text-white/60">{beat.bpm} BPM</div></div>
                  <div className="flex justify-end"><button onClick={() => setCart((old) => [...old, beat.id])} aria-label={`Add ${beat.title} to cart`} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff3030] transition hover:scale-110 hover:bg-red-700"><Play size={16} fill="currentColor" /></button></div>
                </div>
              </div>
              <div className="pt-3"><h3 className="truncate text-sm font-bold">{beat.title}</h3><p className="mt-1 truncate text-[10px] tracking-wider text-gray-500">{beat.genre}</p><div className="mt-3 flex items-center justify-between gap-2"><span className="font-bold">${beat.price}</span><button onClick={() => setCart((old) => [...old, beat.id])} className="text-xs font-bold text-red-400 hover:text-white">+ Add</button></div></div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p className="py-12 text-center text-gray-500">No beats found. Try another search.</p>}
      </section>

      <section id="licenses" className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto max-w-7xl px-5 py-14"><div className="mb-8 text-center"><p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">Your music. Your terms.</p><h2 className="mt-2 text-3xl font-black">Choose Your License</h2></div><div className="grid gap-5 md:grid-cols-3">
          {[{name:"Basic",price:"$19",items:["MP3 file","Non-exclusive license","Credit producer"]},{name:"Premium",price:"$49",items:["WAV + MP3 files","Higher usage limits","Priority support"]},{name:"Exclusive",price:"$199",items:["Exclusive rights agreement","High-quality files","Direct producer contact"]}].map((license) => <div key={license.name} className={`rounded-xl border p-6 ${license.name === "Premium" ? "border-red-500 bg-red-950/20" : "border-white/10 bg-black"}`}><h3 className="text-xl font-bold">{license.name}</h3><p className="my-4 text-4xl font-black">{license.price}</p><ul className="space-y-3 text-sm text-gray-400">{license.items.map((item) => <li key={item}>✓ {item}</li>)}</ul><p className="mt-6 text-xs text-gray-500">License terms to be configured before launch.</p></div>)}
        </div></div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-12"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><a href="#" className="text-2xl font-black">Ma<span className="text-red-500">Beat</span></a><p className="mt-2 text-sm text-gray-500">The next sound starts here.</p></div><p className="text-xs text-gray-600">© {new Date().getFullYear()} MaBeat. All rights reserved.</p></div></section>
    </main>
  );
}
