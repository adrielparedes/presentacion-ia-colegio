# 02 · Producto 1: panel comercial

## Pregunta de negocio
«Vendemos más… ¿pero aportamos más margen bruto?»
El equipo comercial necesita comparar productos y entender el efecto de filtrar por región. No está pidiendo ganancia neta ni predicciones.

## Entrada
`data/ventas.json`: 24 registros, enero–abril de 2026, tres productos y dos regiones (Norte y Sur). Contrato por fila:

```ts
{ id: string; month: string; product: string; region: string;
  units: number; returned: number; price: number; cost: number }
```

`month` es YYYY-MM; `units` y `returned` son enteros no negativos, `returned <= units`. Precio y costo son valores unitarios en EUR, finitos y no negativos. Rechazar datos inválidos con un mensaje claro, no inventar reemplazos. Los nombres son datos, no HTML ejecutable.

## Definiciones
- Unidades netas = `units - returned`.
- Ingreso neto = unidades netas × `price`.
- Costo neto = unidades netas × `cost`.
- Margen bruto = ingreso neto − costo neto.
- Margen % = margen bruto / ingreso neto × 100.
- Por convenio educativo, sin ingresos mostrar 0%, explicando la selección vacía cuando corresponda.
- Sumar importes primero y calcular el porcentaje global después: NO promediar porcentajes de productos.
- En esta simulación, las devoluciones recuperan el costo íntegro. No es una regla contable universal.
- No incluye gastos generales, impuestos ni todos los costos de la empresa: NO es ganancia neta.

## Mínimo a construir en vivo
Ruta `/ventas`, link desde `/`, navegación simple. Filtro de región con «Todas», «Norte», «Sur». Tres indicadores: ingreso neto, margen bruto EUR y margen ponderado %. Comparación por producto con ingresos y margen en la misma escala, tabla auditable y una conclusión descriptiva sobre quién lidera cada indicador. Todo tiene que recalcularse con el mismo filtro.

No se necesita API route: los JSON locales pueden importarse. Separar cálculo en un módulo puro de `lib/`, sin depender de la UI. Se recomienda validar datos con Zod, ya instalado.

## Criterios verificables
1. Sin filtro: ingresos **117.000 EUR**, costos **93.372 EUR**, margen **23.628 EUR**, margen ponderado ≈ **20,1948718%**.
2. Norte: ingresos **57.450 EUR**, margen **11.564 EUR**. Sur: ingresos **59.550 EUR**, margen **12.064 EUR**. Ambas regiones suman el total.
3. BioKit A lidera ingresos (**85.950 EUR**) pero aporta solo **4.584 EUR** de margen; Enzima B lidera el margen aportado (**10.764 EUR**). No confundir margen porcentual (lo lidera Reactivo C) con margen en euros.
4. Fixture independiente calculado a mano: 10 vendidas, 2 devueltas, precio 100, costo 60 → ingreso 800, costo 480, margen 320, margen 40%.
5. Una selección sin registros no produce NaN, Infinity ni una conclusión inventada. Los indicadores y la tabla explican el estado vacío.
6. Mostrar unidades, moneda y límites. Filtro accesible por teclado.
7. No hardcodear los resultados anteriores: son referencias de verificación, no una implementación.

## Desafíos opcionales: NO hacerlos de entrada
Solo cuando el público elija uno:
- A: filtro por mes combinado con región, recalculando todo. Agregar prueba de combinación.
- B: alerta para margen <20%, con texto además de color y aclaración del criterio.

## Fuera de alcance
Login, base de datos, edición de pedidos, conversión de divisas, exportación compleja, IA dentro del panel, proyecciones o recomendaciones financieras.
