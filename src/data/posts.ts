// image imports
import dairyKochas from "../assets/dairy-photo/delhuan-dairy-kochas.jpeg";
import dairyBanner from "../assets/dairy-photo/delhuan-dairybanner.png";
import milkCollection from "../assets/dairy-photo/delhuan dairy -milk collection.png";
import deliFarmPoster from "../assets/dairy-photo/delhuan deli farm poster.jpg";
import dairyDarkLogo from "../assets/dairy-photo/delhuan dairy dark logo.png";

import dairyFarm from "../assets/delhun-dairy-farm.png";
import dairyProducts from "../assets/dairy-products.jpg";
import heroDairy2 from "../assets/hero-dairy-2.jpg";
import heroDairy3 from "../assets/hero-dairy-3.jpg";
import delhuanVillage from "../assets/delhuan-village.png";
export type BlogPost = {
  slug: string; // used in URL
  title: string; // SEO title
  description: string; // meta description
  date: string; // ISO date
  image?: string; // cover image
  tags?: string[];
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "milk-quality-testing-how-we-check-purity",
    title: "Milk Quality Testing in Delhuan Dairy: How We Check Purity Daily",
    description:
      "Delhuan Dairy me rozana milk quality testing kaise hota hai – fat, SNF, temperature aur hygiene ke basic steps.",
    date: "2026-03-14",
    image: dairyKochas,
    tags: ["milk quality", "testing", "dairy farm", "delhuan"],
    content: [
      "Delhuan Dairy me hum har din kisano se aane wale doodh ki quality ko seriously lete hain.",
      "Fat aur SNF jaise parameters se doodh ki quality aur payment dono decide hote hain.",
      "Ye steps isliye important hain taki logon ko shuddh doodh mil sake.",
    ],
  },

  {
    slug: "cow-vs-buffalo-milk-which-is-better-for-your-family",
    title: "Cow vs Buffalo Milk: Kaunsa Doodh Aapke Parivar Ke Liye Behtar Hai?",
    description:
      "Cow doodh aur buffalo doodh me difference – fat, taste aur digestion comparison.",
    date: "2026-03-14",
    image: dairyBanner,
    tags: ["cow milk", "buffalo milk", "nutrition"],
    content: [
      "Bahut se log confuse hote hain ki cow milk le ya buffalo milk.",
      "Cow doodh halka hota hai aur digestion easy hota hai.",
      "Buffalo doodh thick aur creamy hota hai.",
    ],
  },

  {
    slug: "delhuan-dairy-milk-collection-center-kochas-dinara-road",
    title:
      "Delhuan Dairy Milk Collection Center Kochas Dinara Road: Fair Price for Farmers",
    description:
      "Kochas Dinara Road par Delhuan Dairy milk collection center kisano ko fair payment deta hai.",
    date: "2026-03-21",
    image: milkCollection,
    tags: ["milk collection", "farmers"],
    content: [
      "Delhuan Dairy milk collection center Kochas Dinara Road par sthit hai.",
      "Har supplier ka doodh digital machine se test hota hai.",
      "Is system se kisano ko time par paisa milta hai.",
    ],
  },

  {
    slug: "how-delhuan-dairy-supports-local-farmers-in-rohtas",
    title: "Kaise Delhuan Dairy Rohtas ke Local Farmers ko Support Karta Hai",
    description:
      "Delhuan Dairy Rohtas district ke kisano ko milk collection aur fair pricing se support karta hai.",
    date: "2026-03-22",
    image: dairyFarm,
    tags: ["farmers", "rohtas"],
    content: [
      "Rohtas ke chhote farmers ke liye stable milk buyer milna mushkil hota hai.",
      "Delhuan Dairy daily buyer ka kaam karta hai.",
      "Isse farmer aur dairy ke beech trust banta hai.",
    ],
  },

  {
    slug: "pure-milk-vs-adulterated-milk-how-to-identify-at-home",
    title: "Shuddh Doodh vs Milawat Wala Doodh",
    description: "Ghar par simple tests se doodh ki purity check kar sakte hain.",
    date: "2026-03-23",
    image: dairyProducts,
    tags: ["pure milk", "consumer tips"],
    content: [
      "Bazaar me milawat ka risk rehta hai.",
      "Smell aur color se first hint mil jati hai.",
      "Boiling test se bhi idea mil sakta hai.",
    ],
  },

  {
    slug: "benefits-of-cold-chain-in-milk-transport-for-kochas-area",
    title: "Milk Transport me Cold Chain Kyun Zaroori Hai",
    description: "Cold chain se doodh ki quality aur shelf life maintain rehti hai.",
    date: "2026-03-24",
    image: heroDairy3,
    tags: ["cold chain", "milk transport"],
    content: [
      "Doodh garmi me jaldi kharab ho sakta hai.",
      "Cold chain bacterial growth slow karta hai.",
      "Isse taste aur nutrition better rehta hai.",
    ],
  },

  {
    slug: "how-to-increase-milk-yield-in-cows-simple-tips-for-farmers",
    title: "Gaay ka Milk Yield Kaise Badhayein",
    description: "Balanced diet aur proper care se milk yield increase hota hai.",
    date: "2026-03-26",
    image: heroDairy2,
    tags: ["milk yield", "cow care"],
    content: [
      "Milk yield feeding aur health par depend karta hai.",
      "Clean water aur balanced feed zaroori hai.",
      "Regular vaccination important hai.",
    ],
  },

  {
    slug: "importance-of-regular-veterinary-checkup-for-dairy-animals",
    title: "Dairy Animals ke liye Veterinary Checkup Kyun Jaroori Hai",
    description: "Regular vet visit se disease early stage me pakdi ja sakti hai.",
    date: "2026-03-27",
    image: deliFarmPoster,
    tags: ["veterinary", "animal health"],
    content: [
      "Farmers aksar doctor ko tab bulate hain jab pashu bimaar ho jata hai.",
      "Routine checkup herd health maintain karta hai.",
      "Preventive care dairy management ka important part hai.",
    ],
  },

  {
    slug: "why-local-dairy-like-delhuan-is-better-than-random-market-milk",
    title: "Local Dairy se Milk Lena Kyun Behtar Hai",
    description: "Local dairy se doodh lene par traceable source milta hai.",
    date: "2026-03-29",
    image: delhuanVillage,
    tags: ["local dairy"],
    content: [
      "Random milk ka source clear nahi hota.",
      "Local dairy se direct connection milta hai.",
      "Quality aur trust dono better hote hain.",
    ],
  },

  {
    slug: "delhuan-dairy-brand-story-and-vision-for-kochas-and-rohtas",
    title: "Delhuan Dairy Brand Story",
    description: "Local farmers aur pure milk supply ka vision.",
    date: "2026-03-30",
    image: dairyDarkLogo,
    tags: ["brand story"],
    content: [
      "Delhuan Dairy ki shuruaat ek simple idea se hui.",
      "Goal hai farmers ko better market dena.",
      "Future me dairy hub develop karna plan hai.",
    ],
  },
];

export function findPostBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return posts.find((p) => p.slug === slug);
}

export function getPrevNextPosts(slug: string | undefined) {
  if (!slug) return { prev: undefined, next: undefined };

  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) return { prev: undefined, next: undefined };

  return {
    prev: index > 0 ? posts[index - 1] : undefined,
    next: index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

export function getRelatedPosts(slug: string | undefined, limit = 3) {
  if (!slug) return [];

  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];

  const currentTags = new Set(current.tags || []);

  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags?.filter((tag) => currentTags.has(tag)).length ?? 0,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}