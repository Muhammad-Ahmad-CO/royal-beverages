import frostCola from "@/assets/img/18_Frost-Cola-bottle.png.asset.json";
import rcCola from "@/assets/img/20_RC-Cola-bottle.png.asset.json";
import rcColaZero from "@/assets/img/22_RC-Cola-Zero-bottle.png.asset.json";
import royalCrown from "@/assets/img/24_Royal-Crown-Cola-bottle.png.asset.json";
import bitterLemon from "@/assets/img/26_Rc-Refresher-Bitter-Lemon-bottle.png.asset.json";
import exotic from "@/assets/img/28_RC-Refresher-Exotic-bottle.png.asset.json";
import lemonLime from "@/assets/img/30_RC-Refresher-Lemon-Lime-bottle.png.asset.json";
import mangoMelon from "@/assets/img/32_RC-Mango-Melon-bottle.png.asset.json";
import orange from "@/assets/img/34_RC-Refresher-Orange-bottle.png.asset.json";
import tonic from "@/assets/img/36_RC-Refresher-Tonic-Water-bottle.png.asset.json";
import tropic from "@/assets/img/38_RC-Refresher-Tropic-bottle.png.asset.json";
import redRain from "@/assets/img/40_Red-Rain-Energy-Drink-bottle.png.asset.json";
import frostea from "@/assets/img/42_Frostea-Ice-Tea-bottle.png.asset.json";
import forestFruits from "@/assets/img/44_Frostea-Forest-Fruits-bottle.png.asset.json";
import elderflower from "@/assets/img/46_Frostea-Elderflower-bottle.png.asset.json";
import lemonPeach from "@/assets/img/48_Frostea-Lemon-Peach-bottle.png.asset.json";
import lemonWater from "@/assets/img/50_Royal-Lemon-Water-bottle.png.asset.json";
import bizon from "@/assets/img/52_Bizon-bottle.png.asset.json";
import frostLemonLime from "@/assets/img/54_Frost-Lemon-Lime-bottle.png.asset.json";
import frostOrange from "@/assets/img/56_Frost-Orange-bottle.png.asset.json";

import brandRc from "@/assets/img/01_RC-Cola.png.asset.json";
import brandWater from "@/assets/img/02_Royal-Lemon-Water.png.asset.json";
import brandFrostea from "@/assets/img/03_Frostea-Ice-Tea.png.asset.json";
import brandRedRain from "@/assets/img/04_Red-Rain-Energy-Drink.png.asset.json";
import brandBizon from "@/assets/img/05_Bizon.png.asset.json";
import brandFrost from "@/assets/img/06_Frost-Cola.png.asset.json";
import brandCrown from "@/assets/img/07_Royal-Crown-Cola.png.asset.json";
import heroDisplay from "@/assets/img/08_Royal-Beverage-main-product-display-feat.png.asset.json";

import news1 from "@/assets/img/58_Royal-Beverage-s-Commitment-to-Sustainab.webp.asset.json";
import news2 from "@/assets/img/59_Royal-Beverage-at-Doku-Tech-2025-image.jpeg.asset.json";
import news3 from "@/assets/img/60_Royal-Beverage-LLC-at-ANUGA-2025-Let-s-M.jpeg.asset.json";
import news4 from "@/assets/img/61_Cineplexx-and-Frostea-bring-excitement-a.jpeg.asset.json";
import news5 from "@/assets/img/62_Frostea-the-refreshment-that-s-taking-ov.webp.asset.json";
import news6 from "@/assets/img/63_Movie-moments-a-taste-of-freshness-image.jpeg.asset.json";
import news7 from "@/assets/img/64_Royal-Beverage-Hosts-Delegation-from-the.jpeg.asset.json";
import news8 from "@/assets/img/65_Royal-Beverage-LLC-to-Showcase-at-Interf.png.asset.json";
import news9 from "@/assets/img/66_Visit-of-the-Czech-Ambassador-to-Kosovo-.webp.asset.json";
import news10 from "@/assets/img/67_RC-Cola-and-Frostea-Now-in-Greece-image.webp.asset.json";
import news11 from "@/assets/img/68_Exciting-News-Royal-Beverage-at-Food-Exp.webp.asset.json";
import news12 from "@/assets/img/69_Participation-in-Food-Expo-Greece-image.webp.asset.json";
import news13 from "@/assets/img/70_New-Production-Line-A-Significant-Achiev.webp.asset.json";

export const heroImage = heroDisplay.url;

export type Product = { name: string; tagline: string; image: string };

export const products: Product[] = [
  { name: "Frost Cola", tagline: "Classic Chill, Reinvented", image: frostCola.url },
  { name: "RC Cola", tagline: "The Original", image: rcCola.url },
  { name: "RC Cola Zero", tagline: "Zero Sugar", image: rcColaZero.url },
  { name: "Royal Crown Cola", tagline: "Rich and Timeless", image: royalCrown.url },
  { name: "RC Refresher Bitter Lemon", tagline: "Bold and Zesty", image: bitterLemon.url },
  { name: "RC Refresher Exotic", tagline: "A Splash of Tropical Flavor", image: exotic.url },
  { name: "RC Refresher Lemon Lime", tagline: "Crisp Citrus", image: lemonLime.url },
  { name: "RC Mango Melon", tagline: "Juicy Mango with Melon", image: mangoMelon.url },
  { name: "RC Refresher Orange", tagline: "Pure Citrus Kick", image: orange.url },
  { name: "RC Refresher Tonic Water", tagline: "Bittersweet Perfection", image: tonic.url },
  { name: "RC Refresher Tropic", tagline: "Tropic in Every Sip", image: tropic.url },
  { name: "Red Rain Energy Drink", tagline: "Fuel the Storm", image: redRain.url },
  { name: "Frostea Ice Tea", tagline: "Chill in Every Sip", image: frostea.url },
  { name: "Frostea Forest Fruits", tagline: "Wildly Refreshing", image: forestFruits.url },
  { name: "Frostea Elderflower", tagline: "Floral. Fresh. Unique.", image: elderflower.url },
  { name: "Frostea Lemon Peach", tagline: "Zesty Meets Smooth", image: lemonPeach.url },
  { name: "Royal Lemon Water", tagline: "A Royal Touch of Lemon", image: lemonWater.url },
  { name: "Bizon", tagline: "Unleash the Charge", image: bizon.url },
  { name: "Frost Lemon Lime", tagline: "Zesty. Bold. Frosted", image: frostLemonLime.url },
  { name: "Frost Orange", tagline: "Citrus Spark, Frost Style", image: frostOrange.url },
];

export const brands = [
  { name: "RC Cola", image: brandRc.url },
  { name: "Royal Lemon Water", image: brandWater.url },
  { name: "Frostea Ice Tea", image: brandFrostea.url },
  { name: "Red Rain Energy Drink", image: brandRedRain.url },
  { name: "Bizon", image: brandBizon.url },
  { name: "Frost Cola", image: brandFrost.url },
  { name: "Royal Crown Cola", image: brandCrown.url },
];

export type NewsItem = { date: string; title: string; excerpt: string; image: string };

export const news: NewsItem[] = [
  {
    date: "04/06/2025",
    title: "Royal Beverage’s Commitment to Sustainable Development",
    excerpt:
      "Royal Beverage LLC is proud to announce our comprehensive initiative for sustainable development, marking a significant step forward in our commitment to environmental responsibility and…",
    image: news1.url,
  },
  {
    date: "09/03/2026",
    title: "Royal Beverage at Doku.Tech 2025!",
    excerpt:
      "We’re excited to announce our participation at Doku.Tech — the most innovative event in the region merging technology and creativity! Our drinks brought the official…",
    image: news2.url,
  },
  {
    date: "09/03/2026",
    title: "Royal Beverage LLC at ANUGA 2025 – Let’s Meet in Cologne!",
    excerpt:
      "We are thrilled to announce that Royal Beverage LLC will be exhibiting at ANUGA 2025, one of the world’s leading trade fairs for food and beverages…",
    image: news3.url,
  },
  {
    date: "09/03/2026",
    title:
      "Cineplexx and Frostea bring excitement with a special “Treasure Hunt”",
    excerpt:
      "The students of “Xhemail Mustafa” elementary school experienced an unforgettable day filled with fun, surprises, and prizes, thanks to a special activity organized by Cineplexx…",
    image: news4.url,
  },
  {
    date: "09/03/2026",
    title:
      "Frostea, the refreshment that’s taking over summer in Prishtina and Fushë Kosovë!",
    excerpt:
      "The summer vibe in Prishtina and Fushë Kosovë this season has one name — Frostea! Known for its unique taste and refreshing coolness, Frostea is…",
    image: news5.url,
  },
  {
    date: "05/02/2026",
    title: "Movie moments, a taste of freshness!",
    excerpt:
      "Smiling kids, endless fun, and Frostea always by their side to make the Cineplexx Cinema experience even more enjoyable…",
    image: news6.url,
  },
  {
    date: "05/12/2025",
    title: "Royal Beverage Hosts Delegation from the U.S. Embassy in Kosovo",
    excerpt:
      "At the Royal Beverage premises in Gjilan, owner Fejzulla Mustafa welcomed a delegation from the U.S. Embassy Pristina, Kosovo…",
    image: news7.url,
  },
  {
    date: "27/10/2025",
    title: "Royal Beverage LLC to Showcase at Interfood & Drink 2025 in Sofia",
    excerpt:
      "Royal Beverage LLC is proud to announce its participation in the prestigious Interfood & Drink 2025 exhibition, taking place in Sofia, Bulgaria…",
    image: news8.url,
  },
  {
    date: "04/06/2025",
    title: "Visit of the Czech Ambassador to Kosovo",
    excerpt:
      "Today we had the honor and pleasure to welcome in our company premises the Ambassador of the Czech Republic to Kosovo, Mr. Bohumil Mazánek…",
    image: news9.url,
  },
  {
    date: "04/06/2025",
    title: "RC Cola and Frostea Now in Greece!",
    excerpt:
      "Royal Beverage, the beverage production company in Gjilan and leader in the domestic soft drinks market, continues its successful international expansion!…",
    image: news10.url,
  },
  {
    date: "04/06/2025",
    title: "Exciting News! Royal Beverage at Food Expo 2025",
    excerpt:
      "Royal Beverage LLC is thrilled to announce that we will be exhibiting at Food Expo 2025! Join us as we showcase our latest beverage innovations…",
    image: news11.url,
  },
  {
    date: "04/06/2025",
    title: "Participation in Food Expo Greece",
    excerpt:
      "We are excited to announce our participation in Food Expo Greece, the largest food and beverage industry fair in Southeast Europe!…",
    image: news12.url,
  },
  {
    date: "04/06/2025",
    title: "New Production Line: A Significant Achievement in Our Growth",
    excerpt:
      "Royal Beverage LLC is proud to announce a significant achievement in our company’s growth journey. We have successfully installed and commissioned a new modern production…",
    image: news13.url,
  },
];
