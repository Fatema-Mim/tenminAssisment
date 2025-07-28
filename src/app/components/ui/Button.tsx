import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties; 
};

export default function Button({
  children,
  onClick,
  type = "button",
  fullWidth = false,
  className = "",
  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`
        ${fullWidth ? "w-full md:w-full" : ""}
        text-white bg-green-600 border-b-4 border-black/30
        rounded-md px-8 py-2 text-center leading-6
        transition-all duration-150 select-none
        hover:bg-green-700 hover:border-transparent
        flex items-center justify-center whitespace-nowrap flex-wrap
        ${className}
      `}
    >
      {children}
    </button>
  );
}
