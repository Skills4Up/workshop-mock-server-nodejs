# Workshop: Mock API REST con Node.js

Un workshop intensivo para aprender a diseñar, implementar y utilizar APIs REST simuladas para desarrollo frontend, utilizando herramientas modernas de Node.js.

## 🎯 Objetivos de aprendizaje

Al finalizar este taller, podrás:

- **Diseñar** modelos de datos eficientes para APIs REST simuladas
- **Implementar** endpoints RESTful que respondan a operaciones CRUD
- **Configurar** comportamientos personalizados como latencia, errores y validación
- **Integrar** tu API mock con aplicaciones frontend en desarrollo
- **Automatizar** pruebas de integración utilizando tu API simulada

## 📚 Estructura del Repositorio (Learn-by-Doing)

## 📄 Archivos principales

- README.md - Información general e instrucciones
- SETUP.md - Instrucciones detalladas de instalación
- LEARNING_PATH.md - Ruta de aprendizaje y objetivos

## 📚 Documentación y guías

| Archivo            | Descripción                                |
| ------------------ | ------------------------------------------ |
| rest-cheatsheet.md | Cheatsheet completa de RESTful APIs        |
| best-practices.md  | Mejores prácticas para APIs simuladas      |
| knowledge-check.md | Preguntas de verificación de conocimientos |
| resources.md       | Enlaces a recursos adicionales             |

## 🧪 Ejercicios de aprendizaje (3 horas)

### Bloque 1: Fundamentos de APIs REST simuladas (60 min)

<details>
<summary><strong>1.1 Primeros pasos con json-server</strong> (20 min)</summary>

- [README.md](exercises/1-fundamentals/1.1-getting-started/README.md) - Introducción a json-server
- [db.json](exercises/1-fundamentals/1.1-getting-started/db.json) - Archivo inicial de datos
- [start.js](exercises/1-fundamentals/1.1-getting-started/start.js) - Configuración básica
- [challenges.md](exercises/1-fundamentals/1.1-getting-started/challenges.md) - Retos adicionales
- [HINTS.md](exercises/1-fundamentals/1.1-getting-started/HINTS.md) - Guía estratégica de solución

</details>

<details>
<summary><strong>1.2 Modelado de datos REST</strong> (20 min)</summary>

- [README.md](exercises/1-fundamentals/1.2-data-modeling/README.md) - Diseño de modelos de datos
- [db.json](exercises/1-fundamentals/1.2-data-modeling/db.json) - Plantilla para modelado
- [relations.js](exercises/1-fundamentals/1.2-data-modeling/relations.js) - Relaciones entre entidades
- [challenges.md](exercises/1-fundamentals/1.2-data-modeling/challenges.md) - Retos avanzados de modelado
- [HINTS.md](exercises/1-fundamentals/1.2-data-modeling/HINTS.md) - Estrategias de modelado

</details>

<details>
<summary><strong>1.3 Operaciones CRUD básicas</strong> (20 min)</summary>

- [README.md](exercises/1-fundamentals/1.3-crud-operations/README.md) - Guía de operaciones CRUD
- [db.json](exercises/1-fundamentals/1.3-crud-operations/db.json) - Datos para práctica
- [postman-collection.json](exercises/1-fundamentals/1.3-crud-operations/postman-collection.json) - Colección Postman
- [challenges.md](exercises/1-fundamentals/1.3-crud-operations/challenges.md) - Retos de manipulación
- [HINTS.md](exercises/1-fundamentals/1.3-crud-operations/HINTS.md) - Guía para operaciones avanzadas

</details>

### Bloque 2: Personalización y características avanzadas (65 min)

<details>
<summary><strong>2.1 Rutas personalizadas</strong> (20 min)</summary>

- [README.md](exercises/2-advanced/2.1-custom-routes/README.md) - Configuración de rutas personalizadas
- [routes.json](exercises/2-advanced/2.1-custom-routes/routes.json) - Definición de rutas
- [server.js](exercises/2-advanced/2.1-custom-routes/server.js) - Servidor con configuración
- [challenges.md](exercises/2-advanced/2.1-custom-routes/challenges.md) - Casos complejos de enrutamiento
- [HINTS.md](exercises/2-advanced/2.1-custom-routes/HINTS.md) - Estrategias de implementación

</details>

<details>
<summary><strong>2.2 Middlewares y extensiones</strong> (25 min)</summary>

- [README.md](exercises/2-advanced/2.2-middlewares/README.md) - Uso de middlewares
- [auth-middleware.js](exercises/2-advanced/2.2-middlewares/auth-middleware.js) - Autenticación simulada
- [validation-middleware.js](exercises/2-advanced/2.2-middlewares/validation-middleware.js) - Validación de datos
- [challenges.md](exercises/2-advanced/2.2-middlewares/challenges.md) - Retos de personalización
- [HINTS.md](exercises/2-advanced/2.2-middlewares/HINTS.md) - Implementaciones de ejemplo

</details>

<details>
<summary><strong>2.3 Simulación de errores y latencia</strong> (20 min)</summary>

- [README.md](exercises/2-advanced/2.3-error-latency/README.md) - Estrategias de error y latencia
- [error-config.js](exercises/2-advanced/2.3-error-latency/error-config.js) - Configuración de errores
- [latency-middleware.js](exercises/2-advanced/2.3-error-latency/latency-middleware.js) - Simulación de latencia
- [challenges.md](exercises/2-advanced/2.3-error-latency/challenges.md) - Casos de error complejos
- [HINTS.md](exercises/2-advanced/2.3-error-latency/HINTS.md) - Soluciones recomendadas

</details>

### Bloque 3: Integración y casos de uso reales (55 min)

<details>
<summary><strong>3.1 Integración con frontend</strong> (15 min)</summary>

- [README.md](exercises/3-integration/3.1-frontend/README.md) - Guía de integración
- [frontend-example/](exercises/3-integration/3.1-frontend/) - Proyecto de ejemplo
- [api-client.js](exercises/3-integration/3.1-frontend/api-client.js) - Cliente para consumir la API
- [challenges.md](exercises/3-integration/3.1-frontend/challenges.md) - Retos de integración
- [HINTS.md](exercises/3-integration/3.1-frontend/HINTS.md) - Estrategias de integración

</details>

<details>
<summary><strong>3.2 Testing con API mock</strong> (15 min)</summary>

- [README.md](exercises/3-integration/3.2-testing/README.md) - Testing de aplicaciones
- [integration-tests/](exercises/3-integration/3.2-testing/integration-tests/) - Ejemplos de tests
- [mock-config.js](exercises/3-integration/3.2-testing/mock-config.js) - Configuración para testing
- [challenges.md](exercises/3-integration/3.2-testing/challenges.md) - Casos de prueba complejos
- [HINTS.md](exercises/3-integration/3.2-testing/HINTS.md) - Estrategias de testing

</details>

<details>
<summary><strong>3.3 Proyecto e-commerce</strong> (25 min)</summary>

- [README.md](exercises/3-integration/3.3-ecommerce/README.md) - Proyecto integrador
- [db.json](exercises/3-integration/3.3-ecommerce/db.json) - Datos completos
- [server.js](exercises/3-integration/3.3-ecommerce/server.js) - Implementación completa
- [frontend/](exercises/3-integration/3.3-ecommerce/frontend/) - Frontend simplificado
- [HINTS.md](exercises/3-integration/3.3-ecommerce/HINTS.md) - Guía estratégica por etapas

</details>

## 🔄 Metodología de aprendizaje

Este workshop implementa un enfoque de aprendizaje activo basado en casos reales, combinando **práctica incremental**, **escenarios del mundo real** y **feedback inmediato**. Cada ejercicio está diseñado para ofrecer:

- **Progresión gradual** desde conceptos básicos hasta implementaciones complejas
- **Contexto profesional real** que muestra cómo se utilizan las APIs mock en proyectos
- **Feedback inmediato** a través de herramientas como Postman y comprobación automatizada
- **Aplicación práctica** que permite consolidar el conocimiento inmediatamente

## 📋 Cobertura de funcionalidades

Este workshop abarca exhaustivamente las siguientes áreas:

### 🧩 Bloque 1: Fundamentos

- **json-server**: instalación, configuración básica y puesta en marcha
- **Modelado de datos**: definición de entidades, relaciones y estructuras
- **Operaciones CRUD**: manipulación completa de recursos RESTful
- **Filtrado y paginación**: búsqueda avanzada y gestión de resultados

### 🔄 Bloque 2: Personalización avanzada

- **Rutas personalizadas**: definición de endpoints específicos
- **Middlewares**: extensión de funcionalidad con lógica personalizada
- **Autenticación mock**: simulación de sistemas de autenticación JWT
- **Manejo de errores**: simulación realista de escenarios de error
- **Latencia controlada**: simulación de condiciones de red variables

### 🔧 Bloque 3: Integración y casos prácticos

- **Integración frontend**: conexión con aplicaciones cliente
- **Testing de integración**: uso de API mock para pruebas automatizadas
- **Desarrollo paralelo**: estrategias para desarrollo frontend/backend simultáneo
- **Documentación de API**: generación y mantenimiento de documentación
- **Proyecto integrador**: implementación completa de un e-commerce

## 🚀 Instrucciones de instalación

```bash
# Clonar el repositorio
git clone https://github.com/skills4up/workshop-mock-server-nodejs.git

# Posicionarse en la carpeta
cd workshop-mock-server-nodejs

# Instalar dependencias
npm install

# Instalar json-server globalmente
npm install -g json-server

# Verificar la instalación
json-server --version
```

## 🧩 Cómo aprovechar al máximo el workshop

### Durante el workshop

1. **Estructura "Concepto → Ejemplo → Práctica → Desafío"**
   - Cada sección comienza con una explicación conceptual breve
   - Continúa con ejemplos demostrativos
   - Sigue con ejercicios guiados paso a paso
   - Finaliza con desafíos que aplican lo aprendido a escenarios reales

2. **Uso de herramientas complementarias**
   - Postman para probar los endpoints manualmente
   - Navegador para visualizar respuestas JSON
   - Terminal para monitorear logs del servidor
   - Editor para modificar configuraciones y datos

3. **Participación colaborativa**
   - Sesiones de código compartido para resolver problemas complejos
   - Revisión de implementaciones en grupo
   - Discusión de diferentes enfoques y mejores prácticas

### Después del workshop

- Repositorio de referencia disponible para consulta permanente
- Guías detalladas para implementar soluciones en proyectos propios
- Desafíos adicionales para seguir practicando
- Recursos para profundizar en cada aspecto

## 📋 Requisitos previos

- Node.js v14+ instalado
- Conocimientos básicos de JavaScript
- Familiaridad con conceptos REST (GET, POST, PUT, DELETE)
- Editor de código (Visual Studio Code recomendado)
- Postman o herramienta similar para probar APIs

## 🤝 Contribuciones

Este proyecto sigue un flujo de trabajo de contribución basado en GitHub:

1. Fork del repositorio
2. Creación de rama con nombre descriptivo
3. Implementación de cambios siguiendo las convenciones
4. Envío de Pull Request con descripción detallada

Todas las contribuciones son bienvenidas, especialmente:

- Nuevos escenarios de ejemplo
- Mejoras en documentación
- Ampliación de desafíos
- Corrección de errores

## 📜 Licencia

Este material está licenciado bajo [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/). Puedes:

- Compartir y adaptar el material
- Dar crédito apropiado al autor original

No puedes:

- Usar el material con fines comerciales sin autorización
- Distribuir versiones modificadas bajo términos más restrictivos

Para usos comerciales o autorizaciones especiales, contacta a [info@skills4up.com](mailto:info@skills4up.com).
