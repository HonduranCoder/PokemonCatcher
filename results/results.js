import data from '../data.js';
import { getPokedex } from '../localstorage.utils.js';
import pokemonArray from '../data.js';

const ctx = document.getElementById('myChart'); 
const pokedex = getPokedex(); 

const arrayOfCaught = pokedex
    .filter(character => character.captured > 0)
    .map(character => character.id); 

const arrayOfNames = pokedex
    .map(({ id }) => {
        const pokemon = pokemonArray.find(character=> character.id === id);
        return pokemon.pokemon;
    });

const arrayOfEncountered = pokedex
    .filter(character=> character.encountered > 0)
    .map(({ encountered }) => encountered);

console.log(pokedex);
console.log(arrayOfNames);
console.log(arrayOfCaught);
console.log(arrayOfEncountered); 

const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: arrayOfNames,
        datasets: [
            {
                label: 'encountered',
                data: arrayOfEncountered,
                backgroundColor: [
                    'orange',
                ],
    
                borderWidth: 1
            },
            {
                label: 'captured',
                data: arrayOfCaught,
                backgroundColor: [
                    'pink',
                    'orange',
                    'steelblue',
                    'red',
                    'purple',
                    'green'
                ],

                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
