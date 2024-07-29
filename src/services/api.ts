// src/services/api.ts
import { Monster, EvolutionChain } from '../types';

export const fetchMonsters = async (type: string): Promise<Monster[]> => {
  try {
    let url: string;
    
    if (type === 'all') {
      url = 'https://pokeapi.co/api/v2/pokemon?limit=10000';
    } else {
      url = `https://pokeapi.co/api/v2/type/${type}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from API: ${response.statusText}`);
    }

    const data = await response.json();

    if (type === 'all') {
      const pokemonUrls = data.results.map((result: { url: string }) => result.url);
      const monsterData = await Promise.all(pokemonUrls.map(async (url: string) => {
        try {
          const pokemonResponse = await fetch(url);
          if (!pokemonResponse.ok) {
            throw new Error(`Failed to fetch Pokémon details: ${pokemonResponse.statusText}`);
          }

          const pokemonDetails = await pokemonResponse.json();
          const speciesResponse = await fetch(pokemonDetails.species.url);
          if (!speciesResponse.ok) {
            throw new Error(`Failed to fetch species details: ${speciesResponse.statusText}`);
          }

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
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
          return null; // Skip this Pokémon if there is an error
        }
      }));

      // Remove null entries
      return monsterData.filter((monster): monster is Monster => monster !== null);
    } else {
      const monsterData = await Promise.all(data.pokemon.map(async (p: { pokemon: { url: string } }) => {
        try {
          const pokemonResponse = await fetch(p.pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error(`Failed to fetch Pokémon details: ${pokemonResponse.statusText}`);
          }

          const pokemonDetails = await pokemonResponse.json();
          const speciesResponse = await fetch(pokemonDetails.species.url);
          if (!speciesResponse.ok) {
            throw new Error(`Failed to fetch species details: ${speciesResponse.statusText}`);
          }

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
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
          return null; // Skip this Pokémon if there is an error
        }
      }));

      // Remove null entries
      return monsterData.filter((monster): monster is Monster => monster !== null);
    }
  } catch (error) {
    console.error('Error fetching monsters:', error);
    throw new Error('Error fetching monsters'); // Re-throw error for higher-level handling
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
    console.error('Error fetching evolution chain:', error);
    return null;
  }
};

export const fetchTypes = async (): Promise<string[]> => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    if (!response.ok) {
      throw new Error(`Failed to fetch types: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results.map((result: { name: string }) => result.name);
  } catch (error) {
    console.error('Error fetching types:', error);
    return []; // Return an empty array in case of error
  }
};
