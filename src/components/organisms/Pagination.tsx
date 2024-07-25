// src/components/organisms/Pagination.tsx

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='flex justify-center items-center mt-10'>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className='px-4 py-2 mx-1 bg-mediumGray text-darkGray rounded w-40'
      >
        Previous
      </button>
      <span className='mx-2'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='px-4 py-2 mx-1 bg-mediumGray text-darkGray rounded w-40'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
