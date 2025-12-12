import React, { useState } from 'react';
import { Edit2, AlertCircle } from 'lucide-react';

interface DealCardProps {
  id: string;
  dealName: string;
  companyName: string;
  amount: string;
  ownerInitials: string;
  ownerAvatar?: string;
  closeDate: string;
  daysInactive?: number;
  onEdit?: () => void;
}

export function DealCard({
  dealName,
  companyName,
  amount,
  ownerInitials,
  ownerAvatar,
  closeDate,
  daysInactive = 0,
  onEdit
}: DealCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showWarning = daysInactive > 30;

  return (
    <div
      className="w-[264px] bg-white p-3 rounded shadow-sm border border-[#DFE3EB] hover:shadow-md transition-shadow duration-150 cursor-move"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Row 1: Deal Name */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <a
          href="#"
          className="text-[#0091AE] hover:underline flex-1"
          style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
          onClick={(e) => {
            e.preventDefault();
            onEdit?.();
          }}
        >
          {dealName}
        </a>
        {isHovered && (
          <button
            onClick={onEdit}
            className="text-[#7C98B6] hover:text-[#516F90] transition-colors flex-shrink-0"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Row 2: Company Name */}
      <div className="mb-2">
        <span className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
          {companyName}
        </span>
      </div>

      {/* Row 3: Amount */}
      <div className="mb-3">
        <span className="text-[#33475B]" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
          {amount}
        </span>
      </div>

      {/* Row 4: Footer */}
      <div className="flex items-center justify-between">
        {/* Owner Avatar */}
        <div className="w-6 h-6 rounded-full overflow-hidden bg-[#0091AE] flex items-center justify-center flex-shrink-0">
          {ownerAvatar ? (
            <img src={ownerAvatar} alt="Owner" className="w-full h-full object-cover" />
          ) : (
            <span className="text-white" style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 500 }}>
              {ownerInitials}
            </span>
          )}
        </div>

        {/* Close Date and Warning */}
        <div className="flex items-center gap-2">
          <span className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
            Close: {closeDate}
          </span>
          {showWarning && (
            <AlertCircle className="w-4 h-4 text-[#d4183d]" />
          )}
        </div>
      </div>
    </div>
  );
}
