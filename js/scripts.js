let pokemonList = [
    { name: 'Jigglypuff', height: 5, types:  ['poision', 'bug']},
    { name: 'Charmeleon', height: 11, types:  ['ground', 'steel']},
    { name: 'Raichu', height: 8, types:  ['fire', 'flying']}
];

//  TASK  5 
// Declaration of pokemon array - forEach() function

pokemonList.forEach(function(pokemon) {
    document.write(
        `<h1>${pokemon.name} (Height: ${pokemon.height})</h1>`
    );
});