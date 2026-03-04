import { Injectable } from '@nestjs/common';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';
import { prisma } from 'lib/prisma';
import { connect } from 'http2';

@Injectable()
export class TechnicianService {
  async create(createTechnicianDto: CreateTechnicianDto) {
    
    const { disponibilidad, causa_rechazo, nombre, correo, cedula, celular, rol_id, sucursal_id, estado_id } = createTechnicianDto;

    const technician = await prisma.tecnico.create({
      data: {
        disponibilidad: disponibilidad,
        causa_rechazo: causa_rechazo,
        usuario :{
          create: {
            nombre: nombre,
            correo: correo,
            cedula: cedula,
            celular: celular,
            rol: {
              connect: { id: rol_id }
            }
          }
        },
        sucursal: {
          connect: { id: sucursal_id }
        },
        estado: {
          connect: { id: estado_id }
        }
      },
      include: {
        usuario: {
          include: { rol: true }
        },
        sucursal: true,
        estado: true
      }
    });

    return technician;
  }

  async findAll() {
    const technician = await prisma.proveedor.findMany()
    return technician;
  }

  findOne(id: number) {
    return `This action returns a #${id} technician`;
  }

  update(id: number, updateTechnicianDto: UpdateTechnicianDto) {
    return `This action updates a #${id} technician`;
  }

  remove(id: number) {
    return `This action removes a #${id} technician`;
  }
}
