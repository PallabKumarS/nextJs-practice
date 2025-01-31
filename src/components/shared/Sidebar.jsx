"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Dashboard", path: "/", icon: "📊" },
    { title: "Profile", path: "/profile", icon: "👤" },
    { title: "Settings", path: "/settings", icon: "⚙️" },
    { title: "Messages", path: "/messages", icon: "✉️" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full bg-gray-800 text-white
        w-64 transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        z-40
      `}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-6">My App</h2>

          <nav>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
