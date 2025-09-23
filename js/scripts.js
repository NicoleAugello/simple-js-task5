let pokemonList = [
    { name: 'Jigglypuff', height: 5, types:  ['poision', 'bug']},
    { name: 'Charmeleon', height: 11, types:  ['ground', 'steel']},
    { name: 'Raichu', height: 8, types:  ['fire', 'flying']}
];

for (let i = 0; i < pokemonList.length; i++) {
    let message = "";
    if(pokemonList[i].height > 10){
        message = "- WOW! That's BIG!";
    }

    document.write(`<h1 style="display:inline;">${pokemonList[i].name} (Height: ${pokemonList[i].height})</h1> <span style="font-size:1em; font-weight:normal;">${message}</span><br>`);
}
