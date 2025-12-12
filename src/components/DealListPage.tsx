import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { InputField } from './InputField';
import { Search } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface DealListPageProps {
  onCompanyClick: (companyId: number) => void;
}

const mockDeals = [
  { id: 1, name: 'ロッテ - 新規導入', company: 'ロッテ', companyId: 1, amount: '¥5,000,000', stage: 'active', closeDate: '2025-01-15', owner: '權垣額 璉啓' },
  { id: 2, name: 'トクヤマ - システム更新', company: 'トクヤマ', companyId: 2, amount: '¥3,200,000', stage: 'pending', closeDate: '2025-02-20', owner: 'VOIQ 株式会社' },
  { id: 3, name: 'MEC - 保守契約', company: 'MEC', companyId: 3, amount: '¥1,800,000', stage: 'completed', closeDate: '2024-12-01', owner: '北岡 隼' },
  { id: 4, name: 'サイモン - 新規プロジェクト', company: 'サイモン', companyId: 5, amount: '¥4,500,000', stage: 'active', closeDate: '2025-01-30', owner: '担当者なし' },
  { id: 5, name: '東芝 - コンサルティング', company: '東芝', companyId: 6, amount: '¥8,000,000', stage: 'pending', closeDate: '2025-03-15', owner: '權垣額 璉啓' },
  { id: 6, name: 'NTTコミュニケーションズ - ライセンス販売', company: 'NTTコミュニケーションズ', companyId: 7, amount: '¥6,500,000', stage: 'active', closeDate: '2025-02-10', owner: '担当者なし' },
];

export const DealListPage = ({ onCompanyClick }: DealListPageProps) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex-1 bg-[#F5F8FA]">
      {/* Header */}
      <div className="bg-white border-b border-[#DFE3EB] px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="mb-1" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 600 }}>
              取引
            </h1>
            <p className="text-[#7C98B6]" style={{ fontSize: '14px' }}>
              {mockDeals.length}件のレコード
            </p>
          </div>
          <div className="flex gap-2">
            <PrimaryButton>インポート</PrimaryButton>
            <PrimaryButton>取引を作成</PrimaryButton>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-[#DFE3EB] -mb-[1px]">
          <button
            className="pb-3 px-1 border-b-2 border-[#FF7A59] text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            全ての取引
          </button>
          <button
            className="pb-3 px-1 text-[#7C98B6] hover:text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            自分の取引
          </button>
          <button
            className="pb-3 px-1 text-[#7C98B6] hover:text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            進行中の取引
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
                  取引名
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  会社名
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  金額
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  ステージ
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  成約予定日
                </span>
              </div>
              <div className="col-span-1">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  所有者
                </span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {mockDeals.map((deal, index) => (
              <div
                key={deal.id}
                className={`grid grid-cols-12 gap-4 px-4 py-3 hover:bg-[#F5F8FA] transition-colors ${
                  index !== mockDeals.length - 1 ? 'border-b border-[#DFE3EB]' : ''
                }`}
              >
                <div className="col-span-3">
                  <span className="text-[#0091AE] cursor-pointer hover:underline" style={{ fontSize: '14px' }}>
                    {deal.name}
                  </span>
                </div>
                <div className="col-span-2">
                  <button
                    onClick={() => onCompanyClick(deal.companyId)}
                    className="text-[#0091AE] hover:underline text-left"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    {deal.company}
                  </button>
                </div>
                <div className="col-span-2">
                  <span className="text-[#516F90]" style={{ fontSize: '14px', fontWeight: 600 }}>
                    {deal.amount}
                  </span>
                </div>
                <div className="col-span-2">
                  <StatusBadge status={deal.stage as 'active' | 'pending' | 'completed'}>
                    {deal.stage === 'active' ? '進行中' : deal.stage === 'pending' ? '保留中' : '完了'}
                  </StatusBadge>
                </div>
                <div className="col-span-2">
                  <span className="text-[#516F90]" style={{ fontSize: '14px' }}>
                    {deal.closeDate}
                  </span>
                </div>
                <div className="col-span-1">
                  <span className="text-[#516F90]" style={{ fontSize: '12px' }}>
                    {deal.owner}
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
