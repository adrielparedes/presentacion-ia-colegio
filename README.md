# De hablar con la IA a trabajar con ella

Presentación en español argentino (es-AR), con voseo, para estudiantes de unos 18 años, futuros estudiantes de ingeniería de software y biotecnología. Duración objetivo: 55 minutos. Diseño claro y minimalista, con fondo blanco, texto oscuro y acentos verde oscuro para facilitar la lectura en proyectores escolares. Sin afiliación ni uso de logotipos de ChatGPT/Codex.

## Construir las demos desde cero en vivo

El scaffold nuevo está en **[`nexobio/`](nexobio/README.md)**: Next.js con dependencias instaladas, estilo base, datos sintéticos, `AGENTS.md` y `specs/`, sin las demos implementadas. Desde esa carpeta: `npm run dev`. Seguí `nexobio/PROMPTS.md` y `nexobio/DIRECTO.md` para generarlas durante la charla. Las demos estáticas de abajo se conservan como respaldo; el guion original describe la modalidad anterior, de modificación de productos preparados.

## Abrir ahora

Desde esta carpeta:

```bash
npm start
```

- **Presentación HTML:** http://127.0.0.1:8000/presentacion/
- **PDF:** `presentacion/presentacion.pdf`
- **Panel comercial:** http://127.0.0.1:8000/demos/ventas/
- **Laboratorio:** http://127.0.0.1:8000/demos/laboratorio/
- **Respaldo comercial:** http://127.0.0.1:8000/respaldo/ventas/
- **Respaldo laboratorio:** http://127.0.0.1:8000/respaldo/laboratorio/

Python 3 y Node.js 18+ necesarios. Las diapositivas pueden abrirse directamente como archivo HTML; las demos requieren el servidor local para leer JSON. Todo lo que se proyecta funciona sin CDN, fuentes externas ni internet. Solo el agente necesita la conexión y una cuenta/modelo ya configurados.

## Antes de presentar: tu identidad

Completá `presentacion/perfil.js` con tu nombre, rol y trayectoria. No inventamos información sobre vos. Revisá también la descripción del día a día de la diapositiva 2. Después regenerá el PDF:

```bash
npm install
npm run pdf
```

La exportación usa Google Chrome instalado en macOS, o un Chromium instalado para Playwright. Podés indicar `CHROME_PATH=/ruta/al/navegador npm run pdf`. Si no tenés navegador compatible: `npx playwright install chromium`. La instalación requiere red; la exportación posterior es local.

## Controles

- Flechas / espacio: avanzar; flecha izquierda: retroceder.
- Inicio / Fin: primera / última diapositiva.
- **F:** pantalla completa.
- **N:** notas sobre la diapositiva actual. Atención: se verán en el proyector.
- Mover el mouse: controles de navegación, notas, impresión y selector **Legibilidad** (también accesibles con Tab).
- **Legibilidad:** 4K y 1080p usan texto estándar; 720p y 480p agrandan el texto. En pantallas angostas, las tarjetas se apilan verticalmente: todo el contenido sigue visible en la misma diapositiva, sin pasos adicionales. La elección se recuerda en ese navegador si permite almacenamiento local.
- Los presets no cambian la resolución física del proyector. El PDF y la impresión conservan el diseño fijo con todas las tarjetas.
- URL `#14`: abrir directamente la diapositiva 14.
- Notas privadas: `GUION.md` en una pantalla no proyectada. No hay modo ponente privado.

## Materiales

| Ruta | Contenido |
|---|---|
| `presentacion/index.html` | 25 diapositivas, navegación, notas, cierre con QR al repositorio y estilo de impresión 16:9 |
| `presentacion/presentacion.pdf` | Mismas diapositivas, sin notas |
| `GUION.md` | Texto de apoyo, tiempos y preguntas por diapositiva |
| `DIRECTO.md` | Orden de ventanas, prompts, retos y plan de contingencia |
| `ALUMNOS.md` | Resumen y pequeño reto para después de la sesión |
| `fuentes.md` | Referencias y límites de las afirmaciones |
| `demos/*/PROMPTS.md` | Prompts para copiar en pi |
| `demos/ventas/BRIEF.md` | Definiciones y criterios del panel |
| `demos/laboratorio/PROTOCOLO.md` | Reglas del ensayo sintético |
| `respaldo/` | Versiones terminadas independientes del modelo |
| `tests/` | Pruebas de cálculo y condiciones de bloqueo |
| `verificacion/` | Capturas y resultados locales de validación; se regeneran con los verificadores y no se versionan |

## Enfoque de las demos

No fingir que los productos se han construido desde cero en vivo: son puntos de partida preparados. El público elige un cambio, vos lo delimitás, pi con Codex lo implementa y se revisa su resultado en terminal y navegador. Los prompts incluyen alternativas más cortas.

Una petición vaga no está obligada a fallar. Si el agente hace buenas preguntas, señalarlo como una conducta positiva. El contraste es la evidencia disponible, no un truco para hacer quedar mal al modelo.

El harness de esta sesión es deliberadamente pequeño: archivos de contexto, herramientas de ejecución, criterios y revisión. **No configura aislamiento de seguridad**. No usar secretos, datos de empresa ni permisos de producción. Las instrucciones no sustituyen controles técnicos.

## Verificación y edición

```bash
npm test                  # cálculos y reglas, sin dependencias externas
node scripts/check.mjs    # navegador, demos, descarga, respaldos y capturas
npm run pdf               # exportación y comprobación de maquetación
```

Editar texto y notas en `scripts/build_slides.py`, ejecutar `python3 scripts/build_slides.py` y volver a exportar. `presentacion/contenido.json` es un índice generado, no la fuente de edición. `perfil.js` se conserva.

Las demos se editan directamente en `demos/`. Los scripts `build_demos.py` y `build_views.py` son generadores de origen: **no volver a ejecutarlos para iniciar la charla**, porque regeneran datos y vistas y sustituyen las copias de respaldo. No ejecutarlos después de un reto sin guardar antes los cambios que se quieran conservar.

## Ajustar la duración

- **45 minutos:** introducción 10, software 10, laboratorio 10, síntesis 5 y preguntas 10. Elegir solo un reto en vivo; mostrar el resultado del otro.
- **55–60 minutos:** seguir `GUION.md`, con ambos retos acotados y 9–14 minutos de preguntas.

No afirmar porcentajes de productividad a partir de esta demostración. Si se mide tiempo, incluir preparación, revisión y correcciones, y describir exactamente qué tarea se ha medido.
