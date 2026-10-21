# NexoBio · Ensayo colorimétrico educativo
Todos los datos son sintéticos. Valores: absorbancia en unidades arbitrarias. No representan un analito, diagnóstico ni método validado.
## Protocolo simplificado
- Triplicados obligatorios. Null significa ausente, nunca cero.
- Usar desviación estándar muestral (n−1).
- CV = desviación estándar / media × 100; si media <= 0, no evaluable.
- Blanco: media <= 0,10. Control positivo: media entre 0,80 y 1,20, ambos incluidos.
- Cada control requiere también tres réplicas, media positiva y CV <= 15%.
- Muestras: tres réplicas y CV <= 15%. Estos criterios solo evalúan calidad técnica.
- Si falla cualquier control, marcar TODA la ejecución NO INTERPRETABLE aunque algunas muestras tengan CV bajo.
- No imputar datos ausentes, eliminar atípicos ni corregir controles silenciosamente.
- La revisión y autorización de repetir el experimento corresponden a una persona.
## Criterios de aceptación
Mostrar media, CV y causas; separar QC individual del estado global. El informe debe decir que no se pueden interpretar los resultados de esta ejecución. Permitir descargar informe de texto. Ejecutar node --test tests/laboratorio.test.mjs desde la raíz.
## Reto acotado
Comparar CV máximo 15% frente a 10% como análisis de sensibilidad, NO como cambio validado de protocolo. Mantener la etiqueta de simulación y explicar que el control sigue fallando.
