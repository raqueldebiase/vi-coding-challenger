import React, { useEffect, useState } from 'react';
import { fetchTypes } from '../../services/api'; 

interface FilterSectionProps {
  onTypeChange: (type: string) => void;
  selectedType: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onTypeChange, selectedType }) => {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Adicione o estado de carregamento
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTypes = async () => {
      try {
        setLoading(true); // Começa a carregar
        const types = await fetchTypes();
        setTypes(types);
        setLoading(false); // Finaliza o carregamento
      } catch (error) {
        console.error('Failed to fetch types:', error);
        setError('Failed to load types');
        setLoading(false);
      }
    };

    getTypes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-gray-300 border-t-transparent rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="pb-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="p-4 text-md font-semibold">Filter By Type:</h2>
      <div className="p-2 flex flex-col gap-2">
        <div
          key="all"
          onClick={() => onTypeChange('all')}
          className={`flex gap-3 items-center cursor-pointer p-2 ${
            selectedType === 'all' ? 'bg-gray-200 border-gray-800' : 'hover:bg-gray-200'
          }`}
        >
          <div className={`w-4 h-4 rounded-full bg-gray-500 mr-2`} />
          <span className={`text-gray-700 ${selectedType === 'all' ? 'font-semibold' : ''}`}>
            All
          </span>
        </div>
        {types.map((type) => (
          <div
            key={type}
            onClick={() => onTypeChange(type)}
            className={`flex gap-3 items-center cursor-pointer p-2 ${
              selectedType === type ? 'bg-gray-200 border-gray-800' : 'hover:bg-gray-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-full ${typeColors[type]} mr-2`} />
            <span className={`text-gray-700 ${selectedType === type ? 'font-semibold' : ''}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const typeColors: { [key: string]: string } = {
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  // Adicione mais cores conforme necessário
};

export type { FilterSectionProps };
export default FilterSection;
