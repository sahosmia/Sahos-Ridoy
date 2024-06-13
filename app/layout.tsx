import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahos Mia",
  description: "Generated by create next app",
};

export default function RootLayout({ children, parallel }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {parallel}
        <div id="portal-root" />

        <Contact />
        <Footer />
      </body>
    </html>
  );
}
