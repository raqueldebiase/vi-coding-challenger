import React from 'react';
import { Link } from 'react-router-dom';

interface MonsterCardProps {
  name: string;
  type: string;
  id: number;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ name, type, id }) => (
  <div className="p-4 border rounded-lg shadow-md">
    <Link to={`/monsters/${id}`} className="block text-center">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{type}</p>
    </Link>
  </div>
);

export default MonsterCard;
