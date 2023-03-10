import styles from "./PokemonTile.module.css";

function PokemonTile({ Pokemon, onRemovePokemon, onChangeNickName }) {
  const hasNickname = (Pokemon.originalName !== Pokemon.name);

  return (
    <div className={hasNickname ? `${styles.container} ${styles.nicknamed}`: styles.container}>
      <img
        onDoubleClick={() => onRemovePokemon(Pokemon)}
        src={Pokemon.image}
      ></img>
      <input
        type="text"
        value={Pokemon.name}
        onChange={(e) => onChangeNickName(Pokemon, e.target.value)}
      />
    </div>
  );
}

export default PokemonTile;
