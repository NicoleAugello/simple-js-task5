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

//retrieve the pokemonList array
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<h1>" + `${pokemon.name} - (Height: ${pokemon.height})` + "</h1>" );
});

/// extra Filter Practice
const results = pokemonRepository.getAll().filter(pokemon => pokemon.height > 10);
document.write("<p>Filtered Results (Pokemon Height > 10):</p>");
results.forEach(function(pokemon) {
    document.write("<p>" + `${pokemon.name} - (Height: ${pokemon.height})` + "</p>" );
});