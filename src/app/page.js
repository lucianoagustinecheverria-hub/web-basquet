import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>La Bandeja</h1>
      <p>Próximamente: los partidos de hoy.</p>
    </main>
  );
}