// Interface para los mocks (estructura denormalizada usada en el service)

export type EstadoProveedorTipo = 'ACTIVO' | 'SUSPENDIDO' | 'RETIRADO';

export interface ProviderMock {
  id: number;
  
  informacionGeneral: {
    razonSocial: string;
    nit: string;
    direccionCorrespondencia: string;
    lineaNegocio: string[];
    tipoPersona: 'Natural' | 'Jurídica';
    actividadEconomicaRues: string | string[];
    correoEmpresa: string;
  };

  representanteLegal: {
    nombre: string;
    tipoDocumento: string;
    documento: string;
    celular: string;
    email: string;
    cargo: string;
  };

  sucursales: Array<{
    direccion: string;
    ciudad: string;
    departamento: string;
    telefonos: string[];
  }>;

  habilidades: {
    generales: string[];
    especiales: string[];
  };

  documentos: {
    contrato: string;
    sagrilaft: string;
    tratamientoDatos: string;
    sst: string;
    fechaActivacion: string;
  };

  estadoProveedor: {
    estado: EstadoProveedorTipo;
    subRazon: string | null;
    fechaEstado: string;
    fechaReactivacion: string | null;
  };

  historialEstados?: Array<{
    estado: EstadoProveedorTipo;
    subRazon: string | null;
    fecha: string;
  }>;
}
