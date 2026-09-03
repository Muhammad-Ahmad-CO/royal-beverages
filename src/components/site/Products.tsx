import { useState } from "react";
import { products } from "@/data/site";

export function Products() {
  const [index, setIndex] = useState(0);
  const total = products.length;
  const active = products[index];

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="products" className="relative overflow-hidden bg-brand-red py-24 text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 40%, transparent 0 78px, rgba(255,255,255,0.35) 78px 80px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="script text-3xl">Meet the speed</p>
            <h2 className="font-display text-6xl uppercase md:text-8xl">Our Products</h2>
          </div>
          <div className="font-display text-4xl md:text-6xl">
            {String(index + 1).padStart(2, "0")}
            <span className="opacity-50"> / {total}</span>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="script text-3xl">{active.tagline}</p>
            <h3 className="mt-2 font-display text-5xl leading-[0.9] uppercase md:text-7xl">
              {active.name}
            </h3>
            <button className="mt-8 rounded-full bg-cream px-8 py-4 text-sm font-semibold tracking-widest uppercase text-brand-red transition-transform hover:-translate-y-0.5">
              View product
            </button>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous product"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/50 transition-colors hover:bg-primary-foreground hover:text-brand-red"
              >
                ←
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next product"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/50 transition-colors hover:bg-primary-foreground hover:text-brand-red"
              >
                →
              </button>
            </div>
          </div>

          <div className="relative order-1 flex justify-center md:order-2">
            <div className="absolute top-1/2 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream md:h-[28rem] md:w-[28rem]" />
            <img
              key={active.image}
              src={active.image}
              alt={active.name}
              className="relative h-[24rem] w-auto object-contain drop-shadow-2xl md:h-[32rem]"
            />
          </div>
        </div>

        <div className="mt-16 flex gap-4 overflow-x-auto pb-4">
          {products.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setIndex(i)}
              className={`flex h-24 w-20 shrink-0 items-center justify-center rounded-2xl border transition-all ${
                i === index
                  ? "border-primary-foreground bg-primary-foreground/15"
                  : "border-primary-foreground/25 hover:border-primary-foreground/60"
              }`}
            >
              <img src={p.image} alt={p.name} className="h-20 w-auto object-contain" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
