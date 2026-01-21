"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ items }) => {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center bg-blue-300  justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-linear-to-r from-blue-500/20 to-cyan-500/20 text-white border-l-4 border-cyan-400"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-cyan-400" : "text-gray-600"
                  }`}
                >
                  {item.icon}
                </div>
                <span
                  className={`font-medium ${
                    isActive ? "text-black" : "group-hover:text-black"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              {item.badge !== undefined && (
                <span
                  className={`px-2 py-1 text-xs font-bold rounded-full min-w-6 text-center ${
                    isActive
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-800 text-gray-300 group-hover:bg-cyan-500 group-hover:text-white"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
