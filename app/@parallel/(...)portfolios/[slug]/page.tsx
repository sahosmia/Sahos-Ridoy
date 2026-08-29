"use client";

import { notFound, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import PortfolioItemDetails from "@/components/PortfolioItemDetails";
import { portfolios } from "@/data/portfolios";
import Portal from "@/components/core/Portal";
import PortfolioModal from "@/components/PortfolioModal";

interface PortfolioDetailsPageProps {
  params: {
    slug: string;
  };
}

const PortfolioDetailsPage = ({ params }: PortfolioDetailsPageProps) => {
  const { slug } = params;
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const portfolio = portfolios.find((item) => item.slug === slug);

  useEffect(() => {
    const handlePopState = () => {
      setIsOpen(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen, router]);

  if (!portfolio) {
    return notFound();
  }

  const handleQuickViewClose = (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLElement).id === "modal-backdrop" ||
      (e.target as HTMLElement).closest("#modal-backdrop")) {
      setIsOpen(false);
      router.back();
    }
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <PortfolioModal
        handleQuickViewClose={handleQuickViewClose}
        title={portfolio.title}
      >
        <PortfolioItemDetails portfolio={portfolio} />
      </PortfolioModal>
    </Portal>
  );
};

export default PortfolioDetailsPage;