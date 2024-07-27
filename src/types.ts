// src/types.ts

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface TypeResponse {
  pokemon: {
    pokemon: {
      url: string;
    };
  }[];
}

export interface Monster {
  id: number;  // Identificador do monstro
  name: string;  // Nome do monstro
  type: string,
  types: string[];  // Tipos do monstro (agora um array de strings)
  image: string;  // URL da imagem do monstro
  
}
