import 'dotenv/config'; // Importante: Carga las variables del archivo .env
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  // Indica dónde se encuentra tu archivo de esquema principal
  schema: 'prisma/schema.prisma',

  // Configura la conexión a la base de datos
  datasource: {
    // Lee la variable de entorno DATABASE_URL definida en tu .env
    url: env('DATABASE_URL'),
  },

  // Opcional: Define dónde se guardarán las migraciones
  migrations: {
    path: 'prisma/migrations',
  },
});