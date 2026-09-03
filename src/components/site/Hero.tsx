import { useEffect, useRef, useState } from "react";
import { heroImage } from "@/data/site";
import colaSplash from "@/assets/cola-splash.png";

type Splat = {
  top: string;
  left: string;
  size: string;
  delay: string;
  rotate: string;
  flip?: boolean;
};

// Cola splats that burst out of the glass and stick to the hero background
const splats: Splat[] = [
  { top: "-6%", left: "8%", size: "13rem", delay: "0.05s", rotate: "-24deg" },
  { top: "2%", left: "74%", size: "16rem", delay: "0.15s", rotate: "32deg", flip: true },
  { top: "38%", left: "-2%", size: "11rem", delay: "0.3s", rotate: "80deg", flip: true },
  { top: "30%", left: "88%", size: "10rem", delay: "0.4s", rotate: "-60deg" },
  { top: "62%", left: "12%", size: "9rem", delay: "0.55s", rotate: "140deg" },
  { top: "58%", left: "76%", size: "12rem", delay: "0.65s", rotate: "-120deg", flip: true },
  { top: "-10%", left: "42%", size: "9rem", delay: "0.25s", rotate: "180deg" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [splashed, setSplashed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSplashed(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className={`relative overflow-hidden bg-cream pt-36 pb-20 grain md:pt-44 ${
        splashed ? "cola-splashed" : ""
      }`}
    >
      {/* Cola splashes that fly out of the glass and stick to the page */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {splats.map((s, i) => (
          <img
            key={i}
            src={colaSplash}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="cola-splat"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              ["--splat-delay" as string]: s.delay,
              ["--splat-rotate" as string]: s.rotate,
              ["--splat-flip" as string]: s.flip ? -1 : 1,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="script text-2xl text-brand-red md:text-3xl">Since 1994 — Gjilan, Kosovo</p>

        <h1 className="mt-2 font-display text-[18vw] leading-[0.82] uppercase text-brand-red md:text-[13rem]">
          Royal
          <br />
          Beverage
        </h1>

        <div className="mt-10 grid items-end gap-10 md:grid-cols-2">
          <p className="max-w-md text-lg text-secondary md:text-xl">
            Experience true freshness and quality, where taste meets innovation.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#products"
              className="rounded-full bg-brand-red px-8 py-4 text-sm font-semibold tracking-widest uppercase text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore products
            </a>
            <a
              href="#about"
              className="rounded-full border border-secondary px-8 py-4 text-sm font-semibold tracking-widest uppercase text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              Our story
            </a>
          </div>
        </div>
      </div>

      <img
        src={heroImage}
        alt="Royal Beverage product range"
        className="pointer-events-none relative mx-auto mt-6 h-[26rem] w-auto object-contain float-slow md:h-[34rem]"
      />
    </section>
  );
}
