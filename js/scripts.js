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


// PokemonRepository to find Pokémon whose names start with A-M.
document .write("<br><hr><h1>Pokémon names start with A-M:</h1>");

//Filter Part
pokemonRepository.filterByName = function() {
  return pokemonRepository.getAll().filter(function(pokemon) {
    let firstChar = pokemon.name.charAt(0).toUpperCase();
    return firstChar >= 'A' && firstChar <= 'M';
  });
};
let foundPokemon = pokemonRepository.filterByName();

// Display 
foundPokemon.forEach(function(pokemon) {
  let message = "";
  if (pokemon.height > 10) {
    message = " - Wow, that's Big!";
  }
  document.write(`<h2 style="display:inline;">${pokemon.name} (Height: ${pokemon.height}) </h2> <span style="font-size:1em; font-weight:normal;">${message}</span> <br>`);
});

