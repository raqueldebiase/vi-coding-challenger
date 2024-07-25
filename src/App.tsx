// src/App.tsx
import React, { useState, useEffect } from 'react';
import MonsterList from './components/organisms/MonsterList'; // Atualize o caminho conforme necessário
import FilterSection from './components/organisms/FilterSection'; // Atualize o caminho conforme necessário
import { fetchMonsters } from './services/api'; // Atualize o caminho conforme necessário
import { Monster } from './types'; // Atualize o caminho conforme necessário

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [selectedType, setSelectedType] = useState<string>('fire'); // Tipo inicial

  useEffect(() => {
    const loadMonsters = async () => {
      try {
        const fetchedMonsters = await fetchMonsters(selectedType);
        setMonsters(fetchedMonsters);
      } catch (error) {
        console.error('Error fetching monsters:', error);
      }
    };

    loadMonsters();
  }, [selectedType]);

  return (
    <div className="flex">
      {/* Barra Lateral */}
      <aside className="w-64 bg-gray-200 p-4 h-screen">
        <FilterSection onTypeChange={setSelectedType} selectedType={selectedType} />
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 px-8">
        <header>
          <h1 className="text-3xl font-bold pb-6 border-b-2 border-gray-300">Monster Overview</h1>
          <h2 className="text-lg my-6">These are our products: </h2>
        </header>
        <MonsterList monsters={monsters} />
      </main>
    </div>
  );
}

export default App;
