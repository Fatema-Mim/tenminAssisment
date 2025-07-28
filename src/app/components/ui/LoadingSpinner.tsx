import React from "react";

interface LoadingSpinnerProps {
   show: boolean;
   color?: string;
   size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ show, color = "text-blue-500", size = 48 }) => {
   if (!show) return null;

   return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-80">
         <svg className={`animate-spin ${color}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size}>
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
         </svg>
      </div>
   );
};

export default LoadingSpinner;