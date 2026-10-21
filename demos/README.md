# Demos
Desde la raíz: `npm start`. Abrir http://127.0.0.1:8000/demos/ventas/ y /demos/laboratorio/.
Son productos de referencia terminados: no fingir que se han generado durante la charla. En vivo, el agente los inspecciona, explica y modifica con el reto del público. Los prompts están en cada carpeta. Abrir esas carpetas y sus pruebas en el IDE.
`respaldo/` contiene copias independientes del punto de partida. Si algo falla, abrir /respaldo/ventas/ o /respaldo/laboratorio/; no requieren el modelo ni internet.
Para un reinicio deliberado, copiar los archivos de la demo correspondiente desde respaldo a demos, después de guardar cualquier trabajo que se quiera conservar. No hacerlo durante una ejecución del agente.
Los prompts son instrucciones, no un aislamiento de seguridad. No hay un sandbox configurado aquí: usar una carpeta dedicada sin secretos, no aprobar comandos destructivos ni acceso a otros directorios y no ejecutar código no revisado en cuentas corporativas. Elegir el modelo Codex disponible en tu instalación de pi; el paquete no modifica tu configuración ni credenciales.
