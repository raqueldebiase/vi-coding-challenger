// src/App.tsx
import React, { useState, useEffect } from 'react';
import MonsterList from './components/organisms/MonsterList'; 
import FilterSection from './components/organisms/FilterSection';
import { fetchMonsters } from './services/api';
import { Monster } from './types'; 

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null); 
  const [selectedType, setSelectedType] = useState<string>('fire');

  useEffect(() => {
    const loadMonsters = async () => {
      setLoading(true);
      setError(null); 
      try {
        const fetchedMonsters = await fetchMonsters(selectedType);
        setMonsters(fetchedMonsters);
      } catch (error) {
        setError('Error fetching monsters'); 
        console.error('Error fetching monsters:', error);
      } finally {
        setLoading(false); 
      }
    };

    loadMonsters();
  }, [selectedType]);

  return (
    <div className="">
      <header>
          <h1 className="text-3xl font-bold pb-6 border-b-2 border-gray-300">Monster Overview</h1>
          <h2 className="text-lg font-semibold my-6">These are our products: </h2>
      </header>
      <div className="flex gap-6">
        <aside className="w-64 bg-gray-200 p-4 h-screen">
          <FilterSection onTypeChange={setSelectedType} selectedType={selectedType} />
        </aside>
        <main className="flex-1">
          <MonsterList monsters={monsters} loading={loading} error={error} />
        </main>
      </div>
    </div>
  );
}

export default App;
