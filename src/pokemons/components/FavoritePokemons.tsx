"use client";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useMemo, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
    const statePokemon = useAppSelector((state) => state.pokemon.favorites);
    const favoritePokemons = useMemo(() => Object.values(statePokemon), [statePokemon]);
    const [pokemons, setPokemons] = useState(favoritePokemons);

    useEffect(() => {
        setPokemons(favoritePokemons);
    }, [favoritePokemons]);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Pokémons Favoritos <small className="text-blue-500">Global State</small>
            </span>
            {pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />}
        </div>
    );
};

export const NoFavorites = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh]">
            <IoHeartOutline className="text-red-600 text-9xl" />
            <span className="text-5xl">No pokemons favoritos</span>
        </div>
    );
};
