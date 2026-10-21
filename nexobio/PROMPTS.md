# Prompts para construir en vivo

Abrí pi **desde `nexobio/`**, con el modelo Codex que tengas configurado. Mantené otra terminal con `npm run dev`. Los prompts se apoyan en AGENTS.md y specs: no pegues implementaciones preparadas ni las demos de la carpeta padre.

## 0 · Mostrar el harness (opcional, sin cambios)

> Leé AGENTS.md y specs/00-contexto.md. No modifiques archivos todavía. Explicá en cinco líneas qué tenemos preparado, qué falta construir y cómo vamos a saber si funciona. Después esperá mi indicación.

## 1 · Construir ventas desde cero

> Leé AGENTS.md. Construí el producto de specs/02-ventas.md, siguiendo el contexto, el estilo y la verificación de specs/. Implementá solo el mínimo de ventas, con datos locales y pruebas nuevas. No construyas laboratorio ni los desafíos opcionales. No copies código de la carpeta padre. Ejecutá las comprobaciones y decime qué puedo abrir y qué falta revisar en navegador.

**Después:** abrir http://127.0.0.1:3000/ventas, cambiar región, comparar las cifras y explicar la diferencia entre ingresos y margen. Si una prueba o un flujo falla, mostrarlo honestamente antes de continuar.

## 2 · Desafío del público: elegir UNO

### A · Mes + región
> Agregá el filtro por mes de la spec de ventas. Tiene que combinarse con región y actualizar indicadores, gráfico, tabla y conclusión. Agregá una prueba de esa combinación. Conservá datos, definiciones y estilo; ejecutá las comprobaciones.

### B · Alerta
> Agregá la alerta opcional de margen inferior al 20% de la spec de ventas, con texto además de color. Verificá el límite y conservá los cálculos y filtros existentes. Ejecutá las comprobaciones.

## 3 · Construir laboratorio desde cero

> Leé AGENTS.md y construí el mínimo de specs/03-laboratorio.md con los datos y protocolo locales. Agregá /laboratorio y navegación sin romper ventas. Implementá las reglas de QC, sus pruebas y la descarga del informe. No hagas todavía el análisis de sensibilidad. No copies implementaciones de la carpeta padre ni cambies datos o umbrales. Ejecutá las comprobaciones y explicá por qué no podemos interpretar esta ejecución.

**Después:** abrir http://127.0.0.1:3000/laboratorio, revisar CONTROL+, M01 y M03, descargar el informe y abrirlo.

## 4 · Desafío del laboratorio

> Agregá el análisis de sensibilidad CV 15% frente a 10% de la spec, sin modificar el protocolo original. Etiquetalo como simulación, no como protocolo aprobado. Mostrá los dos estados globales y agregá una prueba que confirme que el control sigue bloqueando la interpretación. Ejecutá las comprobaciones.

## Si aparece un error

> Frenemos las funcionalidades nuevas. Reproducí el error, explicá qué criterio no se cumple y corregí el mínimo necesario. No modifiques datos, specs ni borres pruebas para conseguir un resultado verde. Mostrá los resultados reales y cualquier limitación pendiente.

## Si el alcance se hace demasiado grande

> Reducí esta iteración al mínimo obligatorio de la spec actual. Dejá los extras como pendientes explícitos. No hagas refactors generales ni agregues servicios. Priorizá un resultado usable y comprobable.
