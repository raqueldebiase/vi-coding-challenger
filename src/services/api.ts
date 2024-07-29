import { Monster, EvolutionChain } from '../types';

export const fetchMonsters = async (type: string): Promise<Monster[]> => {
  const url = type === 'all' ? 'https://pokeapi.co/api/v2/pokemon?limit=10000' : `https://pokeapi.co/api/v2/type/${type}`;
  const response = await fetch(url);
  const data = await response.json();

  if (type === 'all') {
    const pokemonUrls = data.results.map((result: { url: string }) => result.url);
    const monsterData = await Promise.all(pokemonUrls.map(async (url: string) => {
      const pokemonResponse = await fetch(url);
      const pokemonDetails = await pokemonResponse.json();
      
      const speciesResponse = await fetch(pokemonDetails.species.url);
      const speciesDetails = await speciesResponse.json();
      const evolutionChainId = speciesDetails.evolution_chain.url.split('/').slice(-2, -1)[0];
      const evolutionChain = await fetchEvolutionChain(evolutionChainId);

      return {
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        types: pokemonDetails.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
        image: pokemonDetails.sprites.front_default,
        evolutionChain: evolutionChain,
      };
    }));
    return monsterData;
  } else {
    const monsterData = await Promise.all(data.pokemon.map(async (p: { pokemon: { url: string } }) => {
      const pokemonResponse = await fetch(p.pokemon.url);
      const pokemonDetails = await pokemonResponse.json();
      
      const speciesResponse = await fetch(pokemonDetails.species.url);
      const speciesDetails = await speciesResponse.json();
      const evolutionChainId = speciesDetails.evolution_chain.url.split('/').slice(-2, -1)[0];
      const evolutionChain = await fetchEvolutionChain(evolutionChainId);

      return {
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        types: pokemonDetails.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
        image: pokemonDetails.sprites.front_default,
        evolutionChain: evolutionChain,
      };
    }));
    return monsterData;
  }
};

const fetchEvolutionChain = async (id: string): Promise<EvolutionChain | null> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch evolution chain with ID: ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchTypes = async (): Promise<string[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/type/');
  const data = await response.json();
  return data.results.map((result: { name: string }) => result.name);
};
