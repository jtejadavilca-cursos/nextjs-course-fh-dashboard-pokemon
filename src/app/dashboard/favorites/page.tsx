import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export const metadata = {
    title: "Favorite Pokemons Page",
    description: "A simple page with a list of favorite pokemons",
};

export default async function PokemonsPage() {
    return <FavoritePokemons />;
}
