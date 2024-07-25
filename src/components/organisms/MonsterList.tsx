// src/components/MonsterList.tsx

import React, { useState } from 'react';
import { Monster } from '../../types';
import Pagination from './Pagination'; 

export interface MonsterListProps {
  monsters: Monster[];
  loading?: boolean;
  error?: string;
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(monsters.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedMonsters = monsters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getCardBackgroundColor = (type: string) => {
    switch (type) {
      case 'fire':
        return 'bg-red-50';
      case 'water':
        return 'bg-blue-50';
      case 'grass':
        return 'bg-green-50';
      case 'electric':
        return 'bg-yellow-50';
      default:
        return 'bg-gray-100';
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {paginatedMonsters.map(monster => (
          <div
            key={monster.id}
            className={`p-4 rounded shadow-lg ${getCardBackgroundColor(monster.type)}`}
          >
            <img
              src={monster.image}
              alt={monster.name}
              className='w-full h-40 object-contain rounded-t'
            />
            <h3 className='text-md font-bold text-center mt-2 capitalize'>{monster.name}</h3>
            {/* <p className='text-gray-500'>Type: {monster.type}</p> */}
          </div>
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
