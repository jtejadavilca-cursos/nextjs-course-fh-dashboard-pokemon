import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStoreMiddleware = (store: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        const result = next(action);
        if (action.type === "pokemon/toggleFavorite") {
            localStorage.setItem("favoritePokemons", JSON.stringify(store.getState().pokemon.favorites));
        }
        return result;
    };
};
