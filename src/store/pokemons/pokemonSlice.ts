import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

/*
{
    '1': { id: 1, name: 'Bulbasaur', type: 'grass' },
    '2': { id: 2, name: 'Ivysaur', type: 'grass' },
    '3': { id: 3, name: 'Venusaur', type: 'grass' },
}
*/

interface PokemonState {
    //[key: string]: SimplePokemon;
    favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonState => {
//     const favoritePokemons = localStorage.getItem("favoritePokemons");
//     if (favoritePokemons) {
//         return JSON.parse(favoritePokemons);
//     }
//     return {};
// };

const initialState: PokemonState = {
    favorites: {},
    //...getInitialState()
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
            state.favorites = action.payload;
        },
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const { id } = action.payload;
            if (state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = action.payload;
            }

            //! TODO No se debe interactuar con el localStorage directamente aquí
            // Se hace en el middleware
            //localStorage.setItem("favoritePokemons", JSON.stringify(state.favorites));
        },
    },
});

export const { setFavorites, toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
