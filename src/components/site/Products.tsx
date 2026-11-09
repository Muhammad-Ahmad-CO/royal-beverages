import { useRef, useState } from "react";
import { products, heroImage } from "@/data/site";
import { SketchArrow } from "./Logo";

const WITH_GLASS = new Set([
  "RC Cola",
  "RC Cola Zero",
  "Royal Crown Cola",
  "Frost Cola",
  "Frost Lemon Lime",
  "Frost Orange",
]);

export function Products() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = products.length;
  const active = products[index]!;
  const dragX = useRef<number | null>(null);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + total) % total);
  };

  return (
    <section id="products" className="relative overflow-hidden bg-brand-red text-primary-foreground">
      <div className="relative mx-auto max-w-[110rem] px-6 pt-16 pb-14 md:px-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="script text-3xl md:text-4xl">Meet the speed</p>
            <h2 className="distress mt-2 font-display text-[clamp(2.9rem,8.5vw,7.5rem)] leading-[0.9] uppercase">
              Our Products
            </h2>
          </div>
          <div className="distress shrink-0 pt-4 font-display text-4xl md:text-8xl">
            {index + 1}
            <span className="opacity-45"> / {total}</span>
          </div>
        </div>

          <div key={`t-${active.name}`} className="anim-fade-up relative z-10 max-w-md max-md:mb-2 md:absolute md:top-[23%] md:left-[4%]">
            <p className="script text-3xl md:text-4xl">{active.tagline}</p>
            <h3 className="distress mt-2 font-display text-5xl leading-[0.92] uppercase md:text-[4.2rem]">
              {active.name}
            </h3>
            <button className="mt-7 bg-cream px-9 py-4 font-display text-xl tracking-wide text-brand-red uppercase shadow-lg transition-transform hover:-translate-y-0.5">
              View Product
            </button>
          </div>

        <div
          className="relative mt-4 h-[560px] cursor-grab touch-pan-y select-none md:h-[620px]"
          onPointerDown={(e) => {
            dragX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (dragX.current === null) return;
            const dx = e.clientX - dragX.current;
            if (dx < -60) go(1);
            else if (dx > 60) go(-1);
            dragX.current = null;
          }}
        >
          <svg
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-[880px] w-[880px] -translate-x-1/2 -translate-y-1/2 opacity-60"
            viewBox="0 0 880 880"
            fill="none"
          >
            {[300, 356, 412].map((r) => (
              <circle key={r} cx="440" cy="440" r={r} stroke="rgba(0,0,0,0.13)" strokeWidth="2" />
            ))}
          </svg>
          <div className="absolute top-1/2 left-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream md:h-[540px] md:w-[540px]" />

          <div
            key={active.name}
            className={`absolute inset-0 ${dir > 0 ? "anim-in-right" : "anim-in-left"}`}
          >
            {WITH_GLASS.has(active.name) && (
              <img
                src={heroImage}
                alt=""
                aria-hidden="true"
                className="absolute top-1/2 left-[calc(50%-5rem)] h-[340px] w-auto -translate-y-[52%] object-contain md:left-[calc(50%-7.5rem)] md:h-[430px]"
              />
            )}
            <img
              src={active.image}
              alt={active.name}
              draggable={false}
              className="absolute top-1/2 left-1/2 h-[440px] w-auto -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl md:h-[520px]"
            />
          </div>

        </div>

        <div className="relative z-10 mt-2 flex items-center justify-center gap-10">
          <button onClick={() => go(-1)} aria-label="Previous product" className="p-2 transition-transform hover:-translate-x-1">
            <SketchArrow dir="left" className="h-7 w-16" />
          </button>
          <button onClick={() => go(1)} aria-label="Next product" className="p-2 transition-transform hover:translate-x-1">
            <SketchArrow dir="right" className="h-7 w-16" />
          </button>
        </div>
      </div>
    </section>
  );
}
