import React from 'react';
import FilterSection from '../organisms/FilterSection';

interface ProductOverviewTemplateProps {
  title?: string;
}

const ProductOverviewTemplate: React.FC<ProductOverviewTemplateProps> = ({ title }) => {
  const handleTypeChange = (type: string) => {
    console.log(type); 
  };

  return (
    <div className="p-8">
      {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
      <FilterSection onTypeChange={handleTypeChange} />
    </div>
  );
};



export default ProductOverviewTemplate;
