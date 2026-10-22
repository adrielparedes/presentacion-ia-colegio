# Fuentes y alcance

## 1. Harness engineering

OpenAI, Ryan Lopopolo. **Harness engineering: leveraging Codex in an agent-first world** (11 de febrero de 2026).
https://openai.com/index/harness-engineering/

Respalda la discusión del entorno, las herramientas y el feedback alrededor del agente. Es una experiencia publicada por un equipo concreto; no demuestra que cualquier empresa obtenga los mismos resultados. No usamos sus cifras de código ni las extrapolamos a productividad. La página directa devolvió 403 durante la preparación; título, autor, fecha e introducción se contrastaron mediante resultados de búsqueda indexados. No se presenta como una revisión completa del artículo.

## 2. Harnesses y ciclos de trabajo · Anthropic

Anthropic. **Harness design for long-running application development**.
https://www.anthropic.com/engineering/harness-design-long-running-apps

Lectura destacada en la diapositiva de fuentes. Describe una arquitectura con planificación, generación y evaluación, ciclos de feedback y artefactos estructurados para conservar contexto entre sesiones. Advierte sobre la autoevaluación indulgente y explica la separación entre quien genera y quien evalúa. Un evaluador basado en otro LLM sigue siendo falible: no reemplaza comprobaciones deterministas ni revisión humana. Los resultados corresponden a sus experimentos y no garantizan calidad, autonomía o productividad en otros proyectos.

Anthropic. **Effective harnesses for long-running agents**.
https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents

Lectura previa y complementaria: preparación inicial, avances incrementales y registro del progreso para que una sesión pueda continuar el trabajo de otra. Respalda la importancia del entorno, la continuidad y las comprobaciones, no dejar un agente repitiendo un prompt indefinidamente.

Ambas páginas se recuperaron al actualizar las referencias. Se usan para explicar harnesses y ciclos prácticos; no se atribuye a Anthropic el término «Loop Engineering», cuya referencia específica está en la sección 5.

## 3. Riesgos y responsabilidad

NIST. **AI Risk Management Framework**.
https://www.nist.gov/itl/ai-risk-management-framework

Marco general para gestionar riesgos de IA. La página fue recuperada durante la preparación. Se cita como referencia para reflexión sobre riesgos, no como certificación de este material ni de las demos.

## 4. Context Engineering y AI Agents

Anthropic. **Effective context engineering for AI agents**.
https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents

Distingue redactar instrucciones de seleccionar y mantener el conjunto de información disponible durante la ejecución. Respalda la explicación de Context Engineering, no una cronología universal.

Anthropic. **Building effective agents**.
https://www.anthropic.com/engineering/building-effective-agents

Distingue workflows con recorridos predefinidos de agentes que dirigen dinámicamente el uso de herramientas. AI Agents designa un tipo de sistema, no una disciplina equivalente a las otras etiquetas.

## 5. Loop Engineering

Addy Osmani. **Loop Engineering**.
https://addyosmani.com/blog/loop-engineering/

Describe sistemas que reciben o descubren trabajo, coordinan agentes, comprueban resultados y conservan estado para continuar. Sitúa este enfoque por encima del harness individual y advierte sobre costos, verificación y revisión humana. Es una perspectiva de un autor sobre una práctica emergente; el alcance del término no es universal.

Las tres páginas de las secciones 4 y 5 se recuperaron al actualizar esta presentación. Se usan para explicar conceptos, no para respaldar promesas de productividad ni funcionalidades concretas de las herramientas de la demo. El mapa de términos de la diapositiva 5 representa una ampliación del foco, no una cronología fechada ni etapas que se reemplazan.

## 6. Introducción a IA y modelos de lenguaje

Google Developers. **Introduction to Large Language Models**.
https://developers.google.com/machine-learning/resources/intro-llms

Página recuperada al agregar la introducción. Respalda la explicación de modelos de lenguaje, contexto y tokens (palabras, partes de palabras o caracteres), y tareas como generación, traducción y resumen. La diapositiva 2 distingue el campo amplio de la IA, los LLM como un tipo de modelo y una aplicación como ChatGPT que puede integrar modelos y herramientas. No toda IA es un LLM; generar una respuesta plausible no garantiza su veracidad ni implica consultar la web. La explicación oral es introductoria, no una descripción completa de entrenamiento, razonamiento o modelos multimodales.

## Qué es original y ficticio

NexoBio, pedidos, productos, resultados, protocolo y umbrales son sintéticos y se han creado para esta sesión. No proceden de una empresa ni de un ensayo real. El protocolo no es un método científico validado. La presentación no hace afirmaciones diagnósticas ni promete mejoras cuantificadas de productividad.

La estética está inspirada en interfaces de herramientas de IA; no es una presentación oficial de OpenAI, ChatGPT, Codex ni pi. Las capacidades y permisos de la instalación real dependen de su configuración.
