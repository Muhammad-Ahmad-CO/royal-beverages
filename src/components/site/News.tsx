import { useState } from "react";
import { news } from "@/data/site";
import { SketchArrow } from "./Logo";

export function News() {
  const n = news.length;
  const [index, setIndex] = useState(3);
  const go = (d: number) => setIndex((i) => (i + d + n) % n);

  return (
    <section id="news" className="relative overflow-hidden bg-cream grain py-20 md:py-24">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <p className="script text-3xl text-secondary md:text-4xl">Media Center</p>
        <h2 className="distress mt-2 font-display text-[clamp(3.4rem,8.5vw,7.5rem)] leading-[0.9] uppercase text-secondary">
          Media &amp; News
        </h2>
      </div>

      <div className="relative mt-8 h-[600px] overflow-hidden md:h-[620px]">
        {news.map((item, i) => {
          let off = (i - index + n) % n;
          if (off > n / 2) off -= n;
          const a = Math.abs(off);
          const style: React.CSSProperties =
            a > 1
              ? { transform: `translateX(${off * 70}%) rotate(${off * 6}deg) scale(0.7)`, opacity: 0, zIndex: 0, pointerEvents: "none" }
              : {
                  transform: `translateX(${off * 68}%) rotate(${off * 11}deg) scale(${1 - a * 0.16})`,
                  opacity: 1 - a * 0.06,
                  zIndex: 30 - a * 10,
                };
          return (
            <article
              key={item.title}
              onClick={() => a > 0 && setIndex(i)}
              className="absolute top-2 left-1/2 flex w-[min(380px,86vw)] cursor-pointer flex-col bg-brand-red text-primary-foreground shadow-2xl transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,0.8,0.3,1)]"
              style={{ ...style, marginLeft: "calc(min(380px, 86vw) / -2)" }}
            >
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/60 to-transparent" />
                <p className="script absolute top-3 left-4 text-[1.35rem] leading-tight text-white drop-shadow">
                  Brand History
                  <span className="block">{item.date}</span>
                </p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-5">
                <h3 className="font-display text-[1.65rem] leading-[1.04] uppercase">{item.title}</h3>
                <p className="mt-3 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-primary-foreground/85">
                  {item.excerpt}
                </p>
                <span className="mt-5 inline-block w-fit bg-cream px-7 py-3 font-display text-lg tracking-wide text-brand-red uppercase">
                  Read More
                </span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-10 text-secondary">
        <button onClick={() => go(-1)} aria-label="Previous story" className="p-2 transition-transform hover:-translate-x-1">
          <SketchArrow dir="left" className="h-7 w-16" />
        </button>
        <button onClick={() => go(1)} aria-label="Next story" className="p-2 transition-transform hover:translate-x-1">
          <SketchArrow dir="right" className="h-7 w-16" />
        </button>
      </div>
    </section>
  );
}
