"use client";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const showBack = pathname && pathname.startsWith("/car/");
  const { theme, toggleTheme } = useTheme();

  // Sun and moon icons
  const SunIcon = (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill="#15ce8a" />
      <g stroke="#15ce8a" strokeWidth="2">
        <line x1="12" y1="3" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="21" />
        <line x1="3" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="21" y2="12" />
        <line x1="5.63604" y1="5.63604" x2="7.05025" y2="7.05025" />
        <line x1="16.9497" y1="16.9497" x2="18.3639" y2="18.3639" />
        <line x1="5.63604" y1="18.3639" x2="7.05025" y2="16.9497" />
        <line x1="16.9497" y1="7.05025" x2="18.3639" y2="5.63604" />
      </g>
    </svg>
  );

  const MoonIcon = (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12.79A9 9 0 1 1 11 3a7 7 0 0 0 10 9.79Z"
        fill="#15ce8a"
      />
    </svg>
  );

  return (
    <nav
      className={`flex items-center justify-between px-4 md:px-8 py-3 md:py-4 shadow-md
      transition-colors duration-300
      ${theme === "dark" ? "bg-[#10191e] text-white" : "bg-[#f7fcfa] text-[#18bc8a]"}
    `}
    >
      {/* Back button if on details page */}
      {showBack && (
        <button
          onClick={() => router.back()}
          className="mr-2 md:mr-4 p-2 rounded hover:bg-gray-700 flex items-center"
        >
          <span className="text-lg md:text-xl mr-1 md:mr-2">&larr;</span>
          <span className="hidden sm:inline">Back</span>
        </button>
      )}

      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-3">
        <Image
          src="/images/logo.png"
          alt="Auto Wisdom Logo"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span
          className="font-extrabold text-lg md:text-[1.7rem] tracking-tight"
          style={{
            color: theme === "dark" ? "#15ce8a" : "#18bc8a",
          }}
        >
          Auto Wisdom
        </span>
      </div>

      {/* Search input - hidden on small screens */}
      <div className="hidden md:block flex-1 mx-8">
        <input
          type="text"
          className={`w-full px-5 py-2 rounded-full border-none focus:outline-none shadow
            ${theme === "dark" ? "bg-[#122127] text-white" : "bg-[#f5faf9] text-[#107b60]"}
          `}
          placeholder="Search cars, brands, models..."
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Get Consultation button */}
        <button
          className={`hidden sm:block px-4 md:px-5 py-2 rounded-full font-semibold shadow
            ${
              theme === "dark"
                ? "bg-[#15ce8a] text-[#0d161c] hover:bg-[#1be497]"
                : "bg-[#b6efe2] text-[#107b60] hover:bg-[#15ce8a]"
            }
            transition`}
        >
          + Get Consultation
        </button>

        {/* Dealer info - avatar always visible, text hidden on small screens */}
        <div
          className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full shadow
            ${theme === "dark" ? "bg-[#122127] text-white" : "bg-[#f8fcfa] text-[#18bc8a]"}
          `}
        >
          <span>
            <svg width="22" height="22" fill="#15ce8a" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="5" />
              <rect x="4" y="14" width="16" height="7" rx="3" />
            </svg>
          </span>
          {/* Hide text on small screens */}
          <span className="hidden md:flex flex-col leading-tight">
            <span className="font-bold">Edward Jackson</span>
            <span className="text-xs text-[#a0e7c9]">
              4.8 ★ Premium Dealer
            </span>
          </span>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`ml-1 md:ml-2 rounded-full border border-[#e3faef] p-2 bg-transparent
            flex items-center justify-center shadow
            transition-all duration-200
            ${theme === "dark" ? "hover:bg-[#17252c]" : "hover:bg-[#e8faf4]"}
          `}
        >
          {theme === "dark" ? SunIcon : MoonIcon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
