import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Brands } from "@/components/site/Brands";
import { News } from "@/components/site/News";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Beverage | Refreshing Drinks – Kosovo Since 1994" },
      {
        name: "description",
        content:
          "Royal Beverage, Kosovo's leading soft drink producer since 1994. RC Cola, Frostea, Red Rain, Bizon and Royal Lemon Water — bold flavors that refresh generations.",
      },
      { property: "og:title", content: "Royal Beverage | Refreshing Kosovo Since 1994" },
      {
        property: "og:description",
        content:
          "Discover the taste of innovation with Royal Beverage — carbonated drinks, ice teas and energy drinks produced in Gjilan, Kosovo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <About />
      <Products />
      <Brands />
      <News />
      <Footer />
    </main>
  );
}
