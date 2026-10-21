# 00 · NexoBio: del problema al producto

Empresa biotecnológica ficticia con un equipo comercial y un laboratorio. Los estudiantes van a ver cómo un agente construye productos útiles a partir de contexto, herramientas y criterios, no cómo se copia una solución preparada.

## Estado inicial
Next.js arranca con una portada neutra, tokens de estilo y componentes genéricos. Ya están instaladas las dependencias y guardados los datos. No existen rutas `/ventas` ni `/laboratorio`, cálculos, gráficos o informes. Los tests iniciales prueban infraestructura y UI base, no las demos.

## Orden en vivo
1. Construir **ventas** desde la spec 02 y los datos. Hacer usable `/ventas` y enlazar desde `/`.
2. Verificar, mostrar el producto y, solo si se pide, aplicar el desafío elegido por el público.
3. Construir **laboratorio** desde la spec 03, sin romper ventas. Hacer usable `/laboratorio` y enlazar desde `/`.
4. Verificar y, solo si se pide, hacer el análisis de sensibilidad.

No intentar un portal corporativo completo ni un diseño de múltiples módulos antes de completar la primera decisión de negocio. La portada inicial se puede reemplazar por una navegación simple al implementar ventas.

## Qué cuenta como éxito
Producto navegable con cifras correctas, criterios claros y evidencia de comprobación. El tiempo relevante llega hasta el resultado revisado, no hasta la primera respuesta. No cuentan las líneas de código ni los tests verdes si el producto no resuelve la necesidad.

## Límites
Datos sintéticos, procesamiento local, sin login, sin persistencia, sin APIs externas ni despliegue. Sin pacientes ni recomendaciones clínicas. El modelo opera mediante pi desde terminal; no se integra un chatbot en la app. No copiar implementaciones de la carpeta padre. Los respaldos pertenecen al presentador, fuera del alcance del agente.
