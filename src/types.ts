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
  id: number;
  name: string;
  type: string;
  image: string;
}
