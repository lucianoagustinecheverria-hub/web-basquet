import TarjetaPartido from "./TarjetaPartido";
import styles from "./ListaPartidos.module.css";

export default function ListaPartidos({ partidos }) {
  if (partidos.length === 0) {
    return <p className={styles.vacio}>No hay partidos para este día.</p>;
  }

  const competiciones = [...new Set(partidos.map((p) => p.competicion))];

  return (
    <div>
      {competiciones.map((competicion) => {
        const delGrupo = partidos
          .filter((p) => p.competicion === competicion)
          .sort((a, b) => a.hora.localeCompare(b.hora));

        return (
          <section key={competicion} className={styles.grupo}>
            <h2 className={styles.competicion}>{competicion}</h2>
            {delGrupo.map((partido) => (
              <TarjetaPartido key={partido.id} partido={partido} />
            ))}
          </section>
        );
      })}
    </div>
  );
}