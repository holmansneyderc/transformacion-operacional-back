import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { prisma } from '../lib/prisma.js';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // try {
  //   console.log("Verificando conexión a la base de datos...");
  //   await prisma.$connect();
  //   console.log("Base de datos conectada correctamente.");
  // } catch (error) {
  //   console.error("Error de conexión inicial:", error.message);
  // }
  app.setGlobalPrefix('api');
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const PUERTO = process.env.PUERTO || 8080

  await app.listen(PUERTO);
  console.log(`Servidor corriendo en: http://localhost:${PUERTO}`);
}
bootstrap();