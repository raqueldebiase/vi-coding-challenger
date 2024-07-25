// src/components/MonsterList.tsx

import React from 'react';
import { Monster } from '../../types';

interface MonsterListProps {
  monsters: Monster[];
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {monsters.map(monster => (
        <div key={monster.id} className='bg-white p-4 rounded shadow-lg'>
          <img
            src={monster.image}
            alt={monster.name}
            className='w-full h-40 object-contain rounded-t'
          />
          <h2 className='text-lg font-bold mt-2'>{monster.name}</h2>
          <p className='text-gray-500'>Type: {monster.type}</p>
        </div>
      ))}
    </div>
  );
};

export default MonsterList;
