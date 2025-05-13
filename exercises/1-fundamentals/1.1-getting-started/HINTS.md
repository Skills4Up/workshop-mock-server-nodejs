# Pistas y soluciones - Primeros pasos con json-server

## Desafío 1: Ampliación de datos

### Pista

Mantén la estructura existente y simplemente añade nuevos objetos a los arrays correspondientes.

### Solución parcial para categorías

```json
"categories": [
  { "id": 1, "name": "electronics", "description": "Electronic devices" },
  { "id": 2, "name": "home", "description": "Home appliances" },
  { "id": 3, "name": "clothing", "description": "Clothing and accessories" }
]
```

## Desafío 2: Filtrado y búsqueda

### Pista

json-server soporta muchos operadores de filtrado como `_gte`, `_lte`, `_ne`, `_like`.

### Búsqueda combinada

Para filtrar productos electrónicos con precio mayor a 500:

```
GET /products?category=electronics&price_gte=500
```

### Paginación

Para implementar paginación:

```
GET /products?_page=1&_limit=2
```

## Desafío 3: Personalización de start.js

### Pista para logger

Puedes usar el módulo `fs` para escribir en un archivo.

### Solución parcial para endpoint de estadísticas

```javascript
// Endpoint personalizado para estadísticas
server.get('/stats', (req, res) => {
  const db = router.db.getState();
  
  // Calcular estadísticas
  const totalProducts = db.products.length;
  const totalUsers = db.users.length;
  
  // Calcular valor total del inventario
  const inventoryValue = db.products.reduce((total, product) => {
    return total + (product.price * product.stock);
  }, 0);
  
  res.json({
    totalProducts,
    totalUsers,
    inventoryValue: inventoryValue.toFixed(2)
  });
});
```

## Desafío 4: Operaciones complejas

### Pista para crear una orden completa

Necesitas hacer múltiples solicitudes en secuencia.

### Ejemplo para crear una orden

1. Primero, crear la orden:

```
POST /orders
{
  "userId": 1,
  "date": "2025-05-12T10:00:00Z",
  "status": "pending",
  "total": 1799.98
}
```

2. Luego, con el ID de orden recibido (por ejemplo, 2), crear los items:

```
POST /order_items
{
  "orderId": 2,
  "productId": 1,
  "quantity": 1,
  "price": 999.99
}
```

3. Finalmente, actualizar el stock del producto:

```
PATCH /products/1
{
  "stock": 49
}
```

## Desafío 5: Variables de entorno y configuración

### Pista

Puedes usar el paquete `dotenv` para manejar variables de entorno.

### Solución parcial

```javascript
// Cargar variables de entorno
require('dotenv').config();

// Configuración desde variables de entorno
const PORT = process.env.PORT || 3000;
const DELAY = parseInt(process.env.DELAY || 300);
const DB_FILE = process.env.DB_FILE || 'db.json';

// Configurar el router con el archivo DB correcto
const router = jsonServer.router(DB_FILE);

// Configurar el delay
server.use((req, res, next) => {
  setTimeout(next, DELAY);
});
```

### Ejemplo de archivo .env

```
PORT=3500
DELAY=500
DB_FILE=./data/custom-db.json
```

### Ejecutar con diferentes configuraciones

```bash
# Usar configuración por defecto
node start.js

# Especificar el puerto directamente
PORT=4000 node start.js

# Usar un archivo de configuración específico
env $(cat .env.testing) node start.js
```
