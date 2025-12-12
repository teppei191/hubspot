import React, { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { StatusBadge } from './StatusBadge';
import { 
  ChevronRight, 
  Building2, 
  Plus, 
  Mail, 
  Phone, 
  Globe, 
  DollarSign, 
  MapPin,
  User,
  Calendar,
  Clock,
  Paperclip,
  FileText,
  MessageSquare,
  LayoutGrid,
  Kanban
} from 'lucide-react';

interface CompanyDetailPageProps {
  onNavigate?: (view: 'uikit' | 'kanban') => void;
}

export function CompanyDetailPage({ onNavigate }: CompanyDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'activity' | 'notes' | 'emails' | 'calls'>('activity');

  const tabs = [
    { id: 'activity' as const, label: 'Activity' },
    { id: 'notes' as const, label: 'Notes' },
    { id: 'emails' as const, label: 'Emails' },
    { id: 'calls' as const, label: 'Calls' },
  ];

  const activities = [
    {
      id: 1,
      type: 'meeting',
      title: 'Meeting with Tanaka-san',
      time: 'Yesterday',
      description: 'Discussed Q1 requirements and timeline for DX Platform Phase 1'
    },
    {
      id: 2,
      type: 'email',
      title: 'Sent proposal document',
      time: '2 days ago',
      description: 'Technical proposal for cloud migration project'
    },
    {
      id: 3,
      type: 'call',
      title: 'Phone call with procurement team',
      time: '5 days ago',
      description: 'Budget discussion and approval process'
    },
    {
      id: 4,
      type: 'note',
      title: 'Added note about expansion plans',
      time: '1 week ago',
      description: 'Client planning to open 3 new stores in Osaka region'
    }
  ];

  const contacts = [
    {
      id: 1,
      name: 'Tanaka Hiroshi',
      email: 'h.tanaka@fptretail.jp',
      role: 'IT Director',
      initials: 'TH'
    },
    {
      id: 2,
      name: 'Suzuki Yuki',
      email: 'y.suzuki@fptretail.jp',
      role: 'Procurement Manager',
      initials: 'SY'
    }
  ];

  const deals = [
    {
      id: 1,
      name: 'DX Platform Phase 1',
      stage: 'Qualification',
      amount: '¥15,000,000',
      closeDate: '12/25'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FA]">
      {/* Header Area */}
      <div className="bg-white border-b border-[#DFE3EB]">
        <div className="w-[1440px] mx-auto px-8 py-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-4">
            <a 
              href="#" 
              className="text-[#0091AE] hover:underline"
              style={{ fontSize: '12px', lineHeight: '16px' }}
            >
              Companies
            </a>
            <ChevronRight className="w-3 h-3 text-[#7C98B6]" />
            <span className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
              FPT Retail
            </span>
          </div>

          {/* Title and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-[#0091AE] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h1>FPT Retail</h1>
            </div>

            <div className="flex gap-2">
              <PrimaryButton>
                <Plus className="w-4 h-4" />
                New Deal
              </PrimaryButton>
              <PrimaryButton>
                <Mail className="w-4 h-4" />
                Send Email
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main 3-Column Grid */}
      <div className="w-[1440px] mx-auto px-8 py-6">
        <div className="flex gap-5">
          
          {/* LEFT COLUMN - 300px */}
          <div className="w-[300px] flex-shrink-0 space-y-5">
            
            {/* About Section */}
            <div className="bg-white rounded p-5 border border-[#DFE3EB]">
              <h3 className="mb-4" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
                About
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block mb-1 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    Industry
                  </label>
                  <a 
                    href="#" 
                    className="text-[#0091AE] hover:underline"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    Retail & E-commerce
                  </a>
                </div>

                <div>
                  <label className="block mb-1 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    Phone
                  </label>
                  <a 
                    href="tel:+81312345678"
                    className="text-[#0091AE] hover:underline flex items-center gap-2"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    <Phone className="w-3 h-3" />
                    +81-3-1234-5678
                  </a>
                </div>

                <div>
                  <label className="block mb-1 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    Website
                  </label>
                  <a 
                    href="https://www.fptretail.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0091AE] hover:underline flex items-center gap-2"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    <Globe className="w-3 h-3" />
                    www.fptretail.jp
                  </a>
                </div>
              </div>
            </div>

            {/* Properties Section */}
            <div className="bg-white rounded p-5 border border-[#DFE3EB]">
              <h3 className="mb-4" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
                Properties
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block mb-1 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    Account Owner
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#FF7A59] flex items-center justify-center">
                      <span className="text-white" style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 500 }}>
                        SJ
                      </span>
                    </div>
                    <a 
                      href="#"
                      className="text-[#0091AE] hover:underline"
                      style={{ fontSize: '14px', lineHeight: '22px' }}
                    >
                      Sarah Johnson
                    </a>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    Annual Revenue
                  </label>
                  <a 
                    href="#"
                    className="text-[#0091AE] hover:underline flex items-center gap-2"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    <DollarSign className="w-3 h-3" />
                    ¥850,000,000
                  </a>
                </div>

                <div>
                  <label className="block mb-1 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    City
                  </label>
                  <a 
                    href="#"
                    className="text-[#0091AE] hover:underline flex items-center gap-2"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    <MapPin className="w-3 h-3" />
                    Tokyo, Japan
                  </a>
                </div>

                <div>
                  <label className="block mb-1 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    Created Date
                  </label>
                  <span className="text-[#516F90]" style={{ fontSize: '14px', lineHeight: '22px' }}>
                    Jan 15, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN - 600px */}
          <div className="w-[600px] flex-shrink-0">
            <div className="bg-white rounded p-5 border border-[#DFE3EB]">
              {/* Tabs */}
              <div className="flex gap-4 border-b border-[#DFE3EB] mb-5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      pb-3 px-1 border-b-2 transition-colors
                      ${activeTab === tab.id 
                        ? 'border-[#0091AE] text-[#33475B]' 
                        : 'border-transparent text-[#7C98B6] hover:text-[#516F90]'
                      }
                    `}
                    style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="mb-6">
                <textarea
                  placeholder="Log an activity..."
                  className="w-full h-20 p-3 bg-[#F5F8FA] border border-[#CBD6E2] rounded resize-none
                    text-[#516F90] placeholder:text-[#7C98B6]
                    focus:outline-none focus:ring-2 focus:ring-[#0091AE] focus:border-transparent"
                  style={{ fontSize: '14px', lineHeight: '22px' }}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button 
                    className="h-8 px-3 text-[#516F90] hover:bg-[#F5F8FA] rounded transition-colors"
                    style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
                  >
                    Cancel
                  </button>
                  <PrimaryButton>Save Activity</PrimaryButton>
                </div>
              </div>

              {/* Timeline Feed */}
              <div className="space-y-4">
                <h3 className="mb-3" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
                  Recent Activity
                </h3>
                
                {activities.map((activity, index) => (
                  <div key={activity.id} className="flex gap-3">
                    {/* Timeline Line */}
                    <div className="flex flex-col items-center">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                        ${activity.type === 'meeting' ? 'bg-[#0091AE]' : ''}
                        ${activity.type === 'email' ? 'bg-[#FF7A59]' : ''}
                        ${activity.type === 'call' ? 'bg-[#0B6E4F]' : ''}
                        ${activity.type === 'note' ? 'bg-[#7C98B6]' : ''}
                      `}>
                        {activity.type === 'meeting' && <User className="w-4 h-4 text-white" />}
                        {activity.type === 'email' && <Mail className="w-4 h-4 text-white" />}
                        {activity.type === 'call' && <Phone className="w-4 h-4 text-white" />}
                        {activity.type === 'note' && <FileText className="w-4 h-4 text-white" />}
                      </div>
                      {index < activities.length - 1 && (
                        <div className="w-0.5 h-full bg-[#DFE3EB] flex-1 my-1" />
                      )}
                    </div>

                    {/* Activity Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-[#33475B]" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                          {activity.title}
                        </span>
                        <span className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-[#516F90]" style={{ fontSize: '14px', lineHeight: '22px' }}>
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - 300px */}
          <div className="w-[300px] flex-shrink-0 space-y-5">
            
            {/* Contacts Card */}
            <div className="bg-white rounded p-5 border border-[#DFE3EB]">
              <div className="flex items-center justify-between mb-4">
                <h3 style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
                  Contacts ({contacts.length})
                </h3>
                <button className="text-[#0091AE] hover:underline" style={{ fontSize: '12px', lineHeight: '16px' }}>
                  View all
                </button>
              </div>

              <div className="space-y-3">
                {contacts.map(contact => (
                  <div key={contact.id} className="flex items-start gap-3 p-2 hover:bg-[#F5F8FA] rounded transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#0091AE] flex items-center justify-center flex-shrink-0">
                      <span className="text-white" style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>
                        {contact.initials}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a 
                        href="#"
                        className="text-[#33475B] hover:text-[#0091AE] block"
                        style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
                      >
                        {contact.name}
                      </a>
                      <p className="text-[#7C98B6] truncate" style={{ fontSize: '12px', lineHeight: '16px' }}>
                        {contact.email}
                      </p>
                      <p className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                        {contact.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="w-full mt-3 h-8 flex items-center justify-center gap-2 text-[#0091AE] hover:bg-[#F5F8FA] rounded transition-colors"
                style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
              >
                <Plus className="w-4 h-4" />
                Add Contact
              </button>
            </div>

            {/* Deals Card */}
            <div className="bg-white rounded p-5 border border-[#DFE3EB]">
              <div className="flex items-center justify-between mb-4">
                <h3 style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
                  Deals ({deals.length})
                </h3>
                <button className="text-[#0091AE] hover:underline" style={{ fontSize: '12px', lineHeight: '16px' }}>
                  View all
                </button>
              </div>

              <div className="space-y-3">
                {deals.map(deal => (
                  <div key={deal.id} className="p-3 bg-[#F5F8FA] rounded">
                    <a 
                      href="#"
                      className="text-[#0091AE] hover:underline block mb-2"
                      style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
                    >
                      {deal.name}
                    </a>
                    <div className="flex items-center justify-between mb-2">
                      <StatusBadge status="pending">{deal.stage}</StatusBadge>
                      <span className="text-[#33475B]" style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
                        {deal.amount}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#7C98B6]">
                      <Calendar className="w-3 h-3" />
                      <span style={{ fontSize: '12px', lineHeight: '16px' }}>
                        Close: {deal.closeDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="w-full mt-3 h-8 flex items-center justify-center gap-2 text-[#0091AE] hover:bg-[#F5F8FA] rounded transition-colors"
                style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
              >
                <Plus className="w-4 h-4" />
                Add Deal
              </button>
            </div>

            {/* Attachments Card */}
            <div className="bg-white rounded p-5 border border-[#DFE3EB]">
              <div className="flex items-center justify-between mb-4">
                <h3 style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 700 }}>
                  Attachments
                </h3>
              </div>

              <div className="space-y-2">
                <a 
                  href="#"
                  className="flex items-center gap-3 p-2 hover:bg-[#F5F8FA] rounded transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-[#0091AE]/10 flex items-center justify-center">
                    <Paperclip className="w-4 h-4 text-[#0091AE]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0091AE] truncate" style={{ fontSize: '14px', lineHeight: '22px' }}>
                      SharePoint Files
                    </p>
                    <p className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                      3 documents
                    </p>
                  </div>
                </a>

                <a 
                  href="#"
                  className="flex items-center gap-3 p-2 hover:bg-[#F5F8FA] rounded transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-[#FF7A59]/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#FF7A59]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0091AE] truncate" style={{ fontSize: '14px', lineHeight: '22px' }}>
                      Proposal_2024.pdf
                    </p>
                    <p className="text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                      2.4 MB
                    </p>
                  </div>
                </a>
              </div>

              <button 
                className="w-full mt-3 h-8 flex items-center justify-center gap-2 text-[#0091AE] hover:bg-[#F5F8FA] rounded transition-colors"
                style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
              >
                <Plus className="w-4 h-4" />
                Upload File
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      {onNavigate && (
        <div className="w-[1440px] mx-auto px-8 py-6">
          <div className="bg-white rounded p-4 border border-[#DFE3EB]">
            <p className="mb-3 text-[#7C98B6]" style={{ fontSize: '12px', lineHeight: '16px' }}>
              <strong>Layout Specs:</strong> Total width 1440px • Left column 300px • Center column 600px • Right column 300px • Gap 20px • Padding 20px
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('uikit')}
                className="h-8 px-4 flex items-center gap-2 bg-white border border-[#DFE3EB] rounded hover:bg-[#F5F8FA] transition-colors"
                style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
              >
                <LayoutGrid className="w-4 h-4" />
                View UI Kit
              </button>
              <button
                onClick={() => onNavigate('kanban')}
                className="h-8 px-4 flex items-center gap-2 bg-white border border-[#DFE3EB] rounded hover:bg-[#F5F8FA] transition-colors"
                style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
              >
                <Kanban className="w-4 h-4" />
                View Sales Pipeline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}