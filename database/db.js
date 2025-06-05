require('dotenv').config();
const knex = require('knex');

// Crear la instancia de conexión a la base de datos
const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'poetas_db',
    port: process.env.DB_PORT || 3306,
  },
  pool: { min: 0, max: 10 },
});

// Verificación inmediata de conexión
db.raw('SELECT 1')
  .then(() => {
    console.log('✅ Conectado exitosamente a la base de datos');
  })
  .catch((err) => {
    console.error('❌ Error de conexión a la base de datos:', err.message);
    process.exit(1); // Detiene el servidor si no se conecta
  });

module.exports = db;
