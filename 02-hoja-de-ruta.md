# 02 · Hoja de ruta

Cada fase termina con algo **funcionando** antes de pasar a la siguiente. Tildá las casillas a medida que avances.

**Estimación:** 14 a 16 semanas a unas 8 horas semanales. Si tenés menos tiempo se estira; el orden no cambia.

---

## Fase 0 · Planificación y entorno (1 semana)

**Listo cuando:** cambiás un texto, hacés `git push` y la web publicada se actualiza sola.

- [ ] Completar los puntos ✏️ de `01-vision-y-alcance.md`
- [ ] Instalar Node.js (versión LTS), Git y VS Code; verificar con `node -v` y `git --version`
- [ ] Configurar Git (nombre y email) y crear la cuenta de GitHub
- [ ] Crear el proyecto Next.js
- [ ] Copiar `README.md` y la carpeta `docs/` al proyecto
- [ ] Primer commit y `push` a GitHub
- [ ] Conectar Vercel y publicar
- [ ] Probar el ciclo: cambio → push → web actualizada
- [ ] Anotar qué aprendiste y qué se trabó (diario de aprendizaje, opcional pero recomendado)

## Fase 1 · Diseño sin código (1 a 2 semanas)

**Listo cuando:** podés explicar cada pantalla en una frase.

- [ ] Bocetos móviles de 4 pantallas: Hoy, Partido, Tabla y Equipo
- [ ] Guía de estilo de una página: colores, tipografía y 3 componentes (tarjeta de partido, fila de tabla, barra de navegación)
- [ ] Tareas de las fases 2 a 4 cargadas en GitHub Issues

## Fase 2 · React con datos de ejemplo (2 semanas)

**Listo cuando:** la página Hoy se ve bien en tu celular, sin base de datos todavía.

- [ ] Componente `TarjetaPartido` y lista de partidos
- [ ] Selector de día (estado)
- [ ] Datos desde `partidos-ejemplo.json`
- [ ] Publicado en Vercel

## Fase 3 · Base de datos (1 a 2 semanas)

**Listo cuando:** una consulta en el panel de Supabase devuelve los partidos de una fecha.

- [ ] Proyecto de Supabase (región São Paulo)
- [ ] Tablas: equipos, temporadas, partidos y parciales por cuarto (`database/schema.sql`)
- [ ] Reglas de acceso por fila: público solo lectura
- [ ] Script de Python que carga datos desde un CSV (`scripts/cargar_datos.py`)
- [ ] `.env.example` y latido automático anti-pausa
- [ ] Nota de seguridad en `docs/`

## Fase 4 · Conectar web y datos (2 semanas)

**Listo cuando:** cargás un partido en Supabase y aparece en la web publicada.

- [ ] Instalar `@supabase/supabase-js` y crear `src/lib/supabase.js`
- [ ] Reemplazar el JSON por la consulta real
- [ ] Variables de entorno configuradas en Vercel

## Fase 5 · Tabla, partido y equipo (3 semanas)

**Listo cuando:** se navega entre las 4 pantallas sin errores.

- [ ] Rutas dinámicas para partido y equipo
- [ ] Cálculo de la tabla de posiciones
- [ ] Pruebas automáticas de la tabla (incluidos los desempates)

## Fase 6 · Carga de resultados (2 semanas)

**Listo cuando:** podés actualizar un partido real justo después de que termina.

- [ ] Login con Supabase Auth
- [ ] Ruta `/admin` con formulario
- [ ] Reglas para que solo vos puedas escribir
- [ ] *Atajo:* cargar por script y dejar el panel para después

## Fase 7 · Calidad y salida (2 semanas)

**Listo cuando:** el sitio está en dominio propio y pasa los criterios de éxito técnicos.

- [ ] Metadatos y vista previa al compartir, sitemap
- [ ] Accesibilidad y puntaje de Lighthouse
- [ ] Páginas de Fuentes y Privacidad
- [ ] Analítica básica y Google Search Console
- [ ] Dominio labandeja.net conectado
- [ ] Caso de estudio en el README

## Después del MVP

1. Predicciones con puntos y ranking
2. Minijuego de carrera (versión mínima)
3. Liga Argentina y más competencias
4. Estadísticas y fichas de jugadores
5. Vivo, histórico y monetización (con la mudanza de hosting planificada)
