# 💪 Gym4ULSA - API de Rutinas de Ejercicio

Proyecto de backend para gestión de usuarios, ejercicios, rutinas y logs de entrenamiento. Utiliza **GraphQL con Apollo Server**, **MySQL** como base de datos y **JWT para autenticación**. El objetivo es administrar entrenamientos personalizados para usuarios de un gimnasio universitario.

---

## 🚀 Tecnologías

- Node.js + Express
- Apollo Server (GraphQL)
- MySQL (Workbench para diseño)
- JSON Web Tokens (JWT)
- Postman (para pruebas)
- Netlify (para futura integración del frontend)

---

## 📁 Estructura del Proyecto

DB2_API/
│
├── graphql/
│ ├── typeDefs/ # Definición de tipos GraphQL
│ ├── resolvers/ # Resolvers (lógica de queries y mutations)
│
├── database/
│ ├── connection.js # Conexión a la base de datos MySQL
│ ├── schema.sql # Script de creación de tablas
│ ├── triggers.sql # Auditoría de acciones
│
├── .env # Variables de entorno (NO se sube)
├── .gitignore # Archivos que no deben rastrearse
├── package.json # Dependencias y scripts
├── server.js # Punto de entrada principal


---

## ⚙️ Variables de Entorno

Crear un archivo `.env` con las siguientes variables:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_clave
DB_NAME=gym4ulsa
JWT_SECRET=superclaveultrasecreta

🛠️ Instalación
Clona el repositorio:

bash
Copy
Edit
git clone https://github.com/tuusuario/DB2_API.git
cd DB2_API
Instala las dependencias:

bash
Copy
Edit
npm install
Crea y configura tu base de datos:

Importa database/schema.sql en MySQL Workbench

Verifica conexión en database/connection.js

Inicia el servidor:

bash
Copy
Edit
node server.js
🔐 Autenticación con JWT
El usuario se autentica con email y contraseña.

Se genera un token que se debe enviar en el header Authorization:

makefile
Copy
Edit
Authorization: Bearer <token>
📬 Pruebas con Postman (GraphQL)
Puedes probar tus queries y mutations directamente con Postman usando el endpoint:

bash
Copy
Edit
http://localhost:4000/graphql
📈 Funcionalidades
Registro y login de usuarios

Consultas de ejercicios y rutinas

Creación de logs de entrenamiento

Auditoría de cambios (triggers SQL)

Autenticación con JWT

Filtrado de rutinas por día, dificultad, tipo

🧪 Próximamente
Frontend en React desplegado en Netlify

Registro visual de progreso

Filtros inteligentes por músculo y objetivos

Notificaciones de entrenamiento

📄 Licencia
MIT © 2025 JorgeParra
