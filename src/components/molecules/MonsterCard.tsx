// src/components/molecules/MonsterCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { EvolutionChain, ChainLink } from '../../types';

export interface MonsterCardProps {
  name: string;
  types: string[];
  id: number;
  image: string;
  evolutionChain?: EvolutionChain;
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
  normal: 'bg-gray-100'
};

const getCardBackgroundColor = (type: string) => {
  return typeColors[type] || 'bg-gray-200';
};

const MonsterCard: React.FC<MonsterCardProps> = ({ name, types, id, image, evolutionChain }) => {
  const primaryTypeColor = getCardBackgroundColor(types[0]);

  const renderTypeCircles = (types: string[]) => {
    return types.map((type, index) => (
      <div
        key={index}
        className={`w-4 h-4 rounded-full ${getCardBackgroundColor(type)} mr-2`}
        title={type}
      />
    ));
  };

  const renderEvolutionChain = (chain: ChainLink): string[] => {
    const evolve = (link: ChainLink): string[] => {
      let names: string[] = [];
      if (link.species && link.species.name) {
        names.push(link.species.name);
      }
      if (link.evolves_to && link.evolves_to.length > 0) {
        link.evolves_to.forEach(evolveLink => {
          names = names.concat(evolve(evolveLink));
        });
      }
      return names;
    };

    return chain ? evolve(chain) : [];
  };

  const evolutionNames = evolutionChain ? renderEvolutionChain(evolutionChain.chain) : [];

  return (
    <div className={`p-2 rounded-lg shadow-md ${primaryTypeColor} w-full`}>
      <Link to={`/monsters/${id}`} className="block text-center">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain rounded-t"
        />
        <div className="bg-white/90 backdrop-blur-md grid items-center p-1 md:p-4 rounded min-h-[150px]">
          <div className="flex flex-wrap items-center mt-2">
            {renderTypeCircles(types)}
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
          </div>
          {evolutionNames.length > 0 && (
            <div className='mt-2'>
              <h4 className='text-sm font-semibold'>Evolution Chain:</h4>
              {evolutionNames.map((evolutionName, index) => (
                <span key={index} className="block text-sm text-gray-600 capitalize">
                  {evolutionName}
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
