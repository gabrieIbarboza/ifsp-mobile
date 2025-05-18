async function fetchPokemonData(idOrName: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                console.error('❌ Pokémon não encontrado!');
            } else {
                console.error('⚠️ Erro ao buscar os dados do Pokémon.');
            }
            return;
        }

        const data = await response.json();
        const name = capitalize(data.name);
        const height = data.height / 10; // Convertendo de decímetros para metros
        const weight = data.weight / 10; // Convertendo de hectogramas para quilogramas
        const types = data.types.map((typeInfo: any) => capitalize(typeInfo.type.name)).join(', ');

        console.log(`${name} – ${height} m – ${weight} kg – ${types}`);
    } catch {
        console.error('⚠️ Erro de rede. Tente novamente.');
    }
}

function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Obtendo o argumento passado pelo usuário
const idOrName = process.argv[2];

if (!idOrName) {
    console.error('❌ Por favor, forneça o nome ou ID de um Pokémon.');
    process.exit(1);
}

fetchPokemonData(idOrName);