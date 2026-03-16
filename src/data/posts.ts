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
  // 1–5: English versions
  {
    slug: "milk-quality-testing-how-we-check-purity",
    title: "Milk Quality Testing in Delhuan Dairy: How We Check Purity Daily",
    description: "How Delhuan Dairy performs daily milk quality testing – fat, SNF, temperature, and hygiene steps explained.",
    date: "2026-03-14",
    image: dairyKochas,
    tags: ["milk quality", "testing", "dairy farm", "delhuan"],
    content: [
      "At Delhuan Dairy, we take milk quality from farmers very seriously every day.",
      "Collection begins at 6 AM, with each supplier's milk tested separately.",
      "We start with an organoleptic test: checking smell, color, and consistency – any abnormality leads to rejection.",
      "Fat and SNF are measured using advanced digital analyzers, which also determine fair farmer payments.",
      "Milk temperature must stay between 4-10°C to stop bacterial growth.",
      "Regular checks for acidity and common adulterants (urea, starch, detergent) are done with simple kits.",
      "Hygiene swab tests ensure equipment and containers remain clean for every batch.",
      "Connected to the Sudha (COMFED) plant in Kochas, we follow their strict quality protocols.",
      "Only tested milk enters the chilling unit to preserve maximum freshness.",
      "This ensures 100% pure milk reaches your home daily.",
      "Farmers get transparent test reports to maintain trust.",
      "We test milk from over 100 suppliers every day at our Delhuan center.",
      "If any batch fails, we immediately inform the farmer and offer improvement guidance.",
      "These steps guarantee pure, healthy milk for families in Rohtas every single day.",
    ],
  },

  {
    slug: "cow-vs-buffalo-milk-which-is-better-for-your-family",
    title: "Cow vs Buffalo Milk: Which is Better for Your Family?",
    description: "Key differences between cow milk and buffalo milk – fat content, taste, digestion, and nutrition comparison.",
    date: "2026-03-14",
    image: dairyBanner,
    tags: ["cow milk", "buffalo milk", "nutrition"],
    content: [
      "Many families wonder whether cow milk or buffalo milk is better – it depends on your specific needs.",
      "Delhuan Dairy collects both fresh: from Desi/HF cows and local Murrah buffaloes.",
      "Buffalo milk has higher fat (6-8%), resulting in a creamy, thick, and rich taste.",
      "Cow milk is lighter (3-4% fat), easier to digest, and lower in calories.",
      "Buffalo milk often contains more A2 protein, which many find gentler on digestion.",
      "Cow milk works well in tea/coffee due to its lighter texture.",
      "For growing children, buffalo milk offers excellent calcium and energy support.",
      "Adults watching their weight or digestion usually prefer cow milk.",
      "We keep both varieties separate so you can choose easily.",
      "Both provide similar levels of protein, calcium, and vitamins – fat is the main difference.",
      "Buffalo milk has a buttery richness; cow milk offers mild natural sweetness.",
      "In Rohtas' warm climate, lighter cow milk is often more refreshing.",
      "Direct farm collection ensures both are always pure and fresh.",
      "Both are nutritious – select based on what suits your family best.",
    ],
  },

  {
    slug: "delhuan-dairy-milk-collection-center-kochas-dinara-road",
    title: "Delhuan Dairy Milk Collection Center Kochas Dinara Road: Fair Price for Farmers",
    description: "Our milk collection center on Kochas Dinara Road ensures fair and transparent payments to local farmers.",
    date: "2026-03-21",
    image: milkCollection,
    tags: ["milk collection", "farmers"],
    content: [
      "Delhuan Dairy's milk collection center is situated on Kochas-Dinara Road (SH-30) in Delhuan village.",
      "We collect milk twice daily (morning and evening) from nearby villages.",
      "Every supplier's milk is weighed and tested digitally for complete transparency.",
      "Payments are calculated fairly based on actual fat and SNF levels – no shortcuts.",
      "Farmers receive timely payments – daily or weekly, via bank or cash.",
      "Our link to the Sudha COMFED chilling plant in Kochas maintains top quality standards.",
      "This center provides stable income for small and marginal farmers.",
      "Clean containers, cooling tanks, and trained staff are always ready.",
      "We offer free animal health tips during collection times.",
      "The center serves Rohtas, Dinara, Kochas, and surrounding regions.",
      "Regular training sessions help farmers improve feeding and hygiene practices.",
      "Strong trust and consistent supply benefit both farmers and the dairy.",
      "Anyone interested in supplying milk is welcome to join.",
      "This is more than a business – it's community support in action.",
    ],
  },

  {
    slug: "how-delhuan-dairy-supports-local-farmers-in-rohtas",
    title: "How Delhuan Dairy Supports Local Farmers in Rohtas",
    description: "Delhuan Dairy helps Rohtas district farmers through reliable milk collection, fair pricing, and more.",
    date: "2026-03-22",
    image: dairyFarm,
    tags: ["farmers", "rohtas"],
    content: [
      "Small farmers in Rohtas often struggle to find a stable milk buyer due to market ups and downs.",
      "Delhuan Dairy acts as a dependable daily buyer for their produce.",
      "Our transparent pricing system ensures farmers get the right value for their milk.",
      "Free veterinary services and animal care advice are provided regularly.",
      "We share practical tips on better feed, vaccination, and breeding to boost milk yield.",
      "Through our Sudha plant connection, farmers access various government schemes.",
      "Training sessions on dairy management are held at the collection center.",
      "Special encouragement is given to women farmers for self-reliance.",
      "This strengthens the rural economy and reduces migration.",
      "Long-term relationships build deep trust between farmers and the dairy.",
      "Over 100 families in Delhuan and nearby villages are directly connected.",
      "Future plans include linking more support like loans and insurance.",
      "It's a win-win partnership for farmers and sustainable dairy growth.",
      "We actively promote dairy farming as a viable livelihood in Rohtas.",
    ],
  },

  {
    slug: "pure-milk-vs-adulterated-milk-how-to-identify-at-home",
    title: "Pure Milk vs Adulterated Milk: How to Identify at Home",
    description: "Simple at-home tests to check if your milk is pure or adulterated.",
    date: "2026-03-23",
    image: dairyProducts,
    tags: ["pure milk", "consumer tips"],
    content: [
      "Adulteration risks like added water, urea, or detergent are common in market milk.",
      "Start with the smell test: pure milk has a natural sweet aroma, no off-odor.",
      "Check color: cow milk is slightly yellowish, buffalo creamy white – avoid unnatural bluish tones.",
      "Boiling test: pure milk forms a layer of cream (malai) on top; adulterated milk often doesn't.",
      "Rub test: pure milk feels slightly sticky when rubbed between fingers.",
      "Water mixing test: if milk mixes easily with added water, it may be diluted.",
      "Detergent check: add lemon juice – excessive foam indicates detergent presence.",
      "Urea test: mix with soya bean powder – color change signals urea.",
      "With Delhuan Dairy, you can relax – we test every batch daily.",
      "Our cold chain keeps quality intact from farm to home.",
      "Always check source and date labels.",
      "These easy tests help protect your family from health risks.",
      "For children especially, stick to trusted, verified sources like ours.",
    ],
  },

  // 6–10: Hindi versions (remaining topics)
  {
    slug: "benefits-of-cold-chain-in-milk-transport-for-kochas-area",
    title: "Milk Transport में Cold Chain क्यों जरूरी है",
    description: "Cold chain से दूध की क्वालिटी और शेल्फ लाइफ बनी रहती है – कोचस एरिया के लिए खास।",
    date: "2026-03-24",
    image: heroDairy3,
    tags: ["cold chain", "milk transport"],
    content: [
      "दूध गर्मी में जल्दी खराब हो सकता है क्योंकि बैक्टीरिया तेजी से बढ़ते हैं।",
      "देलहुआँ डेयरी में कलेक्शन के तुरंत बाद दूध को 4°C पर चिलिंग यूनिट में रखते हैं।",
      "कोल्ड चेन ट्रांसपोर्ट से कोचस, दिनारा और रोहतास तक ताजा दूध पहुंचता है।",
      "बैक्टीरिया ग्रोथ धीमा होने से टेस्ट, खुशबू और न्यूट्रिशन बरकरार रहता है।",
      "शेल्फ लाइफ बढ़ जाती है – फ्रिज में 2-3 दिन तक सुरक्षित रहता है।",
      "मिलावट या खराब होने का खतरा बहुत कम हो जाता है।",
      "किसानों का दूध बेहतर कीमत पर वैल्यू रिटेन करता है।",
      "बिहार की गर्मियों में यह बहुत महत्वपूर्ण है।",
      "सुधा प्लांट कोचस तक पहुंचने तक टेम्परेचर मॉनिटर रहता है।",
      "नतीजा: घर पर क्रीमी और स्वादिष्ट दूध मिलता है।",
      "कोल्ड चेन से वेस्टेज कम होता है।",
      "हम क्वालिटी के लिए यह आधुनिक प्रैक्टिस अपनाते हैं।",
      "भविष्य में इंसुलेटेड वाहन और ज्यादा चिलिंग पॉइंट्स जोड़ेंगे।",
    ],
  },

  {
    slug: "how-to-increase-milk-yield-in-cows-simple-tips-for-farmers",
    title: "गाय का मिल्क यील्ड कैसे बढ़ाएं – किसानों के लिए आसान टिप्स",
    description: "बैलेंस्ड डाइट और सही देखभाल से गाय का दूध उत्पादन बढ़ता है।",
    date: "2026-03-26",
    image: heroDairy2,
    tags: ["milk yield", "cow care"],
    content: [
      "मिल्क यील्ड फीडिंग, हेल्थ और मैनेजमेंट पर निर्भर करता है।",
      "बैलेंस्ड डाइट: हरा चारा, सूखा चारा, कंसंट्रेट मिक्स (दाल, चोकर, मिनरल)।",
      "साफ और ताजा पानी हमेशा उपलब्ध रखें – डिहाइड्रेशन से यील्ड कम होता है।",
      "नियमित डीवॉर्मिंग और वैक्सीनेशन बीमारी से बचाव के लिए जरूरी।",
      "सही दूध निकालने की तकनीक: फुल हैंड मिल्किंग, दिन में दो बार समय पर।",
      "आरामदायक शेड: वेंटिलेशन, साफ बिस्तर, कोई तनाव नहीं।",
      "ब्रीडिंग: अच्छे सेमेन से क्रॉसब्रीड सुधार सकते हैं।",
      "देलहुआँ डेयरी से फ्री में फीडिंग चार्ट की सलाह ले सकते हैं।",
      "राउंड द ईयर नेपियर, बरसीम जैसे हरा चारा उगाएं।",
      "मिनरल मिक्सचर भूलकर न दें – कैल्शियम, फॉस्फोरस जरूरी।",
      "गर्मी में हीट स्ट्रेस मैनेज करें – फैन या छाया से।",
      "रेगुलर वेट चेकअप से समस्या जल्दी पकड़ में आती है।",
      "सही देखभाल से 20-30% यील्ड बढ़ सकता है।",
      "हमारे सेंटर पर किसानों को यह सब ट्रेनिंग मिलती है।",
    ],
  },

  {
    slug: "importance-of-regular-veterinary-checkup-for-dairy-animals",
    title: "डेयरी एनिमल्स के लिए रेगुलर वेटरनरी चेकअप क्यों जरूरी है",
    description: "नियमित वेट विजिट से बीमारी शुरुआती स्टेज में ही पकड़ी जा सकती है।",
    date: "2026-03-27",
    image: deliFarmPoster,
    tags: ["veterinary", "animal health"],
    content: [
      "किसान अक्सर तब डॉक्टर बुलाते हैं जब पशु बीमार हो जाता है – यह महंगा पड़ता है।",
      "रूटीन चेकअप हर्ड हेल्थ बनाए रखता है और नुकसान कम करता है।",
      "प्रिवेंटिव केयर जैसे वैक्सीनेशन, डीवॉर्मिंग, हूफ केयर जरूरी है।",
      "देलहुआँ डेयरी पर किसानों के लिए वेटरनरी सपोर्ट उपलब्ध है।",
      "मास्टाइटिस, बुखार, इनफर्टिलिटी जैसी समस्याएं जल्दी डिटेक्ट हो सकती हैं।",
      "दूध उत्पादन गिरने से पहले ही समस्या सॉल्व हो जाती है।",
      "ब्रीडिंग एडवाइस भी मिलती है बेहतर कैल्विंग इंटरवल के लिए।",
      "न्यूट्रिशन चेक: यील्ड बढ़ाने के लिए डाइट प्लान बनाते हैं।",
      "सुधा गाइडलाइंस फॉलो करके एनिमल वेलफेयर सुनिश्चित करते हैं।",
      "सालाना हेल्थ कैलेंडर बनाकर फॉलो करने से फायदा होता है।",
      "छोटे किसानों के लिए लो-कॉस्ट सर्विसेज देते हैं।",
      "हेल्दी एनिमल्स = ज्यादा दूध + बेहतर इनकम।",
      "कम्युनिटी में रेगुलर चेकअप की जागरूकता बढ़ा रहे हैं।",
      "प्रिवेंटिव अप्रोच से डेयरी फार्मिंग प्रॉफिटेबल बनती है।",
    ],
  },

  {
    slug: "why-local-dairy-like-delhuan-is-better-than-random-market-milk",
    title: "लोकल डेयरी से दूध लेना क्यों बेहतर है",
    description: "लोकल डेयरी से दूध लेने पर ट्रेसेबल सोर्स मिलता है और भरोसा बढ़ता है।",
    date: "2026-03-29",
    image: delhuanVillage,
    tags: ["local dairy"],
    content: [
      "रैंडम मार्केट मिल्क का सोर्स क्लियर नहीं होता – कभी मिलावट मिल जाती है।",
      "देलहुआँ डेयरी से डायरेक्ट फार्म-टू-होम कनेक्शन मिलता है।",
      "हमारे सप्लायर्स लोकल गांवों के हैं – आप ओरिजिन जान सकते हैं।",
      "डेली टेस्टिंग और कोल्ड चेन से शुद्धता की गारंटी।",
      "कोई मिडिलमैन नहीं – ज्यादा फ्रेश और न्यूट्रिशियस।",
      "लोकल इकोनॉमी को सपोर्ट: किसानों को फेयर प्राइस, कम्युनिटी मजबूत।",
      "रोहतास एरिया में होम डिलीवरी ऑप्शन उपलब्ध।",
      "लॉन्ग-टर्म ट्रस्ट बनता है – Justdial पर 5-स्टार रिव्यूज।",
      "सीजनल चेंजेस के बावजूद क्वालिटी कंसिस्टेंट रहती है।",
      "सुधा कनेक्शन से एक्स्ट्रा क्वालिटी चेक।",
      "घर पर सुबह-शाम फ्रेश दूध – कोई पुराना स्टॉक नहीं।",
      "कंज्यूमर टिप्स और हेल्थ एडवाइस भी देते हैं।",
      "लोकल होने से ट्रांसपोर्टेशन टाइम कम, फ्रेशनेस ज्यादा।",
      "आपका सपोर्ट हमारे किसानों को एम्पावर करता है।",
    ],
  },

  {
    slug: "delhuan-dairy-brand-story-and-vision-for-kochas-and-rohtas",
    title: "देलहुआँ डेयरी ब्रांड स्टोरी और विजन",
    description: "लोकल किसानों को बेहतर मार्केट और शुद्ध दूध सप्लाई का हमारा विजन।",
    date: "2026-03-30",
    image: dairyDarkLogo,
    tags: ["brand story"],
    content: [
      "देलहुआँ डेयरी की शुरुआत एक साधारण आइडिया से हुई: लोकल किसानों को बेहतर बाजार और लोगों को शुद्ध दूध।",
      "देलहुआँ गांव, कोचस-दिनारा रोड पर बेस करके शुरू किया गया।",
      "आज हम रोहतास, दिनारा, कोचस और आस-पास के जिलों में ट्रस्टेड नाम हैं।",
      "गोल: किसानों को स्थिर इनकम, फेयर पेमेंट और एनिमल केयर सपोर्ट।",
      "शुद्ध गाय-भैंस दूध सप्लाई हाइजीन और ट्रांसपेरेंसी के साथ।",
      "सुधा COMFED कोचस से जुड़े – हाई क्वालिटी स्टैंडर्ड्स।",
      "कम्युनिटी फोकस: वेटरनरी हेल्प, ट्रेनिंग, महिला एम्पावरमेंट।",
      "भविष्य में डेयरी हब डेवलप करने का प्लान – ज्यादा कलेक्शन पॉइंट्स।",
      "मॉडर्न चिलिंग और टेस्टिंग इक्विपमेंट इंट्रोड्यूस कर रहे हैं।",
      "विजन: रोहतास को डेयरी डेवलपमेंट का मॉडल डिस्ट्रिक्ट बनाना।",
      "कलेक्शन और डिलीवरी में लोकल एम्प्लॉयमेंट क्रिएट कर रहे हैं।",
      "सस्टेनेबिलिटी: इको-फ्रेंडली प्रैक्टिस प्रमोट करते हैं।",
      "आपके सपोर्ट से हम और आगे बढ़ सकते हैं।",
      "देलहुआँ डेयरी – फ्रेश, शुद्ध, और दिल से जुड़ा हुआ।",
    ],
  },
  {
    slug: "delhuan-dairy-ki-shuruaat-aur-rohtas-mein-yogdaan",
    title: "देलहुआँ डेयरी की शुरुआत और रोहतास में योगदान",
    description: "देलहुआँ डेयरी कैसे शुरू हुई, किसानों की मदद कैसे कर रही है और रोहतास जिले में शुद्ध दूध की सप्लाई का सफर।",
    date: "2026-04-01",
    image: dairyDarkLogo,  // Fits brand story vibe
    tags: ["brand-story", "rohtas", "delhuan-dairy", "farmers-support"],
    content: [
      "देलहुआँ डेयरी की शुरुआत एक साधारण लेकिन मजबूत विचार से हुई – स्थानीय किसानों को बेहतर बाजार मिले और लोगों को रोजाना शुद्ध दूध मिले।",
      "देलहुआँ गाँव, कोचस-दिनारा रोड (SH-30) पर स्थित यह केंद्र रोहतास जिले का एक महत्वपूर्ण हिस्सा बन चुका है।",
      "हम सुबह 6 बजे से दूध संग्रहण शुरू करते हैं और आस-पास के गाँवों से ताजा गाय-भैंस का दूध इकट्ठा करते हैं।",
      "सुधा (COMFED) के कोचस चिलिंग प्लांट से जुड़े होने के कारण हम उच्च गुणवत्ता के मानकों का पालन करते हैं।",
      "किसानों को पारदर्शी तरीके से फेट और SNF के आधार पर भुगतान मिलता है – कोई धोखाधड़ी नहीं।",
      "डिजिटल मशीन से हर बैच का टेस्टिंग होता है, जिससे किसानों का भरोसा बढ़ता है।",
      "हम पशु चिकित्सा सेवाएँ, वैक्सीनेशन और फीडिंग सलाह मुफ्त में देते हैं।",
      "रोहतास, दिनारा, कोचस, सासाराम, कैमूर और बक्सर तक हमारी पहुंच है।",
      "महिला किसानों को विशेष प्रोत्साहन देते हैं ताकि वे आत्मनिर्भर बनें।",
      "हमारा लक्ष्य है कि दूध की बर्बादी कम हो और किसानों की आय स्थिर रहे।",
      "भविष्य में और ज्यादा कलेक्शन पॉइंट्स और आधुनिक चिलिंग सुविधाएँ जोड़ने की योजना है।",
      "देलहुआँ डेयरी सिर्फ व्यवसाय नहीं, बल्कि समुदाय का सहारा है।",
      "हमारे 5-स्टार रेटिंग्स (Justdial पर) इस बात का प्रमाण हैं कि लोग हम पर भरोसा करते हैं।",
      "आप भी जुड़ें और शुद्ध दूध का फायदा उठाएँ – क्योंकि स्वास्थ्य सबसे पहले!",
    ],
  },

  {
    slug: "why-delhuan-dairy-is-the-trusted-choice-for-fresh-milk-in-rohtas",
    title: "Why Delhuan Dairy is the Trusted Choice for Fresh Milk in Rohtas",
    description: "Discover how Delhuan Dairy ensures pure, fresh cow and buffalo milk with daily testing, farmer support, and Sudha connection in Rohtas district.",
    date: "2026-04-02",
    image: dairyKochas,  // Fits quality/testing theme
    tags: ["fresh-milk", "trusted-dairy", "rohtas", "sudha-connection"],
    content: [
      "In the heart of Rohtas district, Delhuan Dairy has become a household name for delivering pure and fresh milk every day.",
      "Located in Delhuan village on the Kochas-Dinara Road (SH-30), we collect milk directly from local farmers in nearby areas.",
      "We handle both cow milk (light, easy to digest) and buffalo milk (rich, creamy) with complete care.",
      "Every batch undergoes strict quality testing: fat, SNF, temperature, and adulteration checks using digital analyzers.",
      "Connected to the Sudha (COMFED) chilling plant in Kochas, we follow the highest hygiene and safety standards set by Bihar's cooperative.",
      "Milk is chilled immediately after collection to 4-10°C, preserving taste, nutrition, and shelf life.",
      "Farmers receive fair, transparent payments based on real-time testing – building long-term trust.",
      "We also provide free veterinary support, vaccination guidance, and tips to increase milk yield.",
      "Serving not just Delhuan but Dinara, Kochas, Sasaram, Kaimur, and Buxar districts with reliable supply.",
      "No middlemen means fresher milk reaches your home faster, with traceable source from local farms.",
      "Our commitment to no adulteration and cold chain transport ensures you get nutrient-rich milk daily.",
      "With 5.0 ratings on platforms like Justdial, families trust us for their children's health and daily needs.",
      "We operate Monday to Saturday from 6:00 AM to 8:30 PM – always ready to serve the community.",
      "Choose Delhuan Dairy for purity you can taste, support for local farmers, and peace of mind.",
      "Join our growing family – because good milk starts with good trust!",
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