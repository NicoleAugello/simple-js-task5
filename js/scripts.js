//  TASK  5

// Declaration of pokemon array - wrapped in an IIFE
let pokemonRepository = (function () {
let pokemonList = [
    { name: 'Jigglypuff', height: 5, types:  ['poision', 'bug']},
    { name: 'Charmeleon', height: 11, types:  ['ground', 'steel']},
    { name: 'Raichu', height: 8, types:  ['fire', 'flying']}
  ];
    return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

//retrieve the pokemonList array + MESSAGE (CORRECTION)  display the same display as before, with the phrase WOW! That's BIG! for the larger Pokémon.



pokemonRepository.getAll().forEach(function(pokemon) {
  let message = "";
  if (pokemon.height > 10) {
    message = " - Wow, that's Big!";
  }
  document.write(`<h1 style="display:inline;">${pokemon.name} (Height: ${pokemon.height}) </h1> <span style="font-size:1em; font-weight:normal;">${message}</span> <br>`);
});


/// extra Filter Practice
const results = pokemonRepository.getAll().filter(pokemon => pokemon.height > 10);
document.write("<p>Filtered Results (Pokemon Height > 10):</p>");
results.forEach(function(pokemon) {
    document.write("<p>" + `${pokemon.name} - (Height: ${pokemon.height})` + "</p>" );
});