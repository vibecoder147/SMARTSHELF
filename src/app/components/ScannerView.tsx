import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Scan } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const ScannerView = () => {
  const [scanning, setScanning] = useState(true);
  
  // Mock bounding boxes appearing after a delay
  const [boxes, setBoxes] = useState<number[]>([]);

  useEffect(() => {
    if (scanning) {
      const interval = setInterval(() => {
        setBoxes(prev => {
          if (prev.length < 5) return [...prev, prev.length];
          return prev;
        });
      }, 600);
      return () => clearInterval(interval);
    }
  }, [scanning]);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex flex-col">
      {/* Camera Feed Mock */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688267224124-aa10a75ec732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBzaGVsZiUyMHJpY2UlMjBiYWdzfGVufDF8fHx8MTc3MDE0NjY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Grocery Shelf"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* AR Overlay Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {boxes.map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute border-2 border-green-500 bg-green-500/10 rounded-lg flex flex-col items-start justify-end p-1"
            style={{
              top: `${20 + (id % 2) * 25}%`,
              left: `${10 + (id % 3) * 30}%`,
              width: '25%',
              height: '20%'
            }}
          >
            <div className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
              Rice Bag
            </div>
            <div className="bg-white text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm mt-0.5">
              Count: 12
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scanner UI */}
      <div className="absolute top-0 left-0 w-full p-6 z-20 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex justify-between items-center text-white">
          <h2 className="text-xl font-bold tracking-tight">SmartShelf AI</h2>
          <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
             Live Feed
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="absolute bottom-24 left-0 w-full flex justify-center z-20">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setScanning(false)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 transition-colors"
        >
           {scanning ? (
             <>
               <Scan className="w-5 h-5" />
               Scanning...
             </>
           ) : (
             <>
               <Check className="w-5 h-5" />
               Scan Complete
             </>
           )}
        </motion.button>
      </div>
    </div>
  );
};
