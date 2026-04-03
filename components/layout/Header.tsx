"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menus } from "@/data/menus";
import Button from "../core/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-surface/80 backdrop-blur-lg border-b border-surface-border py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="container flex justify-between items-center">
        <div>
          <Link href="/" className="text-text-primary text-2xl font-bold tracking-tighter">
            <span className="text-primary">S</span>Ridoy
            <span className="text-primary">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 items-center">
            {menus.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className={cn(
                    "font-medium text-sm transition-colors duration-300",
                    pathname === item.link ? "text-primary" : "text-text-secondary hover:text-primary"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" size="sm">
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-[72px] bg-surface z-40 md:hidden transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col items-center gap-8 pt-20">
            {menus.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className={cn(
                    "text-2xl font-semibold transition-colors",
                    pathname === item.link ? "text-primary" : "text-text-secondary"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button href="/contact" size="lg">
                Hire Me
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
