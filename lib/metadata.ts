import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Sahos Ridoy | Full Stack Developer",
  description = "Sahos Mia is a professional full-stack web developer specializing in React, Next.js, and Laravel.",
  image = "/images/avatar.png",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sahosmia.vercel.app";

  return {
    title: {
      default: title,
      template: `%s | Sahos Ridoy`,
    },
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Sahos Ridoy Portfolio",
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
    icons: {
      icon: "/favicon.ico",
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
