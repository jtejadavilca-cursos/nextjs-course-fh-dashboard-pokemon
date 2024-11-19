import { configureStore, Middleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterSlice from "./counter/counterSlice";
import pokemonSlice from "./pokemons/pokemonSlice";
import { localStoreMiddleware } from "./middlewares/localstorage-middleware";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemon: pokemonSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStoreMiddleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch; //useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
