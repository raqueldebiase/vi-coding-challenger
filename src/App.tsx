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
    <div className="App">
      <header>
        <h1>Monster Overview</h1>
      </header>
      <FilterSection onTypeChange={(type) => setSelectedType(type)} />
      <MonsterList monsters={monsters} />
    </div>
  );
}

export default App;
