export function Footer() {
  return (
    <footer id="contact" className="bg-brand-red py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-5xl leading-[0.9] uppercase md:text-7xl">
              Every success
              <br />
              begins with a plan
            </h2>
            <form
              className="mt-8 flex max-w-md gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-full bg-primary-foreground/15 px-6 py-4 text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/60"
              />
              <button className="rounded-full bg-cream px-7 py-4 text-sm font-semibold tracking-widest uppercase text-brand-red">
                Submit
              </button>
            </form>
            <p className="mt-3 text-sm text-primary-foreground/70">
              Crafted content. Once a month, never more.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="script text-2xl">Navigate</p>
            {["Home", "The Story", "Production", "Explore Products", "Our Team", "Journal", "Get in Touch"].map(
              (l) => (
                <a key={l} href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground">
                  {l}
                </a>
              ),
            )}
          </div>

          <div className="space-y-3 text-sm">
            <p className="script text-2xl">Contact</p>
            <p className="text-primary-foreground/80">
              Velekince
              <br />
              60010, Gjilan, Kosovo
            </p>
            <a href="mailto:info@royalbev.com" className="block text-primary-foreground/80 hover:text-primary-foreground">
              info@royalbev.com
            </a>
            <a href="tel:+38344552112" className="block text-primary-foreground/80 hover:text-primary-foreground">
              +383 44 552 112
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/25 pt-6 text-xs text-primary-foreground/70">
          <span>© 2026 Royal Beverage. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#contact">FAQ</a>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
