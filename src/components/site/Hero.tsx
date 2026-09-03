import { heroImage } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-36 pb-20 grain md:pt-44">
      <div className="mx-auto max-w-7xl px-6">
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
        className="pointer-events-none mx-auto mt-6 h-[26rem] w-auto object-contain float-slow md:h-[34rem]"
      />
    </section>
  );
}
