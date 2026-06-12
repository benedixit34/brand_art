// components/OrganizationSchema.tsx
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brand Art and Communications",
    url: "https://www.brandart.com",
    logo: "https://www.brandart.com/img/logo.png",
    description:
      "An independent, insight-led creative design agency specializing in brand strategy, visual identity, and culturally-driven campaigns.",
    sameAs: [
      "https://www.instagram.com/brandart",
      "https://www.linkedin.com/company/brandart",
      "https://twitter.com/brandart",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}