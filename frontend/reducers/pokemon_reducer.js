import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";


const pokemonReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    
    case RECEIVE_ALL_POKEMON:
      const keys = Object.keys(action.pokemon);
      const newState = {};
        keys.forEach(key => {
          newState[key] = action.pokemon[key];
        });
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;

// const stepsReducer = (state = {}, action) => {
//   let nextState;
//   Object.freeze(state);

//   switch (action.type) {
//     case RECEIVE_STEPS:
//       nextState = Object.assign({}, state);
//       action.steps.forEach((step) => nextState[step.id] = step);
//       return nextState;
//     case RECEIVE_STEP:
//       return Object.assign({}, state, { [action.step.id]: action.step });
//     case REMOVE_STEP:
//       nextState = Object.assign({}, state);
//       delete nextState[action.step.id]
//       return nextState
//     default:
//       return state;
//   }
// };