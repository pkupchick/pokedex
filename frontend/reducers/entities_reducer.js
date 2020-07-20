import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
})

export default entitiesReducer


// export default entitiesReducer = combineReducers({
//   pokemon: pokemonReducer
// });

// {
//   entities: {
//     pokemon: {
//       1: {
//         id: 1,
//         name: /*...*/,
//         image_url: /*...*/
//       },
//       2: {
//         id: 2,
//         name: /*...*/,
//         image_url: /*...*/
//       },
//       // ...
//     }
//   }
// }