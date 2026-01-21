import { 
  Home, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings,
  CreditCard,
  Bell,
  HelpCircle
} from 'lucide-react';
import NavLinks from './NavLinks';



const Sidebar = () => {
  const navItems = [
    { href: '/', label: 'Dashboard', icon: <Home size={20} /> },
    { href: '/orders', label: 'Orders', icon: <ShoppingCart size={20} />, badge: 12 },
    { href: '/products', label: 'Products', icon: <Package size={20} /> },
    { href: '/customers', label: 'Customers', icon: <Users size={20} /> },
    { href: '/analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
    { href: '/payments', label: 'Payments', icon: <CreditCard size={20} /> },
  ];

  const bottomItems = [
    { href: '/notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { href: '/support', label: 'Support', icon: <HelpCircle size={20} /> },
    { href: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-linear-to-b from-blue-50 to-blue-50 text-black p-6 space-y-8">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
      </div>

      {/* Navigation */}
      <div className='space-y-11' >
      <nav className="flex-1 space-y-2">
        <h2 className="text-xs uppercase text-gray-400 tracking-wider">Main</h2>
        <NavLinks items={navItems} />
      </nav>

      {/* Bottom Navigation */}
      <nav className="space-y-2 border-t border-gray-800 pt-6">
        <NavLinks items={bottomItems} />
        
        {/* User Profile */}
        <div className="flex items-center space-x-3 pt-6">
          <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <div>
            <p className="font-medium">Abhishek Mewada</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
        </div>
      </nav>
      </div>
    </aside>
  );
};

export default Sidebar;