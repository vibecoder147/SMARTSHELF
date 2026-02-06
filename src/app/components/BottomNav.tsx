import React from 'react';
import { Camera, BarChart2, Gavel, Link2 } from 'lucide-react';
import { clsx } from 'clsx';

type Tab = 'scanner' | 'dashboard' | 'bids' | 'magic-link';

interface BottomNavProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav = ({ currentTab, onTabChange }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 pb-safe px-6 py-2 z-50">
      <div className="flex justify-around items-center">
        <NavButton 
          icon={<Camera size={24} />} 
          label="Scan" 
          active={currentTab === 'scanner'} 
          onClick={() => onTabChange('scanner')}
        />
        <NavButton 
          icon={<BarChart2 size={24} />} 
          label="Forecast" 
          active={currentTab === 'dashboard'} 
          onClick={() => onTabChange('dashboard')}
        />
        <NavButton 
          icon={<Gavel size={24} />} 
          label="Bids" 
          active={currentTab === 'bids'} 
          onClick={() => onTabChange('bids')}
        />
        <NavButton 
          icon={<Link2 size={24} />} 
          label="Vendor Link" 
          active={currentTab === 'magic-link'} 
          onClick={() => onTabChange('magic-link')}
        />
      </div>
    </div>
  );
};

const NavButton = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={clsx(
      "flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200",
      active ? "text-[#0077b6]" : "text-slate-400 hover:text-slate-600"
    )}
  >
    <div className={clsx(
      "p-1.5 rounded-xl transition-all",
      active && "bg-blue-50"
    )}>
      {icon}
    </div>
    <span className="text-[10px] font-medium mt-1">{label}</span>
  </button>
);
