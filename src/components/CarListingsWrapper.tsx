"use client";
import React, { useState, useMemo, useEffect } from "react";
import { mockData } from "@/data/mockCars";
import CarCard from "@/components/CarCard";
import Pagination from "@/components/Pagination";
import FiltersSidebar from "@/components/FiltersSidebar";
import { Car } from "@/types/Car";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { FiFilter } from "react-icons/fi";

const PAGE_SIZE = 6;

interface Filters {
  brand: string;
  body_type: string;
  yearRange: [number, number];
  priceRange: [number, number];
  transmission: string;
}

const defaultFilters: Filters = {
  brand: "All Brands",
  body_type: "All Types",
  yearRange: [2020, 2025],
  priceRange: [0, 300],
  transmission: "All Types",
};

export default function CarListingsWrapper() {
  const [filters, setFilters] = useState(defaultFilters);
  const [page, setPage] = useState(1);
  const { theme } = useTheme();
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    let result = [...(mockData.data as Car[])];

    if (filters.brand !== "All Brands")
      result = result.filter((car) => car.brand === filters.brand);

    if (filters.body_type !== "All Types")
      result = result.filter((car) => car.body_type === filters.body_type);

    result = result.filter(
      (car) => car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1]
    );

    result = result.filter(
      (car) =>
        car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );

    if (filters.transmission !== "All Types")
      result = result.filter(
        (car) => car.carSpecifications.transmission_type === filters.transmission
      );

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filteredCars.length / PAGE_SIZE);
  const currentCars = filteredCars.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const brands = Array.from(new Set(mockData.data.map((car) => car.brand)));
  const bodyTypes = Array.from(new Set(mockData.data.map((car) => car.body_type)));
  const transmissions = Array.from(
    new Set(mockData.data.map((car) => car.carSpecifications.transmission_type))
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-[#141a24]" : "bg-gray-50"
      }`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar (hidden on mobile) */}
        <aside className="hidden lg:block w-72 shrink-0">
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
        </aside>

        {/* Main content */}
        <section className="flex-1 px-4 w-full lg:max-w-7xl lg:mx-auto">
          {/* Top bar with Filters toggle on mobile */}
          <div className="flex justify-between items-center mt-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#19e796] border-l-4 border-[#19e796] pl-4">
                Vehicle Analysis
              </h2>
              <p className="text-gray-400 pl-6 mt-1">
                {filteredCars.length} vehicles available for consultation
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-gray-400 text-md">
                Page {page} of {totalPages}
              </span>
              <button
                className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm"
                onClick={() => setShowFilters(true)}
              >
                <FiFilter /> Filters
              </button>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid lg:ml-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {currentCars.map((car, index) => (
              <motion.div
                key={car.car_id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <CarCard car={car} imageIndex={index} />
              </motion.div>
            ))}
          </div>

          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </section>
      </div>

      {/* Mobile Drawer Filters */}
      {showFilters && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setShowFilters(false)}
          ></div>

          {/* Drawer */}
          <div
            className="w-full sm:w-80 bg-white dark:bg-[#1e293b] h-full overflow-y-auto p-4 shadow-xl z-50"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#19e796]">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>
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
          </div>
        </div>
      )}
    </div>
  );
}
