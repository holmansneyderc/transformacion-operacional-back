import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { prisma } from '../../../lib/prisma';
import { Provider } from './entities/provider.entity';
import { connect } from 'http2';

@Injectable()
export class ProvidersService {
  async create(createProviderDto: CreateProviderDto): Promise<Provider> {

    const {historico_estado_proveedor, scores ,documentos, habilidades_especiales, actividades, lineas, sucursales, contactos, ...datosBase } = createProviderDto;

    const nuevoProveedor = await prisma.proveedor.create({
      data: {
        ...datosBase,
        contactos: {
          create: contactos,
        },
        actividades:{
          create:  actividades.map((id) => ({
            actividad: {
              connect: {id: id}
            },
          })),
        },
        sucursales: {
          create: sucursales.map((sucursal) => ({
            direccion: sucursal.direccion,
            ciudad_id: sucursal.ciudad_id,
            telefonos: {
              create: sucursal.telefonos.map((tel) => ({
                numero: tel,
              })),
            },
          })),
        },
        lineas: {
          create: lineas.map((id) => ({
            linea: {
              connect: { id: id },
            },
          })),
        },
        habilidades_especiales:{
          create: habilidades_especiales.map((id) => ({
            habilidad_especial: {
              connect: { id: id },
            },
          })),
        },
        documentos:{
          create: documentos.map((doc) =>({
            documento_id: doc.documento_id,
            url: doc.url,
          })),
        },
        scores:{
          create: scores.map((score) =>({
            habilidad_id: score.habilidad_id
          })),
        },
        historico_estado_proveedor: {
          create: historico_estado_proveedor.map((historico) =>({
            usuario: {
              connect: { id: historico.usuario_id }
            },
            estado: {
              connect: { id: datosBase.estado_id }
            },
            fecha_inicio : new Date(historico.fecha_inicio),
            sub_razon : historico.sub_razon
          }))
        }
      },
      include: {
        contactos: true,
        estado: true,
        sucursales: {
          include: {telefonos:true}
        },
        lineas: true,
        actividades: true,
        habilidades_especiales: true,
        documentos: true,
        scores: true,
        historico_estado_proveedor: true
      },
    });

    return nuevoProveedor;
  } 

  async findAll() {
    const providers = await prisma.proveedor.findMany({
          include: { estado: true }
        });

    return providers.map(p => new Provider(p));
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
