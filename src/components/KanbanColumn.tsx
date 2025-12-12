import React from 'react';

interface KanbanColumnProps {
  title: string;
  count: number;
  totalValue: string;
  accentColor?: string;
  children: React.ReactNode;
}

export function KanbanColumn({
  title,
  count,
  totalValue,
  accentColor = '#0091AE',
  children
}: KanbanColumnProps) {
  return (
    <div className="flex-shrink-0 w-[280px]">
      {/* Column Header */}
      <div
        className="h-10 px-3 flex items-center justify-between bg-white border-b-2"
        style={{ borderBottomColor: accentColor }}
      >
        <div className="flex flex-col">
          <span className="text-[#33475B]" style={{ fontSize: '14px', lineHeight: '18px', fontWeight: 700 }}>
            {title} ({count})
          </span>
          <span className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '14px', fontWeight: 500 }}>
            {totalValue}
          </span>
        </div>
      </div>

      {/* Column Body */}
      <div className="p-2 space-y-2 min-h-[400px]">
        {children}
      </div>
    </div>
  );
}
