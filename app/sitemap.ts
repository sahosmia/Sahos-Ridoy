import { MetadataRoute } from "next";
import { portfolios } from "@/data/portfolios";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sahosmia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/portfolios", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projects = portfolios
    .filter((item) => item.showStatus !== false)
    .map((item) => ({
      url: `${siteUrl}/portfolios/${item.slug}`,
      lastModified: new Date(),
    }));

  return [...pages, ...projects];
}
