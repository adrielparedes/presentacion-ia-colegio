# NexoBio · Construcción en vivo

Scaffold Next.js para generar los productos durante la charla. **No incluye el panel ni el laboratorio implementados.** Sí incluye dependencias instaladas, estilo base, datos, specs, AGENTS.md y herramientas de verificación.

## Arrancar

```bash
cd nexobio                 # desde la carpeta de la presentación
npm run dev
```

Abrí http://127.0.0.1:3000. Vas a ver una portada neutra: «Todavía no hay un panel. Lo vamos a construir acá».

En otra terminal, desde `nexobio/`, abrí pi con el modelo Codex configurado en tu equipo y copiá el primer prompt de construcción de `PROMPTS.md`. No hace falta instalar dependencias ni dar de alta servicios. El scaffold no configura tu cuenta/modelo ni un sandbox.

## Qué está preparado y qué no

| Preparado | Se construye en vivo |
|---|---|
| Next.js App Router, React y TypeScript | Rutas /ventas y /laboratorio |
| Tailwind 4, tokens y componentes genéricos | Layouts específicos, filtros, tablas y gráficos |
| Lucide, Recharts, Zod, clsx, tailwind-merge | Validación y cálculos de negocio |
| Vitest, Testing Library, jsdom, Playwright | Pruebas de las reglas de cada demo |
| Biome y scripts de compilación | Informe y descarga de QC |
| JSON sintéticos y protocolo | Conclusiones descriptivas vinculadas a datos |

Las pruebas existentes son **solo del scaffold**. No confundirlas con validación de las demos. Las specs contienen números esperados, no implementaciones. No se copió lógica de negocio de los respaldos.

## Archivos principales

- `AGENTS.md`: alcance, lectura de contexto, stack, seguridad y cómo trabajar.
- `specs/00-contexto.md`: historia y secuencia.
- `specs/01-estilo.md`: diseño y accesibilidad.
- `specs/02-ventas.md`: producto comercial y aceptación.
- `specs/03-laboratorio.md`: protocolo y producto de QC.
- `specs/04-verificacion.md`: pruebas que el agente tiene que crear.
- `PROMPTS.md`: pedidos cortos para cada etapa y desafíos.
- `DIRECTO.md`: orden de ventanas y contingencias para este modo desde cero.
- `data/`: ventas, laboratorio y protocolo sintéticos (no modificar en vivo).
- `app/globals.css`: estilo base oscuro inspirado en ChatGPT/Codex; sin logos ni afiliación.
- `components/ui/`: Card, Badge y Button genéricos, sin lógica de dominio.

Todo el contenido y la UI están en español argentino. Moneda de estos datos ficticios: EUR. No se necesita red para renderizar la app: solo para que el agente consulte al modelo. No usa Google Fonts ni CDN.

## Comprobar

```bash
npm run check              # lint, TypeScript, tests
npm run build              # compilación de producción
npm run start              # servir esa compilación; no usar a la vez en el mismo puerto que dev
```

Node 24 recomendado (`.nvmrc`); Node 22.12+ compatible con el tooling actual. `package-lock.json` fija las versiones instaladas. Para reproducir en otra máquina: `npm ci` (requiere red y descarga de paquetes). Playwright está instalado, pero los binarios de navegador no se descargaron: usá el Chrome existente o instalalos antes, nunca en medio de la charla.

## Presentación y respaldos

Las demos estáticas de `../demos/` y `../respaldo/` quedan intactas para el presentador. No son fuentes que el agente deba copiar. Se sirven por separado desde la carpeta padre con `npm start` en puerto 8000. Si el agente falla o se demora, abrí esas demos y aclarale al público que estás mostrando una versión preparada.

`DIRECTO.md` de esta carpeta describe la modalidad nueva. El guion original de la carpeta padre incluye pasajes pensados para modificar productos ya preparados: no leer esas frases como si describieran este scaffold.

## Seguridad y regreso al punto inicial

Trabajá sin secretos y sin permisos de producción. AGENTS.md y los prompts no impiden técnicamente acceder a otros archivos. Revisá los comandos y los permisos de las herramientas.

Antes del directo podés guardar una copia del código base o un commit en tu propio repositorio (sin node_modules, .next ni credenciales). No se creó un repositorio ni un comando de reset destructivo automáticamente. No borres trabajo para reiniciar sin guardarlo primero.
