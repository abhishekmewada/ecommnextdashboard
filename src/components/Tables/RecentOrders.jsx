// import { CheckCircle, Clock, XCircle } from 'lucide-react';

// const orders = [
//   { id: '#ORD-7841', customer: 'Michael Scott', date: '2024-03-15', amount: '$248.99', status: 'completed' },
//   { id: '#ORD-7842', customer: 'Jim Halpert', date: '2024-03-14', amount: '$112.50', status: 'pending' },
//   { id: '#ORD-7843', customer: 'Pam Beesly', date: '2024-03-14', amount: '$89.99', status: 'completed' },
//   { id: '#ORD-7844', customer: 'Dwight Schrute', date: '2024-03-13', amount: '$450.00', status: 'processing' },
//   { id: '#ORD-7845', customer: 'Andy Bernard', date: '2024-03-12', amount: '$67.80', status: 'cancelled' },
// ];

// const RecentOrders = () => {
//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return <CheckCircle className="text-green-500" size={16} />;
//       case 'pending':
//         return <Clock className="text-amber-500" size={16} />;
//       case 'processing':
//         return <Clock className="text-blue-500" size={16} />;
//       case 'cancelled':
//         return <XCircle className="text-red-500" size={16} />;
//       default:
//         return null;
//     }
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'completed': return 'bg-green-100 text-green-800';
//       case 'pending': return 'bg-amber-100 text-amber-800';
//       case 'processing': return 'bg-blue-100 text-blue-800';
//       case 'cancelled': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
//         <button className="text-blue-600 hover:text-blue-800 font-medium">
//           View All →
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="text-left text-gray-500 border-b">
//               <th className="pb-3">Order ID</th>
//               <th className="pb-3">Customer</th>
//               <th className="pb-3">Date</th>
//               <th className="pb-3">Amount</th>
//               <th className="pb-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
//                 <td className="py-4 font-medium">{order.id}</td>
//                 <td className="py-4">{order.customer}</td>
//                 <td className="py-4 text-gray-500">{order.date}</td>
//                 <td className="py-4 font-bold">{order.amount}</td>
//                 <td className="py-4">
//                   <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
//                     {getStatusIcon(order.status)}
//                     <span className="ml-2 capitalize">{order.status}</span>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;

import { CheckCircle, Clock, XCircle } from "lucide-react";

const orders = [
  { id: "#ORD-7841", customer: "Michael Scott", date: "2024-03-15", amount: "$248.99", status: "completed" },
  { id: "#ORD-7842", customer: "Jim Halpert", date: "2024-03-14", amount: "$112.50", status: "pending" },
  { id: "#ORD-7843", customer: "Pam Beesly", date: "2024-03-14", amount: "$89.99", status: "completed" },
  { id: "#ORD-7844", customer: "Dwight Schrute", date: "2024-03-13", amount: "$450.00", status: "processing" },
  { id: "#ORD-7845", customer: "Andy Bernard", date: "2024-03-12", amount: "$67.80", status: "cancelled" },
];

const RecentOrders = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-500" size={16} />;
      case "pending":
        return <Clock className="text-amber-500" size={16} />;
      case "processing":
        return <Clock className="text-blue-500" size={16} />;
      case "cancelled":
        return <XCircle className="text-red-500" size={16} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View All →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-3">Order ID</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 font-medium">{order.id}</td>
                <td className="py-4">{order.customer}</td>
                <td className="py-4 text-gray-500">{order.date}</td>
                <td className="py-4 font-bold">{order.amount}</td>
                <td className="py-4">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    <span className="ml-2 capitalize">{order.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
