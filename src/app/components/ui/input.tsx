// src/app/components/ui/Input.tsx

import React from "react";

interface InputProps {
  id: string; // Required id prop
  type?: string; // Optional type prop
  value: string; // Required value prop
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Required onChange handler
  className?: string; // Optional className for additional styling
  placeholder?: string; // Optional placeholder text
  required?: boolean; // Optional required prop
}

const Input: React.FC<InputProps> = ({
  id,
  type = "text", // Default type is 'text'
  value,
  onChange,
  className,
  placeholder,
  required = false,
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
