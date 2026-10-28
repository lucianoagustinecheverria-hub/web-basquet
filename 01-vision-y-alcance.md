# 01 · Visión y alcance

> Documento vivo: se escribe **antes de programar** y se revisa al final de cada fase.
> Los puntos marcados con ✏️ **COMPLETAR** son tuyos: nadie más puede decidirlos.

**Última revisión:** 2026-10-27 · **Fase:** 0 (Planificación y entorno)

---

## 1. Resumen en una frase

✏️ **COMPLETAR** con tus palabras. Ejemplo para inspirarte:

> Un sitio no oficial, rápido y pensado para el celular, donde cualquier hincha encuentra en segundos los partidos de hoy, cómo salieron y cómo está la tabla del básquet argentino.

## 2. Por qué existe este proyecto

- **Aprender construyendo**: React/Next.js, bases de datos, APIs, despliegue, pruebas, accesibilidad y SEO, entendiendo el porqué de cada decisión.
- **Portfolio**: un proyecto completo, publicado, con decisiones documentadas.
- **Comunidad**: resolver una necesidad real de quienes siguen el básquet (a validar, ver sección 9).

✏️ **COMPLETAR**: ¿por qué te importa a vos este proyecto? (2 o 3 líneas)

## 3. Problema (hipótesis a validar)

Estas son **hipótesis**, no hechos. Hay que confirmarlas con la auditoría de competidores y con usuarios reales.

- Hay sitios y apps generales de resultados (Flashscore, Sofascore), medios y portales de básquet (Volcala, Pasión Naranja, Basket.com.ar) y los sitios oficiales de las ligas.
- Hipótesis: falta una experiencia **muy rápida y clara en celular**, centrada solo en el básquet argentino y con buena cobertura de lo local.
- Pendiente: completar la auditoría (cobertura, vivo, estadísticas, historia, experiencia móvil, fortalezas y puntos flojos de cada uno).

## 4. Usuarios

| Usuario | Qué quiere hacer en menos de 10 segundos |
|---|---|
| Hincha del día a día | Ver qué partidos hay hoy y cómo salieron |
| Seguidor de un club en particular | Ver el próximo partido y la tabla |
| Periodista o gente de un club *(futuro)* | Consultar y compartir resultados |

## 5. Propuesta de valor y diferencial

1. **Velocidad y claridad en celular**: "Hoy" a un toque, sin publicidad pesada.
2. **Foco local**: básquet argentino primero, empezando por la Liga Nacional.
3. **Tarjetas compartibles** por WhatsApp (resultado por cuarto y tabla).
4. **Transparencia**: cada dato muestra su fuente y cuándo se actualizó.

Ideas para después del MVP: predicciones con puntos y un minijuego de carrera.

## 6. Alcance del MVP

### Entra
- [ ] **Hoy**: partidos del día agrupados por competencia, con estado (programado, en juego, final).
- [ ] **Detalle de partido**: marcador, parcial por cuarto, hora y sede.
- [ ] **Tabla de posiciones** de la Liga Nacional.
- [ ] **Fixture y resultados** por fecha o por equipo.
- [ ] **Página de equipo**: próximos partidos y últimos resultados.
- [ ] Páginas de **Fuentes** y **Privacidad**.
- [ ] Tarjeta compartible *(solo si da el tiempo)*.

### No entra (backlog en orden de prioridad)
1. Predicciones con puntos y ranking (cuentas opcionales).
2. Minijuego de carrera (versión mínima).
3. Liga Argentina y otras competencias.
4. Estadísticas, líderes y fichas de jugadores.
5. Resultados en vivo automáticos.
6. Archivo histórico, selecciones, mundiales y Juegos Olímpicos.
7. Anuncios y otras formas de ingreso.

> **Regla:** si algo nuevo quiere entrar al MVP, hay que sacar otra cosa.

## 7. Restricciones

- **Presupuesto:** cercano a $0. Único gasto previsto: un dominio propio.
- **Tiempo:** ✏️ **COMPLETAR** horas por semana disponibles: ___
- **Equipo:** una persona. Nivel actual: principiante con unas 100 a 120 horas de práctica; se aprende mientras se construye.
- **Sitio no oficial:** sin afiliación con la Asociación de Clubes ni con los clubes.
- **Datos:** solo con permiso, o cargados a mano indicando la fuente.

## 8. Datos y permisos

No se copian datos de otros sitios sin revisar sus condiciones.

| Dato | Plan inicial | Pendiente |
|---|---|---|
| Equipos, fixture y resultados | Carga manual con fuente anotada | Pedir autorización o una fuente oficial a la Asociación de Clubes |
| Parciales por cuarto | Carga manual | — |
| Estadísticas de jugadores | Fuera del MVP | Evaluar fuente licenciada |
| Resultados en vivo | Fuera del MVP | Evaluar API licenciada y su cobertura real |
| Escudos y fotos | No se usan (abreviaturas y colores) | Pedir permiso a cada club |

Cada pantalla muestra **fuente** y **hora de última actualización**.

## 9. Validación con usuarios

Antes de invertir más tiempo:
- [ ] 5 a 8 entrevistas cortas (hinchas, periodistas locales, gente de clubes).
- [ ] Prueba "concierge" de 2 semanas: publicar a mano resultados y tabla (página simple, canal de WhatsApp o Instagram) y ver si la gente vuelve y comparte.
- [ ] Preguntas guía: ¿qué hiciste la última vez que quisiste saber un resultado? ¿qué usás hoy? ¿qué te molesta?

✏️ **COMPLETAR**: a quiénes vas a entrevistar (nombres o perfiles): ___

## 10. Criterios de éxito

**Técnicos (MVP):**
- [ ] "Hoy" se alcanza en 2 toques o menos desde la home.
- [ ] Lighthouse móvil ≥ 90 en Rendimiento, Accesibilidad y SEO.
- [ ] Cargar un resultado lleva menos de 2 minutos.
- [ ] Publicado en dominio propio.

**De producto:** ✏️ **COMPLETAR** con números realistas
- ___ personas lo prueban el primer mes.
- ___ vuelven la semana siguiente.
- ___ comparten al menos un resultado.

**De aprendizaje:**
- [ ] Puedo explicar cada decisión de `decisiones.md`.
- [ ] README y caso de estudio listos para el portfolio.

## 11. Riesgos

| Riesgo | Qué hago |
|---|---|
| No consigo datos confiables ni permisos | Carga manual con fuente visible; pedir autorización a la Asociación de Clubes |
| Me falta tiempo | Recortar alcance, no calidad; el orden de las fases no cambia |
| Supabase pausa el proyecto gratuito | Latido automático y archivos para reconstruir la base |
| Hosting gratuito no permite anuncios | Mudanza planificada antes de monetizar (ver `decisiones.md`, D-002) |
| Problemas legales con marcas, escudos o datos | Sitio no oficial, nombre neutral, sin escudos ni fotos sin permiso |
| El alcance crece sin control | Regla de la sección 6 |

## 12. Preguntas abiertas

- [x] Nombre: **La Bandeja** · dominio: **labandeja.net** (pendiente de comprar).
- [ ] Revisar que el nombre no choque con marcas o cuentas existentes (registro de marcas del INPI, Instagram, X, TikTok).
- [ ] Horas por semana disponibles.
- [ ] ¿Quién puede darme datos oficiales?
- [ ] Licencia del repositorio público (por ejemplo MIT).
