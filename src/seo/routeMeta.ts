import { SITE } from "./siteMeta";

export type RouteMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
};

const brandSuffix = "Delhuan Dairy Farm";

export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: `Delhuan Dairy Farm - Fresh Milk Collection & Dairy Services in Kochas, Dinara (Rohtas)`,
    description:
      "Delhuan Dairy Farm provides fresh milk collection, pure cow & buffalo milk supply, dairy products, and animal care services near Kochas, Dinara Road, Rohtas (Bihar).",
    canonicalPath: "/",
    ogType: "website",
  },
  "/about": {
    title: `About ${brandSuffix} | Dairy & Animal Care in Rohtas`,
    description:
      "Learn about Delhuan Dairy Farm: our milk collection process, hygiene standards, farmer support, and animal care services across Kochas and Dinara in Rohtas.",
    canonicalPath: "/about",
    ogType: "website",
  },
  "/services": {
    title: `Services | Milk Collection, Animal Care & Dairy Support - ${brandSuffix}`,
    description:
      "Explore Delhuan Dairy services: daily milk collection, quality testing, cold-chain handling, veterinary guidance, and farmer support near Kochas & Dinara (Rohtas).",
    canonicalPath: "/services",
    ogType: "website",
  },
  "/products": {
    title: `Products | Fresh Milk & Dairy Products - ${brandSuffix}`,
    description:
      "Farm-fresh milk and dairy products from Delhuan Dairy Farm. Trusted quality, hygienic handling, and local service for Kochas, Dinara and nearby villages.",
    canonicalPath: "/products",
    ogType: "website",
  },
  "/milk-rate": {
    title: `Milk Rate Today | Cow & Buffalo Milk - ${brandSuffix}`,
    description:
      "Check today's milk rate at Delhuan Dairy Farm (Kochas, Dinara Road, Rohtas). Transparent pricing for farmers and quality supply for customers.",
    canonicalPath: "/milk-rate",
    ogType: "website",
  },
  "/gallery": {
    title: `Gallery | Farm Photos & Dairy Work - ${brandSuffix}`,
    description:
      "See our dairy farm gallery: milk collection, facilities, products, and community work in Kochas, Dinara and across Rohtas district.",
    canonicalPath: "/gallery",
    ogType: "website",
  },
  "/contact": {
    title: `Contact | Call / WhatsApp Delhuan Dairy Farm`,
    description:
      "Contact Delhuan Dairy Farm for milk supply, collection, bulk orders, and animal care services. Call/WhatsApp for Kochas, Dinara, Rohtas (Bihar).",
    canonicalPath: "/contact",
    ogType: "website",
  },
  "/blog": {
    title: `Blog | Dairy Tips, Farming Guides & Updates - ${brandSuffix}`,
    description:
      "Read dairy tips, farming guides, milk quality info, and updates from Delhuan Dairy Farm. Useful content for farmers and customers in Rohtas, Bihar.",
    canonicalPath: "/blog",
    ogType: "website",
  },
  "/privacy-policy": {
    title: `Privacy Policy - ${brandSuffix}`,
    description:
      "Privacy policy for Delhuan Dairy Farm website: how we collect, use, and protect your information.",
    canonicalPath: "/privacy-policy",
    ogType: "website",
  },
  "/terms": {
    title: `Terms & Conditions - ${brandSuffix}`,
    description:
      "Terms and conditions for using Delhuan Dairy Farm website and services.",
    canonicalPath: "/terms",
    ogType: "website",
  },
  "/disclaimer": {
    title: `Disclaimer - ${brandSuffix}`,
    description:
      "Disclaimer for Delhuan Dairy Farm website and blog content.",
    canonicalPath: "/disclaimer",
    ogType: "website",
  },
};

export function getMetaForPath(pathname: string): RouteMeta {
  // Exact match first
  if (ROUTE_META[pathname]) return ROUTE_META[pathname];

  // Blog posts: /blog/:slug
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace("/blog/", "").trim();
    const pretty =
      slug
        .split("-")
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ") || "Post";

    return {
      title: `${pretty} | Blog - ${brandSuffix}`,
      description:
        "Read this article from Delhuan Dairy Farm blog about dairy farming, milk quality, animal care, and local dairy updates in Rohtas, Bihar.",
      canonicalPath: pathname,
      ogType: "article",
    };
  }

  // Fallback
  return {
    title: `${brandSuffix} | Kochas, Dinara (Rohtas)`,
    description:
      "Delhuan Dairy Farm provides fresh milk collection, dairy products, and animal care services near Kochas and Dinara in Rohtas, Bihar.",
    canonicalPath: pathname || "/",
    ogType: "website",
  };
}

export function toCanonicalUrl(canonicalPath: string) {
  const clean =
    canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  return `${SITE.url}${clean === "/" ? "/" : clean}`;
}

