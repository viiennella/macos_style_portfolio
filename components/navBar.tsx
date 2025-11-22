"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Wifi,
  Search,
  BatteryMedium,
  SlidersHorizontal, // For Control Center
} from "lucide-react";
import dayjs from "dayjs";
import { navLinks } from "../constants/constants";

export function NavBar() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000 * 60); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full h-9 px-4 flex justify-between items-center bg-white/40 backdrop-blur-2xl border-b border-white/10 text-xs font-medium select-none fixed top-0 z-50 shadow-sm">
      {/* Left Side: Apple Logo + Menus */}
      <div className="flex items-center gap-4">
        <div className="hover:bg-white/20 p-1 rounded-md transition-colors cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="Apple Logo"
            width={16}
            height={16}
            className="opacity-90"
          />
        </div>

        <span className="font-bold text-[13px] cursor-default">Portfolio</span>

        <ul className="flex items-center gap-4 max-sm:hidden">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="cursor-default hover:bg-white/20 px-2 py-0.5 rounded transition-colors"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Status Icons + Clock */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 max-sm:hidden">
          <div className="hover:bg-white/20 p-1 rounded transition-colors cursor-default">
            <BatteryMedium size={18} className="text-gray-800" />
          </div>
          <div className="hover:bg-white/20 p-1 rounded transition-colors cursor-default">
            <Wifi size={16} className="text-gray-800" />
          </div>
          <div className="hover:bg-white/20 p-1 rounded transition-colors cursor-default">
            <Search size={16} className="text-gray-800" />
          </div>
          <div className="hover:bg-white/20 p-1 rounded transition-colors cursor-default">
            <SlidersHorizontal size={16} className="text-gray-800" />
          </div>
        </div>

        <div className="hover:bg-white/20 px-2 py-0.5 rounded transition-colors cursor-default min-w-[130px] text-center">
          <time>{time.format("ddd MMM D h:mm A")}</time>
        </div>
      </div>
    </nav>
  );
}
