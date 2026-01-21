'use client';

import { Search, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import SearchBar from '../UI/SearchBar';
import NotificationBell from '../UI/NotificationBell';
import UserMenu from '../UI/UserMenu';

const DashboardHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="flex items-center justify-between p-4 lg:px-6">
        {/* Left: Mobile menu & Title */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Abhi! </p>
          </div>
        </div>

        {/* Right: Search, Notifications, User */}
        <div className="flex items-center space-x-4">
          <SearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
          
          {/* Date Selector */}
          <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
            <span className="text-gray-700">This Week</span>
            <ChevronDown size={16} />
          </div>

          <NotificationBell count={5} />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default  DashboardHeader;