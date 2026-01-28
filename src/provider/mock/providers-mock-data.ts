import { ProviderMock } from '../interfaces/provider-mock.interface';

export const providersMockData: ProviderMock[] = [
  {
    id: 1,
    informacionGeneral: {
      razonSocial: "Servicios Integrales Andinos S.A.S",
      nit: "900123456-7",
      direccionCorrespondencia: "Carrera 15 #80-20",
      lineaNegocio: ["Autos", "Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4520 - Mantenimiento y reparación de vehículos"],
      correoEmpresa: "contacto@andinos.com"
    },
    representanteLegal: {
      nombre: "Carlos Pérez",
      tipoDocumento: "CC",
      documento: "1020304050",
      celular: "3001234567",
      email: "carlos.perez@andinos.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 15 #80-20",
        ciudad: "Bogotá",
        departamento: "Cundinamarca",
        telefonos: ["6014567890", "3001234567"]
      },
      {
        direccion: "Calle 12 #10-45",
        ciudad: "Soacha",
        departamento: "Cundinamarca",
        telefonos: ["3019876543"]
      },
      {
        direccion: "Avenida Norte #23-18",
        ciudad: "Tunja",
        departamento: "Boyacá",
        telefonos: ["6087445566", "3205558899"]
      }
    ],
    habilidades: {
      generales: ["Transporte pesado", "Logística"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_andinos.pdf",
      sagrilaft: "sagrilaft_andinos.pdf",
      tratamientoDatos: "tratamiento_datos.pdf",
      sst: "sst_andinos.pdf",
      fechaActivacion: "2026-01-15T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-01-15T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-01-15T00:00:00.000Z"
      }
    ]
  },
  {
    id: 2,
    informacionGeneral: {
      razonSocial: "Soluciones Logísticas del Caribe",
      nit: "901456789-0",
      direccionCorrespondencia: "Calle 72 #45-10",
      lineaNegocio: ["Carga"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["5229 - Otras actividades complementarias al transporte"],
      correoEmpresa: "info@logisticacaribe.com"
    },
    representanteLegal: {
      nombre: "María Fernanda López",
      tipoDocumento: "CC",
      documento: "52889977",
      celular: "3105556677",
      email: "maria.lopez@logisticacaribe.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 72 #45-10",
        ciudad: "Barranquilla",
        departamento: "Atlántico",
        telefonos: ["6053344556"]
      }
    ],
    habilidades: {
      generales: [],
      especiales: ["Carga"]
    },
    documentos: {
      contrato: "contrato_logistica_caribe.pdf",
      sagrilaft: "sagrilaft_caribe.pdf",
      tratamientoDatos: "tratamiento_datos_caribe.pdf",
      sst: "sst_caribe.pdf",
      fechaActivacion: "2026-01-10T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'SUSPENDIDO',
      subRazon: "TECNICO",
      fechaEstado: "2026-03-01T00:00:00.000Z",
      fechaReactivacion: "2026-03-31T00:00:00.000Z"
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-01-10T00:00:00.000Z"
      },
      {
        estado: 'SUSPENDIDO',
        subRazon: "TECNICO",
        fecha: "2026-03-01T00:00:00.000Z"
      }
    ]
  },
  {
    id: 3,
    informacionGeneral: {
      razonSocial: "Asistencias Técnicas del Pacífico S.A.S",
      nit: "900789456-3",
      direccionCorrespondencia: "Calle 8 #34-55",
      lineaNegocio: ["Autos", "Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4321 - Instalaciones eléctricas", "4330 - Terminación y acabado de edificios"],
      correoEmpresa: "contacto@asistenciaspacifico.com"
    },
    representanteLegal: {
      nombre: "Andrés Gómez",
      tipoDocumento: "CC",
      documento: "94561233",
      celular: "3156678899",
      email: "andres.gomez@asistenciaspacifico.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 8 #34-55",
        ciudad: "Cali",
        departamento: "Valle del Cauca",
        telefonos: ["6024457788", "3156678899"]
      }
    ],
    habilidades: {
      generales: ["Electricidad", "Plomería"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_pacifico.pdf",
      sagrilaft: "sagrilaft_pacifico.pdf",
      tratamientoDatos: "tratamiento_datos_pacifico.pdf",
      sst: "sst_pacifico.pdf",
      fechaActivacion: "2025-12-20T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-02-15T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-12-20T00:00:00.000Z"
      },
      {
        estado: 'SUSPENDIDO',
        subRazon: "HABILIDAD",
        fecha: "2026-01-20T00:00:00.000Z"
      },
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-02-15T00:00:00.000Z"
      }
    ]
  },
  {
    id: 4,
    informacionGeneral: {
      razonSocial: "Grúas y Auxilios del Centro Ltda",
      nit: "830456123-9",
      direccionCorrespondencia: "Avenida Boyacá #45-60",
      lineaNegocio: ["Autos"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["5221 - Actividades de estaciones y servicios complementarios", "7710 - Alquiler de vehículos automotores"],
      correoEmpresa: "operaciones@gruascetro.com"
    },
    representanteLegal: {
      nombre: "Ricardo Mejía",
      tipoDocumento: "CC",
      documento: "80123456",
      celular: "3209988776",
      email: "ricardo.mejia@gruascetro.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Avenida Boyacá #45-60",
        ciudad: "Medellín",
        departamento: "Antioquia",
        telefonos: ["6044445566"]
      },
      {
        direccion: "Carrera 23 #12-40",
        ciudad: "Manizales",
        departamento: "Caldas",
        telefonos: ["6068899001"]
      }
    ],
    habilidades: {
      generales: ["Grúa", "Auxilio vial"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_gruas_centro.pdf",
      sagrilaft: "sagrilaft_gruas.pdf",
      tratamientoDatos: "tratamiento_datos_gruas.pdf",
      sst: "sst_gruas.pdf",
      fechaActivacion: "2026-01-01T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'SUSPENDIDO',
      subRazon: "OPERATIVO",
      fechaEstado: "2026-02-20T00:00:00.000Z",
      fechaReactivacion: "2026-03-20T00:00:00.000Z"
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-01-01T00:00:00.000Z"
      },
      {
        estado: 'SUSPENDIDO',
        subRazon: "OPERATIVO",
        fecha: "2026-02-20T00:00:00.000Z"
      }
    ]
  },
  {
    id: 5,
    informacionGeneral: {
      razonSocial: "Servicios Integrales del Oriente",
      nit: "901112233-4",
      direccionCorrespondencia: "Carrera 7 #21-90",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["8121 - Limpieza general interior de edificios", "4322 - Instalaciones de fontanería"],
      correoEmpresa: "administracion@serviciosoriente.com"
    },
    representanteLegal: {
      nombre: "Diana Castro",
      tipoDocumento: "CC",
      documento: "1033445566",
      celular: "3015566778",
      email: "diana.castro@serviciosoriente.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 7 #21-90",
        ciudad: "Bucaramanga",
        departamento: "Santander",
        telefonos: ["6076332211", "3015566778"]
      }
    ],
    habilidades: {
      generales: ["Plomería", "Aseo"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_oriente.pdf",
      sagrilaft: "sagrilaft_oriente.pdf",
      tratamientoDatos: "tratamiento_datos_oriente.pdf",
      sst: "sst_oriente.pdf",
      fechaActivacion: "2025-10-01T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'RETIRADO',
      subRazon: "ADMINISTRATIVO",
      fechaEstado: "2026-01-30T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-10-01T00:00:00.000Z"
      },
      {
        estado: 'SUSPENDIDO',
        subRazon: "OPERATIVO",
        fecha: "2025-12-01T00:00:00.000Z"
      },
      {
        estado: 'RETIRADO',
        subRazon: "ADMINISTRATIVO",
        fecha: "2026-01-30T00:00:00.000Z"
      }
    ]
  },
  {
    id: 6,
    informacionGeneral: {
      razonSocial: "Asistencias Integrales del Norte S.A.S",
      nit: "900998877-1",
      direccionCorrespondencia: "Carrera 48 #76-12",
      lineaNegocio: ["Autos", "Carga"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4520 - Mantenimiento de vehículos", "4330 - Terminación de edificios"],
      correoEmpresa: "contacto@asistenciasnorte.com"
    },
    representanteLegal: {
      nombre: "Felipe Navarro",
      tipoDocumento: "CC",
      documento: "91234567",
      celular: "3167788990",
      email: "felipe.navarro@asistenciasnorte.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 48 #76-12",
        ciudad: "Barranquilla",
        departamento: "Atlántico",
        telefonos: ["6057788990", "3167788990"]
      },
      {
        direccion: "Calle 22 #5-18",
        ciudad: "Santa Marta",
        departamento: "Magdalena",
        telefonos: ["6054321122"]
      }
    ],
    habilidades: {
      generales: ["Auxilio vial", "Grúa"],
      especiales: ["Carga"]
    },
    documentos: {
      contrato: "contrato_norte.pdf",
      sagrilaft: "sagrilaft_norte.pdf",
      tratamientoDatos: "tratamiento_datos_norte.pdf",
      sst: "sst_norte.pdf",
      fechaActivacion: "2025-11-01T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-03-05T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-11-01T00:00:00.000Z"
      },
      {
        estado: 'SUSPENDIDO',
        subRazon: "TECNICO",
        fecha: "2026-02-01T00:00:00.000Z"
      },
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-03-05T00:00:00.000Z"
      }
    ]
  },
  {
    id: 7,
    informacionGeneral: {
      razonSocial: "Soluciones Técnicas del Eje Cafetero",
      nit: "901334455-8",
      direccionCorrespondencia: "Carrera 14 #10-65",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4321 - Instalaciones eléctricas", "4322 - Instalaciones de fontanería"],
      correoEmpresa: "administracion@solucioneseje.com"
    },
    representanteLegal: {
      nombre: "Natalia Ríos",
      tipoDocumento: "CC",
      documento: "1088776655",
      celular: "3024455667",
      email: "natalia.rios@solucioneseje.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 14 #10-65",
        ciudad: "Pereira",
        departamento: "Risaralda",
        telefonos: ["6063344556", "3024455667"]
      },
      {
        direccion: "Avenida Bolívar #21-30",
        ciudad: "Armenia",
        departamento: "Quindío",
        telefonos: ["6067788991"]
      }
    ],
    habilidades: {
      generales: ["Plomería", "Electricidad"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_eje_cafetero.pdf",
      sagrilaft: "sagrilaft_eje.pdf",
      tratamientoDatos: "tratamiento_datos_eje.pdf",
      sst: "sst_eje.pdf",
      fechaActivacion: "2026-03-10T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-03-10T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-03-10T00:00:00.000Z"
      }
    ]
  }
];
