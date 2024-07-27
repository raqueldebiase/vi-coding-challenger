// Tipos para a cadeia de evolução
export interface EvolutionDetail {
  min_level?: number;   // Nível mínimo necessário para a evolução
  trigger: { name: string };  // Nome do gatilho para a evolução (ex: "level-up", "use-item")
  item?: { name: string };  // Nome do item necessário para a evolução, se aplicável
}

export interface ChainLink {
  is_baby: boolean;  // Indica se o Pokémon é um bebê (ou seja, uma forma inicial)
  species: { name: string };  // Nome da espécie
  evolution_details: EvolutionDetail[];  // Detalhes da evolução
  evolves_to: ChainLink[];  // Cadeia de evolução para o próximo estágio
}

export interface EvolutionChain {
  id: number;  // Identificador da cadeia de evolução
  baby_trigger_item: null | { name: string };  // Item que pode desencadear a evolução de bebê, se aplicável
  chain: ChainLink;  // Cadeia de evolução principal
}

// Tipos para os monstros
export interface Monster {
  id: number;  // Identificador do monstro
  name: string;  // Nome do monstro
  types: string[];  // Tipos do monstro (agora um array de strings)
  image: string;  // URL da imagem do monstro
  evolutionChain?: EvolutionChain;  // Cadeia de evolução, se disponível
}
