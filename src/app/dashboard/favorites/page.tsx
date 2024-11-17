import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());

    const pokemons: SimplePokemon[] = data.results.map((pokemon) => {
        const urlParts = pokemon.url.split("/");
        const id = +urlParts[urlParts.length - 2];

        return {
            id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
        };
    });

    return pokemons;
};

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Pokémons Favoritos <small className="text-blue-500">Global State</small>
            </span>

            <PokemonGrid pokemons={[]} />
        </div>
    );
}
