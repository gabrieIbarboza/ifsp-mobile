import { useState } from "react";
import "./Pokedex.css";
import PokeCard from "../PokeCard/PokeCard";
import type { Pokemon } from "../../types/Pokemon";

export default function Pokedex() {
    const [nome, setNome] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [erro, setErro] = useState("");

    const buscarPokemon = async () => {
        if (!nome.trim()) return;

        setCarregando(true);
        setErro("");

        try {
            const resposta = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
            );
            if (!resposta.ok) throw new Error("Pokémon não encontrado");

            const dados: Pokemon = await resposta.json();
            // Evita duplicatas
            setPokemons((prev) => prev.some(p => p.name === dados.name) ? prev : [...prev, dados]);
            setNome("");
        } catch {
            setErro("Pokémon não encontrado 😢");
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="pokedex-container">
            <h2 className="pokedex-title">🔎 Pokédex</h2>

            <input
                className="pokedex-input"
                type="text"
                placeholder="Digite o nome do Pokémon"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') buscarPokemon(); }}
            />

            <button className="pokedex-button" onClick={buscarPokemon}>
                Buscar
            </button>

            {carregando && <p className="pokedex-loading">Carregando...</p>}
            {erro && <p className="pokedex-error">{erro}</p>}

            {pokemons.map((poke) => (
                <PokeCard key={poke.name} pokemon={poke} />
            ))}
        </div>
    );
}