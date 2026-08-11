import { Metadata } from "next";
import PortfoliosClient from "@/components/PortfoliosClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "My Portfolio | Sahos Ridoy",
  description: "Explore my latest web development, UI/UX, and mobile application projects. Check out case studies and technologies used.",
});

export default function PortfoliosPage() {
  return <PortfoliosClient />;
}
