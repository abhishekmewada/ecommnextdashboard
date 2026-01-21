// 

import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, change, trend, color }) => {
  const colorMap = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-emerald-500 to-green-500",
    orange: "from-amber-500 to-orange-500",
    purple: "from-violet-500 to-purple-500",
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          <div className="flex items-center mt-3">
            {trend === "up" ? (
              <TrendingUp className="text-green-500 mr-2" size={18} />
            ) : (
              <TrendingDown className="text-red-500 mr-2" size={18} />
            )}
            <span
              className={`font-medium ${
                trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}%
            </span>
            <span className="text-gray-500 text-sm ml-2">
              from last month
            </span>
          </div>
        </div>
        <div
          className={`p-3 rounded-xl bg-linear-to-br ${colorMap[color]}`}
        >
          <Icon className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
