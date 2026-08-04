import dns from 'node:dns';
import mongoose from 'mongoose';

// Windows a veces falla resolviendo el registro SRV de Atlas con el DNS
// del sistema; forzamos un DNS público como workaround conocido.
dns.setServers(['8.8.8.8', '1.1.1.1']);

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('Falta la variable de entorno MONGODB_URI');
  }

  await mongoose.connect(uri);
  console.log('MongoDB conectado');
}
