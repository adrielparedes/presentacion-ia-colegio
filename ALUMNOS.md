# Tu primer sistema con IA

## La idea en una frase

No solo pidas un resultado: definí cómo vas a saber si está bien.

**IA (inteligencia artificial):** campo amplio que incluye sistemas para reconocer imágenes, recomendar contenido o generar texto; no toda IA es un modelo de lenguaje.
**LLM (Large Language Model):** modelo de lenguaje de gran tamaño que aprende patrones y genera texto usando el contexto. Trabaja con tokens: palabras o partes de palabras, entre otras unidades. Puede producir errores aunque su respuesta suene convincente.
**ChatGPT:** una aplicación que usa modelos de IA y puede integrar herramientas, como búsqueda web. La aplicación, el modelo y las herramientas no son lo mismo.

**Prompt:** el pedido que le hacés al modelo.
**Agente:** sistema que puede usar herramientas e iterar para completar una tarea.
**Harness:** el entorno de ejecución y control que rodea al modelo: contexto, herramientas, permisos, comprobaciones y feedback. Una carpeta de instrucciones puede ser una parte, pero no equivale por sí sola a aislamiento de seguridad.

## Términos en inglés para investigar

El foco se amplió del pedido al sistema de trabajo. Estos enfoques se combinan: no son una cronología rígida ni se reemplazan entre sí.

- **Prompt Engineering:** redactar y organizar instrucciones con objetivos y restricciones claros.
- **Context Engineering:** seleccionar y mantener la información que el modelo necesita: instrucciones, documentos, historial y resultados de herramientas. [Lectura: Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).
- **AI Agents:** sistemas en los que el modelo decide cómo usar herramientas para avanzar hacia un objetivo. [Lectura: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).
- **Harness Engineering:** diseñar el entorno que reúne contexto, herramientas, permisos, evaluaciones y mecanismos de control. [Lectura: OpenAI](https://openai.com/index/harness-engineering/).
- **Loop Engineering:** diseñar ciclos orientados a objetivos: recibir trabajo, actuar, comprobar, conservar el avance y decidir cómo seguir. Incluye límites, condiciones de parada y cuándo pedir ayuda. Es un término emergente y su alcance varía según el autor. [Lectura: Addy Osmani](https://addyosmani.com/blog/loop-engineering/).

Un ciclo automático no garantiza un resultado correcto ni elimina la responsabilidad humana. Las instrucciones escritas no reemplazan los permisos técnicos.

## Propuestas probabilísticas, comprobaciones deterministas

**El modelo propone; el código calcula; las pruebas contrastan; la persona decide.**

El modelo genera propuestas a partir del contexto; que una respuesta sea probable o convincente no la hace correcta. Para cálculos y reglas explícitas, usamos código y comprobaciones deterministas: con las mismas entradas y condiciones, obtenemos el mismo resultado.

- **Ventas:** el código calcula el margen con una fórmula definida; las pruebas lo comparan con ejemplos cuyo resultado conocemos.
- **Laboratorio:** el código aplica los umbrales del protocolo educativo. El modelo no puede decidir ignorar un control fallido.

Determinista no significa correcto: una fórmula equivocada también repite el mismo error. Las pruebas solo cubren los casos que comprobamos; la revisión humana sigue siendo necesaria.

## Lo que vimos

- **Panel comercial:** más facturación no equivale necesariamente a más margen bruto. La fórmula y los supuestos importan.
- **Laboratorio:** una muestra con poca dispersión no hace interpretable una ejecución con controles fallidos. Un dato ausente no es cero.
- **Ambos:** se revisa el resultado con evidencia concreta, no por lo convincente del texto.

## Un reto para empezar

Elegí una pregunta chica con datos públicos autorizados o sintéticos: gastos de un club, reservas de espacios, resultados de una simulación.

1. Escribí la decisión que querés facilitar.
2. Definí de dónde salen los datos y qué significa cada columna.
3. Pedí un producto chico: tabla, gráfico o informe.
4. Definí tres comprobaciones antes de construirlo.
5. Agregá un caso difícil: dato ausente, selección vacía o valor fuera de rango.
6. Usá el producto y explicá qué no verificaste.

No uses datos personales, pacientes, credenciales ni información de tu escuela sin autorización. No tomes decisiones clínicas con estas demos.

## Cinco preguntas para cualquier tarea

- ¿Qué resultado necesito?
- ¿Qué contexto y herramientas hacen falta?
- ¿Qué acciones necesitan permiso?
- ¿Cómo detectaremos errores?
- ¿Quién revisa y decide?

Aprender programación, estadística y ciencia sigue importando: son herramientas para reconocer si la solución es buena.
