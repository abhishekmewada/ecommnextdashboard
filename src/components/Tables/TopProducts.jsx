"use client"

import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";
import Image from "next/image";

const products = [
  { 
    name: "Premium Wireless Headphones", 
    sales: 1234, 
    revenue: "$123,400", 
    rating: 4.9,
    trend: 12,
    image: "/images/headphone.jpg"
  },
  { 
    name: "Smart Watch Pro Max", 
    sales: 987, 
    revenue: "$98,700", 
    rating: 4.8,
    trend: 8,
    image: "/images/watch.jpg"
  },
  { 
    name: "Mechanical Keyboard RGB", 
    sales: 756, 
    revenue: "$75,600", 
    rating: 4.7,
    trend: 15,
    image: "/images/keyboard.jpg"
  },
  { 
    name: "Ultra HD Webcam", 
    sales: 543, 
    revenue: "$54,300", 
    rating: 4.6,
    trend: 5,
    image: "/images/camera.jpg"
  },
];

 const TopProducts = () => {
  return (
    <motion.div
      className="bg-card border border-gray-100  shadow-lg rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
    >
      <div className="flex  items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Top Products</h3>
          <p className="text-sm text-muted-foreground">Best performing items</p>
        </div>
        <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4  ">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            className="flex bg-blue-300/15 items-center gap-4 p-3 rounded-lg hover:bg-blue-500/30 transition-colors cursor-pointer group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="relative">
                <Image src={product.image} alt={product.name}
                  width={100}
                  height={100}
                className="w-14 h-14 rounded-lg object-cover ring-2 ring-border group-hover:ring-primary/30 transition-all" />

              {/* <img
                src={product.image} 
                alt={product.name}
                className="w-14 h-14 rounded-lg object-cover ring-2 ring-border group-hover:ring-primary/30 transition-all"
              /> */}
              <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-blue-500 text-primary-foreground text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-medium  text-foreground truncate">{product.name}</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-3">
                  <Star className="w-3 h-3 fill-warning text-warning" />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                 
                <span className="text-xs  text-muted-foreground">{product.sales} sold</span>
                 <p className="font-semibold  text-foreground">{product.revenue}</p>
              </div>
              </div>
            </div>

            <div className="text-right">
              {/* <p className="font-semibold lg:hidden text-foreground">{product.revenue}</p> */}
              <div className="flex items-center justify-end gap-1 text-success">
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs font-medium">+{product.trend}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopProducts;
