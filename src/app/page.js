//  import { DollarSign, ShoppingBag, Users, Package } from 'lucide-react';
// import StatCard from '@/components/Cards/StatCard';
// import CardGrid from '@/components/Cards/CardGrid';
// import RevenueChart from '@/components/Charts/RevenueChart';
// import SalesChart from '@/components/Charts/SalesChart';
// import RecentOrders from '@/components/Tables/RecentOrders';
// import TopProducts from '@/components/Tables/TopProducts';

// export default function Home() {
//   const stats = [
//     {
//       title: 'Total Revenue',
//       value: '$54,231',
//       icon: DollarSign,
//       change: 12.5,
//       trend: 'up' as const,
//       color: 'green' as const,
//     },
//     {
//       title: 'Total Orders',
//       value: '1,254',
//       icon: ShoppingBag,
//       change: 8.2,
//       trend: 'up' as const,
//       color: 'blue' as const,
//     },
//     {
//       title: 'Active Customers',
//       value: '3,128',
//       icon: Users,
//       change: -2.1,
//       trend: 'down' as const,
//       color: 'purple' as const,
//     },
//     {
//       title: 'Products Sold',
//       value: '12,543',
//       icon: Package,
//       change: 5.7,
//       trend: 'up' as const,
//       color: 'orange' as const,
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, idx) => (
//           <StatCard key={idx} {...stat} />
//         ))}
//       </div>

//       {/* Charts Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <RevenueChart />
//         <SalesChart />
//       </div>

//       {/* Tables Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <RecentOrders />
//         <TopProducts />
//       </div>
//     </div>
//   );
// }


import { DollarSign, ShoppingBag, Users, Package } from "lucide-react";
import StatCard from "@/components/Cards/StatCards";
 import CardGrid from "@/components/Cards/CardGrid";
import RevenueChart from "@/components/Charts/RevenueChart";
import SalesChart from "@/components/Charts/SalesChart";
import RecentOrders from "@/components/Tables/RecentOrders";
import TopProducts from "@/components/Tables/TopProducts";

export default function Home() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,231",
      icon: DollarSign,
      change: 12.5,
      trend: "up",
      color: "green",
    },
    {
      title: "Total Orders",
      value: "1,254",
      icon: ShoppingBag,
      change: 8.2,
      trend: "up",
      color: "blue",
    },
    {
      title: "Active Customers",
      value: "3,128",
      icon: Users,
      change: -2.1,
      trend: "down",
      color: "purple",
    },
    {
      title: "Products Sold",
      value: "12,543",
      icon: Package,
      change: 5.7,
      trend: "up",
      color: "orange",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        {/* <SalesChart /> */}
         <TopProducts />

      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <RecentOrders />
       </div>
    </div>
  );
}
