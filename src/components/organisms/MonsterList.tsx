import React, { useState } from 'react';
import { Monster, ChainLink } from '../../types/index';
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
        return 'bg-red-200';
      case 'water':
        return 'bg-blue-200';
      case 'grass':
        return 'bg-green-200';
      case 'electric':
        return 'bg-yellow-200';
      default:
        return 'bg-gray-200';
    }
  };

  // Função para renderizar a cadeia de evolução
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
            <h2 className='text-lg font-bold mt-2'>{monster.name}</h2>
            <p className='text-gray-500'>Type: {monster.type}</p>
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
