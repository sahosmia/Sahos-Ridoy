import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { constructMetadata } from "@/lib/metadata";


const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
  parallel
}: {
  children: React.ReactNode;
  parallel: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {parallel}
        <div id="portal-root" />

        {/* <Contact /> */}
        <Footer />
      </body>
    </html>
  );
}
