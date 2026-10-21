# Guion del ponente · 55 minutos

Las notas también están en el HTML: tecla N (visibles para el público si proyectás esa pantalla). No hay una ventana de ponente privada. Para notas privadas, abrir este archivo en una pantalla no proyectada.

## 01 · De hablar con la IA a trabajar con ella.

[0:00–1:00] Abrir con una pregunta: ¿Quién usó IA esta semana? ¿Y quién chequeó lo que le respondió? Aclarar que no vamos a competir por escribir el mejor prompt ni a juzgar código. Veremos cómo se convierte una petición en un producto útil y revisable.

## 02 · Antes de empezar, una persona detrás del teclado.

[1:00–3:00] La identidad y la experiencia se completan en perfil.js. Presentarse en 60–90 segundos: nombre, rol y recorrido. En Mi día a día, explicar el trabajo en Workbenches / Notebooks de OpenShift AI: diseñar, revisar e implementar arquitectura para uno o varios equipos, buscando soluciones a largo plazo. Toda esta información queda integrada acá, sin otra diapositiva biográfica. Distinguir trabajar en un producto de IA de usar IA para trabajar: no atribuirse usos, resultados ni cifras de productividad no confirmados. No es una declaración oficial de Red Hat. Cerrar con por qué te interesa mostrarles estas herramientas y pasar a qué significa usarlas en una empresa.

## 03 · ¿Qué significa «usar IA en una empresa»?

[3:00–5:00] Distinguir cálculo de análisis: para calcular un KPI o actualizar un dashboard, muchas veces alcanza con un script de Python. El aporte que buscamos de la IA es trabajar con fuentes distintas, relacionar información, proponer explicaciones y explorar soluciones alternativas ante un problema que no tiene una receta cerrada. Ejemplo hipotético: cruzar ventas, reclamos y reportes de laboratorio para proponer qué investigar y comparar posibles acciones. Un patrón no demuestra una causa; cada propuesta necesita fuentes, supuestos explícitos y comprobaciones. Los cálculos siguen en código reproducible y la decisión es de la persona responsable. Estas son posibilidades de uso, no garantías de razonamiento correcto ni promesas de automatización total. Preguntar qué información necesitarían para elegir entre dos soluciones.

## 04 · Del pedido al sistema que trabaja y se comprueba.

[6:00–7:00] Presentar la ampliación del foco en los últimos años: de redactar pedidos a preparar contexto, habilitar acciones y diseñar sistemas verificables. No es una cronología rígida ni una sucesión de tecnologías que se vuelven obsoletas; son conceptos relacionados que conviven. AI Agents nombra un tipo de sistema, no otra disciplina de engineering. Los nombres quedan en inglés para que puedan buscarlos. Loop Engineering es un término emergente cuyo alcance varía: aquí se usa para diseñar ciclos orientados a un objetivo, con estado, feedback, condiciones de parada y revisión humana. Las fuentes y los términos están en fuentes.md y ALUMNOS.md. Una respuesta no es un resultado: el producto debe poder usarse y comprobarse.

## 05 · Prompt Engineering.

[7:00–8:00] Un buen prompt evita ambigüedad. No ridiculizarlo: forma parte del trabajo. Pero un texto no concede acceso a archivos, no ejecuta pruebas y no garantiza que el agente respete las restricciones.

## 06 · Harness Engineering.

[8:00–10:00] Harness significa aquí el sistema que rodea al modelo. Explicar con la analogía de incorporar a alguien a un equipo: necesita información, herramientas y saber cuándo pedir ayuda. El término se usa en distintos sentidos; esta es una definición operativa para la charla. OpenAI describe este enfoque en su artículo Harness engineering. No es una profesión que sustituya automáticamente a otra. Explicar el equilibrio: el modelo es probabilístico; los cálculos y las comprobaciones controladas pueden ser deterministas. Determinista significa reproducible bajo las mismas entradas y condiciones, no necesariamente correcto: una fórmula mal definida también repite el mismo error. En ventas, el modelo puede construir el panel, pero el código calcula el margen y las pruebas lo contrastan con ejemplos esperados. En laboratorio, el código aplica los umbrales del protocolo educativo; el modelo no decide si un control fallido se puede ignorar. El harness aporta contexto, herramientas, límites y feedback. La persona define criterios y decide si la evidencia alcanza.

## 07 · Loop Engineering.

[10:00–11:00] Loop Engineering es un término emergente, no una taxonomía universal. No significa simplemente repetir el mismo prompt: se diseña cómo un sistema encuentra o recibe trabajo, actúa, comprueba, conserva el estado y decide la siguiente acción. Addy Osmani lo describe como un sistema que coordina ciclos por encima del harness de un agente. En esta charla mostramos un ciclo pequeño y supervisado. Definir límites de tiempo, costos, intentos y permisos, y cuándo debe intervenir una persona. No dejar al agente iterando indefinidamente ni tomar sus propias afirmaciones como prueba. Una persona decide si la evidencia es suficiente.

## 08 · No cambio de profesión. Cambio de ventanas.

[11:00–12:00] Cambiar de verdad al IDE y señalar las carpetas. Mostrar pi con el modelo Codex que tengas configurado; no describir pi y Codex como si fueran el mismo producto. Este paquete no configura la cuenta ni crea un sandbox. No proyectar credenciales, historial privado ni notificaciones.

## 09 · Bienvenidos a NexoBio.

[12:00–13:00] Todos los nombres y registros de las demos son inventados. Compartimos una historia para conectar las dos carreras, no para afirmar que los flujos representan todos los procesos de una empresa biotech.

## 10 · Vendemos más. ¿Ganamos más?

[13:00–14:00] Abrir /demos/ventas/. Decir explícitamente que este producto de referencia está preparado y que ahora lo inspeccionaremos y modificaremos. Pedir una predicción antes de mirar la tabla. No llamarlo ganancia neta.

## 11 · Los números también tienen un contrato.

[14:00–15:00] Abrir BRIEF.md. Señalar el supuesto de recuperación íntegra del costo de devoluciones y la ausencia de gastos generales. Una empresa real puede definirlo distinto. Mostrar por qué el porcentaje global es ponderado y no una media simple de porcentajes.

## 12 · El producto tiene que sobrevivir a una pregunta.

[15:00–20:00] Mostrar un registro de data.json y una prueba con números manuales. Copiar el prompt 2 en pi, sin leer todas sus líneas en voz alta. Mientras trabaja, explicar qué herramientas está usando. Después abrir el panel, cambiar región y contrastar la tabla. Si el agente tarda más de 90 segundos sin progreso visible, pasar al respaldo; no esperar en silencio. Las instrucciones por sí solas no son permisos técnicos.

## 13 · Un cambio chico. Un resultado comprobable.

[20:00–25:00] Votar a mano alzada. Delimitar la petición antes de enviarla. Usar prompt 3 o alternativa. El agente debe ejecutar pruebas y reconocer qué revisión visual falta. Revisar personalmente que todos los indicadores cambian. Si propone algo fuera de alcance, anotarlo como siguiente iteración. No prometer que las pruebas existentes cubren cualquier cambio de UI.

## 14 · No contamos líneas de código.

[25:00–26:00] No presentar la demo como un benchmark ni inventar ahorros. Si se quiere medir, anotar el tiempo real y el alcance del cambio. El trabajo humano de preparar datos y criterios también cuenta.

## 15 · Una curva linda. Un experimento no interpretable.

[26:00–27:00] Abrir laboratorio. Definir triplicado y control en lenguaje cotidiano: repetir ayuda a estimar variabilidad; el control nos dice si el sistema se comporta como esperamos. No hace falta conocimiento de biología previo. Simulación educativa, no técnica validada.

## 16 · Si falla el control, no maquillamos la conclusión.

[27:00–29:00] Enseñar PROTOCOLO.md y protocolo.json. Explicar CV como variación relativa, sin derivar la fórmula. Los umbrales son inventados para enseñar el flujo y no deben aplicarse a un ensayo real. Diferenciar QC individual de estado global. M03 tiene un dato ausente, no un cero.

## 17 · Primero la evidencia. Después, si procede, interpretar.

[29:00–34:00] Mostrar estado global, luego CONTROL+, luego M01 (QC individual conforme), M02 (CV alto) y M03 (réplica ausente). Copiar prompt 2. Descargar el informe y abrir el texto. Preguntar: ¿por qué M01 no autoriza una conclusión? Porque los controles globales no cumplen. No hacer inferencias sobre eficacia de tratamientos ni presencia de enfermedades.

## 18 · ¿Y si hacemos el criterio más estricto?

[34:00–39:00] Pedir predicción, lanzar prompt 3 y revisar ambos estados. Cambiar un umbral para explorar no significa aprobar un nuevo protocolo. Si no hay tiempo, usar la alternativa de destacar el dato ausente. Si el agente modifica datos para obtener verde, detenerlo: eso sería un fallo, no una solución.

## 19 · La IA no decide qué significa «correcto».

[39:00–41:00] El dominio cambia qué errores importan. Saber programar ayuda a construir y verificar; saber biotecnología ayuda a elegir controles e interpretar límites. No basta con operar una herramienta. La supervisión humana también puede fallar: necesita tiempo y evidencia.

## 20 · Más capacidad. También más responsabilidad.

[41:00–43:00] Dar ejemplo de una celda que dice ignora el protocolo: es dato no fiable, no una nueva instrucción. Los prompts no aíslan el proceso. Este taller usa datos sintéticos y archivos locales, pero no configura aislamiento del sistema operativo. En producción hacen falta controles técnicos y políticas, no solo buenas intenciones. Referencia general: NIST AI RMF.

## 21 · Aprendan a plantear problemas. Y a reconocer buenas soluciones.

[43:00–45:00] No decir que aprender a programar o ciencias ya no importa. Al contrario: sin fundamentos es difícil saber qué aceptar. Proponer un primer proyecto: datos públicos o sintéticos, una pregunta concreta, un producto pequeño y tres comprobaciones.

## 22 · No solo «hacé esto». «Así sabremos si está bien».

[45:00–46:00] Pedir que cada estudiante piense una tarea de su futura carrera y responda a estas cinco preguntas. Si vamos a 45 minutos, cerrar aquí y tomar preguntas breves; reducir previamente los retos en vivo, no eliminar las advertencias de laboratorio.

## 23 · Ahora les toca preguntar.

[46:00–55:00] Preguntas. Si preguntan por sustitución de empleos, distinguir automatización de tareas de predicciones de empleo: no afirmar certezas. Si preguntan por modelos, volver al criterio: elegir según tarea, costo, privacidad y capacidad de evaluación.

## 24 · Fuentes para seguir. Archivos para experimentar.

Diapositiva de consulta, fuera del tiempo principal. Los enlaces completos y el alcance de las fuentes están en fuentes.md. El artículo de OpenAI es una experiencia de su equipo, no una prueba universal de productividad. Los materiales y los prompts se encuentran en esta carpeta; consultar README.md. No hace falta conectarse para mostrar las diapositivas ni los respaldos.