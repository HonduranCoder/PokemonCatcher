import { encounterPokemon } from './localstorage.utils.js';
import pokemonData from './data.js';


// getRandomPokemon()
// - does the hard work of finding three unique and random pokemon from our raw data
// - returns an array of three random pokemon
export function getRandomPokemon() {
    let randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();
    let randomIndex3 = getRandomIndex();

    while (
        randomIndex1 === randomIndex2 
        || randomIndex2 === randomIndex3 
        || randomIndex1 === randomIndex3) {
        randomIndex1 = getRandomIndex();
        randomIndex2 = getRandomIndex();
        randomIndex3 = getRandomIndex();
    }

    return [
        pokemonData[randomIndex1], 
        pokemonData[randomIndex2], 
        pokemonData[randomIndex3]
    ];
}

function getRandomIndex() {
    return Math.floor(Math.random() * pokemonData.length);
}
