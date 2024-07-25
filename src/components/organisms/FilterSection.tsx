// src/components/organisms/FilterSection.tsx

import React from 'react';

interface FilterSectionProps {
  onTypeChange: (type: string) => void; // Tipagem da função
  selectedType: string; // Tipo selecionado
}

const FILTERS = [
  { value: 'fire', label: 'Fire', color: 'bg-red-500' },
  { value: 'water', label: 'Water', color: 'bg-blue-500' },
  { value: 'grass', label: 'Grass', color: 'bg-green-500' },
  { value: 'electric', label: 'Electric', color: 'bg-yellow-500' },
  // Adicione mais filtros conforme necessário
];

const FilterSection: React.FC<FilterSectionProps> = ({ onTypeChange, selectedType }) => {
  return (
    <div className="pb-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="p-4 text-md font-semibold ">Filter By Type:</h2>
      <div className="p-2 flex flex-col gap-2">
        {FILTERS.map((filter) => (
          <div
            key={filter.value}
            onClick={() => onTypeChange(filter.value)}
            className={`flex gap-3 items-center cursor-pointer p-2 ${
              selectedType === filter.value
                ? 'bg-gray-200 border-gray-800'
                : 'hover:bg-gray-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-full ${filter.color} mr-2`} />
            <span className={`text-gray-700 ${selectedType === filter.value ? 'font-semibold' : ''}`}>
              {filter.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
