import React, { useState } from 'react';
import { SalesPipelineKanban } from './components/SalesPipelineKanban';
import { CompanyDetailPage } from './components/CompanyDetailPage';
import { PrimaryButton } from './components/PrimaryButton';
import { InputField } from './components/InputField';
import { StatusBadge } from './components/StatusBadge';
import { TableRow } from './components/TableRow';
import { Plus, Search, Download, Upload, ArrowLeft } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'kanban' | 'uikit' | 'company'>('company');
  const [searchValue, setSearchValue] = useState('');
  const [rows, setRows] = useState([
    { id: 1, checked: false, name: 'Sarah Johnson', email: 'sarah.j@company.com', status: 'active' as const },
    { id: 2, checked: false, name: 'Michael Chen', email: 'mchen@company.com', status: 'pending' as const },
    { id: 3, checked: false, name: 'Emily Rodriguez', email: 'erodriguez@company.com', status: 'completed' as const },
    { id: 4, checked: false, name: 'David Kim', email: 'dkim@company.com', status: 'active' as const },
    { id: 5, checked: false, name: 'Lisa Anderson', email: 'l.anderson@company.com', status: 'inactive' as const },
  ]);

  const handleRowCheckedChange = (id: number, checked: boolean) => {
    setRows(rows.map(row => row.id === id ? { ...row, checked } : row));
  };

  if (view === 'company') {
    return <CompanyDetailPage onNavigate={(newView) => setView(newView)} />;
  }

  if (view === 'kanban') {
    return (
      <div className="min-h-screen bg-[#F5F8FA]">
        <div className="p-6 border-b border-[#DFE3EB] bg-white">
          <PrimaryButton onClick={() => setView('uikit')}>
            <ArrowLeft className="w-4 h-4" />
            Back to UI Kit
          </PrimaryButton>
        </div>
        <SalesPipelineKanban />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F8FA] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="mb-2">Enterprise SaaS UI Kit</h1>
              <p className="text-[#7C98B6]">High-density components for business applications</p>
            </div>
            <PrimaryButton onClick={() => setView('kanban')}>
              View Sales Pipeline Kanban
            </PrimaryButton>
          </div>
        </div>

        {/* Component Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Buttons Section */}
          <div className="bg-white rounded-lg p-6 border border-[#DFE3EB]">
            <h2 className="mb-4">Primary Buttons</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Default State
                </p>
                <div className="flex flex-wrap gap-2">
                  <PrimaryButton>
                    <Plus className="w-4 h-4" />
                    Create New
                  </PrimaryButton>
                  <PrimaryButton>
                    <Upload className="w-4 h-4" />
                    Upload
                  </PrimaryButton>
                  <PrimaryButton>
                    <Download className="w-4 h-4" />
                    Export
                  </PrimaryButton>
                </div>
              </div>

              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Disabled State
                </p>
                <PrimaryButton disabled>Disabled Button</PrimaryButton>
              </div>

              <div className="pt-4 border-t border-[#DFE3EB]">
                <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  <strong>Specs:</strong> Height 32px • Border-radius 4px • Orange #FF7A59 • White text
                </p>
              </div>
            </div>
          </div>

          {/* Input Fields Section */}
          <div className="bg-white rounded-lg p-6 border border-[#DFE3EB]">
            <h2 className="mb-4">Input Fields</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Search Input
                </p>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7C98B6]" />
                  <InputField 
                    placeholder="Search contacts..." 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Standard Input
                </p>
                <InputField placeholder="Enter email address" type="email" />
              </div>

              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Disabled State
                </p>
                <InputField placeholder="Disabled field" disabled value="Cannot edit this" />
              </div>

              <div className="pt-4 border-t border-[#DFE3EB]">
                <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  <strong>Specs:</strong> Height 40px • Background #F5F8FA • Border #CBD6E2
                </p>
              </div>
            </div>
          </div>

          {/* Status Badges Section */}
          <div className="bg-white rounded-lg p-6 border border-[#DFE3EB]">
            <h2 className="mb-4">Status Badges</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-3" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Available States
                </p>
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status="active">Active</StatusBadge>
                  <StatusBadge status="pending">Pending</StatusBadge>
                  <StatusBadge status="completed">Completed</StatusBadge>
                  <StatusBadge status="inactive">Inactive</StatusBadge>
                  <StatusBadge status="warning">Warning</StatusBadge>
                </div>
              </div>

              <div>
                <p className="mb-3" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  In Context
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-[#F5F8FA] rounded">
                    <span style={{ fontSize: '14px', lineHeight: '22px' }}>Payment received</span>
                    <StatusBadge status="completed">Completed</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F5F8FA] rounded">
                    <span style={{ fontSize: '14px', lineHeight: '22px' }}>Awaiting approval</span>
                    <StatusBadge status="pending">Pending</StatusBadge>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DFE3EB]">
                <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  <strong>Specs:</strong> Font-size 12px • Capsule shape • Pastel backgrounds
                </p>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className="bg-white rounded-lg p-6 border border-[#DFE3EB]">
            <h2 className="mb-4">Typography System</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Headings (16px/24px Bold)
                </p>
                <h3>Enterprise Dashboard Heading</h3>
              </div>

              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Body Text (14px/22px Regular)
                </p>
                <p>This is body text used for general content, descriptions, and standard UI elements throughout the application.</p>
              </div>

              <div>
                <p className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  Small Text (12px/16px)
                </p>
                <small>Used for metadata, timestamps, helper text, and secondary information.</small>
              </div>

              <div className="pt-4 border-t border-[#DFE3EB]">
                <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  <strong>Font Family:</strong> Noto Sans JP • <strong>Colors:</strong> Heading #33475B, Body #516F90, Small #7C98B6
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg border border-[#DFE3EB] overflow-hidden">
          <div className="p-6 border-b border-[#DFE3EB]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="mb-1">Contact List</h2>
                <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
                  High-density table with compact 48px row height
                </p>
              </div>
              <div className="flex gap-2">
                <PrimaryButton>
                  <Plus className="w-4 h-4" />
                  Add Contact
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="h-10 bg-[#F5F8FA] border-b border-[#DFE3EB] flex items-center px-4 gap-3">
            <input type="checkbox" className="w-4 h-4 rounded border-[#CBD6E2]" />
            <div className="w-8" /> {/* Avatar spacer */}
            <div className="flex-1" style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500, color: '#7C98B6' }}>
              CONTACT
            </div>
            <div className="w-24 text-right" style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500, color: '#7C98B6' }}>
              STATUS
            </div>
          </div>

          {/* Table Rows */}
          <div>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                checked={row.checked}
                onCheckedChange={(checked) => handleRowCheckedChange(row.id, checked)}
                name={row.name}
                email={row.email}
                avatarInitials={row.name.split(' ').map(n => n[0]).join('')}
              >
                <StatusBadge status={row.status}>
                  {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                </StatusBadge>
              </TableRow>
            ))}
          </div>

          <div className="p-4 border-t border-[#DFE3EB] bg-[#F5F8FA]">
            <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
              <strong>Table Row Specs:</strong> Height 48px • White background • Border-bottom #DFE3EB • Includes checkbox, avatar, and text
            </p>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-8 bg-white rounded-lg p-6 border border-[#DFE3EB]">
          <h2 className="mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <div className="h-16 rounded bg-[#FF7A59] mb-2"></div>
              <p style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>Primary</p>
              <small>#FF7A59</small>
            </div>
            <div>
              <div className="h-16 rounded bg-[#0091AE] mb-2"></div>
              <p style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>Secondary</p>
              <small>#0091AE</small>
            </div>
            <div>
              <div className="h-16 rounded bg-[#F5F8FA] border border-[#DFE3EB] mb-2"></div>
              <p style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>Background</p>
              <small>#F5F8FA</small>
            </div>
            <div>
              <div className="h-16 rounded bg-[#FFFFFF] border border-[#DFE3EB] mb-2"></div>
              <p style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>Surface</p>
              <small>#FFFFFF</small>
            </div>
            <div>
              <div className="h-16 rounded border-4 border-[#DFE3EB] bg-white mb-2"></div>
              <p style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>Borders</p>
              <small>#DFE3EB</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}