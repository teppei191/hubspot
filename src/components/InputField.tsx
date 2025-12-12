import React from 'react';

interface InputFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  className?: string;
}

export function InputField({ 
  placeholder, 
  value, 
  onChange, 
  type = 'text', 
  disabled = false,
  className = '' 
}: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        h-10 px-3
        bg-[#F5F8FA] 
        border border-[#CBD6E2]
        rounded
        text-[#516F90]
        placeholder:text-[#7C98B6]
        focus:outline-none focus:ring-2 focus:ring-[#0091AE] focus:border-transparent
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-150
        w-full
        ${className}
      `}
      style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 400 }}
    />
  );
}
