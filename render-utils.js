import { encounterPokemon } from './localstorage.utils.js'

// renderNewPokemon()
// - We need to find three unique pokemon to show the user
//     - getRandomPokemon()
//     - Whenever we find 3 new pokemon, we need to track that they have now been "seen"
//     - call encounterPokemon() on all 3 new pokemon

export function renderNewPokemon(pokemonArray){
    const pokemonDiv = document.getElementById('pokemon-div');
    pokemonArray.forEach(pokemonObj=>{
        const label = document.createElement('li');
        const input = document.createElement('input');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const caught = document.createElement('p'); 
        const encountered = document.createElement('p');
        const type = document.createElement('p');

   
        input.type = 'radio';
        input.name = 'pokemon';
        input.value = pokemonObj.id;
        div.classList.add('pokemon-div');
        img.src = `${pokemonObj.url_image}`;

        encounterPokemon(pokemonObj.id);
      /*  encountered.textContent = `Encountered: ${poke.encounters}`;
        caught.textContent = `Caught: ${poke.caught}`;
        type.textContent = `Type: ${poke.type}`; */
        
        label.append(input, img);
        div.append(caught, encountered, type, label);
    
        
        pokemonDiv.append(label);
    });
}

//call encounterPokemon before button click
//encounterPokemon()