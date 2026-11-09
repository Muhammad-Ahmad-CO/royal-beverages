export function Brands() {
  return (
    <section id="production" className="relative overflow-hidden bg-brand-red text-primary-foreground">
      <div className="mx-auto max-w-[110rem] px-6 pt-20 pb-44 md:px-10">
        <p className="script text-3xl md:text-4xl">Meet the brands</p>
        <h2 className="distress mt-2 font-display text-[clamp(3.4rem,8.5vw,7.5rem)] leading-[0.9] uppercase">
          Our Brands
        </h2>

        <div className="mt-16 grid grid-cols-2 items-center gap-x-8 gap-y-14 text-center md:grid-cols-3 md:gap-y-20">
          <div className="flex h-28 flex-col items-center justify-center">
            <span className="font-display text-7xl italic">
              RC<span className="ml-2 align-middle font-sans text-xl font-semibold tracking-widest normal-case italic">cola</span>
            </span>
          </div>
          <div className="flex h-28 flex-col items-center justify-center">
            <span className="font-display text-5xl tracking-wide">
              FROST<span className="relative inline-block">E
                <svg viewBox="0 0 20 14" className="absolute -top-3 -right-4 h-4 w-5 fill-current" aria-hidden="true"><path d="M10 13 C4 9 1 5 0 0 C6 1 9 3 10 6 C11 3 14 1 20 0 C19 5 16 9 10 13 Z" /></svg>
              </span>A
            </span>
          </div>
          <div className="flex h-28 flex-col items-center justify-center">
            <span className="text-5xl font-light lowercase">red rain</span>
            <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.42em] uppercase">Energy Drink</span>
          </div>
          <div className="flex h-28 flex-col items-center justify-center">
            <span className="font-display text-6xl tracking-wide">BIZON</span>
            <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.42em] uppercase">Energy Drink</span>
          </div>
          <div className="flex h-28 flex-col items-center justify-center">
            <span className="font-display text-6xl tracking-widest -rotate-2">FROST</span>
          </div>
          <div className="flex h-28 flex-col items-center justify-center">
            <span className="font-serif text-5xl tracking-[0.14em]">ROYAL</span>
            <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em] uppercase">Ujë Natyral me Limon</span>
          </div>
          <div className="flex h-28 flex-col items-center justify-center">
            <svg viewBox="0 0 24 30" className="mb-1 h-7 w-6 fill-current" aria-hidden="true">
              <path d="M12 1 C12 1 3.5 12.6 3.5 19 a8.5 8.5 0 0 0 17 0 C20.5 12.6 12 1 12 1 Z" />
            </svg>
            <span className="font-serif text-4xl lowercase italic">trepika</span>
          </div>
          <div className="flex h-28 flex-col items-center justify-center">
            <span className="script text-5xl font-bold">Royal Crown</span>
            <span className="font-display text-xl tracking-[0.3em] uppercase">Cola</span>
          </div>
          <div className="flex h-28 items-center justify-center">
            <span className="script text-6xl font-bold">
              RB <span className="align-top text-2xl">®</span>
            </span>
          </div>
        </div>
      </div>

      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 block h-[80px] w-full text-cream md:h-[110px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,58 C240,108 520,8 820,40 C1080,68 1260,28 1440,54 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
