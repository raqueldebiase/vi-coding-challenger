// src/components/MonsterCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';

export interface MonsterCardProps {
  name: string;
  type: string;
  id: number;
  image: string; 
}

const typeColors: Record<string, string> = {
  fire: 'bg-red-50',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  
};

const MonsterCard: React.FC<MonsterCardProps> = ({ name, type, id, image }) => {
  const typeColor = typeColors[type] || 'bg-mediumGray'; 

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
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
