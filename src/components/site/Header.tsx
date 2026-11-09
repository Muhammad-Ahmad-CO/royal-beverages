import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "The Story", href: "#about" },
  { label: "Production", href: "#production" },
  { label: "Explore Products", href: "#products" },
  { label: "Our Team", href: "#news" },
  { label: "Journal", href: "#news" },
  { label: "Get in Touch", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-5 pt-5 md:px-8 md:pt-6">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <span className="relative block h-3.5 w-7">
            <span
              className={`absolute left-0 block h-[3px] w-7 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 block h-[3px] w-7 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>

      </header>

      <div
        className={`fixed inset-0 z-40 bg-cream grain transition-[clip-path] duration-500 ${
          open ? "[clip-path:circle(150%_at_3.5rem_3.5rem)]" : "pointer-events-none [clip-path:circle(0%_at_3.5rem_3.5rem)]"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-6xl flex-col justify-center px-8 pt-16">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="distress w-fit font-display text-5xl leading-[1.04] uppercase text-secondary transition-all hover:translate-x-3 hover:text-brand-red md:text-7xl"
            >
              {l.label}
            </a>
          ))}
          <p className="script mt-10 text-3xl text-brand-red">Crafted content. Once a month, never more.</p>
        </nav>
      </div>
    </>
  );
}
