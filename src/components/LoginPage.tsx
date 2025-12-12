import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import { PrimaryButton } from './PrimaryButton';

export const LoginPage: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg border border-[#DFE3EB] p-8 max-w-md w-full">
        <div className="text-center mb-8">
          {/* Logo placeholder - you can add your logo here */}
          <div className="w-16 h-16 bg-[#FF7A59] rounded-lg mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
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
          <h1 className="mb-2" style={{ fontSize: '24px', lineHeight: '32px' }}>
            Welcome to HubSpot
          </h1>
          <p className="text-[#7C98B6]" style={{ fontSize: '14px', lineHeight: '22px' }}>
            Sign in with your Azure AD account to continue
          </p>
        </div>

        <div className="space-y-4">
          <PrimaryButton
            onClick={handleLogin}
            className="w-full justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M11 0h11.5v11H11V0z"
                fill="#f25022"
              />
              <path
                d="M0 0h11v11H0V0z"
                fill="#00a4ef"
              />
              <path
                d="M11 11.5h11.5v11H11v-11z"
                fill="#ffb900"
              />
              <path
                d="M0 11.5h11v11H0v-11z"
                fill="#7fba00"
              />
            </svg>
            Sign in with Microsoft
          </PrimaryButton>

          <div className="mt-6 pt-6 border-t border-[#DFE3EB]">
            <p className="text-[#7C98B6] text-center" style={{ fontSize: '12px', lineHeight: '16px' }}>
              This app uses Microsoft Azure AD for authentication.
              <br />
              Contact your administrator if you need access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
