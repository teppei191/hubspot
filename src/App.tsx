import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { LoginPage } from './components/LoginPage';
import { AuthenticatedLayout } from './components/AuthenticatedLayout';
import { Sidebar } from './components/Sidebar';
import { ContactListPage } from './components/ContactListPage';
import { CompanyListPage } from './components/CompanyListPage';
import { DealListPage } from './components/DealListPage';
import { CompanyDetailPage } from './components/CompanyDetailPage';

type ViewType = 'contacts' | 'companies' | 'deals' | 'companyDetail';

export default function App() {
  const { isAuthenticated } = useAuth();
  const [view, setView] = useState<ViewType>('contacts');
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const handleNavigate = (newView: string) => {
    setView(newView as ViewType);
  };

  const handleCompanyClick = (companyId: number) => {
    setSelectedCompanyId(companyId);
    setView('companyDetail');
  };

  const handleBackToList = () => {
    setView('companies');
    setSelectedCompanyId(null);
  };

  return (
    <AuthenticatedLayout>
      <div className="flex h-[calc(100vh-60px)]">
        {/* Sidebar */}
        <Sidebar currentView={view} onNavigate={handleNavigate} />

        {/* Main Content Area */}
        <div className="flex-1" style={{ marginLeft: '60px' }}>
          {view === 'contacts' && <ContactListPage />}

          {view === 'companies' && (
            <CompanyListPage onCompanyClick={handleCompanyClick} />
          )}

          {view === 'deals' && (
            <DealListPage onCompanyClick={handleCompanyClick} />
          )}

          {view === 'companyDetail' && (
            <CompanyDetailPage onNavigate={handleBackToList} />
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
