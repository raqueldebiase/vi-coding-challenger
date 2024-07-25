import React from 'react';
import Button from '../atoms/Button';

export interface FilterProps {
  onFilterChange: (type: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => (
  <div className="flex gap-4 mb-4">
    <Button onClick={() => onFilterChange('all')} label="All" className="button" />
    <Button onClick={() => onFilterChange('fire')} label="Fire" className="button" />
    <Button onClick={() => onFilterChange('water')} label="Water" className="button" />
    <Button onClick={() => onFilterChange('earth')} label="Earth" className="button" />
    <Button onClick={() => onFilterChange('air')} label="Air" className="button" />
  </div>
);

export default Filter;
