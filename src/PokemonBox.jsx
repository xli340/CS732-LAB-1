import PokemonTile from "./PokemonTile";
import styles from "./PokemonBox.module.css";

function PokemonBox({ PokemonArray, onRemovePokemon, onChangeNickName }) {
  return (
    <div className={styles.container}>
      {PokemonArray.map((item, index) => (
        <PokemonTile
          key={item.id}
          Pokemon={item}
          onRemovePokemon={onRemovePokemon}
          onChangeNickName={onChangeNickName}
        />
      ))}
    </div>
  );
}

export default PokemonBox;
