import axios from 'axios';
import { Pokemon, PokemonListItem } from '../types/Pokemon';

const API_BASE = 'https://pokeapi.co/api/v2';

export async function getPokemons(limit: number, offset: number): Promise<PokemonListItem[]> {
    try {
        const res = await axios.get(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
        return res.data.results;
    } catch (error) {
        throw new Error('Falha ao carregar Pokémons. Verifique sua conexão.');
    }
  
}

export async function getPokemonDetails(url: string): Promise<Pokemon> {
    try {
        const res = await axios.get(url);

        return {
        id: res.data.id,
        name: res.data.name,
        image: res.data.sprites.front_default,
        types: res.data.types.map((t: any) => t.type.name),
        };
    } catch (error) {
        throw new Error('Falha ao carregar Pokémons. Verifique sua conexão.');
    }
}