import datos from "../data/partidos-ejemplo.json";
import TarjetaPartido from "../components/TarjetaPartido";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>La Bandeja</h1>
      <TarjetaPartido partido={datos.partidos[4]} />
      <p className={styles.fuente}>
        Fuente: {datos.fuente} · Actualizado {datos.actualizado}
      </p>
    </main>
  );
}