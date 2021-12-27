import React, { useState, useEffect } from 'react';
import http from '../services/httpService';
import PokemonList from './pokemonList';

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(async () => {
        const response = await http.get("https://pokeapi.co/api/v2/pokemon");
        console.log(response);
        setPokemon(response.data.results.map(p => p.name));
    }, []);

    return(
        <PokemonList pokemon={pokemon} />
    );
}

export default Pokemon;