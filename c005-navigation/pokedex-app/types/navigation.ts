// types/navigation.ts
import { Pokemon } from '../types/Pokemon';

export type RootStackParamList = {
  Pokedex: undefined;
  PokemonDetails: { pokemon: Pokemon };
};
