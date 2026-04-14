"use client";

import { useEffect, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { motion } from "framer-motion";
import { hoverScale } from "@/lib/motion";

interface ShareButtonsProps {
  slug: string;
  title?: string;
}

const ShareButtons = ({ slug, title = "Check out this project" }: ShareButtonsProps) => {
  const [url, setUrl] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
    setUrl(`${siteUrl}/portfolios/${slug}`);
  }, [slug]);

  if (!mounted || !url) {
    return (
      <div className="flex gap-2 items-center">
        <span className="text-text-muted text-sm">Share:</span>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-surface-muted animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const shareButtons = [
    { Button: FacebookShareButton, Icon: FacebookIcon, label: "Facebook", color: "hover:bg-[#1877F2]" },
    { Button: TwitterShareButton, Icon: TwitterIcon, label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { Button: LinkedinShareButton, Icon: LinkedinIcon, label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
    { Button: RedditShareButton, Icon: RedditIcon, label: "Reddit", color: "hover:bg-[#FF4500]" },
    { Button: TelegramShareButton, Icon: TelegramIcon, label: "Telegram", color: "hover:bg-[#26A5E4]" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <span className="text-text-muted text-sm font-medium">Share this project:</span>

      <div className="flex gap-2">
        {shareButtons.map(({ Button, Icon, label, color }) => (
          <motion.div
            key={label}
            {...hoverScale}
            whileHover={{ y: -2 }}
          >
            <Button url={url} title={title}>
              <div className={`
                w-8 h-8 rounded-full 
                bg-surface-muted 
                border border-surface-border
                flex items-center justify-center
                transition-all duration-300
                hover:border-transparent
                ${color}
              `}>
                <Icon size={20} className="rounded-full" />
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShareButtons;