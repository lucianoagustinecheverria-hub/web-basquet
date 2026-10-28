import styles from "./TarjetaPartido.module.css";

function textoEstado(partido) {
  if (partido.estado === "final") return "FINAL";
  if (partido.estado === "en_juego") return `EN JUEGO · Cuarto ${partido.cuartoActual}`;
  if (partido.estado === "postergado") return "POSTERGADO";
  return partido.hora;
}

function claseEstado(estado) {
  if (estado === "en_juego") return styles.enJuego;
  if (estado === "postergado") return styles.aviso;
  return "";
}

export default function TarjetaPartido({ partido }) {
  const { local, visitante } = partido;
  const hayMarcador = partido.estado === "final" || partido.estado === "en_juego";
  const gana = partido.estado === "final";
  const ganaLocal = gana && local.puntos > visitante.puntos;
  const ganaVisitante = gana && visitante.puntos > local.puntos;

  return (
    <article className={styles.tarjeta}>
      <p className={`${styles.estado} ${claseEstado(partido.estado)}`}>
        {textoEstado(partido)}
      </p>
      <div className={`${styles.fila} ${ganaLocal ? styles.ganador : ""}`}>
        <span>{local.nombre}</span>
        <span className={styles.puntos}>{hayMarcador ? local.puntos : "–"}</span>
      </div>
      <div className={`${styles.fila} ${ganaVisitante ? styles.ganador : ""}`}>
        <span>{visitante.nombre}</span>
        <span className={styles.puntos}>{hayMarcador ? visitante.puntos : "–"}</span>
      </div>
    </article>
  );
}