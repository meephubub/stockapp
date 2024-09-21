// src/app/components/ui/Button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Required children prop
  variant?: string; // Optional variant prop
  size?: string; // Optional size prop
  onClick?: () => void; // Optional onClick handler
  className?: string; // Optional className for additional styling
  type?: "button" | "submit" | "reset"; // Add type prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  onClick,
  className,
  type = "button", // Default to "button"
}) => {
  const variantClasses = variant === "ghost" ? "bg-transparent" : "bg-blue-500"; // Example variant logic
  const sizeClasses = size === "sm" ? "px-2 py-1" : "px-4 py-2"; // Example size logic

  return (
    <button
      type={type} // Use the type prop here
      className={`${variantClasses} ${sizeClasses} ${className} rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
