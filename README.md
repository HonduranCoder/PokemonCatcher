**Catcher page** <br />
User should be able to select one of 3 DIFFERENT pokemon and click the catch button. Then show the user 3 more (different) pokemon. After 10 pokemon are caught, redirect to the results page.

**HTML Setup** <br />
Button  <br /> 
3 divs with images to show the pokemon  <br />
Radio buttons (hidden like in the rock paper scissors app)
State <br />
How many times has the user caught a pokemon <br />

let pokeCaught = 0 <br />
STRETCH: we could derive this from our other data, just counting how many total pokemon the user has already caught: howManyCaughtSoFar() <br />
Local Storage <br />
Pokemon seen <br />
Pokemon caught <br />
Events <br />
User loads the page <br />

call renderNewPokemon() <br />
User clicks catch button <br />

increment: pokeCaught++ <br />
We figure out the id of the pokemon that was captured. <br />
call catchPokemon(id) with this id <br />
now, if pokeCaught > 10, redirect to the results page <br />
call renderNewPokemon() <br />

<br />
**Functions** <br />
renderNewPokemon() <br />

We need to find three unique pokemon to show the user <br />
getRandomPokemon() <br />
Whenever we find 3 new pokemon, we need to track that they have now been "seen" <br />
call encounterPokemon() on all 3 new pokemon <br />
getRandomPokemon() <br />

does the hard work of finding three unique and random pokemon from our raw data <br />
returns an array of three random pokemon <br />
setPokedex(pokedex) <br />

takes in a pokedex, stringifies it and puts it into local storage <br />
getPokedex() <br />

retrieves and parses the pokedex in local storage <br />
encounterPokemon(id) <br />

getPokedex <br />
If the pokemon has been previously seen, just increment the times seen <br />
If this is the first time, make a new object with { id: 5, encoutered: 1, caught: 0 } <br />
setPokedex <br />
catchPokemon(id) <br />

getPokedex <br />
no need to check if it's been encountered. If you got this far, it has been encountered. <br />
Increment the caught of this pokemon in local storage <br />
setPokedex <br />
Results page <br />
User should be able to see the pokemon they caught, how many times they caught them, and how many times they encountered them. <br />

Grab your data from local storage <br />
Render a table of values showing "caught" and "encountered" for each pokemon in your pokedex <br />
