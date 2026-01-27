export interface Provider {
  id: number;
  razon_social: string;
  nit: string;
  correo: string;
  estado_id: number;
  lineas_negocio: LineaNegocio[];
  actividades_economicas: ActividadEconomica[];
  contactos: Contacto[];
  sucursales: Sucursal[];
  habilidades: Habilidad[];
  documentos: DocumentoProveedor[];
  estado_actual: EstadoDetalle;
  historial_estados: HistorialEstado[];
}

export interface LineaNegocio {
  id: number;
  nombre: string;
}

export interface ActividadEconomica {
  id: number;
  codigo_ciiu: string;
  nombre: string;
}

export interface Contacto {
  id?: number;
  nombre: string;
  tipo_documento: string;
  documento: string;
  celular: string;
  email: string;
  cargo: string;
  es_gerente: boolean;
}

export interface Sucursal {
  id?: number;
  direccion: string;
  ciudad_id: number;
  ciudad_nombre: string;
  departamento_nombre: string;
  telefonos: SucursalTelefono[];
}

export interface SucursalTelefono {
  id?: number;
  numero: string;
}

export interface Habilidad {
  id: number;
  nombre: string;
  categoria: string;
}

export interface DocumentoProveedor {
  documento_id: number;
  nombre: string;
  url: string;
}

export type EstadoNombre = 'ACTIVO' | 'SUSPENDIDO' | 'RETIRADO';

export interface EstadoDetalle {
  id: number;
  nombre: EstadoNombre;
  sub_razon?: string | null;
  fecha_movimiento: string;
  fecha_reactivacion?: string | null;
}

export interface HistorialEstado {
  id: number;
  estado_id: number;
  nombre_estado: EstadoNombre;
  sub_razon?: string | null;
  fecha_movimiento: string;
  usuario_id: number;
}