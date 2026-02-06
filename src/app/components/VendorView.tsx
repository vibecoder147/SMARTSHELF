import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, DollarSign, CheckCircle2, Zap } from 'lucide-react';
import { clsx } from 'clsx';

type Vendor = {
  id: string;
  name: string;
  price: number;
  delivery: string;
  isBestDeal?: boolean;
};

const vendors: Vendor[] = [
  { id: '1', name: 'Vendor A', price: 500, delivery: '2 Days' },
  { id: '2', name: 'Vendor B', price: 480, delivery: '1 Day', isBestDeal: true },
  { id: '3', name: 'Vendor C', price: 510, delivery: '3 Days' },
];

export const VendorView = () => {
  const [selectedId, setSelectedId] = useState<string>('2'); // Default to best deal

  return (
    <div className="bg-slate-50 min-h-full pb-24">
      <header className="bg-white px-6 py-5 border-b border-slate-100 sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-slate-900">Active Bids</h2>
        <p className="text-slate-500 text-sm">Select a vendor for your order</p>
      </header>

      <div className="p-6 space-y-4">
        {vendors.map((vendor) => (
          <motion.div
            key={vendor.id}
            layout
            onClick={() => setSelectedId(vendor.id)}
            className={clsx(
              "relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200",
              selectedId === vendor.id 
                ? "bg-white border-[#0077b6] shadow-md ring-2 ring-[#0077b6]/10" 
                : "bg-white border-transparent shadow-sm hover:border-slate-200"
            )}
          >
            {vendor.isBestDeal && (
              <div className="absolute -top-3 left-6 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Zap size={10} fill="currentColor" /> BEST DEAL
              </div>
            )}
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-slate-800">{vendor.name}</h3>
              {selectedId === vendor.id && (
                <CheckCircle2 className="text-[#0077b6]" size={24} />
              )}
            </div>

            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-slate-400" />
                <span className="font-semibold text-lg text-slate-900">${vendor.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-slate-400" />
                <span className="text-sm font-medium">{vendor.delivery}</span>
              </div>
            </div>
            
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <Truck size={12} />
              <span>Standard Shipping included</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="fixed bottom-24 left-0 w-full px-6 z-20 pointer-events-none">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="pointer-events-auto w-full bg-[#0077b6] hover:bg-[#025a8a] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 transition-all"
        >
          <CheckCircle2 size={20} />
          Auto-Approve Best Bid
        </motion.button>
      </div>
    </div>
  );
};
