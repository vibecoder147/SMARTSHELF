import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, DollarSign, Send } from 'lucide-react';
import { clsx } from 'clsx';

export const VendorBidView = () => {
  const [submitted, setSubmitted] = useState(false);
  const [bidAmount, setBidAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bidAmount) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <Check size={40} strokeWidth={3} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Bid Submitted!</h2>
        <p className="text-slate-500">Thank you. The buyer has been notified of your offer.</p>
        <button 
          onClick={() => { setSubmitted(false); setBidAmount(''); }}
          className="mt-8 text-[#0077b6] font-medium hover:underline"
        >
          Submit another bid
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Mock Browser Header for context */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-center gap-2 text-xs text-slate-400">
        <div className="w-3 h-3 rounded-full bg-slate-300" />
        <span className="bg-white px-3 py-1 rounded-md border border-slate-200 flex-1 text-center truncate max-w-[200px]">
          suppliers.smart-shelf.ai/bid/x829
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-md mx-auto w-full">
        <div className="w-full space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-sm font-semibold text-[#0077b6] uppercase tracking-wider">New Request</span>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Quote Request</h1>
            <p className="text-xl text-slate-600 font-medium">Rice 50kg (Premium Basmati)</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="price" className="sr-only">Bid Amount</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <DollarSign className="h-8 w-8 text-slate-300 group-focus-within:text-[#0077b6] transition-colors" />
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 text-4xl font-bold text-slate-900 placeholder:text-slate-200 border-b-2 border-slate-200 focus:border-[#0077b6] focus:ring-0 focus:outline-none bg-transparent text-center transition-all"
                  placeholder="0.00"
                  autoFocus
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!bidAmount}
              className={clsx(
                "w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-200",
                bidAmount 
                  ? "bg-[#0077b6] hover:bg-[#025a8a] text-white shadow-blue-900/20" 
                  : "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none"
              )}
            >
              Submit Bid <Send size={20} />
            </motion.button>
          </form>

          <div className="flex items-center justify-center gap-2 text-sm text-red-500 bg-red-50 py-2 px-4 rounded-full w-fit mx-auto">
            <Clock size={14} />
            <span className="font-medium">Link expires in 28:45</span>
          </div>

        </div>
      </div>
    </div>
  );
};
