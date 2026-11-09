import { Logo } from "./Logo";

const nav = [
  { label: "Home", href: "#home" },
  { label: "The Story", href: "#about" },
  { label: "Production", href: "#production" },
  { label: "Explore Products", href: "#products" },
  { label: "Our Team", href: "#news" },
  { label: "Journal", href: "#news" },
  { label: "Get in Touch", href: "#contact" },
];

const legal = ["FAQ", "Contact", "Privacy Policy", "Terms & Conditions", "Cookie Policy", "Cookie Settings"];

export function Footer() {
  return (
    <footer id="contact" className="bg-cream grain text-secondary">
      <div className="mx-auto max-w-[110rem] px-6 pt-16 pb-8 md:px-10">
        <div className="grid gap-14 md:grid-cols-[minmax(300px,5fr)_7fr]">
          <div>
            <Logo className="scale-110" />
            <div className="mt-24 md:mt-32">
              <h3 className="distress font-display text-5xl uppercase md:text-6xl">Newsletter</h3>
              <p className="script mt-2 text-2xl text-secondary/80">
                Crafted content. Once a month, never more.
              </p>
              <form className="mt-5 flex max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full min-w-0 border border-secondary/40 bg-transparent px-4 py-3.5 text-[0.95rem] text-secondary placeholder:text-secondary/50 focus:border-secondary focus:outline-none"
                />
                <button className="shrink-0 bg-secondary px-7 font-display text-lg tracking-wide text-secondary-foreground uppercase transition-colors hover:bg-brand-red">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <nav className="flex flex-col items-start">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="distress font-display text-[clamp(2.6rem,5.2vw,4.3rem)] leading-[1.06] uppercase transition-all hover:translate-x-3 hover:text-brand-red"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-t border-secondary/15 pt-6 text-[0.85rem] text-secondary/75">
          <span>© 2026 Royal Beverage. All Rights Reserved.</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {legal.map((l) => (
              <a key={l} href="#contact" className="transition-colors hover:text-brand-red">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
