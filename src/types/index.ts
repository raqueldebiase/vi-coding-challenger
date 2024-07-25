// Tipos para a cadeia de evolução
export interface EvolutionDetail {
  min_level?: number;
  trigger: { name: string };
  item?: { name: string };
}

export interface ChainLink {
  is_baby: boolean;
  species: { name: string; url: string };
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
}

export interface EvolutionChain {
  id: number;
  baby_trigger_item: null | { name: string };
  chain: ChainLink;
}

// Tipos para os monstros
export interface Monster {
  id: number;
  name: string;
  type: string;
  image: string;
  evolutionChain?: EvolutionChain; // Adicionei isso para refletir a nova estrutura
}
