import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "../slices/counter";
import {pokemonsSlice} from "../slices/pokemon/index.js";
import {todosApi} from "../slices/apis/todosAPi.js";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonsSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})