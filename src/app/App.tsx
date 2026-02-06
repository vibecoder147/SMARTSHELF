import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ScannerView } from '@/app/components/ScannerView';
import { DashboardView } from '@/app/components/DashboardView';
import { VendorView } from '@/app/components/VendorView';
import { VendorBidView } from '@/app/components/VendorBidView';
import { BottomNav } from '@/app/components/BottomNav';
import Login from '@/app/auth/Login'; // Ensure this file exists from our previous step

/**
 * MainLayout handles the dashboard views and the bottom navigation.
 * This is the "Authenticated" view of your app.
 */
function MainLayout() {
  const [currentTab, setCurrentTab] = useState<'scanner' | 'dashboard' | 'bids' | 'magic-link'>('dashboard');

  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      
      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto overflow-x-hidden scrollbar-hide">
        {currentTab === 'scanner' && <ScannerView />}
        {currentTab === 'dashboard' && <DashboardView />}
        {currentTab === 'bids' && <VendorView />}
        {currentTab === 'magic-link' && <VendorBidView />}
      </main>

      {/* Navigation - Appears only when logged in and on the dashboard route */}
      <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
}

/**
 * Root App component managing high-level routing.
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Sign-in / Login Page */}
        <Route path="/login" element={<Login />} />

        {/* The Dashboard Layout */}
        <Route path="/dashboard" element={<MainLayout />} />

        {/* Redirect root ("/") to login by default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Optional: Catch-all route to redirect unknown paths back to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}