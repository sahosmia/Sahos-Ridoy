import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "text-text-secondary hover:text-primary transition-colors",
  };
  const sizeClasses = {
    sm: "btn-sm",
    md: "",
    lg: "px-10 py-4 text-lg",
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
