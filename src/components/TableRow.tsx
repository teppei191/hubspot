import React from 'react';

interface TableRowProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name: string;
  email?: string;
  avatarUrl?: string;
  avatarInitials?: string;
  children?: React.ReactNode;
  className?: string;
}

export function TableRow({ 
  checked = false, 
  onCheckedChange, 
  name, 
  email,
  avatarUrl,
  avatarInitials,
  children,
  className = '' 
}: TableRowProps) {
  return (
    <div
      className={`
        h-12 
        bg-white 
        border-b border-[#DFE3EB]
        flex items-center gap-3 px-4
        hover:bg-[#F5F8FA]
        transition-colors duration-150
        ${className}
      `}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="w-4 h-4 rounded border-[#CBD6E2] text-[#FF7A59] focus:ring-[#0091AE] focus:ring-2"
      />

      {/* Avatar */}
      <div className="w-8 h-8 rounded-full overflow-hidden bg-[#0091AE] flex items-center justify-center flex-shrink-0">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white" style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>
            {avatarInitials || name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="text-[#33475B]" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
          {name}
        </div>
        {email && (
          <div className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 400 }}>
            {email}
          </div>
        )}
      </div>

      {/* Additional content */}
      {children}
    </div>
  );
}
