import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// Configuración de variables de entorno
dotenv.config();

const app = express();

// --- Middlewares ---
// 1. Morgan: Muestra logs de peticiones en consola (ej: "GET / 200 5ms")
app.use(morgan('dev'));

// 2. CORS: Permite peticiones desde cualquier origen (configurar para producción luego)
app.use(cors());

// 3. JSON: Permite recibir datos en formato JSON
app.use(express.json());

// --- Rutas ---
import { roleRouter } from './routes/role.routes.js';

app.use('/api/roles', roleRouter);

// --- Rutas de prueba ---
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date(), 
    uptime: process.uptime() 
  });
});

app.get('/', (req, res) => {
  res.send('API REST corriendo correctamente 🚀');
});

// --- Inicialización del Servidor ---
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

