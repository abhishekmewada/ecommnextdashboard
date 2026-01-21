'use client';

import { Bell, Check, Clock, AlertCircle, Package, CreditCard } from 'lucide-react';
import { useState } from 'react';

const NotificationBell = ({ count = 5 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      title: 'New Order Received', 
      message: 'Order #ORD-8923 from John Smith', 
      time: '2 minutes ago', 
      type: 'order',
      unread: true 
    },
    { 
      id: 2, 
      title: 'Payment Confirmed', 
      message: 'Payment of $248.99 has been processed', 
      time: '1 hour ago', 
      type: 'payment',
      unread: true 
    },
    { 
      id: 3, 
      title: 'Customer Review', 
      message: 'Sarah Johnson left a 5-star review', 
      time: '3 hours ago', 
      type: 'review',
      unread: false 
    },
    { 
      id: 4, 
      title: 'Low Stock Alert', 
      message: 'Wireless Headphones stock is low (12 items)', 
      time: '5 hours ago', 
      type: 'alert',
      unread: false 
    },
    { 
      id: 5, 
      title: 'Weekly Report Ready', 
      message: 'Your weekly sales report is now available', 
      time: '1 day ago', 
      type: 'report',
      unread: false 
    },
    { 
      id: 6, 
      title: 'Shipping Update', 
      message: 'Order #ORD-8910 has been shipped', 
      time: '2 days ago', 
      type: 'shipping',
      unread: false 
    },
  ]);

  const getIcon = (type) => {
    switch(type) {
      case 'order': return <Package size={16} className="text-blue-500" />;
      case 'payment': return <CreditCard size={16} className="text-green-500" />;
      case 'alert': return <AlertCircle size={16} className="text-amber-500" />;
      case 'review': return <Check size={16} className="text-purple-500" />;
      default: return <Bell size={16} className="text-gray-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'order': return 'bg-blue-100 text-blue-800';
      case 'payment': return 'bg-green-100 text-green-800';
      case 'alert': return 'bg-amber-100 text-amber-800';
      case 'review': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, unread: false } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="relative">
      <button
        className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
      >
        <Bell size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Notification Dropdown */}
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 animate-slide-in">
            {/* Header */}
            <div className="p-5 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Notifications</h3>
                  <p className="text-sm text-gray-500">
                    {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  {unreadCount > 0 && (
                    <button 
                      onClick={markAllAsRead}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      Mark all read
                    </button>
                  )}
                  <button className="text-gray-400 hover:text-gray-600">
                    <Clock size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Notification List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                      notification.unread ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      markAsRead(notification.id);
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(notification.type)}`}>
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-gray-800">{notification.title}</h4>
                          {notification.unread && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-1 text-sm">{notification.message}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">{notification.time}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(notification.type)}`}>
                            {notification.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <Bell size={48} className="mx-auto text-gray-300 mb-3" />
                  <h4 className="font-semibold text-gray-600">No notifications</h4>
                  <p className="text-gray-500 text-sm mt-1">Youre all caught up!</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center space-x-1">
                  <SettingsIcon size={14} />
                  <span>Notification settings</span>
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                  View all notifications
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Helper component for settings icon
const SettingsIcon = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

export default NotificationBell;