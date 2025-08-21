import React from 'react';
import { FaCalendarAlt, FaGasPump, FaHeart } from 'react-icons/fa';
import { Car } from '@/types/Car';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sampleImages = [
  '/images/car1.jpg',
  '/images/car2.jpg',
  '/images/car3.jpg',
  '/images/car4.jpg',
];

interface CarCardProps {
  car: Car;
  imageIndex: number;
}

const statusColors: Record<string, string> = {
  Available: 'bg-[#19e796] text-white',
  Booked: 'bg-[#ff3655] text-white',
  Unavailable: 'bg-gray-400 text-white',
};

const CarCard: React.FC<CarCardProps> = ({ car, imageIndex }) => {
  const imgSrc = sampleImages[imageIndex % sampleImages.length];
  const status = car.status || 'Available';
  const { theme } = useTheme();

  const cardBg = theme === 'dark' ? 'bg-[#232b36]' : 'bg-white';

  return (
    <Link href={`/car/${car.car_id}`}>
      <motion.div
        className={`rounded-xl shadow-lg ${cardBg} p-4 relative flex flex-col cursor-pointer transition-colors duration-200`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <div className="relative">
          <motion.img
            src={imgSrc}
            alt={`${car.brand} ${car.model}`}
            className="w-full rounded-lg max-h-44 object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg font-semibold text-xs ${statusColors[status]}`}>
            {status}
          </span>
        </div>

        <div className="mt-4 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h4 className={`font-semibold text-md ${theme==='dark'? 'text-gray-300': 'text-gray-600'}`}>
              {car.brand} {car.model}
            </h4>
            <div className='text-sm text-gray-400 font-semibold'>Price on Request</div>
          </div>
          <div className="text-sm text-gray-400">{car.body_type}</div>

          <div className={`flex flex-col gap-1 ${theme==='light'? 'text-gray-500':'text-gray-400'}  text-sm my-3`}>
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> {car.year}
            </div>
            <div className="flex items-center gap-2">
              <FaGasPump /> {car.mileage} MPG
            </div>
            <div>{car.carSpecifications.engine_type}</div>
          </div>

          <button className="mt-4 px-4 py-2 bg-[#19e796] rounded-lg text-white font-bold hover:bg-[#16c686] transition">
            Get Analysis
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default CarCard;
