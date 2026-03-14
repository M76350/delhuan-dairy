import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "./siteMeta";
import { getMetaForPath, toCanonicalUrl } from "./routeMeta";

function upsertMetaByName(name: string, content: string) {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, json: unknown) {
  const scriptId = `jsonld:${id}`;
  let el = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = scriptId;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(json);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const meta = getMetaForPath(location.pathname);
    const canonical = toCanonicalUrl(meta.canonicalPath);

    // Title + core SEO
    document.title = meta.title;
    upsertMetaByName("description", meta.description);
    upsertLink("canonical", canonical);

    // OpenGraph
    upsertMetaByProperty("og:title", meta.title);
    upsertMetaByProperty("og:description", meta.description);
    upsertMetaByProperty("og:url", canonical);
    upsertMetaByProperty("og:type", meta.ogType || "website");
    upsertMetaByProperty("og:image", SITE.defaultOgImage);
    upsertMetaByProperty("og:locale", SITE.locale);

    // Twitter
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", meta.title);
    upsertMetaByName("twitter:description", meta.description);
    upsertMetaByName("twitter:image", SITE.defaultOgImage);

    // Optional: basic index controls (keep indexable by default)
    upsertMetaByName("robots", "index,follow,max-image-preview:large");

    // JSON-LD: LocalBusiness / DairyFarm (sitewide)
    upsertJsonLd("local-business", {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phoneE164,
      image: SITE.defaultOgImage,
      sameAs: [],
    });

    // JSON-LD: WebSite + SearchAction (helps sitelinks/search in some engines)
    upsertJsonLd("website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    });
  }, [location.pathname]);

  return null;
}

