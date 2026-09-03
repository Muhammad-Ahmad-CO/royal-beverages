const stats = [
  { value: "1994", label: "Founded in Gjilan" },
  { value: "20+", label: "Products & flavors" },
  { value: "100%", label: "Quality controlled" },
  { value: "7", label: "Signature brands" },
];

export function About() {
  return (
    <section id="about" className="bg-cream py-24 grain">
      <div className="mx-auto max-w-7xl px-6">
        <p className="script text-3xl text-brand-red">Something about us</p>
        <div className="mt-4 grid gap-12 md:grid-cols-2">
          <h2 className="font-display text-6xl leading-[0.85] uppercase text-secondary md:text-8xl">
            Our
            <br />
            Company
          </h2>
          <div>
            <p className="text-lg leading-relaxed text-secondary/80">
              Royal Beverage, founded in 1994, is a leading producer of refreshing and carbonated
              beverages, committed to delivering high-quality products that meet consumer needs.
              With a strong focus on innovation and excellent service, the company aims to expand
              internationally and become a global leader in the private label beverage sector.
            </p>
            <a
              href="#production"
              className="mt-8 inline-block rounded-full bg-secondary px-8 py-4 text-sm font-semibold tracking-widest uppercase text-secondary-foreground transition-transform hover:-translate-y-0.5"
            >
              About
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream px-8 py-10">
              <div className="font-display text-5xl text-brand-red">{s.value}</div>
              <div className="mt-2 text-sm tracking-wide uppercase text-secondary/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
