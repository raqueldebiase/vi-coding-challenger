// src/components/atoms/MonsterCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChainLink } from '../../types/index';

export interface MonsterCardProps {
  name: string;
  type: string;
  id: number;
  image: string;
  evolutionChain?: ChainLink;
}

const typeColors: Record<string, string> = {
  lightGray: '#E9E9E9',
  mediumGray: '#E4E7EB',
  darkGray: '#4A4644',
  fire: 'bg-red-100',
  water: 'bg-blue-400',
  grass: 'bg-green-100',
  electric: 'bg-yellow-200',
  ice: 'bg-cyan-100',
  fighting: 'bg-red-200',
  poison: 'bg-purple-100',
  ground: 'bg-green-200',
  flying: 'bg-blue-100',
  psychic: 'bg-pink-400',
  bug: 'bg-green-400',
  rock: 'bg-gray-300',
  ghost: 'bg-purple-300',
  dragon: 'bg-indigo-400',
  dark: 'bg-gray-500',
  steel: 'bg-gray-200',
  fairy: 'bg-pink-300',
  norma: 'bg-gray-100'
};

const getCardBackgroundColor = (type: string) => {
  return typeColors[type] || 'bg-gray-200';
};

const MonsterCard: React.FC<MonsterCardProps> = ({ name, type, id, image, evolutionChain }) => {
  const typeColor = getCardBackgroundColor(type);

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

  return (
    <div className={`p-2 rounded-lg shadow-md ${typeColor}`}>
  <Link to={`/monsters/${id}`} className="block text-center">
    <img
      src={image}
      alt={name}
      className="w-full h-40 object-contain rounded-t"
    />
    <div className="bg-white/75 backdrop-blur-md flex flex-wrap justify-center p-4 rounded min-h-[150px]">
      <div className="flex items-center mt-2">
        <div className={`w-4 h-4 rounded-full ${typeColor} mr-2`} />
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
      </div>
      {evolutionChain && (
        <div className='mt-2'>
          <h4 className='text-sm font-semibold'>Evolution Chain:</h4>
          {renderEvolutionChain(evolutionChain).map((name, index) => (
            <span key={index} className="block text-sm text-gray-600 capitalize">
              {name}
            </span>
          ))}
        </div>
      )}
    </div>
  </Link>
</div>

  );
};

export default MonsterCard;
