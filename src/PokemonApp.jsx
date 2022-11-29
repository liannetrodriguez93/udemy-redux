import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPokemons} from "./slices/pokemon/index.js";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.pokemons)

  console.log(state);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);


  return (
    <>
      <h1>PokemonApp</h1>
      <hr/>

      <span>Loading.... {state.isLoading ? `true` : `false`}</span>

      <ul>
        {
          state.pokemons.map(({name}) =>
            <li key={name}>{name}</li>
          )
        }
      </ul>

      <button
        onClick={() => dispatch(getPokemons(state.page))}
      >
        Next
      </button>
    </>
  );
}