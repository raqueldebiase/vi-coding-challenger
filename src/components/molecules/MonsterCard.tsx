import React from 'react';
import { Link } from 'react-router-dom';

export interface MonsterCardProps {
  name: string;
  type: string;
  id: number;
}

const TYPE_COLORS: { [key: string]: string } = {
  fire: 'bg-red-200',    // Mudança de cor para um tom mais claro
  water: 'bg-blue-200',  // Mudança de cor para um tom mais claro
  grass: 'bg-green-200', // Mudança de cor para um tom mais claro
  electric: 'bg-yellow-200', // Mudança de cor para um tom mais claro
  // Adicione mais tipos e cores conforme necessário
};

const MonsterCard: React.FC<MonsterCardProps> = ({ name, type, id }) => {
  // Define a cor de fundo com base no tipo
  const colorClass = TYPE_COLORS[type] || 'bg-gray-200'; // Cor padrão caso o tipo não seja encontrado

  return (
    <div className={`p-4 border rounded-lg shadow-md ${colorClass}`}>
      <Link to={`/monsters/${id}`} className="block text-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          className="w-full h-40 object-contain rounded-t"
        />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-sm text-gray-500">Type: {type}</p>
      </Link>
    </div>
  );
};

export default MonsterCard;
