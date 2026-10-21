# 01 · Sistema visual

## Dirección
Interfaz sobria, moderna y legible en un proyector, inspirada en ChatGPT/Codex. Material independiente: no usar sus logos ni afirmar afiliación. Mantener identidad NexoBio y español argentino.

## Base ya implementada
`app/globals.css` define fondo #171717, superficie #212121, texto #ececec, texto secundario #aaa, bordes #393939, verde menta #8de6cb, violeta #a6b5ff y advertencia #ffb2a7. Fuente del sistema: no descargas. Tailwind 4 también tiene tokens `background`, `surface`, `foreground`, `muted`, `accent`, `border`.

`components/ui/primitives.tsx`: Card, Badge y Button. `lib/cn.ts`: composición de clases. Se pueden extender, sin cambiar la estética global innecesariamente.

## Composición esperada (a construir)
- Header discreto con marca, etiqueta «Datos sintéticos» y navegación a las rutas ya implementadas.
- Título grande con la pregunta que ayuda a resolver la pantalla.
- Indicadores o estado principal antes del gráfico.
- Cards con bordes finos, radios 16–20px y espacio en blanco generoso.
- Tabla legible para auditar números: el gráfico nunca es la única fuente.
- En ventas: ingresos verde, margen violeta; misma escala monetaria y leyenda explícita.
- En laboratorio: estado global prioritario; estados con texto, no solo color.

## Accesibilidad y uso
Controles con label, navegación por teclado, foco visible, jerarquía de encabezados y botones semánticos. Tablas con encabezados. Estados importantes anunciables sin saturar la lectura. A 1280×720 el objetivo principal y el estado deben verse sin buscar. A 390px de ancho no debe desbordar la página; la tabla puede tener scroll propio. Recharts puede requerir un contenedor con alto explícito para evitar gráficos vacíos. Respetar prefers-reduced-motion.

## Lenguaje y formato
Voseo: «Elegí», «Revisá», «Descargá». Evitar «vosotros» y «coste». `Intl.NumberFormat('es-AR')` para decimales y porcentajes; moneda `EUR` identificada explícitamente. Estos datos ficticios están denominados en euros: no cambiar importes ni inferir cotización.

Los gráficos deben tener etiquetas y unidades. Si mostrás valores redondeados, calculá siempre a partir de valores sin redondear. No presentar decoración como evidencia de calidad.
