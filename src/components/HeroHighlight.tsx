"use client"
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface HeroHighlightProps {
  number: string;
  label: string;
}

const HeroHighlight: React.FC<HeroHighlightProps> = ({ number, label }) => {
  const { theme } = useTheme();

  const highlightBg =
    theme === 'dark'
      ? 'bg-[#14b67533]' // Soft teal, low opacity
      : 'bg-[#cbede6cc]'; // Light mint

  const highlightText =
    theme === 'dark'
      ? 'text-[#eafaf7]'
      : 'text-[#454f52]';

  const accent =
    theme === 'dark'
      ? 'text-[#19e796]'
      : 'text-[#08bc7c]';

  return (
    <span
      className={`inline-flex items-center rounded-full px-6 py-3 ${highlightBg} backdrop-blur`}
    >
      <span className={`mr-2 text-xs font-normal lg:text-lg lg:font-medium md:text-medium md:font-medium sm:text-xs sm:font-normal ${accent}`}>{number}</span>
      <span className={`${highlightText} text-xs font-normal lg:text-lg lg:font-medium md:text-md md:font-medium sm:text-sm sm:font-normal`}>{label}</span>
    </span>
  );
};

export default HeroHighlight;
