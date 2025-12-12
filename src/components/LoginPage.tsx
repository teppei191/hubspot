import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { PrimaryButton } from './PrimaryButton';
import { InputField } from './InputField';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('ユーザー名とパスワードを入力してください');
      return;
    }

    const success = login(username, password);
    if (!success) {
      setError('ログインに失敗しました');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg border border-[#DFE3EB] p-8 max-w-md w-full">
        <div className="text-center mb-8">
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
            HubSpotへようこそ
          </h1>
          <p className="text-[#7C98B6]" style={{ fontSize: '14px', lineHeight: '22px' }}>
            アカウントにログインしてください
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block mb-2"
              style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#33475B' }}
            >
              ユーザー名
            </label>
            <InputField
              id="username"
              type="text"
              placeholder="ユーザー名を入力"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2"
              style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500, color: '#33475B' }}
            >
              パスワード
            </label>
            <InputField
              id="password"
              type="password"
              placeholder="パスワードを入力"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div
              className="p-3 rounded bg-red-50 border border-red-200"
              style={{ fontSize: '14px', lineHeight: '22px', color: '#d93025' }}
            >
              {error}
            </div>
          )}

          <PrimaryButton type="submit" className="w-full justify-center">
            ログイン
          </PrimaryButton>

          <div className="mt-6 pt-6 border-t border-[#DFE3EB]">
            <p className="text-[#7C98B6] text-center" style={{ fontSize: '12px', lineHeight: '16px' }}>
              デモ用のログインです。任意のユーザー名とパスワードでログインできます。
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
