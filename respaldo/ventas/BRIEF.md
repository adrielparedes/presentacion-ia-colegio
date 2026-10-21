# NexoBio · Equipo comercial
Datos completamente sintéticos. Moneda: euros. Periodo: enero–abril de 2026.
## Decisión
¿Qué productos generan ingresos y cuáles aportan margen bruto?
## Definiciones
- Unidades netas = unidades vendidas − unidades devueltas.
- Ingreso neto = unidades netas × precio unitario.
- Costo neto = unidades netas × costo unitario. En esta simulación las devoluciones recuperan el costo íntegro; no es una regla contable universal.
- Margen bruto = ingreso neto − costo neto.
- Margen % = margen bruto / ingreso neto × 100. Sin ingresos: 0% por convenio de esta demo.
- No confundir margen bruto con ganancia neta; faltan gastos, impuestos y otros costos.
## Criterios de aceptación
1. Filtrar por región y recalcular todos los indicadores.
2. Mostrar ingresos, margen en euros y porcentaje, con unidades visibles.
3. Comparar productos por ingresos y margen sin concluir que más ventas equivalen a más beneficio.
4. Incluir tabla accesible y gráfico; nunca inventar filas o valores.
5. Usar exclusivamente archivos locales. No subir datos ni instalar paquetes para esta demo.
6. Comprobar los números con node --test tests/ventas.test.mjs desde la raíz.
## Reto acotado
Añadir filtro por mes o una alerta visual para margen < 20%; no tocar los datos para hacer pasar pruebas.
