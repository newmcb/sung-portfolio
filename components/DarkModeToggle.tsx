"use client";

import { useLayoutEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="ml-4 px-3 py-1 border border-gray-500 rounded text-sm
                 text-black dark:text-white bg-white dark:bg-[#222]
                 hover:bg-gray-700 hover:text-white min-w-[100px] text-center relative"
    >
      {/* CSS ::before가 실제 레이블을 그립니다 */}
      <span className="toggle-label"></span>
    </button>
  );
}
