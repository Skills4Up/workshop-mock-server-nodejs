# 1.1 Primeros pasos con json-server (20 min)

## Objetivos de aprendizaje

En este módulo aprenderás:

- Qué es json-server y cómo te facilita el desarrollo frontend
- Cómo instalar y configurar json-server básico
- Cómo crear tu primera API REST simulada con datos JSON
- Cómo realizar operaciones básicas con tu API mock

## Introducción (3 min)

Cuando desarrollamos aplicaciones frontend, a menudo necesitamos trabajar con APIs RESTful que aún no están implementadas o no están disponibles en nuestro entorno de desarrollo. Aquí es donde **json-server** se vuelve extremadamente útil.

**json-server** es una herramienta que crea automáticamente una API REST completa basada en un simple archivo JSON en segundos, sin escribir una sola línea de código backend.

## Instalación (2 min)

Para comenzar, necesitas tener Node.js instalado. Luego, instala json-server globalmente:

```bash
npm install -g json-server
```

Para verificar que la instalación fue exitosa:

```bash
json-server --version
```

## Tu primera API REST simulada (5 min)

### Paso 1: Crea un archivo db.json

Observa el archivo `db.json` en esta carpeta. Contiene una estructura básica para una tienda online:

```json
{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" }
  ],
  "products": [
    { "id": 1, "name": "Laptop Pro", "price": 999.99, "stock": 50 }
  ]
}
```

### Paso 2: Inicia json-server

Ejecuta json-server utilizando el archivo db.json:

```bash
json-server --watch db.json
```

¡Listo! Ahora tienes una API REST completamente funcional corriendo en [http://localhost:3000](http://localhost:3000)

## Explorando tu API (5 min)

json-server crea automáticamente estos endpoints:

- `GET /users` - Obtener todos los usuarios
- `GET /users/1` - Obtener el usuario con id 1
- `POST /users` - Crear un nuevo usuario
- `PUT /users/1` - Actualizar completamente el usuario con id 1
- `PATCH /users/1` - Actualizar parcialmente el usuario con id 1
- `DELETE /users/1` - Eliminar el usuario con id 1

Prueba estos endpoints utilizando:

- Tu navegador para solicitudes GET
- Postman o cURL para otras operaciones

## Configuraciones básicas (3 min)

json-server ofrece varias opciones de configuración:

```bash
# Cambiar el puerto
json-server --watch db.json --port 4000

# Añadir un retraso a las respuestas (ms)
json-server --watch db.json --delay 1000

# Usar otro archivo como base de datos
json-server --watch data/custom-db.json
```

## Uso de start.js (5 min)
****
Para una configuración más avanzada, podemos usar un archivo JavaScript:

1. Observa el archivo `start.js` incluido en esta carpeta
2. Ejecútalo con Node.js:

```bash
node start.js
```

Este enfoque te permite:

- Personalizar middlewares
- Agregar lógica antes de las respuestas
- Configurar múltiples opciones juntas

## Ejercicios prácticos (7 min)

1. Inicia json-server con el archivo db.json
2. Obtén todos los productos usando el navegador
3. Usa Postman para crear un nuevo producto
4. Modifica un usuario existente
5. Elimina un recurso

## Conclusión

¡Felicidades! Has configurado tu primera API REST simulada con json-server. Este es solo el comienzo - en los siguientes módulos aprenderás a diseñar modelos de datos más complejos y a personalizar el comportamiento de tu API.

## Próximos pasos

Continúa con el módulo `1.2 Modelado de datos REST` para aprender a estructurar datos más complejos y establecer relaciones entre ellos.

