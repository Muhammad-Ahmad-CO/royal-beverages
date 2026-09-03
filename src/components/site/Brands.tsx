import { brands } from "@/data/site";

export function Brands() {
  const loop = [...brands, ...brands];

  return (
    <section id="production" className="overflow-hidden bg-secondary py-24 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <p className="script text-3xl text-primary-foreground/80">Meet the brands</p>
        <h2 className="font-display text-6xl uppercase md:text-8xl">Our Brands</h2>
        <p className="mt-6 max-w-xl text-secondary-foreground/70">
          From the original RC Cola to Frostea, Red Rain and Royal Lemon Water — every line is
          produced in Velekince, Gjilan with modern production technology.
        </p>
      </div>

      <div className="mt-16 flex w-max marquee-track gap-16 px-6">
        {loop.map((b, i) => (
          <div key={`${b.name}-${i}`} className="flex h-40 w-56 items-center justify-center">
            <img src={b.image} alt={b.name} className="max-h-40 w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
