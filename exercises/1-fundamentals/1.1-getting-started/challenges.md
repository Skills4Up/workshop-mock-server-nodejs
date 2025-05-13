# Desafíos adicionales - Primeros pasos con json-server

## Desafío 1: Ampliación de datos (5 min)

Mejora el archivo `db.json` para incluir:

1. Al menos 3 productos más con diferentes categorías
2. Un nuevo usuario con rol "manager"
3. Una nueva orden con múltiples productos
4. Un recurso nuevo llamado `categories` con al menos 3 categorías

## Desafío 2: Filtrado y búsqueda (5 min)

Utiliza las capacidades de filtrado de json-server para:

1. Obtener solo los productos con precio menor a 200

   ```
   GET /products?price_lte=200
   ```

2. Obtener solo los usuarios con rol "admin"

   ```
   GET /users?role=admin
   ```

3. Buscar productos que contengan la palabra "pro" en su nombre

   ```
   GET /products?name_like=pro
   ```

4. Ordenar productos por precio de mayor a menor

   ```
   GET /products?_sort=price&_order=desc
   ```

## Desafío 3: Personalización de start.js (7 min)

Modifica el archivo `start.js` para:

1. Cambiar el puerto a 3500
2. Implementar un registrador que guarde todas las solicitudes en un archivo `requests.log`
3. Añadir un endpoint personalizado `/stats` que devuelva estadísticas:
   - Número total de productos
   - Número total de usuarios
   - Valor total del inventario (suma de precio * stock)

## Desafío 4: Operaciones complejas (8 min)

1. Crea una nueva orden que incluya varios productos
   - Primero crea la orden principal
   - Luego añade los items de la orden con el ID recibido

2. Implementa una "compra" completa:
   - Crear una nueva orden
   - Añadir productos a la orden
   - Actualizar el stock de los productos comprados
   - Verificar que los cambios se hayan aplicado correctamente

## Desafío 5: Variables de entorno y configuración (5 min)

1. Modifica start.js para que utilice variables de entorno:
   - El puerto se debe leer de la variable PORT
   - El retraso se debe leer de la variable DELAY
   - El archivo de base de datos se debe leer de la variable DB_FILE

2. Crea un archivo .env para configurar estas variables

3. Documenta cómo ejecutar la aplicación con diferentes configuraciones

## Notas

- Puedes encontrar pistas y enfoques de solución en el archivo HINTS.md
- Intenta resolver los desafíos por tu cuenta antes de consultar las pistas
- ¡Experimenta y personaliza las soluciones según tus intereses!
