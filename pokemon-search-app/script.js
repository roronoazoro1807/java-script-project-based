async function searchPokemon() {
  const name = document
    .getElementById("pokemonInput")
    .value.trim()
    .toLowerCase();

  const query = `
  {
  getPokemon(pokemon: ${name}){
  sprite
  num
  species
  color
  }
  }
  `;

  const res = await fetch("https://graphqlpokemon.favware.tech/v8/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  const poke = data.data.getPokemon;

  if (poke) {
    document.getElementById("pokemonResult").innerHTML = `
    <img src="${poke.sprite}" alt="${poke.species}" />
      <p><strong>#${poke.num}</strong> - ${poke.species}</p>
      <p>Color: ${poke.color}</p>
    `;
  } else {
    document.getElementById("pokemonResult").innerHTML =
      "<p>Pokemon not found</p>";
  }
}
