import { heroImage } from "@/data/site";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream grain">
      <div className="relative z-20 flex items-start justify-between px-5 pt-5 md:px-8 md:pt-6">
        <span className="w-16" />
        <a href="#home" aria-label="Royal Beverage home" className="mt-1 text-secondary">
          <Logo />
        </a>
        <button
          aria-label="Language: Albanian"
          className="mt-1 flex h-14 w-14 items-center justify-center rounded-full border-2 border-secondary text-sm font-bold tracking-widest text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          AL
        </button>
      </div>
      <div className="relative mx-auto max-w-[110rem] px-4 pt-6 pb-16 md:pb-24">
        <h1 className="distress relative z-0 text-center font-display leading-[0.84] uppercase text-brand-red select-none">
          <span className="block text-[clamp(4.3rem,16.5vw,15.5rem)]">Royal</span>
          <span className="block text-[clamp(4.3rem,16.5vw,15.5rem)]">Beverage</span>
        </h1>

        <img
          src={heroImage}
          alt="A glass of cola with a dramatic splash"
          className="anim-hero-in pointer-events-none absolute top-[50%] left-1/2 z-10 h-[17rem] w-auto -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl md:top-[44%] md:h-[clamp(22rem,60vh,37rem)]"
        />

        <div
          aria-hidden="true"
          className="absolute top-[24%] left-[5%] z-20 hidden h-32 w-32 -rotate-6 items-center justify-center rounded-full border-2 border-secondary text-secondary md:flex"
        >
          <span className="flex h-[6.7rem] w-[6.7rem] items-center justify-center rounded-full border border-secondary/60">
            <span className="script text-5xl font-bold italic">RB</span>
          </span>
        </div>

        <p className="absolute top-[30%] right-[4%] z-20 hidden w-52 text-[1.05rem] leading-snug font-medium text-secondary lg:block">
          Experience true freshness and quality, where taste meets innovation
        </p>

        <p className="relative z-20 mx-auto mt-10 max-w-md text-center text-[1.05rem] leading-snug font-medium text-secondary lg:hidden">
          Experience true freshness and quality, where taste meets innovation
        </p>
      </div>
    </section>
  );
}
