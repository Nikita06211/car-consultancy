"use client";
import { useState } from "react";
import { Car } from '@/types/Car';

export default function CarImages({ car, theme }: { car: Car; theme: string }) {
  const images = ['/images/car1.jpg', '/images/car2.jpg', '/images/car3.jpg', '/images/car4.jpg'];
  const [selectedImage, setSelectedImage] = useState(images[0]); // default to first image

  return (
    <div>
      {/* Main image */}
      <div className={`rounded-2xl p-4 relative ${theme === 'dark' ? 'bg-[#232b36]' : 'bg-white'}`}>
        <img src={selectedImage} alt="main" className="rounded-lg w-full object-cover" />
        <span
          className={`absolute top-4 left-4 px-3 py-1 text-sm rounded-lg font-semibold
            ${theme === 'dark' ? 'bg-[#19e796]/20 text-[#19e796]' : 'bg-[#cbede6]/40 text-[#08bc7c]'}
          `}
        >
          {car.year}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-6">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(img)}
            className={`rounded-xl p-1 border transition ${
              selectedImage === img
                ? theme === 'dark'
                  ? 'border-[#19e796]'
                  : 'border-[#18bc8a]'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img src={img} className="rounded-lg w-32 h-32 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
