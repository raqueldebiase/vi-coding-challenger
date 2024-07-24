// src/components/Button.tsx
import React from 'react';
import '../App.css'

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-black py-4 px-4 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default Button;
