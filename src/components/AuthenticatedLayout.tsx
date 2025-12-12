import React from 'react';
import { useMsal } from '@azure/msal-react';
import { LogOut, User } from 'lucide-react';

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const { instance, accounts } = useMsal();
  const account = accounts[0];

  const handleLogout = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: '/'
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA]">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-[#DFE3EB] px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF7A59] rounded flex items-center justify-center">
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
            <h3 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}>
              HubSpot
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0091AE] flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 500, color: '#33475B' }}>
                  {account?.name || 'User'}
                </p>
                <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  {account?.username}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#F5F8FA] transition-colors"
              style={{ fontSize: '14px', lineHeight: '22px', color: '#516F90' }}
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
};
