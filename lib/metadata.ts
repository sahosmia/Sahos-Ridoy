import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Sahos Mia | Laravel Full-Stack Developer",
  description = "Sahos Mia is a Laravel full-stack developer with 3+ years of experience building CRM, ERP, logistics and inventory systems with Laravel, React and Inertia.js.",
  image = "/images/avatar.png",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sahosmia.vercel.app";

  return {
    title: {
      default: title,
      template: `%s | Sahos Mia`,
    },
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Sahos Mia Portfolio",
      images: [
        {
          url: image.startsWith("http") ? image : `${siteUrl}${image}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${siteUrl}${image}`],
      creator: "@sahosmia",
    },
    metadataBase: new URL(siteUrl),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
