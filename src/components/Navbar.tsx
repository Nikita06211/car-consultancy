"use client";
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Image from "next/image";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  // Sun and moon icons (svg inline, accessible)
  const SunIcon = (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill="#15ce8a"/>
      <g stroke="#15ce8a" strokeWidth="2">
        <line x1="12" y1="3" x2="12" y2="5"/>
        <line x1="12" y1="19" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="5" y2="12"/>
        <line x1="19" y1="12" x2="21" y2="12"/>
        <line x1="5.63604" y1="5.63604" x2="7.05025" y2="7.05025"/>
        <line x1="16.9497" y1="16.9497" x2="18.3639" y2="18.3639"/>
        <line x1="5.63604" y1="18.3639" x2="7.05025" y2="16.9497"/>
        <line x1="16.9497" y1="7.05025" x2="18.3639" y2="5.63604"/>
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
      className={`flex items-center justify-between px-8 py-4 shadow-md
        transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#10191e] text-white' : 'bg-[#f7fcfa] text-[#18bc8a]'}
      `}
    >
      {/* Logo */}
       <div className="flex items-center gap-3">
        <Image
          src="/images/logo.png" // 👉 place your logo in the public/ folder as logo.png
          alt="Auto Wisdom Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span
          className="font-extrabold text-[1.7rem] tracking-tight"
          style={{
            color: theme === "dark" ? "#15ce8a" : "#18bc8a",
          }}
        >
          Auto Wisdom
        </span>
      </div>

      {/* Search input mockup (placeholder, non-functional) */}
      <div className="hidden md:block flex-1 mx-8">
        <input
          type="text"
          className={`w-full px-5 py-2 rounded-full border-none focus:outline-none shadow
            ${theme === 'dark' ? 'bg-[#122127] text-white' : 'bg-[#f5faf9] text-[#107b60]'}
          `}
          placeholder="Search cars, brands, models..."
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5">
        {/* Consult button */}
        <button
          className={`px-5 py-2 rounded-full font-semibold shadow
            ${theme === 'dark'
              ? 'bg-[#15ce8a] text-[#0d161c] hover:bg-[#1be497]'
              : 'bg-[#b6efe2] text-[#107b60] hover:bg-[#15ce8a]'}
            transition`}
        >
          + Get Consultation
        </button>

        {/* Profile/Card */}
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full shadow
            ${theme === 'dark'
              ? 'bg-[#122127] text-white'
              : 'bg-[#f8fcfa] text-[#18bc8a]'}
          `}
        >
          <span>
            <svg width="20" height="20" fill="#15ce8a" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="5"/>
              <rect x="4" y="14" width="16" height="7" rx="3"/>
            </svg>
          </span>
          <span className="font-bold">Edward Jackson</span>
          <span className="text-xs text-[#a0e7c9] ml-1">4.8 <span>★</span></span>
          <span className="ml-1 text-xs">Premium Dealer</span>
        </div>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`ml-2 rounded-full border border-[#e3faef] p-2 bg-transparent
            flex items-center justify-center shadow
            transition-all duration-200
            ${theme === 'dark' ? 'hover:bg-[#17252c]' : 'hover:bg-[#e8faf4]'}
          `}
        >
          {theme === 'dark' ? SunIcon : MoonIcon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
