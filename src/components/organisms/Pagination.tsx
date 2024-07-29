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
    <div className='flex justify-center items-center mt-10 space-x-2 overflow-x-auto'>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className='px-4 py-2 bg-mediumGray text-darkGray rounded-md flex-1 sm:flex-none'
      >
        Previous
      </button>
      <span className='mx-2 flex-1 text-center sm:flex-none'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='px-4 py-2 bg-mediumGray text-darkGray rounded-md flex-1 sm:flex-none'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
