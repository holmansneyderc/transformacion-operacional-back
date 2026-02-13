import { Injectable } from '@nestjs/common';
import { prisma } from '../lib/prisma.js';

@Injectable()
export class AppService {
  
  async consultarRoles() {
    try {
      console.log("Consultando tabla 'rol'...");
      
      const roles = await prisma.rol.findMany();

      return {
        success: true,
        mensaje: "Conexión de lectura verificada",
        tabla: "rol",
        cantidadEncontrada: roles.length,
        datos: roles
      };

    } catch (error) {
      return {
        success: false,
        mensaje: "Error de lectura en la base de datos",
        errorCodigo: error.code,
        detalles: error.message
      };
    }
  }
}