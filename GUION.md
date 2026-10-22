# Guion del ponente · Construir con IA desde cero

## Cómo usar este material

Este guion es tu ayuda, no un texto para leer de corrido. El público ve las diapositivas, el IDE, pi, la terminal y el navegador. Mostrá decisiones y evidencia, no cada línea de código.

- **Guía operativa:** `nexobio/DIRECTO.md`.
- **Pedidos para copiar:** `nexobio/PROMPTS.md` (0 opcional; 1 ventas; 2 desafío comercial; 3 laboratorio; 4 sensibilidad).
- **Contexto del agente:** `nexobio/AGENTS.md`, `specs/` y `data/`. Mostrá fragmentos, no los leas completos.
- **Para después:** `ALUMNOS.md`, `fuentes.md` y el repositorio del QR final.
- **Modalidad anterior:** `DIRECTO.md` de la raíz y los prompts de `demos/` sirven para modificar productos preparados, no para esta construcción desde cero.

Las notas también están en el HTML: tecla **N**. Son visibles para el público si proyectás esa pantalla. Para notas privadas, abrí este archivo en una pantalla no proyectada; no hay una ventana de ponente privada.

## Antes de que llegue el público

1. Prepará con cmux un worktree nuevo desde el estado base del scaffold para cada charla. Confirmá el directorio; no arrastres las demos construidas en otra sesión ni hagas resets para reiniciar.
2. Revisá `presentacion/perfil.js`, Node y dependencias en la raíz y en `nexobio/`. Si faltan dependencias, ejecutá `npm ci` en cada carpeta correspondiente antes del directo. Los worktrees no heredan `node_modules/`. No descargues paquetes ni navegadores durante la charla.
3. Desde `nexobio/`, ejecutá `npm run check` y `npm run build` antes de iniciar el servidor de desarrollo. Esto verifica el scaffold, no los productos que todavía no existen. Comprobá pi con Codex seleccionado y conexión al modelo.
4. Identificá cualquier servidor existente y el worktree que sirve. Los puertos de abajo son los previstos: si están ocupados por otra sesión, acordá otros y ajustá los enlaces; no cierres procesos ajenos.
5. Cerrá información privada, desactivá notificaciones y probá el proyector desde el fondo del aula. Elegí el preset de legibilidad. Tené el PDF local disponible si falla el HTML.

### Ventanas listas

| Ventana | Directorio y comando | Qué mostrar |
|---|---|---|
| Terminal 1 | Raíz: `npm start` | Presentación y respaldos en puerto 8000 |
| Terminal 2 | `nexobio/`: `npm run dev` | App inicial en puerto 3000 |
| Terminal 3 | `nexobio/`: `pi` | Modelo Codex configurado, esperando un pedido |
| IDE | `nexobio/` | AGENTS.md, specs, datos y cambios |
| Notas privadas | Raíz: `GUION.md` y `nexobio/PROMPTS.md` | Fuera de la pantalla proyectada |

Pestañas: `http://127.0.0.1:8000/presentacion/`, `http://127.0.0.1:3000`, `http://127.0.0.1:8000/respaldo/ventas/` y `http://127.0.0.1:8000/respaldo/laboratorio/`. La app debe empezar con portada neutra, sin `/ventas` ni `/laboratorio` implementados. Los respaldos son solo contingencia: el agente no debe leerlos ni copiarlos.

## Recorrido de 55 minutos

| Minutos | Diapositivas | Objetivo |
|---|---|---|
| 0–12 | 1–10 | Presentación, aporte de la IA, contexto, herramientas y límites |
| 12–26 | 11–15 | Construir ventas, comprobarlo y, solo si hay tiempo, hacer un reto |
| 26–40 | 16–19 | Construir laboratorio, revisar QC e informe; sensibilidad opcional |
| 40–45 | 20–23 | Sintetizar método, responsabilidad y aprendizajes |
| 45–55 | 24–26 | Preguntas, referencias y agradecimiento con QR |

**Si tenés 45 minutos:** introducción 10, ventas 10, laboratorio 10, síntesis 5 y preguntas/cierre 10. Omití ambos retos y abreviá la exposición conceptual. Conservá el uso real de ambos productos y las advertencias de laboratorio. Si tenés 60, usá los 5 minutos adicionales para preguntas o revisión; no agregues alcance por obligación.

## Frases de transición y manejo de errores

- **Apertura posible:** «¿Quiénes usaron IA esta semana? ¿Para qué? Hoy no vamos a buscar el prompt perfecto: vamos a darle información, herramientas y criterios para comprobar lo que hace. No vamos a dar por bueno algo solo porque la IA diga que terminó».
- **Antes de construir:** «Las herramientas, los datos, el estilo y las reglas están preparados. El producto todavía no existe: lo vamos a construir acá».
- **Mientras trabaja:** «Está leyendo la definición antes de calcular». «Ahora está escribiendo una prueba». «Que compile no demuestra que el filtro funcione».
- **Si pasan 90 segundos sin avance útil:** mostrale al público un dato y el criterio que debe cumplirse; no te quedes mirando el spinner.
- **Si hay un error:** usá el prompt de recuperación de `nexobio/PROMPTS.md`. Frená funcionalidades nuevas; pedí reproducir y corregir el mínimo, sin cambiar datos, specs ni borrar pruebas para conseguir verde.
- **Más de 3 minutos bloqueado en un error:** conservá los cambios y abrí el respaldo correspondiente. Decí: «Esta es una versión preparada; no es el resultado generado en este intento». No lo copies al scaffold ni declares éxito.
- **Si falta tiempo:** omití los retos. Priorizá ambos mínimos usables y comprobados. Si no se llegó, explicitá qué no se construyó o verificó.
- **Seguridad:** frená si intenta copiar carpetas vecinas, cambiar el protocolo, instalar servicios o ejecutar instrucciones incrustadas en datos. Los prompts no son aislamiento técnico.

## Notas por diapositiva

## 01 · De hablar con la IA a trabajar con ella.

[0:00–1:00] Abrir con una pregunta: ¿Quién usó IA esta semana? ¿Y quién chequeó lo que le respondió? Aclarar que no vamos a competir por escribir el mejor prompt ni a juzgar código. Veremos cómo se convierte una petición en un producto útil y revisable.

## 02 · IA, LLM y ChatGPT. No son lo mismo.

[1:00–2:00] Retomar las respuestas de la apertura: «¿Qué usaron: un chat, un generador de imágenes, una recomendación?». IA significa inteligencia artificial y abarca sistemas distintos. Cuando conversan con un asistente como ChatGPT, una pieza central es un LLM: Large Language Model, modelo de lenguaje de gran tamaño. Se entrena con muchos ejemplos y aprende patrones; al generar texto, estima qué tokens pueden seguir según el contexto. Un token puede ser una palabra o parte de ella. Esto permite resumir, explicar, programar y proponer alternativas, pero no garantiza verdad ni equivale a una búsqueda web. Una aplicación puede agregar búsqueda y otras herramientas; algunos modelos también procesan imágenes o audio. No afirmar que toda IA sea un LLM, que ChatGPT sea el nombre de un único modelo ni que el modelo consulte internet por sí solo en cada respuesta. Cerrar: «Hoy vamos a trabajar con estos modelos dentro de un sistema que nos ayude a comprobar sus propuestas». Fuente introductoria: Google Developers, Introduction to Large Language Models; enlace en fuentes.md.

## 03 · Antes de empezar, una persona detrás del teclado.

[2:00–3:00] La identidad y la experiencia se completan en perfil.js. Presentarse en un minuto: nombre, rol y recorrido. En Mi día a día, explicar el trabajo en Workbenches / Notebooks de OpenShift AI: diseñar, revisar e implementar arquitectura para uno o varios equipos, buscando soluciones a largo plazo. Toda esta información queda integrada acá, sin otra diapositiva biográfica. Distinguir trabajar en un producto de IA de usar IA para trabajar: no atribuirse usos, resultados ni cifras de productividad no confirmados. No es una declaración oficial de Red Hat. Cerrar con por qué te interesa mostrarles estas herramientas y pasar a qué significa usarlas en una empresa.

## 04 · ¿Qué significa «usar IA en una empresa»?

[3:00–5:00] Distinguir cálculo de análisis: para calcular un KPI o actualizar un dashboard, muchas veces alcanza con un script de Python. El aporte que buscamos de la IA es trabajar con fuentes distintas, relacionar información, proponer explicaciones y explorar soluciones alternativas ante un problema que no tiene una receta cerrada. Ejemplo hipotético: cruzar ventas, reclamos y reportes de laboratorio para proponer qué investigar y comparar posibles acciones. Un patrón no demuestra una causa; cada propuesta necesita fuentes, supuestos explícitos y comprobaciones. Los cálculos siguen en código reproducible y la decisión es de la persona responsable. Estas son posibilidades de uso, no garantías de razonamiento correcto ni promesas de automatización total. Preguntar qué información necesitarían para elegir entre dos soluciones.

## 05 · Del pedido al sistema que trabaja y se comprueba.

[5:00–6:00] Presentar la ampliación del foco en los últimos años: de redactar pedidos a preparar contexto, habilitar acciones y diseñar sistemas verificables. No es una cronología rígida ni una sucesión de tecnologías que se vuelven obsoletas; son conceptos relacionados que conviven. AI Agents nombra un tipo de sistema, no otra disciplina de engineering. Los nombres quedan en inglés para que puedan buscarlos. Loop Engineering es un término emergente cuyo alcance varía: aquí se usa para diseñar ciclos orientados a un objetivo, con estado, feedback, condiciones de parada y revisión humana. Las fuentes y los términos están en fuentes.md y ALUMNOS.md. Una respuesta no es un resultado: el producto debe poder usarse y comprobarse.

## 06 · Prompt Engineering.

[6:00–7:00] Un buen prompt evita ambigüedad. No ridiculizarlo: forma parte del trabajo. Pero un texto no concede acceso a archivos, no ejecuta pruebas y no garantiza que el agente respete las restricciones.

## 07 · Harness Engineering.

[7:00–9:00] Harness significa aquí el sistema que rodea al modelo. Explicar con la analogía de incorporar a alguien a un equipo: necesita información, herramientas y saber cuándo pedir ayuda. El término se usa en distintos sentidos; esta es una definición operativa para la charla. OpenAI describe este enfoque en su artículo Harness engineering. No es una profesión que sustituya automáticamente a otra. Explicar el equilibrio: el modelo es probabilístico; los cálculos y las comprobaciones controladas pueden ser deterministas. Determinista significa reproducible bajo las mismas entradas y condiciones, no necesariamente correcto: una fórmula mal definida también repite el mismo error. En ventas, el modelo puede construir el panel, pero el código calcula el margen y las pruebas lo contrastan con ejemplos esperados. En laboratorio, el código aplica los umbrales del protocolo educativo; el modelo no decide si un control fallido se puede ignorar. El harness aporta contexto, herramientas, límites y feedback. La persona define criterios y decide si la evidencia alcanza.

## 08 · Loop Engineering.

[9:00–10:00] Loop Engineering es un término emergente, no una taxonomía universal. No significa simplemente repetir el mismo prompt: se diseña cómo un sistema encuentra o recibe trabajo, actúa, comprueba, conserva el estado y decide la siguiente acción. Addy Osmani lo describe como un sistema que coordina ciclos por encima del harness de un agente. En esta charla mostramos un ciclo pequeño y supervisado. Definir límites de tiempo, costos, intentos y permisos, y cuándo debe intervenir una persona. No dejar al agente iterando indefinidamente ni tomar sus propias afirmaciones como prueba. Una persona decide si la evidencia es suficiente.

## 09 · No cambio de profesión. Cambio de ventanas.

[10:00–11:00] Mostrar el IDE abierto en nexobio/, con AGENTS.md, specs/ y data/. Señalar la terminal de npm run dev y la de pi con Codex seleccionado; pi y Codex no son el mismo producto. Decir: «Ustedes van a ver el pedido, los archivos que consulta, las herramientas que usa y cómo revisamos el resultado». No leer los archivos completos. El scaffold no configura la cuenta ni crea un sandbox. No proyectar credenciales, historial privado ni notificaciones. Si sobra tiempo, usar el prompt 0 de nexobio/PROMPTS.md: lectura del contexto sin modificar archivos.

## 10 · Bienvenidos a NexoBio.

[11:00–12:00] Presentar NexoBio y aclarar que todos los registros son sintéticos. Decir: «Preparamos herramientas, datos, estilo y reglas. El panel y el laboratorio todavía no existen: vamos a construirlos acá». Mostrar la portada neutra en http://127.0.0.1:3000. Compartimos una historia para conectar las dos carreras, no para representar todos los procesos de una empresa biotech. La demo muestra construcción y verificación de productos; no es una demostración de análisis autónomo entre múltiples fuentes ni un benchmark de inteligencia.

## 11 · Vendemos más. ¿Ganamos más?

[12:00–13:00] No abrir el panel de respaldo. Desde la portada neutra, mostrar nexobio/specs/02-ventas.md y una fila de nexobio/data/ventas.json. Preguntar: «¿El producto que más factura también aporta más margen?». Pedir una predicción sin anticipar la respuesta. El mínimo a construir es /ventas: indicadores, comparación por producto, tabla y filtro regional. No necesita IA dentro de la app: usamos IA para construir la herramienta. No llamar ganancia neta al margen bruto.

## 12 · Los números también tienen un contrato.

[13:00–14:00] Mostrar Definiciones y Criterios verificables en nexobio/specs/02-ventas.md. No leer toda la spec. Explicar recuperación íntegra del costo de devoluciones, ausencia de gastos generales y porcentaje global ponderado, no promedio simple. Ejemplo manual para comprobar: 10 vendidas, 2 devueltas, precio 100 y costo 60 dan ingreso 800, margen 320 y margen 40%. Decir: «La IA construye; las cuentas quedan en código reproducible y se contrastan con ejemplos». Una empresa real puede definir las reglas de otra manera.

## 13 · El producto tiene que sobrevivir a una pregunta.

[14:00–22:00] En pi, iniciado dentro de nexobio/, copiar el prompt 1 de nexobio/PROMPTS.md: construir solo el mínimo de ventas. Mantener npm run dev en otra terminal. Mientras trabaja, mostrar lecturas, cambios y pruebas nuevas; no narrar cada línea ni quedarse mirando el spinner. Las pruebas iniciales solo cubren el scaffold: el agente debe escribir las de negocio y ejecutar npm run check y npm run build desde nexobio/. Cuando exista, abrir http://127.0.0.1:3000/ventas, cambiar Todas/Norte/Sur y comprobar que indicadores, gráfico, tabla y conclusión usan el mismo filtro. Referencias de la spec: total 117.000 EUR de ingresos y 23.628 EUR de margen; Norte 57.450 y 11.564 EUR. BioKit A lidera ingresos, Enzima B el margen en euros. No hardcodear ni cambiar los datos para alcanzar esos valores. Si falla algo, usar el prompt de recuperación, no declarar éxito. A los 90 segundos sin avance útil, explicar un criterio de aceptación; si un error bloquea más de 3 minutos, conservar cambios y mostrar http://127.0.0.1:8000/respaldo/ventas/, aclarando que es una versión preparada. El agente no debe copiarla.

## 14 · Un cambio chico. Un resultado comprobable.

[22:00–25:00 · opcional] Solo si ventas ya funciona y está comprobado, votar UN desafío. Usar el prompt 2A o 2B de nexobio/PROMPTS.md; si proponen C, delimitar un cambio chico sin nuevos servicios. Para mes + región, revisar que se actualicen indicadores, gráfico, tabla y conclusión y que haya una prueba de la combinación. Para la alerta, comprobar el límite estricto de margen inferior al 20% y el texto además del color. Pedir comprobaciones y reconocer cualquier revisión visual pendiente. Si el mínimo se demoró, omitir este reto y usar el tiempo para comprobarlo; no retrasar laboratorio.

## 15 · No contamos líneas de código.

[25:00–26:00] Volver a la presentación. Preguntar: «¿Qué evidencia tenemos de que funciona y qué falta revisar?». No presentar la demo como un benchmark ni inventar ahorros. Si se quiere medir, anotar el tiempo real y el alcance del cambio. El trabajo humano de preparar datos y criterios también cuenta.

## 16 · Una curva linda. Un experimento no interpretable.

[26:00–27:00] Mostrar que la app aún no tiene /laboratorio, sin tocar el producto de ventas ya construido. Abrir nexobio/specs/03-laboratorio.md y nexobio/data/laboratorio.json. Preguntar: «¿Basta con que una muestra tenga poca dispersión?». Definir triplicado y control en lenguaje cotidiano: repetir ayuda a estimar variabilidad; un control permite comprobar el comportamiento del sistema. No hace falta conocimiento de biología previo. Es una simulación educativa, no una técnica validada.

## 17 · Si falla el control, no maquillamos la conclusión.

[27:00–28:00] Mostrar las reglas de nexobio/specs/03-laboratorio.md y nexobio/data/protocolo.json, fuente de verdad de los parámetros. Explicar CV como variación relativa, sin derivar la fórmula. Preguntar qué debería pasar si el control falla aunque una muestra tenga poca dispersión. Los umbrales son ficticios y no deben aplicarse a un ensayo real. Diferenciar QC individual de estado global: M03 tiene un dato ausente, no un cero. No modificar el protocolo para lograr un estado favorable.

## 18 · Primero la evidencia. Después, si procede, interpretar.

[28:00–37:00] Copiar el prompt 3 de nexobio/PROMPTS.md en la misma sesión de pi: construir el mínimo de laboratorio, con pruebas de QC e informe descargable, sin romper ventas ni hacer sensibilidad todavía. Mientras se genera, explicar por qué control global y QC individual son distintos. Revisar los resultados reales de npm run check y npm run build. Cuando exista, abrir http://127.0.0.1:3000/laboratorio y revisar primero NO INTERPRETABLE, después CONTROL+ (media 0,620 fuera de rango), M01 (QC individual conforme), M02 (CV alto) y M03 (dos réplicas, no tres). Descargar y abrir el .txt: debe conservar estado global, parámetros, causas y límites. Preguntar por qué M01 no autoriza una conclusión global. Volver a ventas y comprobar que sigue funcionando. Si falla, usar el prompt de recuperación. Si el error bloquea más de 3 minutos, conservar cambios y mostrar http://127.0.0.1:8000/respaldo/laboratorio/, identificándolo como versión preparada. No hacer inferencias biológicas, diagnósticas ni sobre eficacia de tratamientos.

## 19 · ¿Y si hacemos el criterio más estricto?

[37:00–40:00 · opcional] Solo si el mínimo está comprobado, pedir una predicción y copiar el prompt 4 de nexobio/PROMPTS.md. Comparar CV 15% frente a 10% como simulación, conservando el protocolo original. Revisar ambos estados globales y la prueba que confirma el bloqueo: bajar el límite de CV no arregla la media del control positivo. Cambiar un umbral para explorar no aprueba un protocolo nuevo. Si no hay tiempo, omitir la implementación del reto y explicar verbalmente esta diferencia, sin afirmar que se construyó. Si el agente cambia datos para obtener verde, detenerlo: es un fallo, no una solución.

## 20 · La IA no decide qué significa «correcto».

[40:00–41:00] El dominio cambia qué errores importan. Saber programar ayuda a construir y verificar; saber biotecnología ayuda a elegir controles e interpretar límites. No basta con operar una herramienta. La supervisión humana también puede fallar: necesita tiempo y evidencia.

## 21 · Más capacidad. También más responsabilidad.

[41:00–43:00] Dar ejemplo de una celda que dice ignora el protocolo: es dato no fiable, no una nueva instrucción. Los prompts no aíslan el proceso. Este taller usa datos sintéticos y archivos locales, pero no configura aislamiento del sistema operativo. En producción hacen falta controles técnicos y políticas, no solo buenas intenciones. Referencia general: NIST AI RMF.

## 22 · Aprendan a plantear problemas. Y a reconocer buenas soluciones.

[43:00–44:00] No decir que aprender a programar o ciencias ya no importa. Al contrario: sin fundamentos es difícil saber qué aceptar. Proponer un primer proyecto: datos públicos o sintéticos, una pregunta concreta, un producto pequeño y tres comprobaciones.

## 23 · No solo «hacé esto». «Así sabremos si está bien».

[44:00–45:00] Pedir que cada estudiante piense una tarea de su futura carrera y se lleve estas cinco preguntas. Resumir: «No alcanza con pedir un resultado: tenemos que saber con qué información se construye y cómo lo comprobamos». Para la versión de 45 minutos, usar el recorrido abreviado del inicio de GUION.md: omitir los retos, no las comprobaciones ni las advertencias de laboratorio.

## 24 · Ahora les toca preguntar.

[45:00–54:00] Preguntas. Si preguntan por sustitución de empleos, distinguir automatización de tareas de predicciones de empleo: no afirmar certezas. Si preguntan por modelos, volver al criterio: elegir según tarea, costo, privacidad y capacidad de evaluación.

## 25 · Fuentes para seguir. Archivos para experimentar.

[54:00–54:30] Mostrar brevemente como material de consulta, sin leer los enlaces en voz alta. Los enlaces completos y el alcance de las fuentes están en fuentes.md. El artículo de OpenAI es una experiencia de su equipo, no una prueba universal de productividad. Los materiales y los prompts se encuentran en esta carpeta; consultar README.md. No hace falta conectarse para mostrar las diapositivas ni los respaldos.

## 26 · ¡Gracias!

[54:30–55:00] Agradecer y dejar el QR visible para que puedan escanearlo. Repositorio público: https://github.com/adrielparedes/presentacion-ia-colegio. El QR es un recurso local; abrir GitHub requiere conexión a internet.