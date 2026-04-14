import { Metadata } from "next";
import NotFoundClient from "./not-found-client"; 

export const metadata: Metadata = {
  title: "404 - Page Not Found | Sahos Mia",
  description: "Oops! The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}