import React from 'react';
import FilterSection from '../organisms/FilterSection';
import MonsterList from '../organisms/MonsterList';
import { Monster } from '../../types';

interface ProductOverviewTemplateProps {
  title?: string;
  selectedType: string;
  onTypeChange: (type: string) => void;
  monsters: Monster[]; 
}

const ProductOverviewTemplate: React.FC<ProductOverviewTemplateProps> = ({ title, selectedType, onTypeChange, monsters }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4 text-black">{title}</h1>
    <FilterSection selectedType={selectedType} onTypeChange={onTypeChange} />
    <MonsterList monsters={monsters} />
  </div>
);

export default ProductOverviewTemplate;
