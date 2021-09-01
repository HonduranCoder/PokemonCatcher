// import functions and grab DOM elements
import { renderNewPokemon } from './render-utils.js';
import { catchPokemon, encounterPokemon } from './localstorage.utils.js';
import { getRandomPokemon } from './data-utils.js';

const button = document.getElementById('pressgo');

// initialize global state
let pokemonCaught = 0;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

/*User loads the page

call renderNewPokemon()
User clicks catch button */

const randomArray = getRandomPokemon();

renderNewPokemon(randomArray);

/* increment: pokeCaught++
We figure out the id of the pokemon that was captured.
call catchPokemon(id) with this id
now, if pokeCaught > 10, redirect to the results page
call renderNewPokemon()
*/

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input:checked');
    const pokemonDiv = document.getElementById('pokemon-div');
    const chosenPokemon = Number(selectedRadio.value);
    pokemonDiv.textContent='';
    pokemonCaught++;
    catchPokemon(chosenPokemon);

    if (pokemonCaught < 10) {
        const randomArray = getRandomPokemon(); 
        renderNewPokemon(randomArray);
    } else {
     /* window.location.href = 'index.html'; */ /*goes to results page*/
    }
  
});
  