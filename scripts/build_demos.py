from pathlib import Path
import json, random, shutil
ROOT = Path(__file__).resolve().parents[1]
def put(path, text):
    p=ROOT/path; p.parent.mkdir(parents=True,exist_ok=True); p.write_text(text)
rng=random.Random(18)
products=[('BioKit A',150,142),('Enzima B',90,38),('Reactivo C',60,20)]
orders=[]
for m in range(1,5):
    for name, price, cost in products:
        for region in ['Norte','Sur']:
            units=rng.randint(18,36) if name!='BioKit A' else rng.randint(60,85)
            returned=rng.randint(0,4)
            orders.append(dict(id=f'P{len(orders)+1:03}',month=f'2026-{m:02}',product=name,region=region,units=units,returned=returned,price=price,cost=cost))
lab=[dict(id='BLANCO',kind='blank',values=[0.049,0.05,0.051]),dict(id='CONTROL+',kind='positive',values=[0.61,0.62,0.63]),dict(id='M01',kind='sample',values=[0.81,0.82,0.83]),dict(id='M02',kind='sample',values=[0.40,0.73,0.95]),dict(id='M03',kind='sample',values=[0.51,None,0.53]),dict(id='M04',kind='sample',values=[0.65,0.66,0.67])]
put('demos/ventas/data.json',json.dumps(orders,indent=2))
put('demos/laboratorio/data.json',json.dumps(lab,indent=2))
put('demos/laboratorio/protocolo.json',json.dumps(dict(blankMax=0.1,positiveMin=0.8,positiveMax=1.2,cvMax=15,replicates=3),indent=2))
put('demos/ventas/BRIEF.md','''# NexoBio · Equipo comercial
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
''')
put('demos/laboratorio/PROTOCOLO.md','''# NexoBio · Ensayo colorimétrico educativo
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
''')
put('demos/ventas/PROMPTS.md','''# Copiar en pi desde la raíz de este proyecto
## 1 · Petición vaga (opcional, 60 segundos)
Sin modificar archivos: proponé un panel para nuestras ventas. ¿Qué información necesitás para saber si es correcto?
No afirmar que necesariamente se equivocará: observar las preguntas y supuestos reales.
## 2 · Trabajo con contexto
Leé demos/ventas/BRIEF.md, demos/ventas/data.json y demos/ventas/core.mjs. Explicá en 4 líneas la decisión empresarial y cómo vas a verificar los cálculos. Después mejorá demos/ventas/index.html para resaltar el contraste entre ingresos y margen. Conservá el contrato de core.mjs y no modifiques datos, pruebas ni la carpeta respaldo. No uses red ni instales dependencias. Ejecutá las pruebas de ventas y describí qué verifican y qué no. Si no podés inspeccionar el navegador, decilo; no afirmes haberlo hecho.
## 3 · Reto del público
Agregá un filtro por mes que se combine con región y actualice indicadores, tabla y gráfico. Conservá las definiciones del briefing. Agregá una prueba para la combinación de filtros y ejecutá las pruebas. No modifiques los datos ni respaldo. Resumí qué cambió y qué falta revisar visualmente.
## Alternativa corta
Agregá una alerta de margen inferior al 20%, con texto además de color. Verificá los cálculos y revisá el producto en el navegador.
''')
put('demos/laboratorio/PROMPTS.md','''# Copiar en pi desde la raíz de este proyecto
## 1 · Antes de actuar
Leé demos/laboratorio/PROTOCOLO.md, protocolo.json, data.json y core.mjs. Sin modificar nada, explicá por qué un gráfico visualmente limpio no alcanza para interpretar este ensayo.
## 2 · Encargo
Mejorá el informe de demos/laboratorio/index.html para que una persona identifique primero el estado global, después las causas y finalmente los detalles de cada muestra. Conservá los cálculos de core.mjs. No cambies protocolo, datos, pruebas ni respaldo. No uses red ni instales dependencias. Ejecutá node --test tests/laboratorio.test.mjs. No hagas afirmaciones biológicas ni diagnósticas: solo QC técnico del protocolo sintético. Explicá qué requiere revisión humana.
## 3 · Reto del público
Agregá una comparación de CV máximo 15% frente a 10% sin modificar protocolo.json. Etiquetala como análisis de sensibilidad educativo, no como protocolo aprobado. Mostrá ambos estados globales: el control positivo sigue fallando. Agregá una prueba y ejecutá las pruebas de laboratorio. No cambies los datos ni respaldo.
## Alternativa corta
Hacé más visible la muestra con una réplica ausente sin reemplazarla por cero ni eliminarla.
''')
put('demos/README.md','''# Demos
Desde la raíz: `npm start`. Abrir http://127.0.0.1:8000/demos/ventas/ y /demos/laboratorio/.
Son productos de referencia terminados: no fingir que se han generado durante la charla. En vivo, el agente los inspecciona, explica y modifica con el reto del público. Los prompts están en cada carpeta. Abrir esas carpetas y sus pruebas en el IDE.
`respaldo/` contiene copias independientes del punto de partida. Si algo falla, abrir /respaldo/ventas/ o /respaldo/laboratorio/; no requieren el modelo ni internet.
Para un reinicio deliberado, copiar los archivos de la demo correspondiente desde respaldo a demos, después de guardar cualquier trabajo que se quiera conservar. No hacerlo durante una ejecución del agente.
Los prompts son instrucciones, no un aislamiento de seguridad. No hay un sandbox configurado aquí: usar una carpeta dedicada sin secretos, no aprobar comandos destructivos ni acceso a otros directorios y no ejecutar código no revisado en cuentas corporativas. Elegir el modelo Codex disponible en tu instalación de pi; el paquete no modifica tu configuración ni credenciales.
''')
print('Datos y documentos creados')
