//import modules for test here:
import { encounterPokemon, catchPokemon } from "../localstorage.utils.js";

const test = QUnit.test;

test('should take in an id and update localStorage so that a Pokemon with that id that has already been seen has one more encounter', (expect)=> {
    const initialPokedex =[
        {
            id:1, 
            encountered:1,
            captured:1,
        },
        {
            id:2, 
            encountered:2,
            captured:1, 
        }
    ];
    const stringyPokemon = JSON.stringify(initialPokedex); 
    localStorage.setItem('POKEDEX', stringyPokemon);

    encounterPokemon(2); 

    const expectedPokedex = [
        {
            id:1,
            encountered:1,
            captured:1, 
        }
    ];

    const actual = JSON.parse(localStorage.getItem('POKEDEX'));

    expect.deepEqual(actual, expectedPokedex);
});

test('should take in an id and update localStorage so that a Pokemon with that id, that has not been seen, has one encounter', (expect)=>{
    const initialPokedex = []; 

    const stringyPokedex = JSON.stringify(initialPokedex); 
    localStorage.setItem('POKEDEX', stringyPokedex); 

    encounterPokemon(1)

    const expectedPokedex = [
        {
            id:1, 
            encountered:1, 
            captured:0; 
        }
    ]; 
    const actual = JSON.parse(localStorage.getItem('POKEDEX')); 

    expect.deepEqual(actual, expectedPokedex); 
}); 

test('should take in an id and update localStorage so that a Pokemon with that id has one more capture', (expect)=>{
    const initialPokedex = [
        {
            id:1, 
            encountered:1,
            captured:0; 

    }
    ]; 
    const stringyPokedex = JSON.stringify(initialPokedex); 
    localStorage.setItem('POKEDEX', stringyPokedex);

    catchPokemon(5); 

    const expectedPokedex = [
        {
            id:5, 
            encountered:1, 
            captured:1, 
        }
    ]; 
    const actual = JSON.parse(localStorage.getItem('POKEDEX')); 

    expect.deepEqual(actual, expectedPokedex);
});