import datos from "../data/partidos-ejemplo.json";
import ListaPartidos from "../components/ListaPartidos";
import styles from "./page.module.css";

export default function Home() {
  const deHoy = datos.partidos.filter((partido) => partido.dia === 0);

  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>La Bandeja</h1>
      <ListaPartidos partidos={deHoy} />
      <p className={styles.fuente}>
        Fuente: {datos.fuente} · Actualizado {datos.actualizado}
      </p>
    </main>
  );
}