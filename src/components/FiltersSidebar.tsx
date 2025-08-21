// components/FiltersSidebar.tsx
"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Filters {
  brand: string;
  body_type: string;
  yearRange: [number, number];
  priceRange: [number, number];
  transmission: string;
}

interface FiltersSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  brands: string[];
  bodyTypes: string[];
  transmissions: string[];
  minYear: number;
  maxYear: number;
  minPrice: number;
  maxPrice: number;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  filters,
  setFilters,
  brands,
  bodyTypes,
  transmissions,
  minYear,
  maxYear,
  minPrice,
  maxPrice
}) => {
  const { theme } = useTheme();

  return (
    <aside
      className={`w-[300px] h-fit ml-5 p-6 rounded-2xl mx-2 my-4 flex-shrink-0 shadow-lg transition-colors duration-200 ${
        theme === "dark" ? "bg-[#1a2332] text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-xl font-bold mb-6 text-[#19e796]">Filters</h3>
      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Brand</label>
        <select
          className={`w-full p-3 rounded-lg border transition-colors duration-200 ${
            theme === "dark" ? "bg-[#0d1117] border-gray-600 text-white" : "bg-white border-gray-300"
          }`}
          value={filters.brand}
          onChange={(e) => setFilters((f: Filters) => ({ ...f, brand: e.target.value }))}
        >
          <option value="All Brands">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Body Type Filter */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Body Type</label>
        <select
          className={`w-full p-3 rounded-lg border transition-colors duration-200 ${
            theme === "dark" ? "bg-[#0d1117] border-gray-600 text-white" : "bg-white border-gray-300"
          }`}
          value={filters.body_type}
          onChange={(e) => setFilters((f: Filters) => ({ ...f, body_type: e.target.value }))}
        >
          <option value="All Types">All Types</option>
          {bodyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Price Range (thousands USD)</label>
        <div className="px-2">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={filters.priceRange[1]}
            onChange={(e) => {
              const newMaxPrice = Number(e.target.value);
              setFilters((f: Filters) => ({ ...f, priceRange: [f.priceRange[0], newMaxPrice] }));
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #19e796 0%, #19e796 ${(filters.priceRange[1] / maxPrice) * 100}%, #e2e8f0 ${(filters.priceRange[1] / maxPrice) * 100}%, #e2e8f0 100%)`,
            }}
          />
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>${minPrice}k</span>
            <span>${filters.priceRange[1]}k</span>
          </div>
        </div>
      </div>

      {/* Year Range Filter */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Year Range</label>
        <div className="px-2">
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={filters.yearRange[1]}
            onChange={(e) => {
              const newMaxYear = Number(e.target.value);
              setFilters((f: Filters) => ({ ...f, yearRange: [f.yearRange[0], newMaxYear] }));
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #19e796 0%, #19e796 ${((filters.yearRange[1] - minYear) / (maxYear - minYear)) * 100}%, #e2e8f0 ${((filters.yearRange[1] - minYear) / (maxYear - minYear)) * 100}%, #e2e8f0 100%)`,
            }}
          />
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>{minYear}</span>
            <span>{filters.yearRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Transmission Filter */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Transmission</label>
        <select
          className={`w-full p-3 rounded-lg border transition-colors duration-200 ${
            theme === "dark" ? "bg-[#0d1117] border-gray-600 text-white" : "bg-white border-gray-300"
          }`}
          value={filters.transmission}
          onChange={(e) => setFilters((f: Filters) => ({ ...f, transmission: e.target.value }))}
        >
          <option value="All Types">All Types</option>
          {transmissions.map((transmission) => (
            <option key={transmission} value={transmission}>
              {transmission}
            </option>
          ))}
        </select>
      </div>

      {/* Apply Button */}
      <button
        onClick={() => { /* Optional: add your apply logic if needed */ }}
        className="w-full px-4 py-3 bg-[#19e796] rounded-lg text-white font-bold hover:bg-[#16c686] transition-colors duration-200"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default FiltersSidebar;
