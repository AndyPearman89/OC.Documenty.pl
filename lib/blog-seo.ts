/**
 * Blog SEO enhancements - internal linking & schema
 */

export interface BlogSEOLink {
  href: string;
  anchor: string;
  context: string;
}

export interface BlogSchemaData {
  title: string;
  description: string;
  image?: string;
  author?: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  category: string;
  keywords: string[];
}

/**
 * Generate Article schema.org JSON-LD
 */
export function generateBlogSchema(data: BlogSchemaData): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: data.image || "https://oc.documenty.pl/og-image.jpg",
    author: {
      "@type": "Organization",
      name: data.author || "OC.Documenty.pl",
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    timeRequired: `PT${data.readingTime}M`,
    articleBody: data.description,
    keywords: data.keywords.join(","),
    inLanguage: "pl-PL",
    isPartOf: {
      "@type": "WebSite",
      name: "OC.Documenty.pl",
      url: "https://oc.documenty.pl",
    },
    publisher: {
      "@type": "Organization",
      name: "OC.Documenty.pl",
      logo: {
        "@type": "ImageObject",
        url: "https://oc.documenty.pl/logo.svg",
      },
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Internal linking recommendations
 */
export function getInternalLinks(currentPost: string, allPosts: string[]): BlogSEOLink[] {
  const linkMap: Record<string, BlogSEOLink[]> = {
    "co-zrobic-po-kolizji-samochodowej": [
      {
        href: "/oswiadczenie-sprawcy",
        anchor: "oświadczenie sprawcy",
        context: "Po zdarzeniu drogowym",
      },
      {
        href: "/wspolne-oswiadczenie",
        anchor: "wspólne oświadczenie",
        context: "Jeśli obie strony się dogadały",
      },
      {
        href: "/blog/jak-zglosic-szkode-z-oc-sprawcy",
        anchor: "jak zgłosić szkodę",
        context: "Następny krok po kolizji",
      },
    ],
    "oswiadczenie-sprawcy-kolizji-co-wpisac": [
      {
        href: "/oswiadczenie-sprawcy",
        anchor: "generator oświadczenia",
        context: "Gotowy formularz",
      },
      {
        href: "/blog/co-zrobic-po-kolizji-samochodowej",
        anchor: "co zrobić po kolizji",
        context: "Pełny przewodnik",
      },
    ],
    "jak-zglosic-szkode-z-oc-sprawcy": [
      {
        href: "/dokumenty/zgloszenie-szkody-komunikacyjnej",
        anchor: "wzór zgłoszenia szkody",
        context: "Profesjonalny dokument",
      },
      {
        href: "/blog/co-zrobic-po-kolizji-samochodowej",
        anchor: "przewodnik po kolizji",
        context: "Kontekst zdarzenia",
      },
    ],
  };

  return linkMap[currentPost] || [];
}

/**
 * Generate FAQ schema for blog posts
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
