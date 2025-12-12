import React from 'react';

type StatusType = 'active' | 'pending' | 'completed' | 'inactive' | 'warning';

interface StatusBadgeProps {
  status: StatusType;
  children: React.ReactNode;
  className?: string;
}

const statusStyles: Record<StatusType, string> = {
  active: 'bg-[#D4F4DD] text-[#0B6E4F]',
  pending: 'bg-[#FFF4E0] text-[#A76F00]',
  completed: 'bg-[#E0F2FE] text-[#0369A1]',
  inactive: 'bg-[#F1F5F9] text-[#64748B]',
  warning: 'bg-[#FFE0E0] text-[#B91C1C]'
};

export function StatusBadge({ status, children, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-2 py-1
        rounded-full
        ${statusStyles[status]}
        ${className}
      `}
      style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}
    >
      {children}
    </span>
  );
}
