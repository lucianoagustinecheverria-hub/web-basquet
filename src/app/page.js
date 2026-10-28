import datos from "../data/partidos-ejemplo.json";
import PantallaHoy from "../components/PantallaHoy";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>La Bandeja</h1>
      <PantallaHoy partidos={datos.partidos} />
      <p className={styles.fuente}>
        Fuente: {datos.fuente} · Actualizado {datos.actualizado}
      </p>
    </main>
  );
}