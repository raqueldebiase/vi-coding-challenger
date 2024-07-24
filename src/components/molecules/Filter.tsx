import React from 'react';

interface FilterProps {
  onFilterChange: (type: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => (
  <div className="flex gap-4 mb-4">
    <button onClick={() => onFilterChange('all')}>All</button>
    <button onClick={() => onFilterChange('fire')}>Fire</button>
    <button onClick={() => onFilterChange('water')}>Water</button>
    <button onClick={() => onFilterChange('earth')}>Earth</button>
    <button onClick={() => onFilterChange('air')}>Air</button>
  </div>
);

export default Filter;
