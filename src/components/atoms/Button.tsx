import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ${className}`}
  >
    {label}
  </button>
);

export default Button;
