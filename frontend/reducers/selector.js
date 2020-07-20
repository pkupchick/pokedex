export const selectAllPokemon = (state) => {
    const keys = Object.values(state.pokemon);
    return keys;
};

