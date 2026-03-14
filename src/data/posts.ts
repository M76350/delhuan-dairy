export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
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
    image: "/src/assets/dairy-photo/delhuan-dairy-kochas.jpeg",
    tags: ["milk quality", "testing", "dairy farm", "delhuan"],
    content: [
      "Delhuan Dairy me hum har din kisano se aane wale doodh ki quality ko seriously lete hain. Isliye har collection ke time basic testing zaroor ki jati hai.",
      "Fat aur SNF jaise parameters se doodh ki quality aur payment dono decide hote hain. Saath hi temperature check, smell check aur visual inspection se bhi milawat ya kharab doodh ko filter kiya jata hai.",
      "Ye saare steps isliye important hain taki Kochas, Dinara aur aas-paas ke gaon ke logon ko hamesha shuddh aur hygienic doodh mil sake.",
    ],
  },
  {
    slug: "cow-vs-buffalo-milk-which-is-better-for-your-family",
    title: "Cow vs Buffalo Milk: Kaunsa Doodh Aapke Parivar Ke Liye Behtar Hai?",
    description:
      "Cow doodh aur buffalo doodh me kya difference hai – fat, taste, digestion aur daily use ke hisaab se simple comparison.",
    date: "2026-03-14",
    image: "/src/assets/dairy-photo/delhuan-dairybanner.png",
    tags: ["cow milk", "buffalo milk", "nutrition", "family"],
    content: [
      "Bahut se log confuse hote hain ki cow milk le ya buffalo milk. Dono ke apne fayde hain jo family ki need par depend karte hain.",
      "Cow doodh generally halka hota hai, fat thoda kam hota hai, isliye digestion thoda easy hota hai – bachchon aur elderly logon ke liye accha mana jata hai.",
      "Buffalo doodh me fat zyada hota hai, isse doodh thick aur creamy hota hai – ghee, paneer, dahi aur sweets banane ke liye perfect rehta hai.",
    ],
  },
  {
    slug: "delhuan-dairy-milk-collection-center-kochas-dinara-road",
    title:
      "Delhuan Dairy Milk Collection Center Kochas Dinara Road: Fair Price for Farmers",
    description:
      "Kochas Dinara Road par Delhuan Dairy milk collection center kisano ko digital testing ke saath fair payment aur daily pickup service deta hai.",
    date: "2026-03-21",
    image: "/src/assets/dairy-photo/delhuan dairy -milk collection.png",
    tags: ["milk collection", "farmers", "kochas", "dinara road"],
    content: [
      "Delhuan Dairy milk collection center Kochas Dinara Road par sthit hai jahan se aas-paas ke gaon ke kisano ka doodh rozana collect kiya jata hai.",
      "Har supplier ka doodh digital machine se test hota hai jisse fat aur SNF clear rehta hai aur payment transparent tareeke se hota hai.",
      "Is system se kisano ko time par paisa milta hai, doodh ki quality maintain rehti hai aur local area me shuddh doodh ki supply bani rehti hai.",
    ],
  },
  {
    slug: "how-delhuan-dairy-supports-local-farmers-in-rohtas",
    title: "Kaise Delhuan Dairy Rohtas ke Local Farmers ko Support Karta Hai",
    description:
      "Delhuan Dairy Rohtas district ke kisano ko milk collection, fair pricing, animal health guidance aur feed support ke through madad karta hai.",
    date: "2026-03-22",
    image: "/src/assets/delhun-dairy-farm.png",
    tags: ["farmers", "support", "rohtas", "dairy cooperative"],
    content: [
      "Rohtas district ke chhote aur madhyam kisano ke liye stable milk buyer milna mushkil hota hai. Delhuan Dairy unke liye daily buyer ka kaam karta hai.",
      "Transparent rate list, timely payment aur doodh reject hone ki clear wajah batane se farmer aur dairy ke beech trust banta hai.",
      "Saath hi pashuon ki health, vaccination, mineral mix aur feed ke bare me bhi basic guidance di jati hai taaki production aur quality dono improve ho.",
    ],
  },
  {
    slug: "pure-milk-vs-adulterated-milk-how-to-identify-at-home",
    title:
      "Shuddh Doodh vs Milawat Wala Doodh: Ghar Par Kaise Pehchanein?",
    description:
      "Ghar par simple tests se aap jaan sakte hain ki doodh pure hai ya milawat wala — smell, texture, boiling test aur taste ka sahi use kaise karein.",
    date: "2026-03-23",
    image: "/src/assets/dairy-products.jpg",
    tags: ["pure milk", "adulteration", "home test", "consumer tips"],
    content: [
      "Bazaar me milawat ka risk rehta hai, isliye har consumer ko basic milk testing ke baare me pata hona chahiye.",
      "Smell aur color se pehli hint mil jati hai, lekin simple boiling test, thickness check aur taste se bhi aap idea laga sakte hain.",
      "Delhuan Dairy ka focus bina milawat ke doodh dena hai, isliye hum cold chain, testing aur hygiene par compromise nahi karte.",
    ],
  },
  {
    slug: "benefits-of-cold-chain-in-milk-transport-for-kochas-area",
    title:
      "Kochas Area me Milk Transport ke liye Cold Chain Kyun Zaroori Hai?",
    description:
      "Cold chain se doodh ki quality, shelf life aur taste dono bach jate hain — khas kar Kochas, Dinara aur rural Rohtas jaise areas me.",
    date: "2026-03-24",
    image: "/src/assets/hero-dairy-3.jpg",
    tags: ["cold chain", "milk transport", "quality", "storage"],
    content: [
      "Doodh ek sensitive product hai jo garmi me jaldi kharab ho sakta hai, isliye collection se le kar delivery tak temperature control zaroori hai.",
      "Cold chain use karne se bacterial growth slow ho jata hai, jis se taste, smell aur nutrition better rehte hain.",
      "Delhuan Dairy mein hum collection point se center tak doodh ko maximum possible cold condition me rakhne ki koshish karte hain.",
    ],
  },
  {
    slug: "top-dairy-products-you-can-get-from-delhuan-dairy-farm",
    title:
      "Delhuan Dairy Farm se Milne Wale Top Dairy Products: Ghar ke liye Best Choices",
    description:
      "Delhuan Dairy Farm se aap fresh milk ke saath dahi, paneer, ghee jaise products bhi le sakte hain jo ghar ke daily use ke liye perfect hain.",
    date: "2026-03-25",
    image: "/src/assets/dairy-products.jpg",
    tags: ["dairy products", "ghee", "paneer", "dahi"],
    content: [
      "Har ghar me doodh ke saath dahi, paneer aur kabhi-kabhi ghee ki bhi daily requirement hoti hai.",
      "Local dairy se lene ka fayda hai ki product fresh milta hai, taste natural rehta hai aur packaging ke extra charges bhi kam hote hain.",
      "Delhuan Dairy future me aur zyada value-added products lane ki planning me hai taaki local customers ko quality options mil sakein.",
    ],
  },
  {
    slug: "how-to-increase-milk-yield-in-cows-simple-tips-for-farmers",
    title:
      "Gaay ka Milk Yield Kaise Badhayein: Farmers ke liye Simple Tips",
    description:
      "Balanced diet, clean water, timely vaccination aur stress-free environment se cow ka milk yield naturally increase kiya ja sakta hai.",
    date: "2026-03-26",
    image: "/src/assets/hero-dairy-2.jpg",
    tags: ["milk yield", "cow care", "farmer tips", "nutrition"],
    content: [
      "Milk yield sirf genetics ka matter nahi, balki feeding, management aur health par bhi depend karta hai.",
      "Gaay ko roz saaf paani, sahi amount me green fodder, dry fodder aur concentrate dena zaroori hai.",
      "Regular vaccination, deworming aur comfortable shed se pashu healthy rehte hain aur production stable rehta hai.",
    ],
  },
  {
    slug: "importance-of-regular-veterinary-checkup-for-dairy-animals",
    title:
      "Dairy Animals ke liye Regular Veterinary Checkup Kyun Jaroori Hai?",
    description:
      "Regular vet visit se disease early stage me pakdi ja sakti hai, jis se loss kam hota hai aur milk production secure rehta hai.",
    date: "2026-03-27",
    image: "/src/assets/dairy-photo/delhuan deli farm poster.jpg",
    tags: ["veterinary", "animal health", "disease prevention"],
    content: [
      "Bahut se farmers sirf tab doctor ko bulate hain jab pashu bimaar pad jata hai, lekin preventive approach hamesha sasta aur safe hota hai.",
      "Routine health checkup, vaccination schedule aur body condition scoring se herd ka overall health status track kiya ja sakta hai.",
      "Delhuan Dairy apne area ke farmers ko motivate karta hai ki wo pashuon ke regular checkup ko dairy management ka hissa banayein.",
    ],
  },
  {
    slug: "digital-milk-testing-how-it-builds-trust-between-farmer-and-dairy",
    title:
      "Digital Milk Testing: Farmer aur Dairy ke Beech Trust Kaise Badhata Hai",
    description:
      "Digital fat-SNF machines se milk testing transparent ho jata hai jisse farmer ko rate par trust banta hai aur dispute kam ho jate hain.",
    date: "2026-03-28",
    image: "/src/assets/dairy-photo/delhuan-dairy-kochas.jpeg",
    tags: ["digital testing", "SNF", "trust", "payment"],
    content: [
      "Manual testing me galti ya confusion ka chance zyada rehta hai, khas kar jab daily bahut saare samples ho.",
      "Digital milk analyzer se reading clear, repeatable aur recordable hoti hai, jisse farmer ko bhi confidence milta hai.",
      "Delhuan Dairy ne digital testing adopt karke apne suppliers ke saath transparency ko aur strong banaya hai.",
    ],
  },
  {
    slug: "why-local-dairy-like-delhuan-is-better-than-random-market-milk",
    title:
      "Local Dairy jaise Delhuan se Milk Lena Bazaar ke Random Milk se Behtar Kyun Hai?",
    description:
      "Local dairy se directly doodh lene par aapko traceable source, better hygiene aur consistent taste milta hai.",
    date: "2026-03-29",
    image: "/src/assets/delhuan-village.png",
    tags: ["local dairy", "traceability", "consumer choice"],
    content: [
      "Random market milk me aapko nahi pata hota ki doodh kahan se aa raha hai, kaise handle ho raha hai aur kitne time purana hai.",
      "Local dairy jaise Delhuan se lene par aap directly source jaante hain, feedback de sakte hain aur service improve karwa sakte hain.",
      "Ye direct connection consumer aur dairy dono ke liye win-win situation create karta hai.",
    ],
  },
  {
    slug: "delhuan-dairy-brand-story-and-vision-for-kochas-and-rohtas",
    title:
      "Delhuan Dairy Brand Story: Kochas aur Rohtas ke liye Hamara Vision",
    description:
      "Delhuan Dairy ka aim hai ki local farmers ko strong market mile aur har ghar tak shuddh doodh aur dairy products pahunch sakein.",
    date: "2026-03-30",
    image: "/src/assets/dairy-photo/delhuan dairy dark logo.png",
    tags: ["brand story", "vision", "kochas", "rohtas"],
    content: [
      "Delhuan Dairy ki shuruaat ek simple idea se hui — gaon ke doodh ko behtar rate par bechne ka system tayar karna.",
      "Aaj hamara focus quality, transparency aur community ke saath long-term relation banane par hai.",
      "Future me hum digital tools, better infrastructure aur training ke through Kochas aur Rohtas ko ek strong dairy hub banana chahte hain.",
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

  const prev = index > 0 ? posts[index - 1] : undefined;
  const next = index < posts.length - 1 ? posts[index + 1] : undefined;

  return { prev, next };
}

export function getRelatedPosts(slug: string | undefined, limit = 3) {
  if (!slug) return [];
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];

  const currentTags = new Set(current.tags || []);

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const overlap =
        p.tags?.filter((tag) => currentTags.has(tag)).length ?? 0;
      return { post: p, score: overlap };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.post);
}
