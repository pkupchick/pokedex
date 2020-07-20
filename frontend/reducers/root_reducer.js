import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import pokemonReducer from './pokemon_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  pokemon:  pokemonReducer
});
export default rootReducer;