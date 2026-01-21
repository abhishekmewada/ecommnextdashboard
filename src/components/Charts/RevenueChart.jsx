// 'use client';

// import { TrendingUp } from 'lucide-react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from 'recharts';

// const revenueData = [
//   { month: 'Jan', revenue: 42000 },
//   { month: 'Feb', revenue: 52000 },
//   { month: 'Mar', revenue: 61000 },
//   { month: 'Apr', revenue: 58000 },
//   { month: 'May', revenue: 72000 },
//   { month: 'Jun', revenue: 89000 },
//   { month: 'Jul', revenue: 95000 },
// ];

// const RevenueChart = () => {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h3 className="text-xl font-bold text-gray-800">Revenue Overview</h3>
//           <p className="text-gray-500">Monthly revenue performance</p>
//         </div>
//         <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
//           <TrendingUp size={16} className="mr-1" />
//           <span className="font-medium">+18.5%</span>
//         </div>
//       </div>

//       <div className="h-72">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={revenueData}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//             <XAxis dataKey="month" axisLine={false} tickLine={false} />
//             <YAxis axisLine={false} tickLine={false} />
//             <Tooltip 
//               formatter={(value) => [`$${value}`, 'Revenue']}
//               contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
//             />
//             <Area
//               type="monotone"
//               dataKey="revenue"
//               stroke="#3b82f6"
//               fill="url(#colorRevenue)"
//               strokeWidth={3}
//             />
//             <defs>
//               <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
//               </linearGradient>
//             </defs>
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default RevenueChart;

 
 
"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 58000 },
  { month: "May", revenue: 72000 },
  { month: "Jun", revenue: 89000 },
  { month: "Jul", revenue: 95000 },
    { month: "Aug", revenue: 95000 },
  { month: "Sep", revenue: 95000 },
  { month: "Oct", revenue: 95000 },
  { month: "Nov", revenue: 95000 },
  { month: "Dec", revenue: 95000 },

];

const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Revenue Overview
          </h3>
          <p className="text-gray-500">
            Monthly revenue performance
          </p>
        </div>
        <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
          <TrendingUp size={16} className="mr-1" />
          <span className="font-medium">+18.5%</span>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(value) => [`$${value}`, "Revenue"]}
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              fill="url(#colorRevenue)"
              strokeWidth={3}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
