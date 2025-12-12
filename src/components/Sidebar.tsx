import { useState } from 'react';
import { Users, Building2, Briefcase } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Sidebar = ({ currentView, onNavigate }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 'contacts', label: 'コンタクト', icon: Users },
    { id: 'companies', label: '会社', icon: Building2 },
    { id: 'deals', label: '取引', icon: Briefcase },
  ];

  return (
    <div
      className="fixed left-0 top-0 h-full bg-[#33475B] transition-all duration-300 z-10"
      style={{ width: isExpanded ? '240px' : '60px' }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo Area */}
      <div className="h-[60px] flex items-center px-4 border-b border-[#516F90]">
        <div className="w-8 h-8 bg-[#FF7A59] rounded flex items-center justify-center flex-shrink-0">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        {isExpanded && (
          <span className="ml-3 text-white font-semibold" style={{ fontSize: '16px' }}>
            HubSpot
          </span>
        )}
      </div>

      {/* CRM Section */}
      <div className="mt-6">
        <div className="px-4 mb-2">
          {isExpanded && (
            <p
              className="text-[#7C98B6] uppercase tracking-wide"
              style={{ fontSize: '11px', fontWeight: 600 }}
            >
              CRM (顧客管理)
            </p>
          )}
        </div>

        {/* Menu Items */}
        <div className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  w-full flex items-center px-3 py-2.5 rounded transition-colors
                  ${
                    isActive
                      ? 'bg-[#FF7A59] text-white'
                      : 'text-[#CBD6E2] hover:bg-[#516F90] hover:text-white'
                  }
                `}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isExpanded && (
                  <span className="ml-3" style={{ fontSize: '14px', fontWeight: 500 }}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
