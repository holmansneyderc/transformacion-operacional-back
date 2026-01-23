import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { providersMock } from './mock/providers.mock';
import { ProviderQueryDto } from './dto/index';
import { UpdateProviderDto } from './dto/index';
import { CreateProviderDto } from './dto/index';
import { EstadoProveedorTipo } from './interfaces/provider.interface'; 


@Injectable()
export class ProvidersService {
  private providers = providersMock;

  private nowBogotaISO(): string {
    const date = new Date();

    const bogota = new Intl.DateTimeFormat('sv-SE', {
      timeZone: 'America/Bogota',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);

    return bogota.replace(' ', 'T') + '.000Z';
  }


  // Normalizador (slug -> texto)
  private normalize(value: string): string {
    return value
      .toLowerCase()
      .replace(/-/g, ' ')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // Find all con filtros + sort + paginación
  findAll(filters: ProviderQueryDto) {
    let result = [...this.providers];

    // Paginación (defaults)
    const page = filters.page ?? 1;
    const pageSize = filters.pageSize ?? 10;

    

    if (page <= 0 || pageSize <= 0) {
      throw new BadRequestException(
        'page y pageSize deben ser mayores a 0',
      );
    }

    // Filtro por ESTADO
    if (filters.estado) {
      result = result.filter(
        provider =>
          provider.estadoProveedor.estado === filters.estado,
      );
    }

    // Filtro por LÍNEA
    if (filters.linea) {
      const linea = this.normalize(filters.linea);

      result = result.filter(provider =>
        provider.informacionGeneral.lineaNegocio.some(
          l => this.normalize(l) === linea,
        ),
      );
    }

    // Filtro por CIUDAD
    if (filters.ciudad) {
      const ciudad = this.normalize(filters.ciudad);

      result = result.filter(provider =>
        provider.sucursales.some(
          sucursal =>
            this.normalize(sucursal.ciudad) === ciudad,
        ),
      );
    }

    // Filtro por DEPARTAMENTO
    if (filters.departamento) {
      const departamento = this.normalize(filters.departamento);

      result = result.filter(provider =>
        provider.sucursales.some(
          sucursal =>
            this.normalize(sucursal.departamento) === departamento,
        ),
      );
    }

    // Filtro por HABILIDAD GENERAL
    if (filters.habilidadGeneral) {
      const habilidad = this.normalize(filters.habilidadGeneral);

      result = result.filter(provider =>
        provider.habilidades.generales.some(
          h => this.normalize(h) === habilidad,
        ),
      );
    }

    // Filtro por HABILIDAD ESPECIAL
    if (filters.habilidadEspecial) {
      const habilidad = this.normalize(filters.habilidadEspecial);

      result = result.filter(provider =>
        provider.habilidades.especiales.some(
          h => this.normalize(h) === habilidad,
        ),
      );
    }
    
    // Ordenamiento (sort)
    if (filters.sort) {
      const isDesc = filters.sort.startsWith('-');
      const field = isDesc
        ? filters.sort.substring(1)
        : filters.sort;

      if (field === 'fechaActivacion') {
        result.sort((a, b) => {
          const dateA = new Date(
            a.documentos.fechaActivacion,
          ).getTime();
          const dateB = new Date(
            b.documentos.fechaActivacion,
          ).getTime();

          return isDesc ? dateB - dateA : dateA - dateB;
        });
      } else {
        throw new BadRequestException(
          `Campo de ordenamiento no válido: ${field}`,
        );
      }
    }

    // Cálculo paginación
    const totalItems = result.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    if (page > totalPages && totalItems > 0) {
      throw new BadRequestException(
        `La página ${page} no existe. Total de páginas: ${totalPages}`,
      );
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const data = result.slice(start, end);

    // Response final
    return {
      data,
      meta: {
        page,
        pageSize,
        totalItems,
        totalPages,
      },
    };
  }

  update(id: number, dto: UpdateProviderDto) {
    const provider = this.providers.find(p => p.id === id);

    if (!provider) {
      throw new NotFoundException(`Proveedor ${id} no encontrado`);
    }

    // Asegura historial
    if (!provider.historialEstados) {
      provider.historialEstados = [];
    }

    if (dto.estadoProveedor) {
      const nuevoEstado = dto.estadoProveedor.estado;
      const estadoActual = provider.estadoProveedor.estado;

      // Si el estado NO cambia, no hacemos nada
      if (nuevoEstado !== estadoActual) {
        const fechaEstado = this.nowBogotaISO();

        // Actualiza estado actual
        provider.estadoProveedor = {
          ...provider.estadoProveedor,
          ...dto.estadoProveedor,
          fechaEstado,
        };

        // Agrega al historial
        provider.historialEstados.push({
          estado: nuevoEstado,
          subRazon: dto.estadoProveedor.subRazon ?? null,
          fecha: fechaEstado,
        });
      }
    }

  return provider;
  }

  create(dto: CreateProviderDto) {
    const fecha = this.nowBogotaISO();

    const newProvider = {
      id: this.providers.length + 1,

      informacionGeneral: dto.informacionGeneral,
      representanteLegal: dto.representanteLegal,
      sucursales: dto.sucursales,
      habilidades: dto.habilidades,
      documentos: dto.documentos,

      // Estado inicial ACTIVO
      estadoProveedor: {
        estado: 'ACTIVO' as EstadoProveedorTipo,
        subRazon: null,
        fechaEstado: fecha,
        fechaReactivacion: null,
      },

      // Historial inicial automático
      historialEstados: [
        {
          estado: 'ACTIVO' as EstadoProveedorTipo,
          subRazon: null,
          fecha,
        },
      ],
    };

    this.providers.push(newProvider);

    return newProvider;
  }



}
