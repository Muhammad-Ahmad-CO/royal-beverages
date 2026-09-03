import { news } from "@/data/site";

export function News() {
  return (
    <section id="news" className="bg-cream py-24 grain">
      <div className="mx-auto max-w-7xl px-6">
        <p className="script text-3xl text-brand-red">Media Center</p>
        <h2 className="font-display text-6xl uppercase text-secondary md:text-8xl">Media &amp; News</h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm transition-transform duration-300 hover:-translate-y-2"
              style={{ rotate: `${(i % 3) - 1}deg` }}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground">
                  {item.date}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="script text-xl text-brand-red">Brand History</p>
                <h3 className="mt-1 font-display text-2xl leading-tight uppercase text-secondary">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary/70">{item.excerpt}</p>
                <span className="mt-5 text-xs font-semibold tracking-widest uppercase text-brand-red">
                  Read more
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
