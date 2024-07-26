import React from 'react';
import { Link } from 'react-router-dom';

export interface MonsterCardProps {
  name: string;
  type: string;
  id: number;
  image: string;
}

const typeColors: Record<string, string> = {
  lightGray: '#E9E9E9', 
  mediumGray: '#E4E7EB',
  darkGray: '#4A4644',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  ice: 'bg-cyan-300',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-brown-600',
  flying: 'bg-blue-400',
  psychic: 'bg-pink-500',
  bug: 'bg-green-700',
  rock: 'bg-gray-600',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

const MonsterCard: React.FC<MonsterCardProps> = ({ name, type, id, image }) => {
  const getCardBackgroundColor = (type: string) => {
    return typeColors[type] || 'bg-gray-200'; // Cor padrão se o tipo não estiver no mapeamento
  };

  const typeColor = getCardBackgroundColor(type);

  return (
    <div className={`p-4 rounded-lg shadow-md ${typeColor}`}>
      <Link to={`/monsters/${id}`} className="block text-center">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain rounded-t"
        />
        <div className="flex items-center mt-2">
          <div className={`w-4 h-4 rounded-full ${typeColor} mr-2`} />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        {/* <p className="text-sm text-gray-500 mt-1">Type: {type}</p> */}
      </Link>
    </div>
  );
};

export default MonsterCard;
