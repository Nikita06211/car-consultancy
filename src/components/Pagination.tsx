"use client";
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex gap-2 justify-center mt-8`}>
      <button
        className={`px-4 py-2 rounded-lg border mb-2 cursor-pointer
          ${page === 1
            ? theme === 'dark'
              ? 'bg-[#20262f] text-gray-400 cursor-not-allowed border-[#222831]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200'
            : theme === 'dark'
              ? 'bg-transparent text-white border-[#222831] hover:bg-[#222831]/70'
              : 'bg-white text-black border-gray-200 hover:bg-gray-100'}`
          }
        onClick={() => page > 1 && setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-4 py-2 rounded-lg border mb-2 cursor-pointer
            ${page === idx + 1
              ? theme === 'dark'
                ? 'bg-[#19e796] text-black border-[#19e796]'
                : 'bg-[#19e796] text-white border-[#19e796]'
              : theme === 'dark'
                ? 'bg-transparent text-white border-[#222831] hover:bg-[#222831]/70'
                : 'bg-white text-black border-gray-200 hover:bg-gray-100'}`
            }
          onClick={() => setPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 rounded-lg border mb-2 cursor-pointer
          ${page === totalPages
            ? theme === 'dark'
              ? 'bg-[#20262f] text-gray-400  border-[#222831]'
              : 'bg-gray-200 text-gray-400  border-gray-200'
            : theme === 'dark'
              ? 'bg-transparent text-white border-[#222831] hover:bg-[#222831]/70'
              : 'bg-white text-black border-gray-200 hover:bg-gray-100'}`
          }
        onClick={() => page < totalPages && setPage(page + 1)}
        disabled={page === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
