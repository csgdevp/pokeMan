const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 150; i++) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("pokeman");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemonDiv.appendChild(newImg);
  pokemonDiv.appendChild(label);
  container.appendChild(pokemonDiv);
}
