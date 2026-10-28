# 05 · Fase 2 · React con datos de ejemplo

**Objetivo:** construir la pantalla **Hoy** con React usando datos de ejemplo, para aprender los fundamentos sin sumar todavía la base de datos.

**Listo cuando:** la página Hoy se ve bien en tu celular, con el selector de día funcionando y publicada en Vercel.

**Duración estimada:** unas 2 semanas (alrededor de 16 horas).

**Última revisión:** 2026-10-27

---

## Subpasos

Cada subpaso termina con algo que se ve funcionando. No se pasa al siguiente hasta que el anterior anda.

- [x] **2.0 · Rama de trabajo.** Crear la rama `fase-2` para no tocar la web publicada (`main`) hasta que todo funcione.
- [x] **2.1 · Base del proyecto.** `layout.js` y `globals.css` con el idioma, el título y las variables de la guía de estilo.
  *Aprendés:* qué es el layout y cómo se aplican estilos globales.
- [x] **2.2 · Datos de ejemplo.** Agregar `src/data/partidos-ejemplo.json`.
  *Aprendés:* cómo se estructuran los datos y por qué se parecen a la futura base.
- [x] **2.3 · Primer componente.** `TarjetaPartido` con su archivo de estilos, mostrando un partido.
  *Aprendés:* componentes, props, JSX y CSS Modules.
- [x] **2.4 · Lista agrupada.** Mostrar todos los partidos, agrupados por competencia.
  *Aprendés:* listas con `map`, la prop `key` y cómo agrupar datos.
- [x] **2.5 · Selector de día.** Cambiar de día con ‹ y ›.
  *Aprendés:* estado con `useState`, componentes de cliente y filtrar datos.
- [x] **2.6 · Celular y publicación.** Revisar en un celular real, unir la rama a `main` y publicar.
  *Aprendés:* vista previa de ramas, Pull Request y despliegue.

## Mapa de archivos al terminar la fase

```
src/
  app/
    layout.js            ← estructura común a todas las páginas
    globals.css          ← variables de color y estilos base
    page.js              ← la pantalla Hoy
    page.module.css      ← estilos de esa pantalla
  components/
    TarjetaPartido.js
    TarjetaPartido.module.css
    ...                  ← los demás componentes de la fase
  data/
    partidos-ejemplo.json
```

## Glosario de la fase

| Término | Qué es |
|---|---|
| **Componente** | Una función que devuelve un pedazo de pantalla. Se reutiliza |
| **JSX** | La sintaxis que mezcla JavaScript con algo parecido a HTML |
| **Props** | Los datos que un componente recibe de quien lo usa |
| **Estado** | Un dato que, al cambiar, hace que React vuelva a dibujar la pantalla |
| **`key`** | Identificador único de cada elemento de una lista |
| **CSS Modules** | Estilos que solo afectan al componente que los importa |
| **Rama (branch)** | Una línea de trabajo paralela en Git |
| **Vista previa** | Una versión publicada de una rama, con su propio link, para probar sin tocar la web real |

## Decisiones para registrar en `decisiones.md`

- Por qué los datos de ejemplo tienen una forma parecida a la futura base de datos.
- Por qué los días del ejemplo son relativos (`dia`: 0 es hoy, -1 ayer, 1 mañana): para que "Hoy" siempre tenga contenido sin editar fechas.

## Diario de aprendizaje (completá al cerrar cada subpaso)

| Subpaso | Qué aprendí | Qué se trabó | Cómo lo resolví |
|---|---|---|---|
| 2.1 | | | |
| 2.2 | | | |
| 2.3 | | | |
| 2.4 | | | |
| 2.5 | | | |
| 2.6 | | | |
