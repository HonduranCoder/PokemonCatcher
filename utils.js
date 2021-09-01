import pokemonArray from "./data.js";


export function findById(pokemonArray, id) {
    return pokemonArray.find(character => id === character.id);
}

