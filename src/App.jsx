import PokemonBox from "./PokemonBox";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [PokemonArray, setPokemon] = useState([]);

  async function addrandomPokemon() {
    const rnd = Math.floor(Math.random() * 1008) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${rnd}`;
    const reponse = await fetch(url);
    const data = await reponse.json();
    const newPokemon = {
      id: uuid(),
      originalName: data.name,
      name: data.name,
      image: data.sprites.front_default,
    };
    setPokemon([...PokemonArray, newPokemon]);
  }

  function handleRemovePokemon(Pokemon) {
    if (Pokemon.originalName !== Pokemon.name) {
      return;
    }
    const newPokemon = PokemonArray.filter((item) => item.id !== Pokemon.id);
    setPokemon(newPokemon);
  }

  function handleChangeNickName(pokemon, nickname) {
    const index = PokemonArray.indexOf(pokemon);
    const newPokemon = [...PokemonArray];
    newPokemon[index] = {
      ...pokemon,
      name: nickname,
    };
    setPokemon(newPokemon);
  }

  return (
    <div>
      <h1>My Pokemon</h1>
      <button onClick={addrandomPokemon}>Add random Pokemon</button>
      <PokemonBox
        PokemonArray={PokemonArray}
        onRemovePokemon={handleRemovePokemon}
        onChangeNickName={handleChangeNickName}
      />
    </div>
  );
}

export default App;
