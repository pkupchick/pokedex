import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import * as Util from './util/api_util';
import {configureStore} from './store/store';
import {selectAllPokemon} from './reducers/selector'


document.addEventListener("DOMContentLoaded", () => {
    window.receiveAllPokemon = receiveAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = Util.fetchAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const rootEl = document.getElementById("root");
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});