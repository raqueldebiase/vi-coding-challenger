import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => (
  <i className={`icon-${name} ${className}`} />
);

export default Icon;
