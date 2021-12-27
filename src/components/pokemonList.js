import React from 'react';
import './styles/pokemon.css';

function PokemonList({ pokemon }) {
    return (   
      <div>
        {pokemon.map(p => (    
            <div  class="container">
                <div class="pokemon--img-container">
                    <img class="pokemon--img" alt="pokemon" src="" />
                </div>
                <div>
                    <div class="pokemon-data">
                    Name: <div key={p}>{p}</div>
                    </div>
                    <div class="pokemon-data">
                    Type: lorem ipsum
                    </div>
                    <div class="pokemon-data">
                    Weight: lorem ipsum
                    </div>
                    <div class="pokemon-data">
                    Height: lorem ipsum
                    </div>
                </div>
            </div>
        ))}
      </div>       
    )
}

export default PokemonList;