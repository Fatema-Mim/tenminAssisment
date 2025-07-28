import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ThirdTitle({ children, className = "" }: Props) {
  return (
    <p className={`mb-4 text-xl font-semibold ${className}`}>
      {children}
    </p>
  );
}
