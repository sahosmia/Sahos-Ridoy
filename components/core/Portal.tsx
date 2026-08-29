"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [mountElement, setMountElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setMountElement(document.getElementById("portal-root"));
  }, []);

  if (!mounted || !mountElement) return null;

  return createPortal(children, mountElement);
};

export default Portal;
