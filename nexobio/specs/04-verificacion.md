# 04 · Verificación y definición de terminado

## Importante
Al principio `npm test` prueba SOLO la portada y el botón base. No existen pruebas ni funciones de negocio resueltas. El agente tiene que crearlas con cada producto. Si cambia la portada, actualizar su prueba honestamente. Nunca afirmar que pasar las pruebas iniciales valida ventas o laboratorio.

## Ventas: pruebas mínimas a crear
- Fixture manual 10 vendidas, 2 devueltas, precio 100, costo 60 → ingresos 800 y margen 320 (40%).
- Sumas de regiones igualan total; porcentaje ponderado, no promedio simple.
- Contraste ingresos vs margen por producto con los datos locales.
- Cero filas y datos imposibles (devoluciones > ventas, número no válido).
- Interacción de filtro: actualiza cifras, tabla y gráfico de forma coherente.

## Laboratorio: pruebas mínimas a crear
- `[1,2,3]`: media 2, desviación muestral 1 y CV 50%.
- `[1,null,3]`: n=2; null no se reemplaza por cero. Sin valores: no evaluable.
- Media cero o n<2: CV no evaluable y fila no conforme.
- Datos originales bloqueados por control positivo, con M01 individualmente conforme.
- Blanco faltante, control positivo faltante o control duplicado: bloqueo global.
- Fixture alternativo separado con positivo `[0.99,1,1.01]`: controles conformes, sin modificar `data/`; las muestras no conformes siguen señaladas.
- Límites inclusivos del protocolo y número exacto de réplicas.
- Informe descargado conserva estado, causas y advertencia educativa.

## Comandos
Desde `nexobio/`:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

`npm run check` agrupa los primeros tres. `npm run build` es adicional: Next no ejecuta lint ni todas las pruebas automáticamente. No empezar otro servidor si el presentador ya dejó `npm run dev` corriendo en 3000.

## Revisión en navegador
- Abrir la ruta nueva: nada de errores en consola ni hydration mismatch.
- Ventas: cambiar región y comparar contra las cifras de la spec.
- Laboratorio: estado global antes de datos individuales; descargar y abrir el archivo.
- Confirmar que el producto anterior sigue funcionando al agregar el segundo.
- Teclado, foco, labels y texto para estados. Revisar 1280×720 y 390×844.
- No interpretar una captura o una compilación como una interacción verificada.

Playwright está instalado. Puede usarse con el Chrome existente del equipo; no descargar navegadores durante la presentación. Si no tenés herramienta de navegador, informá qué falta y dejá pasos concretos para que la persona lo revise.

## Informe final del agente
1. Qué entregaste y dónde abrirlo.
2. Qué verificaste y con qué resultados reales.
3. Qué limitaciones o errores quedan.
4. Qué acción o decisión requiere revisión humana.

No declarar terminado un producto con pruebas fallidas ni tocar datos o specs para que pase. No dar porcentajes de productividad basados en una sola demo.
