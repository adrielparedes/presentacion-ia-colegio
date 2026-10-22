# Hoja de ruta del directo · Modalidad anterior

> Esta guía conserva el flujo de modificación de demos estáticas preparadas. Para construir desde cero en la charla actual, usá [`GUION.md`](GUION.md), [`nexobio/DIRECTO.md`](nexobio/DIRECTO.md) y [`nexobio/PROMPTS.md`](nexobio/PROMPTS.md).

## Ventanas preparadas
1. Navegador con presentación y dos demos, más pestañas de respaldo.
2. IDE con esta carpeta. Abrir BRIEF.md, PROTOCOLO.md, un data.json y las pruebas.
3. Terminal A: `npm start` desde esta carpeta. Si 8000 está ocupado, resolver antes de seguir: todos los enlaces usan 8000.
4. Terminal B: pi con el modelo Codex que tengas disponible y autenticado. Este paquete no cambia tu configuración.
5. Terminal C: comandos de pruebas desde esta carpeta.

Aumentar tamaño de letra en IDE y terminal. Ocultar notificaciones, pestañas personales y datos sensibles. No mostrar tokens ni archivos de credenciales. No hace falta instalar extensiones ni servicios externos.

## Secuencia de software · 13 minutos

- **Min 0–2:** panel preparado. Preguntar: «¿Qué producto creen que aporta más margen?». Abrir tabla y cambiar región.
- **Min 2–3:** briefing y fila de datos. Explicar el significado del margen y el supuesto de devoluciones.
- **Min 3–5:** ejecutar `node --test tests/ventas.test.mjs`. Abrir la prueba de 10 unidades, 2 devueltas, precio 100, costo 60: ingresos 800, margen 320.
- **Min 5–8:** prompt 2 de `demos/ventas/PROMPTS.md` en pi. Mostrar lectura de archivos, modificación y pruebas. Si el modelo recomienda no cambiar nada sin un requisito concreto, aceptarlo y pasar al reto.
- **Min 8–11:** estudiantes eligen filtro por mes o alerta. Copiar el prompt correspondiente; exigir que no cambie definiciones ni datos para «hacerlo funcionar».
- **Min 11–13:** recargar navegador y usar el producto. Mostrar si cambia todo coherentemente. Las pruebas de cálculo no sustituyen esta revisión visual.

## Secuencia de laboratorio · 13 minutos

- **Min 0–2:** mostrar el gráfico y preguntar si basta para interpretar. Luego enseñar estado global.
- **Min 2–4:** protocolo, control positivo 0,62 fuera de [0,80, 1,20]. M01 técnicamente conforme no rescata el ensayo. M02: dispersión. M03: dato ausente.
- **Min 4–5:** `node --test tests/laboratorio.test.mjs`. Mostrar prueba de bloqueo global.
- **Min 5–8:** prompt 2 de `demos/laboratorio/PROMPTS.md`. Revisar la prioridad visual del estado global y descargar el informe.
- **Min 8–11:** pedir predicción y lanzar comparación CV 15%/10%. Es sensibilidad, no un nuevo protocolo aprobado. El control positivo sigue fuera de rango.
- **Min 11–13:** comprobar resultado y explicar revisión humana. No emitir conclusiones sobre salud, tratamientos ni biología real.

## Cómo manejar lo inesperado

| Situación | Acción y mensaje |
|---|---|
| Sin acceso al modelo | Abrir respaldo y recorrer briefing → código → pruebas → producto. «Hoy no ejecutamos la modificación con IA; sí podemos revisar el sistema preparado». |
| Respuesta lenta | Pasados 90 segundos sin avance útil, mostrar requisitos y pruebas; a los 3 minutos pasar al respaldo. |
| Cambio roto | Conservar el error visible, ejecutar pruebas, leer el fallo. Si no hay solución en 60 segundos, abrir respaldo sin borrar trabajo del agente. |
| Pruebas verdes pero UI incorrecta | Mostrar la diferencia: «Estas pruebas no cubren ese comportamiento». No anunciar éxito. |
| Modelo altera datos o umbrales | Detener y revisar el cambio. No aceptarlo para conseguir un resultado favorable. |
| Petición demasiado grande | Reformular un incremento pequeño. Registrar lo demás como siguiente iteración. |
| Servidor local falla | Reiniciar `npm start`; si no es posible, usar capturas en verificacion/ y el PDF. No afirmar que una captura es interactiva. |
| Sin tiempo | Elegir un solo reto y cerrar con las cinco preguntas de la diapositiva 23. |

## Frases útiles

- «No me importa cuántas líneas escribió: me importa qué podemos comprobar».
- «No demostramos que no existan errores; comprobamos estas condiciones».
- «Poner una prohibición en un prompt no crea una barrera de seguridad».
- «El protocolo es el criterio; el modelo no lo decide por su cuenta».
- «Pedir revisión también puede ser un resultado correcto».

## Qué no hacer

No lanzar comandos no revisados sobre otras carpetas, no conceder acceso a cuentas corporativas, no subir información real, no ampliar el alcance al vuelo a despliegues públicos ni pagos. No ejecutar los generadores de demos durante la sesión: sobrescriben el estado inicial. Los respaldos son productos interactivos locales, no grabaciones de una ejecución del agente.
