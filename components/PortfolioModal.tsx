import { MouseEvent, ReactNode } from "react";

interface PortfolioModalProps {
  handleQuickViewClose: (e: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  handleQuickViewClose,
  children,
}) => {
  return (
    <div
      id="settings-sidebar"
      onClick={handleQuickViewClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div
        className="relative bg-white rounded p-10"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {children}
      </div>
    </div>
  );
};

export default PortfolioModal;
