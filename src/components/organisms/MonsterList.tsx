// src/components/organisms/MonsterList.tsx

import React, { useState } from 'react';
import { Monster } from '../../types';
import Pagination from './Pagination';
import MonsterCard from '../molecules/MonsterCard';

export interface MonsterListProps {
  monsters: Monster[];
  loading?: boolean;
  error?: string | null;
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(monsters.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedMonsters = monsters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="relative p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {loading ? (
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          ))
        ) : monsters.length === 0 ? (
          <p className="w-full text-center text-gray-500">No monsters found in this category.</p>
        ) : (
          paginatedMonsters.map(monster => (
            <MonsterCard
              key={monster.id}
              id={monster.id}
              name={monster.name}
              types={monster.types}
              image={monster.image}
              evolutionChain={monster.evolutionChain}
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
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MonsterList;
