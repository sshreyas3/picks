"use client";

import { useThemeStore } from "@/store/useThemeStore";

export default function Navbar() {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <nav className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Unsplash Clone</h1>
        <button onClick={toggleTheme} className="p-2 border rounded">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
