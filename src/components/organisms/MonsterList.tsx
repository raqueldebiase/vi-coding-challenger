// src/components/MonsterList.tsx

import React from 'react';
import { Monster } from '../../types';

interface MonsterListProps {
  monsters: Monster[];
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters }) => {
  return (
    <div>
      {monsters.map(monster => (
        <div key={monster.id}>
          <img src={monster.image} alt={monster.name} />
          <h2>{monster.name}</h2>
          <p>Type: {monster.type}</p>
        </div>
      ))}
    </div>
  );
};

export default MonsterList;
