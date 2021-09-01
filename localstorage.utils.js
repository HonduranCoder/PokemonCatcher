/*How many times has the user caught a pokemon

let pokeCaught = 0
STRETCH: we could derive this from our other data, just counting how many total pokemon the user has already caught: howManyCaughtSoFar()
*/

import { findById } from './utils.js';

export const CATCH = 'CATCH'; 
export const POKEMON = 'POKEMON'; 

// setPokedex(pokedex)
// - takes in a pokedex, stringifies it and puts it into local storage
export function setPokedex(pokemonArray){
    const stringyPokemon = JSON.stringify(pokemonArray); 
    localStorage.setItem(POKEMON, stringyPokemon);
}

// getPokedex()
// - retrieves and parses the pokedex in local storage
export function getPokedex(){
    const stringyPokemon = localStorage.getItem(POKEMON);
    if (!stringyPokemon){
        return [];
    }
    const finalPokemon = JSON.parse(stringyPokemon); 
    return finalPokemon;
}

// encounterPokemon(id)
// - getPokedex
// - If the pokemon has been previously seen, just increment the times seen
// - If this is the first time, make a new object with `{ id: 5, encoutered: 1, caught: 0 }`
// - setPokedex

export function encounterPokemon(id){
    const pokedex = getPokedex();
    const pokedexMatch = findById(pokedex, id); 
    //conditional statment
    if (pokedexMatch){
        pokedexMatch.encountered++;
    } else {
        const pokedexNew = {
            id: id, 
            captured: 0,
            encountered: 1,
        };
        pokedex.push(pokedexNew);
    }
    setPokedex(pokedex);
}

// catchPokemon(id)
// - getPokedex
// - no need to check if it's been encountered. If you got this far, it _has_ been encountered.
// - Increment the `caught` of this pokemon in local storage
// - setPokedex
export function catchPokemon(id){
    const pokedex = getPokedex();
    const pokedexMatch = findById(pokedex, id); 
    //increment caught 
    pokedexMatch.captured++;
    setPokedex(pokedex);
}




