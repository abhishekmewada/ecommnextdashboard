'use client';

import { ChevronDown, User, LogOut, Settings, CreditCard, HelpCircle, Shield, Globe, Moon } from 'lucide-react';
import { useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const user = {
    name: 'Abhishek Mewada',
    email: 'abhishekmewada6262@gmail.com',
    role: 'Administrator',
    plan: 'Business Pro',
    avatarColor: 'from-cyan-500 to-blue-500',
  };

  const menuItems = [
    { 
      icon: <User size={18} />, 
      label: 'My Profile', 
      href: '/profile',
      description: 'View and edit your profile'
    },
    { 
      icon: <CreditCard size={18} />, 
      label: 'Billing & Subscription', 
      href: '/billing',
      description: 'Manage your subscription'
    },
    { 
      icon: <Settings size={18} />, 
      label: 'Account Settings', 
      href: '/settings',
      description: 'Customize your account'
    },
    { 
      icon: <Shield size={18} />, 
      label: 'Security', 
      href: '/security',
      description: 'Password and 2FA settings'
    },
    { 
      icon: <Globe size={18} />, 
      label: 'Language & Region', 
      href: '/language',
      description: 'English • United States'
    },
    { 
      icon: <HelpCircle size={18} />, 
      label: 'Help & Support', 
      href: '/support',
      description: 'Get help and contact support'
    },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would update theme here
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
        aria-expanded={isOpen}
      >
        <div className="relative">
          <div className={`w-10 h-10 bg-linear-to-r ${user.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
            {user.name.charAt(0)}
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="hidden lg:block text-left">
          <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {user.name}
          </p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
        
        <ChevronDown 
          size={16} 
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 animate-slide-in">
            {/* User Info Section */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 bg-linear-to-r ${user.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{user.name}</h3>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                  <div className="flex items-center mt-2">
                    <span className="px-3 py-1 bg-linear-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs font-semibold rounded-full">
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-center transition-colors">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Settings size={16} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Settings</span>
                </button>
                <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-center transition-colors">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <CreditCard size={16} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Billing</span>
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2 max-h-72 overflow-y-auto ">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors group/item"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2 bg-gray-100 text-gray-600 rounded-lg group-hover/item:bg-blue-100 group-hover/item:text-blue-600 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-gray-800 block">{item.label}</span>
                    <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                  </div>
                </a>
              ))}

              {/* Dark Mode Toggle */}
              <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={toggleDarkMode}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                    <Moon size={18} />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Dark Mode</span>
                    <p className="text-xs text-gray-500">Switch theme</p>
                  </div>
                </div>
                <div className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${darkMode ? 'bg-blue-600' : 'bg-gray-200'}`}>
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-6' : ''}`}></div>
                </div>
              </div>
            </div>

              
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;