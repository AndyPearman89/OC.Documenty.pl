// SEO Schema Generators (Phase 11)

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
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

export function howToSchema(steps: Array<{ name: string; description: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.description,
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OC.Documenty.pl",
    url: "https://oc.documenty.pl",
    logo: "https://oc.documenty.pl/logo.png",
    sameAs: [
      "https://www.facebook.com/documenty.pl",
      "https://www.linkedin.com/company/documenty.pl",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-XXX-XXX-XXX",
      contactType: "Customer Support",
      email: "support@documenty.pl",
    },
  };
}

export function articleSchema(data: {
  title: string;
  description: string;
  image?: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: data.image || "https://oc.documenty.pl/og-image.png",
    author: {
      "@type": "Organization",
      name: data.author || "OC.Documenty.pl",
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
  };
}

export function generateMetaTags(data: {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonical?: string;
}) {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      type: data.ogType || "website",
      image: data.ogImage || "https://oc.documenty.pl/og-image.png",
      url: data.canonical,
    },
    twitter: {
      card: data.twitterCard || "summary_large_image",
      title: data.title,
      description: data.description,
      image: data.ogImage || "https://oc.documenty.pl/og-image.png",
    },
    alternates: {
      canonical: data.canonical,
    },
  };
}
