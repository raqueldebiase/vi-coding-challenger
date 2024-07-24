// src/services/api.ts

import { Monster } from '../types';

export const fetchMonsters = async (type: string): Promise<Monster[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();

  const monsterData = await Promise.all(data.pokemon.map(async (p: { pokemon: { url: string } }) => {
    const pokemonResponse = await fetch(p.pokemon.url);
    const pokemonDetails = await pokemonResponse.json();

    return {
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      type: type,
      image: pokemonDetails.sprites.front_default // Obtendo a URL da imagem
    };
  }));

  return monsterData;
};
