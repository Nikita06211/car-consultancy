'use client';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ClientHeroWrapper() {
  const { theme } = useTheme();

  const highlightBg = theme === 'dark' ? 'bg-[#14b67533]' : 'bg-[#cbede6cc]';
  const highlightText = theme === 'dark' ? 'text-[#eafaf7]' : 'text-[#454f52]';
  const accent = theme === 'dark' ? 'text-[#19e796]' : 'text-[#08bc7c]';

  const gradientBg = theme === 'dark'
  ? 'bg-gradient-to-br from-[#141a24cc] to-[#0f151dcc]'
  : 'bg-gradient-to-br from-[#f0f7f7cc] to-[#d9eaeacc]';


  return (
    <div className={`flex gap-4 justify-center mb-8 ${gradientBg}`}>
      <span className={`inline-flex items-center rounded-full px-6 py-3 ${highlightBg} backdrop-blur text-lg font-medium`}>
        <span className={`mr-2 font-bold ${accent}`}>11</span>
        <span className={highlightText}>Vehicles Analyzed</span>
      </span>
      <span className={`inline-flex items-center rounded-full px-6 py-3 ${highlightBg} backdrop-blur text-lg font-medium`}>
        <span className={`mr-2 font-bold ${accent}`}>5+</span>
        <span className={highlightText}>Expert Reviews</span>
      </span>
    </div>
  );
}
