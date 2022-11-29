import {setPokemons, startLoadingPokemons} from "./pokemonsSlice.js";
import {pokemonApi} from "../../api/pokemonApi.js";


export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //Todo: realizar llamada al api
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    dispatch(setPokemons({pokemons: data.results, page: page + 1}))
  }
}