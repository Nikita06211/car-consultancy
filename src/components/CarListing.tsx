// components/CarListing.tsx (Updated to use new mockdata)
"use client";
import React, { useState } from 'react';
import { mockData } from '@/data/mockCars'; // Adjust path if needed
import CarCard from '@/components/CarCard';
import Pagination from '@/components/Pagination';
import { Car } from '@/types/Car';

const PAGE_SIZE = 6;

const CarListing: React.FC = () => {
  const cars = mockData.data as Car[];  // Explicitly type as Car[]
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(cars.length / PAGE_SIZE);
  const currentCars = cars.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {currentCars.map((car, index) => (
          <CarCard key={car.car_id} car={car} imageIndex={index} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default CarListing;
