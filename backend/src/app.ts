import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import userRoutes from '@routes/User_Routes';
import cors from 'cors';

// Crear instancia de Express
const app: Application = express();

// Middleware para poder recibir JSON en las peticiones
app.use(cors());
app.use(express.json());

// Rutas de usuarios
app.use('/users', userRoutes);

// Ruta de prueba para comprobar que el servidor funciona
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola Mundo desde Express + TypeScript!');
});

// Configurar puerto
const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/user_management';

// Función para arrancar el servidor y conectar a MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conectado a MongoDB correctamente');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
    process.exit(1); // Salir del proceso si falla la conexión
  }
};

startServer();
