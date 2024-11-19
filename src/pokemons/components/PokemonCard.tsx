"use client";

import React from "react";
import { SimplePokemon } from "..";
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonSlice";

interface Props {
    pokemon: SimplePokemon;
}
export const PokemonCard = ({ pokemon }: Props) => {
    const dispatch = useAppDispatch();

    const { id, name } = pokemon;

    const isFavorite = useAppSelector((state) => !!state.pokemon.favorites[id]);

    const toggle = () => {
        dispatch(toggleFavorite(pokemon));
    };

    return (
        // <div key={pokemon.id} className="flex flex-col items-center">
        //     <Image src={pokemon.image} width={100} height={100} alt={pokemon.name} />
        //     <span>{pokemon.name}</span>
        // </div>

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="group flex flex-col items-center p-6 bg-gray-800 border-b">
                    <Image
                        src={pokemon.image}
                        width={100}
                        height={100}
                        alt={pokemon.name}
                        className="group-hover:scale-150 aspect-square transition-all duration-150 ease-out"
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>

                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div
                        onClick={() => toggle()}
                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                    >
                        <div className="text-green-600">
                            {isFavorite ? (
                                <IoHeart className="text-red-600" />
                            ) : (
                                <IoHeartOutline className="text-gray-600" />
                            )}
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {isFavorite ? "Favorito" : "No es favorito"}
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
