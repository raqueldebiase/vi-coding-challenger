// src/components/organisms/MonsterList.tsx
import React, { useState } from 'react';
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
  const itemsPerPage = 8;
  const totalPages = Math.ceil(monsters.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedMonsters = monsters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-36 h-36 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          <div className="absolute w-26 h-26 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
          <span className="text-lg text-gray-700">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (monsters.length === 0) {
    return <p className="text-center text-gray-500">No monsters found in this category.</p>;
  }

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {paginatedMonsters.map(monster => (
          <MonsterCard
            key={monster.id}
            id={monster.id}
            name={monster.name}
            type={monster.type}
            image={monster.image}
            evolutionChain={monster.evolutionChain?.chain} // Certifique-se de passar o tipo correto
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MonsterList;
