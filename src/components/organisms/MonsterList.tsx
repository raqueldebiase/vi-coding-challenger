// src/components/organisms/MonsterList.tsx
import React, { useState } from 'react';
import { Monster, ChainLink } from '../../types/index';
import Pagination from './Pagination'; 

export interface MonsterListProps {
  monsters: Monster[];
  loading?: boolean;
  error?: string | null; // Altere a tipagem para aceitar string ou null
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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
        return 'bg-gray-200';
    }
  };

  const renderEvolutionChain = (chain: ChainLink): string[] => {
    const evolve = (link: ChainLink): string[] => {
      let names: string[] = [];
      if (link.species && link.species.name) {
        names.push(link.species.name);
      }
      link.evolves_to.forEach(evolveLink => {
        names = names.concat(evolve(evolveLink));
      });
      return names;
    };

    return evolve(chain);
  };

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
          <div
            key={monster.id}
            className={`p-4 rounded shadow-lg ${getCardBackgroundColor(monster.type)}`}
          >
            <img
              src={monster.image}
              alt={monster.name}
              className='w-full h-40 object-contain rounded-t'
            />
            <h2 className='text-lg font-bold mt-2'>{monster.name}</h2>
            {monster.evolutionChain && (
              <div className='mt-2'>
                <h3 className='text-md font-semibold'>Evolution Chain:</h3>
                {renderEvolutionChain(monster.evolutionChain.chain).map((name, index) => (
                  <span key={index} className="block text-sm text-gray-600">
                    {name}
                  </span>
                ))}
              </div>
            )}
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
