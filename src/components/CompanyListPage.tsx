import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { InputField } from './InputField';
import { Search } from 'lucide-react';

interface CompanyListPageProps {
  onCompanyClick: (companyId: number) => void;
}

const mockCompanies = [
  { id: 1, name: 'ロッテ', domain: 'lotte.net', phone: '01086463005', owner: '權垣額 璉啓 (takuma.go...', city: 'ソウル' },
  { id: 2, name: 'トクヤマ', domain: 'tokuyamagr.co.jp', phone: '0834-34-2879', owner: 'VOIQ 株式会社', city: '山口県' },
  { id: 3, name: 'MEC', domain: 'mec.or.jp', phone: '045-501-1261', owner: '北岡 隼', city: '横浜市' },
  { id: 4, name: 'プルーフ', domain: 'p-roof.jp', phone: '0774-62-6002', owner: '担当者なし', city: '京都府' },
  { id: 5, name: 'サイモン', domain: 'simon.co.jp', phone: '03-5695-4133', owner: '担当者なし', city: '東京都' },
  { id: 6, name: '東芝', domain: 'toshiba.co.jp', phone: '050-3176-2617', owner: '權垣額 璉啓', city: '東京都' },
  { id: 7, name: 'NTTコミュニケーションズ', domain: 'nttpc.co.jp', phone: '050-3383-2036', owner: '担当者なし', city: '東京都' },
  { id: 8, name: 'エヌティーテクノ', domain: 'nt-techno.co.jp', phone: '0566-95-3329', owner: 'VOIQ 株式会社', city: '愛知県' },
];

export const CompanyListPage = ({ onCompanyClick }: CompanyListPageProps) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex-1 bg-[#F5F8FA]">
      {/* Header */}
      <div className="bg-white border-b border-[#DFE3EB] px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="mb-1" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 600 }}>
              会社
            </h1>
            <p className="text-[#7C98B6]" style={{ fontSize: '14px' }}>
              {mockCompanies.length}件のレコード
            </p>
          </div>
          <div className="flex gap-2">
            <PrimaryButton>インポート</PrimaryButton>
            <PrimaryButton>会社を作成</PrimaryButton>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-[#DFE3EB] -mb-[1px]">
          <button
            className="pb-3 px-1 border-b-2 border-[#FF7A59] text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            全ての会社
          </button>
          <button
            className="pb-3 px-1 text-[#7C98B6] hover:text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            自分の会社
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-[#DFE3EB] px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7C98B6]" />
            <InputField
              placeholder="検索"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-lg border border-[#DFE3EB] overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#F5F8FA] border-b border-[#DFE3EB]">
            <div className="grid grid-cols-12 gap-4 px-4 py-3">
              <div className="col-span-3">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  会社名
                </span>
              </div>
              <div className="col-span-3">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  ドメイン名
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  電話番号
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  会社の所有者
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  市区町村
                </span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {mockCompanies.map((company, index) => (
              <div
                key={company.id}
                className={`grid grid-cols-12 gap-4 px-4 py-3 hover:bg-[#F5F8FA] transition-colors ${
                  index !== mockCompanies.length - 1 ? 'border-b border-[#DFE3EB]' : ''
                }`}
              >
                <div className="col-span-3">
                  <button
                    onClick={() => onCompanyClick(company.id)}
                    className="text-[#0091AE] hover:underline text-left"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    {company.name}
                  </button>
                </div>
                <div className="col-span-3">
                  <span className="text-[#0091AE]" style={{ fontSize: '14px' }}>
                    {company.domain}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#516F90]" style={{ fontSize: '14px' }}>
                    {company.phone}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#516F90]" style={{ fontSize: '14px' }}>
                    {company.owner}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#516F90]" style={{ fontSize: '14px' }}>
                    {company.city}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="border-t border-[#DFE3EB] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded flex items-center justify-center bg-[#FF7A59] text-white"
                style={{ fontSize: '14px' }}
              >
                1
              </button>
              <button className="text-[#0091AE] hover:underline" style={{ fontSize: '14px' }}>
                次へ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
