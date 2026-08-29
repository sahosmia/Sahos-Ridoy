import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Contact Me | Sahos Ridoy",
  description: "Get in touch with me for your next project. Fill out the contact form or reach out via email, phone, or location details.",
});

export default function ContactPage() {
  return <ContactClient />;
}
