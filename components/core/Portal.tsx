import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const mount = useRef(document.getElementById("portal-root"));
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const currentMount = mount.current;
    const currentEl = el.current;

    if (currentMount) {
      currentMount.appendChild(currentEl);
    }

    return () => {
      if (currentMount) {
        currentMount.removeChild(currentEl);
      }
    };
  }, []);

  if (!mount.current) return null;

  return createPortal(children, el.current);
};

export default Portal;
