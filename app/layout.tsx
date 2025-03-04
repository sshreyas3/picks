"use client";

import { useThemeStore } from "@/store/useThemeStore";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { darkMode } = useThemeStore();

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
