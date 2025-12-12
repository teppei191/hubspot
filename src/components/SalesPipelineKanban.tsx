import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { KanbanColumn } from './KanbanColumn';
import { DealCard } from './DealCard';

interface Deal {
  id: string;
  dealName: string;
  companyName: string;
  amount: number;
  ownerInitials: string;
  ownerAvatar?: string;
  closeDate: string;
  daysInactive: number;
  stage: string;
}

const ITEM_TYPE = 'DEAL_CARD';

interface DraggableDealCardProps {
  deal: Deal;
  onMove: (dealId: string, targetStage: string) => void;
}

function DraggableDealCard({ deal, onMove }: DraggableDealCardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { id: deal.id, currentStage: deal.stage },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <DealCard
        id={deal.id}
        dealName={deal.dealName}
        companyName={deal.companyName}
        amount={`¥${deal.amount.toLocaleString('ja-JP')}`}
        ownerInitials={deal.ownerInitials}
        ownerAvatar={deal.ownerAvatar}
        closeDate={deal.closeDate}
        daysInactive={deal.daysInactive}
      />
    </div>
  );
}

interface DropZoneColumnProps {
  stage: string;
  title: string;
  deals: Deal[];
  accentColor: string;
  onDrop: (dealId: string, targetStage: string) => void;
}

function DropZoneColumn({ stage, title, deals, accentColor, onDrop }: DropZoneColumnProps) {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: { id: string; currentStage: string }) => {
      if (item.currentStage !== stage) {
        onDrop(item.id, stage);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const totalValue = deals.reduce((sum, deal) => sum + deal.amount, 0);
  const formattedTotal = `¥${(totalValue / 1000000).toFixed(0)}M`;

  return (
    <div ref={drop} className={isOver ? 'opacity-75' : ''}>
      <KanbanColumn
        title={title}
        count={deals.length}
        totalValue={formattedTotal}
        accentColor={accentColor}
      >
        {deals.map((deal) => (
          <DraggableDealCard
            key={deal.id}
            deal={deal}
            onMove={onDrop}
          />
        ))}
      </KanbanColumn>
    </div>
  );
}

export function SalesPipelineKanban() {
  const [deals, setDeals] = useState<Deal[]>([
    // 課題未特定 (Prospecting)
    {
      id: '1',
      dealName: 'Cloud Migration Project',
      companyName: 'Mizuho Bank',
      amount: 50000000,
      ownerInitials: 'TY',
      closeDate: '01/15',
      daysInactive: 12,
      stage: 'prospecting'
    },
    {
      id: '2',
      dealName: 'ERP System Upgrade',
      companyName: 'Toyota Motors',
      amount: 120000000,
      ownerInitials: 'KS',
      closeDate: '02/28',
      daysInactive: 5,
      stage: 'prospecting'
    },
    {
      id: '3',
      dealName: 'Data Analytics Platform',
      companyName: 'Rakuten Group',
      amount: 35000000,
      ownerInitials: 'MH',
      closeDate: '01/30',
      daysInactive: 8,
      stage: 'prospecting'
    },

    // 課題特定済 (Qualification)
    {
      id: '4',
      dealName: 'DX Platform Phase 1',
      companyName: 'FPT Retail',
      amount: 15000000,
      ownerInitials: 'SJ',
      closeDate: '12/25',
      daysInactive: 3,
      stage: 'qualification'
    },
    {
      id: '5',
      dealName: 'Customer Portal Development',
      companyName: 'AEON Co.',
      amount: 8000000,
      ownerInitials: 'NH',
      closeDate: '01/10',
      daysInactive: 15,
      stage: 'qualification'
    },
    {
      id: '6',
      dealName: 'Mobile App Modernization',
      companyName: 'SoftBank Corp',
      amount: 45000000,
      ownerInitials: 'YT',
      closeDate: '02/05',
      daysInactive: 35,
      stage: 'qualification'
    },
    {
      id: '7',
      dealName: 'AI Chatbot Implementation',
      companyName: 'NTT Data',
      amount: 22000000,
      ownerInitials: 'RK',
      closeDate: '01/20',
      daysInactive: 7,
      stage: 'qualification'
    },

    // 提案 (Proposal)
    {
      id: '8',
      dealName: 'Infrastructure Modernization',
      companyName: 'Hitachi Solutions',
      amount: 95000000,
      ownerInitials: 'AM',
      closeDate: '12/30',
      daysInactive: 2,
      stage: 'proposal'
    },
    {
      id: '9',
      dealName: 'Security Compliance Audit',
      companyName: 'Fujitsu Limited',
      amount: 18000000,
      ownerInitials: 'TI',
      closeDate: '01/15',
      daysInactive: 20,
      stage: 'proposal'
    },
    {
      id: '10',
      dealName: 'Supply Chain Optimization',
      companyName: 'Panasonic Corp',
      amount: 62000000,
      ownerInitials: 'KN',
      closeDate: '02/10',
      daysInactive: 10,
      stage: 'proposal'
    },

    // 交渉 (Negotiation)
    {
      id: '11',
      dealName: 'CRM Integration Suite',
      companyName: 'Sony Interactive',
      amount: 78000000,
      ownerInitials: 'HS',
      closeDate: '12/20',
      daysInactive: 1,
      stage: 'negotiation'
    },
    {
      id: '12',
      dealName: 'Digital Workplace Platform',
      companyName: 'Nomura Holdings',
      amount: 42000000,
      ownerInitials: 'EW',
      closeDate: '12/28',
      daysInactive: 5,
      stage: 'negotiation'
    },

    // 受注 (Closed Won)
    {
      id: '13',
      dealName: 'Warehouse Management System',
      companyName: 'Yamato Transport',
      amount: 55000000,
      ownerInitials: 'DK',
      closeDate: '12/15',
      daysInactive: 0,
      stage: 'closed'
    },
    {
      id: '14',
      dealName: 'Payment Gateway Integration',
      companyName: 'Seven & i Holdings',
      amount: 28000000,
      ownerInitials: 'LA',
      closeDate: '12/10',
      daysInactive: 0,
      stage: 'closed'
    },
    {
      id: '15',
      dealName: 'HR Management Platform',
      companyName: 'Mitsubishi Corp',
      amount: 38000000,
      ownerInitials: 'MC',
      closeDate: '12/12',
      daysInactive: 0,
      stage: 'closed'
    }
  ]);

  const handleDrop = (dealId: string, targetStage: string) => {
    setDeals(prevDeals =>
      prevDeals.map(deal =>
        deal.id === dealId ? { ...deal, stage: targetStage } : deal
      )
    );
  };

  const stages = [
    { id: 'prospecting', title: '課題未特定', subtitle: 'Prospecting', color: '#7C98B6' },
    { id: 'qualification', title: '課題特定済', subtitle: 'Qualification', color: '#0091AE' },
    { id: 'proposal', title: '提案', subtitle: 'Proposal', color: '#FF7A59' },
    { id: 'negotiation', title: '交渉', subtitle: 'Negotiation', color: '#FFB054' },
    { id: 'closed', title: '受注', subtitle: 'Closed Won', color: '#0B6E4F' }
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#F5F8FA] p-6">
        <div className="mb-6">
          <h1>Sales Pipeline</h1>
          <p className="text-[#7C98B6]">Drag and drop deals to update their stage</p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {stages.map((stage) => {
              const stageDeals = deals.filter(deal => deal.stage === stage.id);
              return (
                <DropZoneColumn
                  key={stage.id}
                  stage={stage.id}
                  title={stage.title}
                  deals={stageDeals}
                  accentColor={stage.color}
                  onDrop={handleDrop}
                />
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg p-4 border border-[#DFE3EB] max-w-2xl">
          <p style={{ fontSize: '12px', lineHeight: '16px', color: '#7C98B6' }}>
            <strong>Design Specs:</strong> Column width 280px • Card width 264px • Gap 16px • 
            Horizontal scroll layout • Drag & drop enabled • Warning icon shows for deals inactive {'>'}30 days
          </p>
        </div>
      </div>
    </DndProvider>
  );
}
