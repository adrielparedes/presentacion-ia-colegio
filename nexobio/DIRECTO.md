# Directo · Construir desde cero

## Lo que ve el público al empezar
Un lienzo neutro. Hay una app Next.js corriendo, pero no tiene dashboard ni QC. Decí: «Ya instalamos las herramientas y definimos el estilo. El producto todavía no existe: lo vamos a construir a partir de estas specs».

Esto evita perder tiempo descargando paquetes y deja visible el trabajo interesante: definir, construir, comprobar y corregir.

## Ventanas
1. Presentación en puerto 8000, desde la carpeta padre (`npm start`).
2. IDE abierto en **esta carpeta**, mostrando AGENTS.md, specs y data.
3. Terminal A dentro de nexobio: `npm run dev` (3000).
4. Terminal B dentro de nexobio: pi con Codex configurado.
5. Navegador: localhost:3000; pestañas de respaldo en 8000.

No hace falta mostrar instalaciones. No ejecutes el generador de demos estáticas. No mezcles el npm start de la carpeta padre (servidor estático) con el de acá (Next de producción).

## Secuencia recomendada
- Introducción y concepto: 12 minutos.
- Ventas: hasta 14 minutos, incluyendo construcción y uso.
- Laboratorio: hasta 14 minutos, incluyendo construcción y uso.
- Síntesis: 5 minutos.
- Preguntas: 10 minutos.

Cada desafío es opcional. Construir desde cero tiene latencia variable: si falta tiempo, priorizá generar ambos mínimos y usarlos, no agregar extras.

### Ventas
Mostrar la portada sin producto. Abrir spec 02, una fila JSON y AGENTS.md. Preguntar qué significa margen. Copiar prompt 1. Mientras el agente trabaja, señalar lecturas, herramientas y pruebas, sin fingir que todo va a salir bien. Abrir /ventas cuando exista; cambiar región y contrastar con la spec. Elegir un desafío solo si hay tiempo.

### Laboratorio
Mostrar que /laboratorio todavía no existe antes de iniciar. Abrir protocolo y spec 03. Preguntar qué pasa si el control falla. Copiar prompt 3. Mientras se genera, explicar réplicas, CV y datos ausentes. Abrir el producto, revisar estado global y descargar el informe. Si hay tiempo, ejecutar el análisis de sensibilidad.

## Tiempo y errores
- Sin avance útil durante 90 segundos: narrar el criterio de aceptación y mostrar los datos, no quedarse mirando el spinner.
- Más de 3 minutos bloqueado en un error: conservar los cambios, pasar al respaldo de la carpeta padre y decir que es una versión preparada. No afirmar que la generó el agente en ese momento.
- Build o tests fallidos: no declarar éxito. Pedir corrección mínima con el prompt de recuperación.
- Si no hay navegador automatizado, revisar manualmente. El agente debe decirlo, no inventar una inspección.
- Si intenta leer/copiar ../demos o ../respaldo, detenerlo y recordar el alcance.
- Si pide instalar paquetes o conectarse a servicios, revisar: ya están las dependencias del alcance acordado.

## Ajustes al guion original
Donde el guion anterior decía «producto de referencia preparado», acá mostrar el lienzo inicial y la construcción real. Los conceptos, datos y resultados esperados se conservan. Las rutas pasan de `:8000/demos/ventas/` y `:8000/demos/laboratorio/` a `:3000/ventas` y `:3000/laboratorio` cuando el agente las cree. Las pruebas se ejecutan con `npm test` dentro de nexobio: el agente tiene que escribir las de negocio.
