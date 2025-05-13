// Configuración básica personalizada para json-server
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Usar los middlewares predeterminados (logger, static, cors y no-cache)
server.use(middlewares);

// Añadir un mensaje personalizado antes de las solicitudes
server.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Simular un retraso en las respuestas para un escenario más realista
server.use((req, res, next) => {
  setTimeout(next, 300); // Retraso de 300ms
});

// Middleware para verificar stock en caso de POST a orders
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/orders') {
    console.log('Verificando stock antes de crear orden...');
    // Aquí iría lógica real de verificación
  }
  next();
});

// Usar el enrutador automático
server.use(router);

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`
🚀 JSON Server está funcionando en http://localhost:${PORT}

Recursos disponibles:
  📋 http://localhost:${PORT}/users
  🛍️ http://localhost:${PORT}/products
  🧾 http://localhost:${PORT}/orders
  📦 http://localhost:${PORT}/order_items

Prueba algunas rutas en tu navegador:
  http://localhost:${PORT}/products?category=electronics
  http://localhost:${PORT}/products?price_gte=500
  http://localhost:${PORT}/users?role=admin

¡Feliz desarrollo!
  `);
});
