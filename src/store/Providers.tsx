"use client";
import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavorites } from "./pokemons/pokemonSlice";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    useEffect(() => {
        const favoritePokemons = JSON.parse(localStorage.getItem("favoritePokemons") || "{}");
        store.dispatch(setFavorites(favoritePokemons));
    }, []);

    return <Provider store={store}>{children}</Provider>;
};
