import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";

import {store} from "./store";
import './styles.css'
import {PokemonApp} from "./PokemonApp.jsx";
import {TodoApp} from "./TodoApp";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<PokemonApp />*/}
      <TodoApp/>
    </Provider>
  </React.StrictMode>
)
