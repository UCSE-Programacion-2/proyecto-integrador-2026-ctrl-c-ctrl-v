import 'dotenv/config';
import mongoose from 'mongoose';

import { connectDB } from '../src/config/db.js';
import Product from '../src/models/Product.js';

const products = [
  {
    name: 'Poncho pampeano',
    price: 25000,
    category: 'ponchos',
    description: 'Poncho de lana tejido artesanalmente, ideal para el campo.',
    image: 'https://picsum.photos/seed/poncho-pampeano/600/600',
    attributes: { color: 'marrón', talle: 'único', stock: 12 },
  },
  {
    name: 'Poncho calamaco',
    price: 32000,
    category: 'ponchos',
    description: 'Poncho tradicional de paño grueso, abrigado para el invierno.',
    image: 'https://picsum.photos/seed/poncho-calamaco/600/600',
    attributes: { color: 'negro', talle: 'único', stock: 8 },
  },
  {
    name: 'Bombacha de campo clásica',
    price: 15000,
    category: 'bombachas',
    description: 'Bombacha gaucha de gabardina, resistente para el trabajo diario.',
    image: 'https://picsum.photos/seed/bombacha-clasica/600/600',
    attributes: { color: 'beige', talle: 'M', stock: 20 },
  },
  {
    name: 'Bombacha de campo reforzada',
    price: 17500,
    category: 'bombachas',
    description: 'Bombacha con refuerzo en la entrepierna para mayor durabilidad.',
    image: 'https://picsum.photos/seed/bombacha-reforzada/600/600',
    attributes: { color: 'verde oliva', talle: 'L', stock: 15 },
  },
  {
    name: 'Boina vasca',
    price: 6500,
    category: 'accesorios',
    description: 'Boina de lana clásica, infaltable en el atuendo gaucho.',
    image: 'https://picsum.photos/seed/boina-vasca/600/600',
    attributes: { color: 'negro', talle: 'único', stock: 30 },
  },
  {
    name: 'Rebenque de cuero',
    price: 11000,
    category: 'accesorios',
    description: 'Rebenque trenzado a mano en cuero vacuno.',
    image: 'https://picsum.photos/seed/rebenque-cuero/600/600',
    attributes: { color: 'marrón', talle: 'único', stock: 10 },
  },
  {
    name: 'Alpargatas de lona',
    price: 8000,
    category: 'calzado',
    description: 'Alpargatas clásicas de lona con suela de goma.',
    image: 'https://picsum.photos/seed/alpargatas-lona/600/600',
    attributes: { color: 'azul', talle: '42', stock: 25 },
  },
  {
    name: 'Botas de potro',
    price: 45000,
    category: 'calzado',
    description: 'Botas altas de cuero, resistentes para el trabajo de campo.',
    image: 'https://picsum.photos/seed/botas-potro/600/600',
    attributes: { color: 'negro', talle: '43', stock: 6 },
  },
  {
    name: 'Cinturón gaucho con rastra',
    price: 20000,
    category: 'accesorios',
    description: 'Cinturón de cuero con rastra de metal plateada.',
    image: 'https://picsum.photos/seed/cinturon-rastra/600/600',
    attributes: { color: 'marrón', talle: '90', stock: 14 },
  },
  {
    name: 'Set de mate completo',
    price: 18000,
    category: 'accesorios',
    description: 'Mate de calabaza con bombilla de alpaca y termo a juego.',
    image: 'https://picsum.photos/seed/set-mate/600/600',
    attributes: { color: 'natural', talle: 'único', stock: 18 },
  },
];

async function seed() {
  try {
    await connectDB();

    await Product.deleteMany({});
    const created = await Product.insertMany(products);

    console.log(`${created.length} productos cargados correctamente.`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error al cargar los productos de prueba:', error);
    process.exit(1);
  }
}

seed();
