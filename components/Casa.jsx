import styles from "../styles/Tabuleiro.module.css";

export default function Casa(props) {
  console.log(props.cor);
  return (
    <div>
      <h1>Tabuleiro</h1>
      <div className={styles.casa}>
        <div
          style={{ backgroundColor: props == "preta" ? "#000" : "#fff" }}
        ></div>
      </div>
    </div>
  );
}
