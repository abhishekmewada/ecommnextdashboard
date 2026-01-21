'use client';

import { TrendingUp, TrendingDown, ShoppingBag, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts';

const SalesChart = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');
  
  // Monthly data
  const monthlyData = [
    { month: 'Jan', sales: 12500, returns: 1200, target: 14000 },
    { month: 'Feb', sales: 18700, returns: 1800, target: 16000 },
    { month: 'Mar', sales: 21400, returns: 2100, target: 18000 },
    { month: 'Apr', sales: 18200, returns: 1500, target: 19000 },
    { month: 'May', sales: 23800, returns: 2200, target: 20000 },
    { month: 'Jun', sales: 29500, returns: 2800, target: 22000 },
    { month: 'Jul', sales: 31200, returns: 3100, target: 24000 },
  ];

  // Weekly data
  const weeklyData = [
    { day: 'Mon', sales: 4200, returns: 400, target: 4500 },
    { day: 'Tue', sales: 5800, returns: 550, target: 5000 },
    { day: 'Wed', sales: 6400, returns: 600, target: 5500 },
    { day: 'Thu', sales: 7200, returns: 680, target: 6000 },
    { day: 'Fri', sales: 8900, returns: 850, target: 7000 },
    { day: 'Sat', sales: 10500, returns: 1000, target: 8000 },
    { day: 'Sun', sales: 8200, returns: 780, target: 6500 },
  ];

  // Daily data
  const dailyData = [
    { hour: '8 AM', sales: 800, returns: 80 },
    { hour: '10 AM', sales: 2200, returns: 200 },
    { hour: '12 PM', sales: 4800, returns: 450 },
    { hour: '2 PM', sales: 3200, returns: 300 },
    { hour: '4 PM', sales: 4100, returns: 380 },
    { hour: '6 PM', sales: 2800, returns: 250 },
    { hour: '8 PM', sales: 1800, returns: 160 },
  ];

  const getData = () => {
    switch(timeFilter) {
      case 'weekly': return weeklyData;
      case 'daily': return dailyData;
      default: return monthlyData;
    }
  };

  const getXAxisKey = () => {
    switch(timeFilter) {
      case 'weekly': return 'day';
      case 'daily': return 'hour';
      default: return 'month';
    }
  };

  const calculateMetrics = (data) => {
    const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
    const totalReturns = data.reduce((sum, item) => sum + item.returns, 0);
    const netRevenue = totalSales - totalReturns;
    const growthRate = ((data[data.length-1]?.sales - data[0]?.sales) / data[0]?.sales * 100) || 0;
    
    return {
      totalSales: `$${totalSales.toLocaleString()}`,
      netRevenue: `$${netRevenue.toLocaleString()}`,
      growthRate: growthRate.toFixed(1),
      isGrowing: growthRate > 0,
      returnRate: ((totalReturns / totalSales) * 100).toFixed(1) + '%',
    };
  };

  const data = getData();
  const metrics = calculateMetrics(data);
  const xAxisKey = getXAxisKey();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800">{label}</p>
          <div className="space-y-1 mt-2">
            <p className="text-sm">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm mr-2"></span>
              Sales: <span className="font-bold text-blue-600">${payload[0]?.value?.toLocaleString()}</span>
            </p>
            {payload[1] && (
              <p className="text-sm">
                <span className="inline-block w-3 h-3 bg-red-400 rounded-sm mr-2"></span>
                Returns: <span className="font-bold text-red-500">${payload[1]?.value?.toLocaleString()}</span>
              </p>
            )}
            {payload[2] && (
              <p className="text-sm">
                <span className="inline-block w-3 h-3 bg-gray-300 rounded-sm mr-2"></span>
                Target: <span className="font-bold text-gray-600">${payload[2]?.value?.toLocaleString()}</span>
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <ShoppingBag className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Sales Performance</h3>
                <p className="text-gray-500">Track sales vs returns over time</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Time Filters */}
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {['daily', 'weekly', 'monthly'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    timeFilter === filter
                      ? 'bg-white shadow-sm text-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-700">Total Sales</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{metrics.totalSales}</p>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-xl border border-emerald-100">
            <p className="text-sm text-emerald-700">Net Revenue</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{metrics.netRevenue}</p>
          </div>
          
          <div className={`p-4 rounded-xl border ${
            metrics.isGrowing 
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100' 
              : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-100'
          }`}>
            <div className="flex items-center">
              {metrics.isGrowing ? (
                <TrendingUp className="text-green-500 mr-2" size={20} />
              ) : (
                <TrendingDown className="text-red-500 mr-2" size={20} />
              )}
              <p className="text-sm text-gray-700">Growth Rate</p>
            </div>
            <p className={`text-2xl font-bold mt-1 ${metrics.isGrowing ? 'text-green-600' : 'text-red-600'}`}>
              {metrics.growthRate}%
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100">
            <p className="text-sm text-amber-700">Return Rate</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{metrics.returnRate}</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis 
                dataKey={xAxisKey} 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickFormatter={(value) => `$${value/1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top"
                height={36}
                iconType="circle"
                iconSize={10}
                formatter={(value) => (
                  <span className="text-gray-600 text-sm font-medium">{value}</span>
                )}
              />
              
              {/* Sales Bar */}
              <Bar 
                dataKey="sales" 
                name="Sales" 
                radius={[8, 8, 0, 0]}
                barSize={timeFilter === 'daily' ? 40 : 32}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`sales-cell-${index}`}
                    fill={entry.sales > (entry.target || 0) ? "#3b82f6" : "#60a5fa"}
                    opacity={0.9}
                  />
                ))}
              </Bar>
              
              {/* Returns Bar */}
              <Bar 
                dataKey="returns" 
                name="Returns" 
                radius={[8, 8, 0, 0]}
                barSize={timeFilter === 'daily' ? 40 : 32}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`returns-cell-${index}`}
                    fill="#f87171"
                    opacity={0.8}
                  />
                ))}
              </Bar>
              
              {/* Target Line (only for weekly/monthly) */}
              {timeFilter !== 'daily' && (
                <Bar 
                  dataKey="target" 
                  name="Target" 
                  radius={[8, 8, 0, 0]}
                  barSize={32}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`target-cell-${index}`}
                      fill="#d1d5db"
                      opacity={0.4}
                    />
                  ))}
                </Bar>
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Insights */}
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-gray-800">Insights</h4>
              <p className="text-sm text-gray-600 mt-1">
                {timeFilter === 'daily' ? 'Today' : timeFilter === 'weekly' ? 'This week' : 'This month'}, 
                sales are {metrics.isGrowing ? 'up' : 'down'} by {Math.abs(parseFloat(metrics.growthRate))}% compared to last period.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <span className="text-sm text-gray-600">Sales</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-sm"></div>
                <span className="text-sm text-gray-600">Returns</span>
              </div>
              {timeFilter !== 'daily' && (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                  <span className="text-sm text-gray-600">Target</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Best Day', value: timeFilter === 'daily' ? '12 PM' : timeFilter === 'weekly' ? 'Saturday' : 'July', change: '+42%' },
            { label: 'Avg Order Value', value: timeFilter === 'daily' ? '$142' : timeFilter === 'weekly' ? '$156' : '$168', change: '+8%' },
            { label: 'Conversion Rate', value: '3.8%', change: '+0.4%' },
            { label: 'Customer Satisfaction', value: '94.2%', change: '+2.1%' },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600">{item.label}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-bold text-gray-800">{item.value}</p>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;