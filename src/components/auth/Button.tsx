import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`mt-4 pr-8 pl-8 bg-[#1E88E5] font-bold p-2 rounded hover:bg-[#114c8f] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">Processando...</span>
      ) : (
        children
      )}
    </button>
  );
};
