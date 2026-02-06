import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CloudRain, CalendarDays, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', sales: 20, predicted: 24 },
  { name: 'Tue', sales: 35, predicted: 30 },
  { name: 'Wed', sales: 28, predicted: 45 },
  { name: 'Thu', sales: 45, predicted: 50 },
  { name: 'Fri', sales: 60, predicted: 75 },
  { name: 'Sat', sales: 80, predicted: 90 },
  { name: 'Sun', sales: 75, predicted: 85 },
];

export const DashboardView = () => {
  return (
    <div className="bg-slate-50 min-h-full pb-24">
      <header className="bg-white px-6 py-5 border-b border-slate-100 sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-slate-900">Demand Forecast</h2>
        <p className="text-slate-500 text-sm">Real-time inventory intelligence</p>
      </header>

      <div className="p-6 space-y-6">
        
        {/* Chart Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800">Sales vs Predicted</h3>
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">7 Days</span>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0077b6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0077b6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="predicted" stroke="#0077b6" strokeWidth={2} fillOpacity={1} fill="url(#colorPredicted)" name="Predicted Demand" />
                <Line type="monotone" dataKey="sales" stroke="#94a3b8" strokeWidth={2} dot={false} strokeDasharray="5 5" name="Actual Sales" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insight Widgets */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2 text-blue-600">
              <CloudRain size={20} />
            </div>
            <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Weather</span>
            <p className="text-sm font-medium text-slate-700 mt-1">Rainy Forecast</p>
            <span className="text-[10px] text-blue-600">+15% Demand</span>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-purple-50 p-4 rounded-2xl border border-purple-100 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 text-purple-600">
              <CalendarDays size={20} />
            </div>
            <span className="text-xs font-semibold text-purple-800 uppercase tracking-wide">Events</span>
            <p className="text-sm font-medium text-slate-700 mt-1">Weekend Festival</p>
            <span className="text-[10px] text-purple-600">High Traffic</span>
          </motion.div>
        </div>

        {/* Recommendation Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 pointer-events-none" />
          
          <div className="flex items-start justify-between mb-4">
            <div>
               <h4 className="text-sm font-medium text-slate-500 uppercase">Recommended Order</h4>
               <div className="flex items-baseline gap-1 mt-1">
                 <span className="text-4xl font-bold text-slate-900">50</span>
                 <span className="text-sm text-slate-600 font-medium">Units</span>
               </div>
            </div>
            <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
              High Confidence
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6">
            Based on upcoming weather patterns and local events, stock levels will be critical by Saturday.
          </p>

          <button className="w-full bg-[#0077b6] hover:bg-[#025a8a] text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-blue-900/10 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            Restock Now
            <ArrowRight size={18} />
          </button>
        </motion.div>

      </div>
    </div>
  );
};
