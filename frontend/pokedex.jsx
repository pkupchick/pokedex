import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import * as Util from './util/api_util';
import {configureStore} from './store/store';
import {selectAllPokemon} from './reducers/selector';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, rootEl);
});