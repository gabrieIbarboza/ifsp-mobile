import { useEffect, useState } from "react";
import "./PokeCard.css";
import type { Pokemon } from "../../types/Pokemon";

type PokeCardProps = {
    pokemon: Pokemon;
};

export default function PokeCard({ pokemon }: PokeCardProps) {
    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
        setFavorito(favoritos.includes(pokemon.name));
        console.log(`Pokémon ${pokemon.name} criado com sucesso!`);
    }, [pokemon]);

    const toggleFavorito = () => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
        
        const novosFavoritos = ( favorito 
            ? favoritos.filter((nome: string) => nome !== pokemon.name) 
            : [...favoritos, pokemon.name]);

        localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
        setFavorito(fav => !fav);
    };

    return (
        <div
        className={`pokedex-card${favorito ? " favorito" : ""}`}
        >
        <h3 className="pokedex-name">
            {pokemon.name} {favorito && "⭐"}
        </h3>
        {pokemon.sprites.front_default && (
            <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokedex-image"
            />
        )}
        <p><strong>Altura:</strong> {pokemon.height * 10} cm</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <p>
            <strong>Tipos:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(" / ")}
        </p>
        <button
            onClick={toggleFavorito}
            className={`favorito-btn${favorito ? " removido" : ""}`}
        >
            {favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        </button>
        </div>
    );
}