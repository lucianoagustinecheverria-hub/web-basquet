# Registro de decisiones

Cada decisión importante se anota acá: **qué se decidió, por qué y qué alternativas había**. Sirve para tu portfolio y para vos dentro de seis meses.

Formato: contexto → opciones → decisión → consecuencias. Si una decisión cambia, no se borra: se marca como *reemplazada* y se agrega la nueva.

> Los datos de precios y límites de servicios se consultaron el 27/10/2026 en fuentes de terceros. Revisá los términos oficiales antes de depender de ellos.

---

## D-001 · Framework: Next.js (React), con JavaScript

- **Estado:** aceptada · 2026-10-27
- **Contexto:** el sitio necesita cargar rápido en celular, aparecer en Google y mostrar una vista previa al compartir links. Quiero aprender React.
- **Opciones:** Vite + React (más simple, pero peor SEO y vistas previas); Astro con componentes React (muy rápido y portable); Next.js.
- **Decisión:** Next.js (App Router), con JavaScript. TypeScript queda para más adelante.
- **Consecuencias:** hay que aprender la diferencia entre componentes de servidor y de cliente. Cuanto más uso funciones propias de Vercel, más difícil mudarse.

## D-002 · Hosting: Vercel Hobby ahora, mudanza al monetizar

- **Estado:** aceptada · 2026-10-27
- **Contexto:** Vercel Hobby es gratis pero solo para uso no comercial; los anuncios requieren plan pago o mudarse.
- **Opciones:** Vercel Hobby y mudar después; Vercel Pro (USD 20 al mes); Netlify gratis (créditos limitados); Cloudflare (más generoso, más configuración con Next.js).
- **Decisión:** publicar en Vercel Hobby sin anuncios. Antes de activar anuncios, mudar a un hosting gratuito que permita uso comercial.
- **Consecuencias:** el código debe ser portable: claves en variables de entorno, datos en Supabase y nada exclusivo de Vercel.

## D-003 · Base de datos: Supabase (Postgres)

- **Estado:** aceptada · 2026-10-27
- **Contexto:** ya lo usé, es gratis para empezar y sirve también para cuentas más adelante.
- **Decisión:** Supabase, región São Paulo, con reglas de acceso por fila (público solo lectura).
- **Consecuencias:** el plan gratuito pausa el proyecto tras 7 días sin actividad. Se resuelve con un latido automático (Fase 3) y guardando el esquema y los datos iniciales en el repo.

## D-004 · Python para scripts de datos

- **Estado:** aceptada · 2026-10-27
- **Contexto:** quiero aprender Python aplicado a datos e IA.
- **Decisión:** los scripts de carga y procesamiento de datos van en Python (carpeta `scripts/`). Más adelante: simulaciones y modelos simples.
- **Consecuencias:** el proyecto usa dos lenguajes; se mantienen separados (la web en JavaScript, los datos en Python).

## D-005 · Dominio propio en un registrador independiente

- **Estado:** aceptada · 2026-10-27
- **Contexto:** mudar de hosting no debe cambiar la dirección ni perder visitas.
- **Decisión:** comprar **labandeja.net** antes de difundir el sitio, en un registrador independiente del hosting (no dentro de Vercel). No difundir nunca la dirección `.vercel.app`.
- **Consecuencias:** costo anual; conviene mirar el precio de renovación, no solo el del primer año. Mudarse implica cambiar registros DNS, no la URL. Más adelante se puede evaluar sumar `.com` o `.com.ar` para proteger el nombre.

## D-006 · Monetización: ninguna al inicio

- **Estado:** aceptada · 2026-10-27
- **Decisión:** sin anuncios hasta tener tráfico real y contenido propio. Nada de casas de apuestas. Orden de opciones: aporte voluntario, sponsor local, afiliados de equipamiento, anuncios de display.
- **Consecuencias:** la prioridad inicial es audiencia y calidad, no ingresos.

## D-007 · Datos: carga manual con fuente visible

- **Estado:** aceptada · 2026-10-27
- **Decisión:** al inicio los datos se cargan a mano indicando fuente y hora de actualización. Se pide autorización a la Asociación de Clubes. No se usan escudos ni fotos sin permiso.
- **Consecuencias:** más trabajo manual, pero sin riesgos de derechos. El vivo y las estadísticas quedan para después.

## D-008 · Estilos: CSS Modules, sin Tailwind por ahora

- **Estado:** aceptada · 2026-10-27
- **Contexto:** ya conozco CSS y no quiero sumar otra herramienta a aprender.
- **Decisión:** CSS Modules (viene incluido en Next.js).
- **Consecuencias:** más escritura de CSS. Tailwind queda como alternativa a evaluar más adelante.

## D-009 · Nombre: La Bandeja

- **Estado:** aceptada · 2026-10-27
- **Contexto:** el sitio es no oficial, así que el nombre no debe usar marcas como "Liga Nacional" o "LNB". Tiene que ser corto, fácil de decir y de recordar.
- **Decisión:** **La Bandeja** (en básquet, un tipo de lanzamiento cerca del aro). Repositorio y carpeta: `labandeja`. Dominio: labandeja.net (ver D-005).
- **Consecuencias:** antes de difundirlo hay que revisar que no choque con marcas o cuentas existentes (INPI, Instagram, X, TikTok). Una búsqueda web rápida no mostró un sitio de básquet con ese nombre, pero eso no reemplaza una búsqueda de marcas.

---

## Plantilla para decisiones nuevas

```
## D-00X · Título

- **Estado:** propuesta / aceptada / reemplazada por D-00Y · fecha
- **Contexto:** qué problema hay y qué restricciones tengo.
- **Opciones:** qué alternativas consideré.
- **Decisión:** qué elegí.
- **Consecuencias:** qué gano y qué pierdo.
```
