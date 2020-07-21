import React from "react";

class PokemonIndex extends React.Component {
    constructor(props) {
              super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon()
    }

  render() {
        if (this.props.pokemon.length == 0) {
            return <span>No Pokemon!</span>;
        }

        const pokemonLis = this.props.pokemon.map(poke => {
            return <li key={poke.id}>{poke.name}<img src={poke.image_url}></img></li>
        });

        return <ul>{pokemonLis}</ul>;
    }
}

export default PokemonIndex;