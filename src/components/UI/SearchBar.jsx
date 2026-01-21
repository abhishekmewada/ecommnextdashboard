'use client';

import { Search, X } from 'lucide-react';
import { useState } from 'react';

const SearchBar = ({ isOpen, setIsOpen }) => {
  const [search, setSearch] = useState('');

 

  return (
    <>
      {/* Mobile Search Button */}
      <button
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
      >
        <Search size={20} className="text-gray-600" />
      </button>

      {/* Desktop Search Bar */}
      <div className="hidden lg:flex items-center relative w-64 xl:w-80">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search orders, products, customers..."
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Mobile Full-screen Search */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden animate-fade-in">
          <div className="p-4">
            <div className="flex items-center  justify-between mb-6">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  aria-label="Close search"
                >
                  <X size={24} className="text-gray-600" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800">Search</h2>
              </div>
              <button 
                onClick={() => setSearch('')}
                className="text-blue-600 font-medium"
              >
                Clear
              </button>
            </div>
            
            <div className="relative mb-8">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search orders, products, customers, analytics..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg"
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;