# 03 · Producto 2: informe de control de calidad

## Pregunta
«¿Podemos interpretar esta ejecución del ensayo?»
Ensayo colorimétrico educativo ficticio: no representa un analito, método validado ni diagnóstico. No inferir eficacia, presencia de enfermedades ni propiedades biológicas.

## Entradas
`data/laboratorio.json`: seis filas, un blanco, un control positivo y cuatro muestras. Contrato:

```ts
{ id: string; kind: 'blank' | 'positive' | 'sample'; values: (number | null)[] }
```

Los valores son absorbancia en unidades arbitrarias. `null` es ausente, nunca cero. Números no finitos o estructuras inválidas: error visible y sin conclusión favorable. No imputar valores ni eliminar atípicos.

`data/protocolo.json`: `blankMax: 0.1`, `positiveMin: 0.8`, `positiveMax: 1.2`, `cvMax: 15`, `replicates: 3`. Este archivo es la fuente de verdad, no duplicar constantes en UI y cálculo.

## Reglas
- Se requieren exactamente tres réplicas válidas por fila. Una réplica ausente marca la fila no conforme aunque sea posible calcular una media descriptiva con las restantes.
- Media calculada sobre valores numéricos presentes.
- Desviación estándar **muestral**: raíz de la suma de cuadrados de diferencias respecto a la media dividida por n−1.
- CV = desviación / media × 100. Con n<2 o media<=0: no evaluable, nunca Infinity o NaN.
- Cada fila requiere CV evaluable <= `cvMax` y las tres réplicas.
- Blanco: además, media <= `blankMax`. Positivo: media entre `positiveMin` y `positiveMax`, incluidos.
- Exigir exactamente un blanco y un control positivo. Faltantes, duplicados o no conformes bloquean TODA la ejecución.
- Si falla cualquier control: estado global **NO INTERPRETABLE**. Una muestra con QC individual conforme NO habilita una conclusión global.
- Si ambos controles cumplen: indicar «Controles conformes · requiere revisión humana»; las muestras individuales no conformes siguen señaladas. No llamar válido para cualquier uso ni aprobado clínicamente.

## Mínimo a construir en vivo
Ruta `/laboratorio`, accesible desde navegación sin romper `/ventas`. Banner global antes del gráfico. Tabla con ID, tipo, réplicas presentes, media, CV, QC individual y causas. Gráfico de medias con etiquetas y unidades (no presentarlo como validación). Descarga local de informe `.txt` con estado, parámetros, datos resumidos, causas y límites. No se necesita servidor para generar la descarga.

## Resultado esperado con los datos entregados
- Blanco: media 0,050 y CV ≈2%, conforme.
- CONTROL+: media **0,620**, fuera de [0,80, 1,20], aunque su CV ≈1,61% sea bajo.
- M01: QC individual conforme; media 0,820.
- M02: CV ≈39,93%, no conforme por dispersión.
- M03: dos réplicas presentes, media descriptiva 0,520; no conforme por dato ausente.
- M04: QC individual conforme.
- Global: **NO INTERPRETABLE**. Informe: «No interpretar los resultados de esta ejecución. Solicitar revisión humana y evaluar repetición según protocolo».

No cambiar datos ni umbrales para conseguir un estado verde. Los valores esperados no reemplazan el cálculo.

## Desafío opcional: NO hacerlo de entrada
Comparar CV máximo 15% frente a 10% como **análisis de sensibilidad educativo**. Mantener protocolo original intacto. Mostrar ambos estados globales: el control positivo sigue fuera de rango. No presentar el umbral alternativo como un protocolo aprobado. Agregar prueba del bloqueo en ambos escenarios.

## Fuera de alcance
Subir archivos reales, conectar equipos de laboratorio, datos de pacientes, decisiones clínicas, imputación, exclusión automática de muestras o validación de nuevos protocolos.
