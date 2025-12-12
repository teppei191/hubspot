import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function PrimaryButton({ children, onClick, disabled = false, className = '' }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        h-8 px-4
        bg-[#FF7A59] text-white
        rounded
        hover:bg-[#ff6642] active:bg-[#e6623d]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-150
        inline-flex items-center justify-center gap-2
        ${className}
      `}
      style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
    >
      {children}
    </button>
  );
}
