# 04 · Guía de estilo

> Fase 1 · Diseño sin código. Una página con las decisiones visuales, para que todas las pantallas se vean como parte del mismo sitio y para no decidir colores a mitad de la programación.
> Los puntos marcados con ✏️ **COMPLETAR** son tuyos.

**Última revisión:** 2026-10-27

---

## Principios visuales

1. **Rápido**: sin imágenes pesadas ni fuentes que descargar al principio. La velocidad es parte del diferencial.
2. **Legible**: se lee bien al sol, de pie y con una mano.
3. **Sobrio**: poco color, y un acento que identifique al sitio.
4. **Sin escudos ni fotos** en el MVP: cada equipo se identifica con su nombre y una abreviatura.

## Color

Se definen como **variables** con nombre (no se escribe el código hexadecimal suelto en cada componente). Así cambiar un color es cambiar un solo lugar.

| Variable | Valor | Para qué |
|---|---|---|
| `--color-fondo` | `#FFFFFF` | Fondo de la página |
| `--color-superficie` | `#F5F5F4` | Fondo de tarjetas |
| `--color-borde` | `#E7E5E4` | Líneas y bordes |
| `--color-texto` | `#1C1917` | Texto principal |
| `--color-texto-suave` | `#57534E` | Texto secundario (fuente, hora) |
| `--color-acento` | `#C2410C` | Botones, enlaces, estado activo de la navegación |
| `--color-acento-suave` | `#FFEDD5` | Fondo de elementos destacados (con texto oscuro) |
| `--color-en-juego` | `#B91C1C` | Etiqueta "EN JUEGO" |
| `--color-aviso` | `#92400E` | Postergado o suspendido |

**Contraste:** los textos tienen que cumplir un contraste mínimo de 4,5 a 1 contra su fondo (nivel AA de las pautas de accesibilidad web). Estos colores fueron elegidos para cumplirlo, pero **verificalo vos**: en Chrome, clic derecho sobre un texto → Inspeccionar → el selector de color muestra la relación de contraste.

✏️ **COMPLETAR:** ¿te gusta el naranja como acento (recuerda a la pelota) o preferís otro? Si cambiás el color, volvé a verificar el contraste.

## Tipografía

- **Fuente:** la del sistema (la que ya trae cada celular). No se descarga nada, así que el texto aparece al instante.
  `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- **Alternativa más adelante:** una fuente propia con `next/font`, que Next.js entrega optimizada. Se evalúa cuando el resto esté terminado.

| Uso | Tamaño | Peso |
|---|---|---|
| Texto base | 16 px | Normal |
| Texto chico (fuente, hora) | 14 px | Normal |
| Títulos de sección | 20 px | Negrita |
| Marcador | 24 px | Negrita |

Los números del marcador y de la tabla usan `font-variant-numeric: tabular-nums`, que hace que todos los dígitos ocupen el mismo ancho y las columnas queden alineadas.

## Espaciado y forma

- **Escala de espacios:** 4, 8, 12, 16, 24 y 32 px. No se usan otros valores.
- **Bordes redondeados:** 8 px.
- **Zonas táctiles:** mínimo 44 × 44 px para todo lo que se toca.

## Componentes

| Componente | Descripción | Estados |
|---|---|---|
| `TarjetaPartido` | Estado, dos equipos y marcador. Se toca entera | programado, en juego, final, postergado |
| `EtiquetaEstado` | Texto corto: "FINAL", "EN JUEGO · Cuarto 3", "21:00" | uno por estado (texto + color) |
| `SelectorDia` | ‹ Hoy › para cambiar de día | día actual, sin partidos |
| `FilaTabla` | Posición, equipo y números | normal, destacada (equipo seleccionado) |
| `BarraNavegacion` | Hoy · Tabla, fija abajo | pestaña activa |
| `PieFuente` | "Fuente: ___ · Actualizado hh:mm" | normal, desactualizado |

**Detalles de diseño:**
- En una tarjeta final, el equipo ganador se muestra con el marcador en **negrita**, no solo con color.
- La etiqueta "EN JUEGO" puede tener un punto que parpadea, pero debe respetar la preferencia del usuario de reducir animaciones (`prefers-reduced-motion`).

## Accesibilidad (revisión mínima)

- [ ] Contraste de texto de 4,5 a 1 o mejor
- [ ] Zonas táctiles de 44 px o más
- [ ] El estado de un partido siempre está escrito, no solo coloreado
- [ ] Foco visible al navegar con teclado
- [ ] Un solo título principal (`h1`) por página
- [ ] Idioma de la página declarado como español

## Logo

Para el MVP: **solo texto**, "La Bandeja", sin imagen. Es liviano y se ve nítido en cualquier pantalla.

✏️ **COMPLETAR:** ¿en mayúsculas, minúsculas o con un peso distinto? Probá 2 o 3 variantes en tu boceto.

## Cómo se usará en el código

Esto se implementa en la **Fase 2**; por ahora es solo referencia. Las variables van en `src/app/globals.css` y los componentes en `src/components/`, cada uno con su archivo de estilos (CSS Modules).

```css
/* src/app/globals.css (Fase 2) */
:root {
  --color-fondo: #ffffff;
  --color-superficie: #f5f5f4;
  --color-borde: #e7e5e4;
  --color-texto: #1c1917;
  --color-texto-suave: #57534e;
  --color-acento: #c2410c;
  --color-acento-suave: #ffedd5;
  --color-en-juego: #b91c1c;
  --color-aviso: #92400e;
}
```

**Modo oscuro:** queda fuera del MVP. Tener los colores como variables lo deja preparado para sumarlo después.
