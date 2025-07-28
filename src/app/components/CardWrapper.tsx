import React from "react";

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

function CardWrapper({ children, className = "" }:CardWrapperProps) {
  return (
    <div className={`md:rounded-md md:border md:p-5 border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export default CardWrapper;
