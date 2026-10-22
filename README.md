# De hablar con la IA a trabajar con ella

Presentación en español argentino (es-AR), con voseo, para estudiantes de unos 18 años, futuros estudiantes de ingeniería de software y biotecnología. Duración objetivo: 55 minutos. Diseño claro y minimalista, con fondo blanco, texto oscuro y acentos verde oscuro para facilitar la lectura en proyectores escolares. Sin afiliación ni uso de logotipos de ChatGPT/Codex.

## Construir las demos desde cero en vivo

El scaffold nuevo está en **[`nexobio/`](nexobio/README.md)**: Next.js con dependencias instaladas, estilo base, datos sintéticos, `AGENTS.md` y `specs/`, sin las demos implementadas. Desde esa carpeta: `npm run dev`. Seguí `nexobio/PROMPTS.md` y `nexobio/DIRECTO.md` para generarlas durante la charla. Las demos estáticas de abajo se conservan como respaldo. `GUION.md` contiene el recorrido actualizado: preparación, construcción desde cero, comprobaciones, contingencias y notas por diapositiva.

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

Completá `presentacion/perfil.js` con tu nombre, rol y trayectoria. No inventamos información sobre vos. Revisá también la descripción del día a día de la diapositiva 3. Después regenerá el PDF:

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
| `presentacion/index.html` | 26 diapositivas, navegación, notas, cierre con QR al repositorio y estilo de impresión 16:9 |
| `presentacion/presentacion.pdf` | Mismas diapositivas, sin notas |
| `GUION.md` | Texto de apoyo, tiempos y preguntas por diapositiva |
| `nexobio/DIRECTO.md` y `nexobio/PROMPTS.md` | Guía operativa y pedidos para construir desde cero |
| `DIRECTO.md` | Modalidad anterior: modificar demos estáticas preparadas |
| `ALUMNOS.md` | Resumen y pequeño reto para después de la sesión |
| `fuentes.md` | Referencias y límites de las afirmaciones |
| `demos/*/PROMPTS.md` | Prompts para copiar en pi |
| `demos/ventas/BRIEF.md` | Definiciones y criterios del panel |
| `demos/laboratorio/PROTOCOLO.md` | Reglas del ensayo sintético |
| `respaldo/` | Versiones terminadas independientes del modelo |
| `tests/` | Pruebas de cálculo y condiciones de bloqueo |
| `verificacion/` | Capturas y resultados locales de validación; se regeneran con los verificadores y no se versionan |

## Enfoque de las demos

Construir ambos mínimos en vivo dentro de `nexobio/`, partiendo de la portada neutra y usando sus specs y prompts. Las herramientas, los datos y el estilo están preparados; los productos y sus pruebas de dominio se generan durante la charla. El público puede elegir un desafío después de comprobar el mínimo, solo si hay tiempo. Si se usa una demo estática de respaldo, identificarla como versión preparada, no como resultado de ese intento.

Una petición vaga no está obligada a fallar. Si el agente hace buenas preguntas, señalarlo como una conducta positiva. El contraste es la evidencia disponible, no un truco para hacer quedar mal al modelo.

El harness de esta sesión es deliberadamente pequeño: archivos de contexto, herramientas de ejecución, criterios y revisión. **No configura aislamiento de seguridad**. No usar secretos, datos de empresa ni permisos de producción. Las instrucciones no sustituyen controles técnicos.

## Verificación y edición

```bash
npm test                  # cálculos y reglas, sin dependencias externas
node scripts/check.mjs    # navegador, demos, descarga, respaldos y capturas
npm run pdf               # exportación y comprobación de maquetación
```

Editar texto y notas en `scripts/build_slides.py`, ejecutar `python3 scripts/build_slides.py` y volver a exportar. `presentacion/contenido.json` es un índice generado, no la fuente de edición. `perfil.js` se conserva.

Los productos en vivo se construyen dentro de `nexobio/` y se verifican ahí con `npm run check` y `npm run build`. Los comandos de pruebas de la raíz verifican las demos estáticas, no las implementaciones nuevas. Si se pide modificar las demos estáticas, se editan directamente en `demos/`. Los scripts `build_demos.py` y `build_views.py` son generadores de origen: **no volver a ejecutarlos para iniciar la charla**, porque regeneran datos y vistas y sustituyen las copias de respaldo. No ejecutarlos después de un reto sin guardar antes los cambios que se quieran conservar.

## Ajustar la duración

- **45 minutos:** introducción 10, software 10, laboratorio 10, síntesis 5 y preguntas/cierre 10. Omitir ambos retos; conservar las comprobaciones y los límites de laboratorio.
- **55 minutos:** seguir `GUION.md`: introducción 12, ventas 14, laboratorio 14, síntesis 5 y preguntas/cierre 10. Los retos son opcionales.
- **60 minutos:** usar los 5 minutos adicionales para preguntas o revisión, sin ampliar el alcance por obligación.

No afirmar porcentajes de productividad a partir de esta demostración. Si se mide tiempo, incluir preparación, revisión y correcciones, y describir exactamente qué tarea se ha medido.
