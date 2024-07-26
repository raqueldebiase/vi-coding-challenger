import React, { useEffect, useState } from 'react';
import { fetchTypes } from '../../services/api'; 

interface FilterSectionProps {
  onTypeChange: (type: string) => void;
  selectedType: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onTypeChange, selectedType }) => {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTypes = async () => {
      try {
        setLoading(true);
        const types = await fetchTypes();
        setTypes(types);
        setLoading(false);
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
      <div className="flex justify-center items-center h-full">
        <div className="flex items-center">
          <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v2a6 6 0 0 0 0 12v2a8 8 0 0 1-8-8z"></path>
          </svg>
          <span className="ml-4 text-gray-700">Loading...</span>
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
  ice: 'bg-cyan-300',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-green-900',
  flying: 'bg-blue-400',
  psychic: 'bg-pink-500',
  bug: 'bg-green-700',
  rock: 'bg-gray-600',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
  normal: 'bg-white',
  stellar: 'bg-pink-800'
  // Adicione mais cores conforme necessário
};

export type { FilterSectionProps };
export default FilterSection;
