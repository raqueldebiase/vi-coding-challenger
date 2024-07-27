import React, { useState, useEffect } from 'react';
import { Monster } from '../../types/index';
import Pagination from './Pagination';
import MonsterCard from '../molecules/MonsterCard';

export interface MonsterListProps {
  monsters: Monster[];
  loading?: boolean;
  error?: string | null;
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Update itemsPerPage based on window width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 480) {
        setItemsPerPage(4);
      } else if (window.innerWidth < 640) {
        setItemsPerPage(4); 
      } else if (window.innerWidth < 768) {
        setItemsPerPage(6);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(8); 
      } else {
        setItemsPerPage(12); 
      }
    };

    // Initial check
    updateItemsPerPage();

    // Add event listener for window resize
    window.addEventListener('resize', updateItemsPerPage);

    // Clean up listener on component unmount
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(monsters.length / itemsPerPage);
  const paginatedMonsters = monsters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          ))
        ) : monsters.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No monsters found in this category.</p>
        ) : (
          paginatedMonsters.map(monster => (
            <MonsterCard
              key={monster.id}
              id={monster.id}
              name={monster.name}
              types={monster.types}
              image={monster.image}
              evolutionChain={monster.evolutionChain?.chain}
            />
          ))
        )}
      </div>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <div className="relative flex flex-col items-center">
            <div className="w-36 h-36 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            <span className="mt-4 text-lg text-gray-700">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MonsterList;
