import { Monster, EvolutionChain } from '../../src/types/index';

export const fetchMonsters = async (type: string): Promise<Monster[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();

  const monsterData = await Promise.all(data.pokemon.map(async (p: { pokemon: { url: string } }) => {
    const pokemonResponse = await fetch(p.pokemon.url);
    const pokemonDetails = await pokemonResponse.json();
    
    // Get the evolution chain ID
    const speciesResponse = await fetch(pokemonDetails.species.url);
    const speciesDetails = await speciesResponse.json();
    const evolutionChainId = speciesDetails.evolution_chain.url.split('/').slice(-2, -1)[0];
    
    const evolutionChain = await fetchEvolutionChain(evolutionChainId);

    return {
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      type: type,
      image: pokemonDetails.sprites.front_default,
      evolutionChain: evolutionChain,
    };
  }));

  return monsterData;
};

const fetchEvolutionChain = async (id: string): Promise<EvolutionChain> => {
  const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
  const data = await response.json();
  return data;
};
