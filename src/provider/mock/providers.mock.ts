import { Provider } from '../interfaces/provider.interface';

export const providers_mock: Provider[] = [
  {
    id: 1,
    razon_social: "Servicios Integrales Andinos S.A.S",
    nit: "900123456-7",
    correo: "contacto@andinos.com",
    estado_id: 1,
    lineas_negocio: [
      { id: 1, nombre: "Autos" },
      { id: 2, nombre: "Hogar" }
    ],
    actividades_economicas: [
      { id: 1, codigo_ciiu: "4520", nombre: "Mantenimiento y reparación de vehículos" }
    ],
    contactos: [
      {
        id: 1,
        nombre: "Carlos Pérez",
        tipo_documento: "CC",
        documento: "1020304050",
        celular: "3001234567",
        email: "carlos.perez@andinos.com",
        cargo: "Representante Legal",
        es_gerente: true
      }
    ],
    sucursales: [
      {
        id: 1,
        direccion: "Carrera 15 #80-20",
        ciudad_id: 1,
        ciudad_nombre: "Bogotá",
        departamento_nombre: "Cundinamarca",
        telefonos: [
          { id: 1, numero: "6014567890" },
          { id: 2, numero: "3001234567" }
        ]
      },
      {
        id: 2,
        direccion: "Calle 12 #10-45",
        ciudad_id: 2,
        ciudad_nombre: "Soacha",
        departamento_nombre: "Cundinamarca",
        telefonos: [{ id: 3, numero: "3019876543" }]
      },
      {
        id: 3,
        direccion: "Avenida Norte #23-18",
        ciudad_id: 3,
        ciudad_nombre: "Tunja",
        departamento_nombre: "Boyacá",
        telefonos: [
          { id: 4, numero: "6087445566" },
          { id: 5, numero: "3205558899" }
        ]
      }
    ],
    habilidades: [
      { id: 1, nombre: "Transporte pesado", categoria: "General" },
      { id: 2, nombre: "Logística", categoria: "General" }
    ],
    documentos: [
      { documento_id: 1, nombre: "Contrato", url: "contrato_andinos.pdf" },
      { documento_id: 2, nombre: "Sagrilaft", url: "sagrilaft_andinos.pdf" },
      { documento_id: 3, nombre: "Tratamiento de Datos", url: "tratamiento_datos.pdf" },
      { documento_id: 4, nombre: "SST", url: "sst_andinos.pdf" }
    ],
    estado_actual: {
      id: 1,
      nombre: "ACTIVO",
      sub_razon: null,
      fecha_movimiento: "2026-01-15",
      fecha_reactivacion: null
    },
    historial_estados: [
      { id: 1, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2026-01-15", usuario_id: 10 }
    ]
  },
  {
    id: 2,
    razon_social: "Soluciones Logísticas del Caribe",
    nit: "901456789-0",
    correo: "info@logisticacaribe.com",
    estado_id: 2,
    lineas_negocio: [{ id: 3, nombre: "Carga" }],
    actividades_economicas: [
      { id: 2, codigo_ciiu: "5229", nombre: "Otras actividades complementarias al transporte" }
    ],
    contactos: [
      {
        id: 2,
        nombre: "María Fernanda López",
        tipo_documento: "CC",
        documento: "52889977",
        celular: "3105556677",
        email: "maria.lopez@logisticacaribe.com",
        cargo: "Representante Legal",
        es_gerente: false
      },
      {
        id: 3,
        nombre: "Jorge Ramírez",
        tipo_documento: "CC",
        documento: "79988776",
        celular: "3118889900",
        email: "jorge.ramirez@logisticacaribe.com",
        cargo: "Gerente",
        es_gerente: true
      }
    ],
    sucursales: [
      {
        id: 4,
        direccion: "Calle 72 #45-10",
        ciudad_id: 4,
        ciudad_nombre: "Barranquilla",
        departamento_nombre: "Atlántico",
        telefonos: [{ id: 6, numero: "6053344556" }]
      }
    ],
    habilidades: [{ id: 3, nombre: "Carga", categoria: "Especial" }],
    documentos: [{ documento_id: 1, nombre: "Contrato", url: "contrato_logistica_caribe.pdf" }],
    estado_actual: {
      id: 2,
      nombre: "SUSPENDIDO",
      sub_razon: "TECNICO",
      fecha_movimiento: "2026-03-01",
      fecha_reactivacion: "2026-03-31"
    },
    historial_estados: [
      { id: 2, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2026-01-10", usuario_id: 10 },
      { id: 3, estado_id: 2, nombre_estado: "SUSPENDIDO", sub_razon: "TECNICO", fecha_movimiento: "2026-03-01", usuario_id: 11 }
    ]
  },
  {
    id: 3,
    razon_social: "Asistencias Técnicas del Pacífico S.A.S",
    nit: "900789456-3",
    correo: "contacto@asistenciaspacifico.com",
    estado_id: 1,
    lineas_negocio: [{ id: 1, nombre: "Autos" }, { id: 2, nombre: "Hogar" }],
    actividades_economicas: [
      { id: 3, codigo_ciiu: "4321", nombre: "Instalaciones eléctricas" },
      { id: 4, codigo_ciiu: "4330", nombre: "Terminación y acabado de edificios" }
    ],
    contactos: [
      {
        id: 4,
        nombre: "Andrés Gómez",
        tipo_documento: "CC",
        documento: "94561233",
        celular: "3156678899",
        email: "andres.gomez@asistenciaspacifico.com",
        cargo: "Representante Legal",
        es_gerente: true
      }
    ],
    sucursales: [
      {
        id: 5,
        direccion: "Calle 8 #34-55",
        ciudad_id: 5,
        ciudad_nombre: "Cali",
        departamento_nombre: "Valle del Cauca",
        telefonos: [{ id: 7, numero: "6024457788" }, { id: 8, numero: "3156678899" }]
      }
    ],
    habilidades: [
      { id: 4, nombre: "Electricidad", categoria: "General" },
      { id: 5, nombre: "Plomería", categoria: "General" }
    ],
    documentos: [{ documento_id: 1, nombre: "Contrato", url: "contrato_pacifico.pdf" }],
    estado_actual: {
      id: 1,
      nombre: "ACTIVO",
      sub_razon: null,
      fecha_movimiento: "2026-02-15",
      fecha_reactivacion: null
    },
    historial_estados: [
      { id: 4, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2025-12-20", usuario_id: 10 },
      { id: 5, estado_id: 2, nombre_estado: "SUSPENDIDO", sub_razon: "HABILIDAD", fecha_movimiento: "2026-01-20", usuario_id: 12 },
      { id: 6, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2026-02-15", usuario_id: 10 }
    ]
  },
  {
    id: 4,
    razon_social: "Grúas y Auxilios del Centro Ltda",
    nit: "830456123-9",
    correo: "operaciones@gruascetro.com",
    estado_id: 2,
    lineas_negocio: [{ id: 1, nombre: "Autos" }],
    actividades_economicas: [
      { id: 5, codigo_ciiu: "5221", nombre: "Actividades de estaciones y servicios complementarios" },
      { id: 6, codigo_ciiu: "7710", nombre: "Alquiler de vehículos automotores" }
    ],
    contactos: [
      {
        id: 5,
        nombre: "Ricardo Mejía",
        tipo_documento: "CC",
        documento: "80123456",
        celular: "3209988776",
        email: "ricardo.mejia@gruascetro.com",
        cargo: "Representante Legal",
        es_gerente: false
      },
      {
        id: 6,
        nombre: "Paola Hernández",
        tipo_documento: "CC",
        documento: "52788990",
        celular: "3123344556",
        email: "paola.hernandez@gruascetro.com",
        cargo: "Gerente",
        es_gerente: true
      }
    ],
    sucursales: [
      {
        id: 6,
        direccion: "Avenida Boyacá #45-60",
        ciudad_id: 6,
        ciudad_nombre: "Medellín",
        departamento_nombre: "Antioquia",
        telefonos: [{ id: 9, numero: "6044445566" }]
      },
      {
        id: 7,
        direccion: "Carrera 23 #12-40",
        ciudad_id: 7,
        ciudad_nombre: "Manizales",
        departamento_nombre: "Caldas",
        telefonos: [{ id: 10, numero: "6068899001" }]
      }
    ],
    habilidades: [
      { id: 6, nombre: "Grúa", categoria: "General" },
      { id: 7, nombre: "Auxilio vial", categoria: "General" }
    ],
    documentos: [{ documento_id: 1, nombre: "Contrato", url: "contrato_gruas_centro.pdf" }],
    estado_actual: {
      id: 2,
      nombre: "SUSPENDIDO",
      sub_razon: "OPERATIVO",
      fecha_movimiento: "2026-02-20",
      fecha_reactivacion: "2026-03-20"
    },
    historial_estados: [
      { id: 7, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2026-01-01", usuario_id: 10 },
      { id: 8, estado_id: 2, nombre_estado: "SUSPENDIDO", sub_razon: "OPERATIVO", fecha_movimiento: "2026-02-20", usuario_id: 11 }
    ]
  },
  {
    id: 5,
    razon_social: "Servicios Integrales del Oriente",
    nit: "901112233-4",
    correo: "administracion@serviciosoriente.com",
    estado_id: 3,
    lineas_negocio: [{ id: 2, nombre: "Hogar" }],
    actividades_economicas: [
      { id: 7, codigo_ciiu: "8121", nombre: "Limpieza general interior de edificios" },
      { id: 8, codigo_ciiu: "4322", nombre: "Instalaciones de fontanería" }
    ],
    contactos: [
      {
        id: 7,
        nombre: "Diana Castro",
        tipo_documento: "CC",
        documento: "1033445566",
        celular: "3015566778",
        email: "diana.castro@serviciosoriente.com",
        cargo: "Representante Legal",
        es_gerente: true
      }
    ],
    sucursales: [
      {
        id: 8,
        direccion: "Carrera 7 #21-90",
        ciudad_id: 8,
        ciudad_nombre: "Bucaramanga",
        departamento_nombre: "Santander",
        telefonos: [{ id: 11, numero: "6076332211" }, { id: 12, numero: "3015566778" }]
      }
    ],
    habilidades: [
      { id: 5, nombre: "Plomería", categoria: "General" },
      { id: 8, nombre: "Aseo", categoria: "General" }
    ],
    documentos: [{ documento_id: 1, nombre: "Contrato", url: "contrato_oriente.pdf" }],
    estado_actual: {
      id: 3,
      nombre: "RETIRADO",
      sub_razon: "ADMINISTRATIVO",
      fecha_movimiento: "2026-01-30",
      fecha_reactivacion: null
    },
    historial_estados: [
      { id: 9, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2025-10-01", usuario_id: 10 },
      { id: 10, estado_id: 2, nombre_estado: "SUSPENDIDO", sub_razon: "OPERATIVO", fecha_movimiento: "2025-12-01", usuario_id: 11 },
      { id: 11, estado_id: 3, nombre_estado: "RETIRADO", sub_razon: "ADMINISTRATIVO", fecha_movimiento: "2026-01-30", usuario_id: 12 }
    ]
  },
  {
    id: 6,
    razon_social: "Asistencias Integrales del Norte S.A.S",
    nit: "900998877-1",
    correo: "contacto@asistenciasnorte.com",
    estado_id: 1,
    lineas_negocio: [{ id: 1, nombre: "Autos" }, { id: 3, nombre: "Carga" }],
    actividades_economicas: [
      { id: 1, codigo_ciiu: "4520", nombre: "Mantenimiento de vehículos" },
      { id: 4, codigo_ciiu: "4330", nombre: "Terminación de edificios" }
    ],
    contactos: [
      {
        id: 8,
        nombre: "Felipe Navarro",
        tipo_documento: "CC",
        documento: "91234567",
        celular: "3167788990",
        email: "felipe.navarro@asistenciasnorte.com",
        cargo: "Representante Legal",
        es_gerente: true
      }
    ],
    sucursales: [
      {
        id: 9,
        direccion: "Carrera 48 #76-12",
        ciudad_id: 4,
        ciudad_nombre: "Barranquilla",
        departamento_nombre: "Atlántico",
        telefonos: [{ id: 13, numero: "6057788990" }, { id: 14, numero: "3167788990" }]
      },
      {
        id: 10,
        direccion: "Calle 22 #5-18",
        ciudad_id: 9,
        ciudad_nombre: "Santa Marta",
        departamento_nombre: "Magdalena",
        telefonos: [{ id: 15, numero: "6054321122" }]
      }
    ],
    habilidades: [
      { id: 3, nombre: "Carga", categoria: "Especial" },
      { id: 7, nombre: "Auxilio vial", categoria: "General" },
      { id: 6, nombre: "Grua", categoria: "General" }
    ],
    documentos: [{ documento_id: 1, nombre: "Contrato", url: "contrato_norte.pdf" }],
    estado_actual: {
      id: 1,
      nombre: "ACTIVO",
      sub_razon: null,
      fecha_movimiento: "2026-03-05",
      fecha_reactivacion: null
    },
    historial_estados: [
      { id: 12, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2025-11-01", usuario_id: 10 },
      { id: 13, estado_id: 2, nombre_estado: "SUSPENDIDO", sub_razon: "TECNICO", fecha_movimiento: "2026-02-01", usuario_id: 11 },
      { id: 14, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2026-03-05", usuario_id: 10 }
    ]
  },
  {
    id: 7,
    razon_social: "Soluciones Técnicas del Eje Cafetero",
    nit: "901334455-8",
    correo: "administracion@solucioneseje.com",
    estado_id: 1,
    lineas_negocio: [{ id: 2, nombre: "Hogar" }],
    actividades_economicas: [
      { id: 3, codigo_ciiu: "4321", nombre: "Instalaciones eléctricas" },
      { id: 8, codigo_ciiu: "4322", nombre: "Instalaciones de fontanería" }
    ],
    contactos: [
      {
        id: 9,
        nombre: "Natalia Ríos",
        tipo_documento: "CC",
        documento: "1088776655",
        celular: "3024455667",
        email: "natalia.rios@solucioneseje.com",
        cargo: "Representante Legal",
        es_gerente: true
      }
    ],
    sucursales: [
      {
        id: 11,
        direccion: "Carrera 14 #10-65",
        ciudad_id: 10,
        ciudad_nombre: "Pereira",
        departamento_nombre: "Risaralda",
        telefonos: [{ id: 16, numero: "6063344556" }, { id: 17, numero: "3024455667" }]
      },
      {
        id: 12,
        direccion: "Avenida Bolívar #21-30",
        ciudad_id: 11,
        ciudad_nombre: "Armenia",
        departamento_nombre: "Quindío",
        telefonos: [{ id: 18, numero: "6067788991" }]
      }
    ],
    habilidades: [
      { id: 5, nombre: "Plomería", categoria: "General" },
      { id: 4, nombre: "Electricidad", categoria: "General" }
    ],
    documentos: [{ documento_id: 1, nombre: "Contrato", url: "contrato_eje_cafetero.pdf" }],
    estado_actual: {
      id: 1,
      nombre: "ACTIVO",
      sub_razon: null,
      fecha_movimiento: "2026-03-10",
      fecha_reactivacion: null
    },
    historial_estados: [
      { id: 15, estado_id: 1, nombre_estado: "ACTIVO", fecha_movimiento: "2026-03-10", usuario_id: 10 }
    ]
  }
];