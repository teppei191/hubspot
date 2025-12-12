import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { InputField } from './InputField';
import { Search } from 'lucide-react';

const mockContacts = [
  { id: 1, name: '허 재관', email: 'gbo1196@gmail.com', phone: '+82-10-6266-9582', owner: '權垣額 璉啓 (takuma.go...', company: '--' },
  { id: 2, name: '임 상수', email: 'sangsurim@lotte.net', phone: '01086463005', owner: '權垣額 璉啓 (takuma.go...', company: 'lotte.net' },
  { id: 3, name: '齋藤勝成', email: '--', phone: '045-501-1261', owner: 'VOIQ 株式会社 (r_hashi...', company: '--' },
  { id: 4, name: '齋藤 雅浩', email: 'saitou.m@simon.co.jp', phone: '03-5695-4133', owner: '担当者なし', company: '--' },
  { id: 5, name: '齋藤 英人', email: 'hideto4.saitou@toshiba.co...', phone: '050-3176-2617', owner: '權垣額 璉啓 (takuma.go...', company: '--' },
  { id: 6, name: '齋藤 聡洋', email: 'a.saitou.ji@tokuyamagr.co...', phone: '0834-34-2879', owner: 'VOIQ 株式会社 (r_hashi...', company: '株式会社トクヤマ' },
  { id: 7, name: '齋藤 紘輝', email: 'h-saitou@mec.or.jp', phone: '--', owner: '北岡 隼（無効化／削除...', company: 'mec.or.jp' },
  { id: 8, name: '齋藤 直樹', email: 'saitoh.naoki@p-roof.jp', phone: '0774-62-6002', owner: '担当者なし', company: '株式会社プルーフ' },
  { id: 9, name: '齋藤 泰広', email: 'yassaito@nttpc.co.jp', phone: '050-3383-2036', owner: '担当者なし', company: '--' },
  { id: 10, name: '齋藤 正道', email: 'saito-2167@nt-techno.co.jp...', phone: '0566-95-3329', owner: 'VOIQ 株式会社 (r_hashi...', company: 'エヌティーテクノ株式会...' },
];

export const ContactListPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex-1 bg-[#F5F8FA]">
      {/* Header */}
      <div className="bg-white border-b border-[#DFE3EB] px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="mb-1" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 600 }}>
              コンタクト
            </h1>
            <p className="text-[#7C98B6]" style={{ fontSize: '14px' }}>
              16,472件のレコード
            </p>
          </div>
          <div className="flex gap-2">
            <PrimaryButton>インポート</PrimaryButton>
            <PrimaryButton>コンタクトを作成</PrimaryButton>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-[#DFE3EB] -mb-[1px]">
          <button
            className="pb-3 px-1 border-b-2 border-[#FF7A59] text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            全てのコンタクト
          </button>
          <button
            className="pb-3 px-1 text-[#7C98B6] hover:text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            自分のコンタクト
          </button>
          <button
            className="pb-3 px-1 text-[#7C98B6] hover:text-[#33475B]"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            未割り当てのコンタクト
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
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  名前
                </span>
              </div>
              <div className="col-span-3">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  Eメール
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  電話番号
                </span>
              </div>
              <div className="col-span-3">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  コンタクト担当者
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-[#7C98B6]" style={{ fontSize: '12px', fontWeight: 600 }}>
                  プライマリーの会社
                </span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {mockContacts.map((contact, index) => (
              <div
                key={contact.id}
                className={`grid grid-cols-12 gap-4 px-4 py-3 hover:bg-[#F5F8FA] transition-colors ${
                  index !== mockContacts.length - 1 ? 'border-b border-[#DFE3EB]' : ''
                }`}
              >
                <div className="col-span-2">
                  <span className="text-[#0091AE] cursor-pointer hover:underline" style={{ fontSize: '14px' }}>
                    {contact.name}
                  </span>
                </div>
                <div className="col-span-3">
                  {contact.email !== '--' ? (
                    <a href={`mailto:${contact.email}`} className="text-[#0091AE] hover:underline" style={{ fontSize: '14px' }}>
                      {contact.email}
                    </a>
                  ) : (
                    <span className="text-[#7C98B6]" style={{ fontSize: '14px' }}>--</span>
                  )}
                </div>
                <div className="col-span-2">
                  <span className="text-[#0091AE]" style={{ fontSize: '14px' }}>
                    {contact.phone}
                  </span>
                </div>
                <div className="col-span-3">
                  <span className="text-[#516F90]" style={{ fontSize: '14px' }}>
                    {contact.owner}
                  </span>
                </div>
                <div className="col-span-2">
                  {contact.company !== '--' ? (
                    <span className="text-[#0091AE]" style={{ fontSize: '14px' }}>
                      {contact.company}
                    </span>
                  ) : (
                    <span className="text-[#7C98B6]" style={{ fontSize: '14px' }}>--</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="border-t border-[#DFE3EB] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded flex items-center justify-center ${
                    page === 1
                      ? 'bg-[#FF7A59] text-white'
                      : 'text-[#516F90] hover:bg-[#F5F8FA]'
                  }`}
                  style={{ fontSize: '14px' }}
                >
                  {page}
                </button>
              ))}
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
