// src/components/organisms/FilterSection.tsx

import React from 'react';

interface FilterSectionProps {
  onTypeChange: (type: string) => void; // Tipagem da função
}

const FilterSection: React.FC<FilterSectionProps> = ({ onTypeChange }) => {
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onTypeChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="monster-type">Select Monster Type:</label>
      <select id="monster-type" onChange={handleTypeChange}>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        {/* Adicione mais opções conforme necessário */}
      </select>
    </div>
  );
};

export default FilterSection;
