import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Production", href: "#production" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between p-5 md:p-8">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>

        <div className="pointer-events-auto hidden items-center gap-6 rounded-full bg-secondary/95 px-7 py-3 text-sm font-medium text-secondary-foreground backdrop-blur md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-brand-red">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="pointer-events-auto rounded-full border border-secondary px-5 py-3 text-xs font-semibold tracking-widest uppercase text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          Get in touch
        </a>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-brand-red transition-[clip-path] duration-500 ${
          open ? "[clip-path:circle(150%_at_3rem_3rem)]" : "pointer-events-none [clip-path:circle(0%_at_3rem_3rem)]"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl uppercase text-primary-foreground/90 transition-colors hover:text-primary-foreground md:text-7xl"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
