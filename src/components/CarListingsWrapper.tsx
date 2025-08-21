// components/CarListingsWrapper.tsx
"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { mockData } from '@/data/mockCars';
import CarCard from '@/components/CarCard';
import Pagination from '@/components/Pagination';
import FiltersSidebar from '@/components/FiltersSidebar';
import { Car } from '@/types/Car';
import { useTheme } from '@/contexts/ThemeContext';

const PAGE_SIZE = 6;

interface Filters {
  brand: string;
  body_type: string;
  yearRange: [number, number];
  priceRange: [number, number];
  transmission: string;
}

const defaultFilters: Filters = {
  brand: 'All Brands',
  body_type: 'All Types',
  yearRange: [2020, 2025],     
  priceRange: [0, 300],         
  transmission: 'All Types',
};

export default function CarListingsWrapper() {
  const [filters, setFilters] = useState(defaultFilters);
  const [page, setPage] = useState(1);
  const { theme } = useTheme();

  // Filtering logic
  const filteredCars = useMemo(() => {
    let result = [...mockData.data as Car[]];

    if (filters.brand !== 'All Brands')
      result = result.filter(car => car.brand === filters.brand);

    if (filters.body_type !== 'All Types')
      result = result.filter(car => car.body_type === filters.body_type);

    result = result.filter(car =>
      car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1]
    );

    result = result.filter(car =>
      car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );

    if (filters.transmission !== 'All Types')
      result = result.filter(car =>
        car.carSpecifications.transmission_type === filters.transmission
      );

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filteredCars.length / PAGE_SIZE);
  const currentCars = filteredCars.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => { setPage(1); }, [filters]);

  const brands = Array.from(new Set(mockData.data.map(car => car.brand)));
  const bodyTypes = Array.from(new Set(mockData.data.map(car => car.body_type)));
  const transmissions = Array.from(
    new Set(mockData.data.map(car => car.carSpecifications.transmission_type))
  );

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#141a24]' : 'bg-gray-50'}`}>
      <FiltersSidebar
        filters={filters}
        setFilters={setFilters}
        brands={brands}
        bodyTypes={bodyTypes}
        transmissions={transmissions}
        minYear={2020}
        maxYear={2025}
        minPrice={0}
        maxPrice={300}
      />
      <section className="flex-1 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-start mt-10 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#19e796] border-l-4 border-[#19e796] pl-4">
              Vehicle Analysis
            </h2>
            <p className="text-gray-400 pl-6 mt-1">
              {filteredCars.length} vehicles available for consultation
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-md">Page {page} of {totalPages}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {currentCars.map((car, index) => (
            <CarCard key={car.car_id} car={car} imageIndex={index} />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </section>
    </div>
  );
}
