import styles from "./SelectorDia.module.css";

function etiquetaDia(dia) {
  if (dia === 0) return "Hoy";
  if (dia === -1) return "Ayer";
  if (dia === 1) return "Mañana";
  return dia > 0 ? `En ${dia} días` : `Hace ${-dia} días`;
}

export default function SelectorDia({ dia, minimo, maximo, onCambiar }) {
  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.boton}
        aria-label="Día anterior"
        disabled={dia <= minimo}
        onClick={() => onCambiar(dia - 1)}
      >
        ‹
      </button>
      <p className={styles.etiqueta} aria-live="polite">
        {etiquetaDia(dia)}
      </p>
      <button
        type="button"
        className={styles.boton}
        aria-label="Día siguiente"
        disabled={dia >= maximo}
        onClick={() => onCambiar(dia + 1)}
      >
        ›
      </button>
    </div>
  );
}