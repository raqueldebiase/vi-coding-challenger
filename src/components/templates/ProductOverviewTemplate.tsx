// src/templates/ProductOverviewTemplate.tsx
import React from 'react';
import FilterSection from '../organisms/FilterSection';
import MonsterList from '../organisms/MonsterList';
import { Monster } from '../../types';

interface ProductOverviewTemplateProps {
  title: string;
  selectedType: string;
  onTypeChange: (type: string) => void;
  monsters: Monster[];
}

const ProductOverviewTemplate: React.FC<ProductOverviewTemplateProps> = ({
  title,
  selectedType,
  onTypeChange,
  monsters,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="flex-shrink-0 w-full md:w-1/4">
          <FilterSection onTypeChange={onTypeChange} selectedType={selectedType} />
        </aside>
        <main className="flex-1">
          <MonsterList monsters={monsters} loading={false} error={null} />
        </main>
      </div>
    </div>
  );
};

export default ProductOverviewTemplate;
