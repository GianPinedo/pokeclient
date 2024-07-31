export interface NewPokemon {
    name: string;
    gender: string;
    type: string;
    abilities: string;
    weight: number;
    weaknesses: string;
    imageUrl: string;
  }
  
  export interface Pokemon extends NewPokemon {
    id: number;
  }
  