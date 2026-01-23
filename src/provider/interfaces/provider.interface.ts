export interface Provider {
  id: number;
  informacionGeneral: InformacionGeneral;
  representanteLegal: RepresentanteLegal;
  gerente?: Gerente;
  sucursales: Sucursal[];
  habilidades: Habilidades;
  documentos: Documentos;
  estadoProveedor: EstadoProveedor;
  historialEstados: HistorialEstado[];
}

export interface InformacionGeneral {
  razonSocial: string;
  nit: string;
  direccionCorrespondencia: string;
  lineaNegocio: string[];
  tipoPersona: 'Natural' | 'Jurídica';
  actividadEconomicaRues: string | string[];
  correoEmpresa: string;
}

export interface RepresentanteLegal {
  nombre: string;
  tipoDocumento: string;
  numeroDocumento: string;
  celular: string;
  correo: string;
  esGerente: boolean;
}

export interface Gerente {
  nombre: string;
  tipoDocumento: string;
  numeroDocumento: string;
  celular: string;
  correo: string;
}

export interface Sucursal {
  departamento: string;
  ciudad: string;
  direccion: string;
  telefonosContacto: string[];
}

export interface Habilidades {
  especiales: string[];
  generales: string[];
}

export interface Documentos {
  fechaContrato: string;
  fechaActivacion: string;
  contrato: string;
  sagrilaft: string;
  cartaTratamientoDatos: string;
  sst: string;
  siab: boolean;
  correoLider: string;
}

export type EstadoProveedorTipo = 'ACTIVO' | 'SUSPENDIDO' | 'RETIRADO';

export interface EstadoProveedor {
  estado: EstadoProveedorTipo;
  subRazon?: string | null;
  fechaEstado: string;
  fechaReactivacion?: string | null;
}

export interface HistorialEstado {
  estado: EstadoProveedorTipo;
  subRazon?: string | null
  fecha: string;
  fechaReactivacion?: string;
}

