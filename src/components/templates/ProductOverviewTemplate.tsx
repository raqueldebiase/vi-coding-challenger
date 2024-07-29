import React from 'react';
import FilterSection from '../organisms/FilterSection';
import MonsterList from '../organisms/MonsterList';
import { Monster } from '../../types';

interface ProductOverviewTemplateProps {
  
  selectedType: string;
  onTypeChange: (type: string) => void;
  monsters: Monster[];
}

const ProductOverviewTemplate: React.FC<ProductOverviewTemplateProps> = ({
  
  selectedType,
  onTypeChange,
  monsters,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold my-6 ">These are our products: </h2>
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
