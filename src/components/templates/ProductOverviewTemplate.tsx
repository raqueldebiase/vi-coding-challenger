import React from 'react';
import Title from '../atoms/Title';
import FilterSection from '../organisms/FilterSection';

interface ProductOverviewTemplateProps {
  title?: string;
}

const ProductOverviewTemplate: React.FC<ProductOverviewTemplateProps> = ({ title }) => (
  <div className="p-8">
    {title && <Title text={title} className="mb-6" />}
    <FilterSection />
  </div>
);

export default ProductOverviewTemplate;
