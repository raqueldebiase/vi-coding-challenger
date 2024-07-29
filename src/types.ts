
export interface EvolutionDetail {
  min_level?: number;  
  trigger: { name: string }; 
  item?: { name: string };  
}

export interface ChainLink {
  is_baby: boolean;  
  species: { name: string };  
  evolution_details: EvolutionDetail[]; 
  evolves_to: ChainLink[];  
}

export interface EvolutionChain {
  id: number;  
  baby_trigger_item: null | { name: string }; 
  chain: ChainLink; 
}


export interface Monster {
  id: number;  
  name: string;  
  types: string[];  
  image: string;  
  evolutionChain?: EvolutionChain;  
}


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
