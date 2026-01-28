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
      actividadEconomicaRues: ["5221 - Actividades de estaciones y servicios complementarios"],
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
      actividadEconomicaRues: ["8121 - Limpieza general interior de edificios"],
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
        estado: 'RETIRADO',
        subRazon: "ADMINISTRATIVO",
        fecha: "2026-01-30T00:00:00.000Z"
      }
    ]
  },
  {
    id: 6,
    informacionGeneral: {
      razonSocial: "Transportes Rápidos del Norte S.A.S",
      nit: "900334455-2",
      direccionCorrespondencia: "Calle 45 #23-10",
      lineaNegocio: ["Carga", "Autos"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4923 - Transporte de carga por carretera"],
      correoEmpresa: "contacto@transportesnorte.com"
    },
    representanteLegal: {
      nombre: "Luis Martínez",
      tipoDocumento: "CC",
      documento: "1022334455",
      celular: "3112233445",
      email: "luis.martinez@transportesnorte.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 45 #23-10",
        ciudad: "Cartagena",
        departamento: "Bolívar",
        telefonos: ["6056677889"]
      }
    ],
    habilidades: {
      generales: ["Transporte pesado"],
      especiales: ["Carga"]
    },
    documentos: {
      contrato: "contrato_transportes_norte.pdf",
      sagrilaft: "sagrilaft_transportes.pdf",
      tratamientoDatos: "tratamiento_datos_transportes.pdf",
      sst: "sst_transportes.pdf",
      fechaActivacion: "2025-11-15T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-11-15T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-11-15T00:00:00.000Z"
      }
    ]
  },
  {
    id: 7,
    informacionGeneral: {
      razonSocial: "Mantenimiento y Servicios Industriales Ltda",
      nit: "800445566-3",
      direccionCorrespondencia: "Avenida 6 #15-30",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4321 - Instalaciones eléctricas", "4322 - Instalaciones de fontanería"],
      correoEmpresa: "servicios@mantenimientoindustrial.com"
    },
    representanteLegal: {
      nombre: "Sandra Ramírez",
      tipoDocumento: "CC",
      documento: "52334455",
      celular: "3145566778",
      email: "sandra.ramirez@mantenimientoindustrial.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Avenida 6 #15-30",
        ciudad: "Pereira",
        departamento: "Risaralda",
        telefonos: ["6063344556"]
      }
    ],
    habilidades: {
      generales: ["Electricidad", "Plomería"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_mantenimiento.pdf",
      sagrilaft: "sagrilaft_mantenimiento.pdf",
      tratamientoDatos: "tratamiento_datos_mantenimiento.pdf",
      sst: "sst_mantenimiento.pdf",
      fechaActivacion: "2025-09-20T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-09-20T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-09-20T00:00:00.000Z"
      }
    ]
  },
  {
    id: 8,
    informacionGeneral: {
      razonSocial: "Servicios Automotrices del Valle S.A.S",
      nit: "900556677-4",
      direccionCorrespondencia: "Carrera 100 #15-45",
      lineaNegocio: ["Autos"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4520 - Mantenimiento y reparación de vehículos"],
      correoEmpresa: "contacto@autovalle.com"
    },
    representanteLegal: {
      nombre: "Jorge Vargas",
      tipoDocumento: "CC",
      documento: "94445566",
      celular: "3167788990",
      email: "jorge.vargas@autovalle.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 100 #15-45",
        ciudad: "Cali",
        departamento: "Valle del Cauca",
        telefonos: ["6024445566"]
      }
    ],
    habilidades: {
      generales: ["Mecánica", "Electricidad automotriz"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_autovalle.pdf",
      sagrilaft: "sagrilaft_autovalle.pdf",
      tratamientoDatos: "tratamiento_datos_autovalle.pdf",
      sst: "sst_autovalle.pdf",
      fechaActivacion: "2026-01-05T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-01-05T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-01-05T00:00:00.000Z"
      }
    ]
  },
  {
    id: 9,
    informacionGeneral: {
      razonSocial: "Soluciones de Carga Express Ltda",
      nit: "830667788-5",
      direccionCorrespondencia: "Calle 80 #50-20",
      lineaNegocio: ["Carga"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["5229 - Otras actividades complementarias al transporte"],
      correoEmpresa: "operaciones@cargaexpress.com"
    },
    representanteLegal: {
      nombre: "Patricia Moreno",
      tipoDocumento: "CC",
      documento: "52556677",
      celular: "3128899001",
      email: "patricia.moreno@cargaexpress.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 80 #50-20",
        ciudad: "Bogotá",
        departamento: "Cundinamarca",
        telefonos: ["6015566778"]
      }
    ],
    habilidades: {
      generales: ["Logística"],
      especiales: ["Carga"]
    },
    documentos: {
      contrato: "contrato_cargaexpress.pdf",
      sagrilaft: "sagrilaft_cargaexpress.pdf",
      tratamientoDatos: "tratamiento_datos_cargaexpress.pdf",
      sst: "sst_cargaexpress.pdf",
      fechaActivacion: "2025-12-10T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-12-10T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-12-10T00:00:00.000Z"
      }
    ]
  },
  {
    id: 10,
    informacionGeneral: {
      razonSocial: "Aseo y Limpieza Profesional S.A.S",
      nit: "900778899-6",
      direccionCorrespondencia: "Carrera 50 #30-15",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["8121 - Limpieza general interior de edificios"],
      correoEmpresa: "contacto@aseoprofesional.com"
    },
    representanteLegal: {
      nombre: "Carmen Silva",
      tipoDocumento: "CC",
      documento: "1055667788",
      celular: "3199900112",
      email: "carmen.silva@aseoprofesional.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 50 #30-15",
        ciudad: "Medellín",
        departamento: "Antioquia",
        telefonos: ["6046677889"]
      }
    ],
    habilidades: {
      generales: ["Aseo", "Desinfección"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_aseoprofesional.pdf",
      sagrilaft: "sagrilaft_aseoprofesional.pdf",
      tratamientoDatos: "tratamiento_datos_aseoprofesional.pdf",
      sst: "sst_aseoprofesional.pdf",
      fechaActivacion: "2026-01-20T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-01-20T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-01-20T00:00:00.000Z"
      }
    ]
  },
  {
    id: 11,
    informacionGeneral: {
      razonSocial: "Grúas del Caribe S.A.S",
      nit: "901889900-7",
      direccionCorrespondencia: "Avenida Murillo #60-25",
      lineaNegocio: ["Autos"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["5221 - Actividades de estaciones y servicios complementarios"],
      correoEmpresa: "servicios@gruascaribe.com"
    },
    representanteLegal: {
      nombre: "Alberto Díaz",
      tipoDocumento: "CC",
      documento: "8066778899",
      celular: "3201122334",
      email: "alberto.diaz@gruascaribe.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Avenida Murillo #60-25",
        ciudad: "Barranquilla",
        departamento: "Atlántico",
        telefonos: ["6055566778"]
      }
    ],
    habilidades: {
      generales: ["Grúa", "Auxilio vial"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_gruascaribe.pdf",
      sagrilaft: "sagrilaft_gruascaribe.pdf",
      tratamientoDatos: "tratamiento_datos_gruascaribe.pdf",
      sst: "sst_gruascaribe.pdf",
      fechaActivacion: "2025-10-15T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'SUSPENDIDO',
      subRazon: "HABILIDAD",
      fechaEstado: "2026-02-10T00:00:00.000Z",
      fechaReactivacion: "2026-03-10T00:00:00.000Z"
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-10-15T00:00:00.000Z"
      },
      {
        estado: 'SUSPENDIDO',
        subRazon: "HABILIDAD",
        fecha: "2026-02-10T00:00:00.000Z"
      }
    ]
  },
  {
    id: 12,
    informacionGeneral: {
      razonSocial: "Construcciones y Servicios Técnicos Ltda",
      nit: "800990011-8",
      direccionCorrespondencia: "Calle 100 #20-40",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4330 - Terminación y acabado de edificios"],
      correoEmpresa: "gerencia@construccionestecnicas.com"
    },
    representanteLegal: {
      nombre: "Fernando Torres",
      tipoDocumento: "CC",
      documento: "94778899",
      celular: "3152233445",
      email: "fernando.torres@construccionestecnicas.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 100 #20-40",
        ciudad: "Bogotá",
        departamento: "Cundinamarca",
        telefonos: ["6017788990"]
      }
    ],
    habilidades: {
      generales: ["Albañilería", "Pintura"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_construcciones.pdf",
      sagrilaft: "sagrilaft_construcciones.pdf",
      tratamientoDatos: "tratamiento_datos_construcciones.pdf",
      sst: "sst_construcciones.pdf",
      fechaActivacion: "2025-08-15T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-08-15T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-08-15T00:00:00.000Z"
      }
    ]
  },
  {
    id: 13,
    informacionGeneral: {
      razonSocial: "Transportes del Magdalena S.A.S",
      nit: "902001122-9",
      direccionCorrespondencia: "Carrera 30 #18-50",
      lineaNegocio: ["Carga"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4923 - Transporte de carga por carretera"],
      correoEmpresa: "administracion@transportesmagdalena.com"
    },
    representanteLegal: {
      nombre: "Liliana Rojas",
      tipoDocumento: "CC",
      documento: "52889900",
      celular: "3163344556",
      email: "liliana.rojas@transportesmagdalena.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 30 #18-50",
        ciudad: "Santa Marta",
        departamento: "Magdalena",
        telefonos: ["6054455667"]
      }
    ],
    habilidades: {
      generales: ["Transporte pesado", "Logística"],
      especiales: ["Carga"]
    },
    documentos: {
      contrato: "contrato_transportesmagdalena.pdf",
      sagrilaft: "sagrilaft_transportesmagdalena.pdf",
      tratamientoDatos: "tratamiento_datos_transportesmagdalena.pdf",
      sst: "sst_transportesmagdalena.pdf",
      fechaActivacion: "2025-11-01T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-11-01T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-11-01T00:00:00.000Z"
      }
    ]
  },
  {
    id: 14,
    informacionGeneral: {
      razonSocial: "Electricidad y Plomería Total Ltda",
      nit: "831112233-0",
      direccionCorrespondencia: "Avenida 15 #40-30",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4321 - Instalaciones eléctricas", "4322 - Instalaciones de fontanería"],
      correoEmpresa: "contacto@electricidadtotal.com"
    },
    representanteLegal: {
      nombre: "Roberto Campos",
      tipoDocumento: "CC",
      documento: "79990011",
      celular: "3174455667",
      email: "roberto.campos@electricidadtotal.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Avenida 15 #40-30",
        ciudad: "Bucaramanga",
        departamento: "Santander",
        telefonos: ["6075566778"]
      }
    ],
    habilidades: {
      generales: ["Electricidad", "Plomería"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_electricidadtotal.pdf",
      sagrilaft: "sagrilaft_electricidadtotal.pdf",
      tratamientoDatos: "tratamiento_datos_electricidadtotal.pdf",
      sst: "sst_electricidadtotal.pdf",
      fechaActivacion: "2026-01-12T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-01-12T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-01-12T00:00:00.000Z"
      }
    ]
  },
  {
    id: 15,
    informacionGeneral: {
      razonSocial: "Talleres Automotrices del Eje S.A.S",
      nit: "903223344-1",
      direccionCorrespondencia: "Calle 25 #14-20",
      lineaNegocio: ["Autos"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4520 - Mantenimiento y reparación de vehículos"],
      correoEmpresa: "servicios@tallereseje.com"
    },
    representanteLegal: {
      nombre: "Gustavo Herrera",
      tipoDocumento: "CC",
      documento: "10111223",
      celular: "3185566778",
      email: "gustavo.herrera@tallereseje.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 25 #14-20",
        ciudad: "Manizales",
        departamento: "Caldas",
        telefonos: ["6066677889"]
      }
    ],
    habilidades: {
      generales: ["Mecánica", "Pintura automotriz"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_tallereseje.pdf",
      sagrilaft: "sagrilaft_tallereseje.pdf",
      tratamientoDatos: "tratamiento_datos_tallereseje.pdf",
      sst: "sst_tallereseje.pdf",
      fechaActivacion: "2025-09-05T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'RETIRADO',
      subRazon: "OPERATIVO",
      fechaEstado: "2026-01-25T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-09-05T00:00:00.000Z"
      },
      {
        estado: 'RETIRADO',
        subRazon: "OPERATIVO",
        fecha: "2026-01-25T00:00:00.000Z"
      }
    ]
  },
  {
    id: 16,
    informacionGeneral: {
      razonSocial: "Logística Integrada del Pacífico Ltda",
      nit: "804334455-2",
      direccionCorrespondencia: "Carrera 80 #25-10",
      lineaNegocio: ["Carga"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["5229 - Otras actividades complementarias al transporte"],
      correoEmpresa: "operaciones@logisticapacifico.com"
    },
    representanteLegal: {
      nombre: "Mónica Gutiérrez",
      tipoDocumento: "CC",
      documento: "52112233",
      celular: "3196677889",
      email: "monica.gutierrez@logisticapacifico.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 80 #25-10",
        ciudad: "Cali",
        departamento: "Valle del Cauca",
        telefonos: ["6027788990"]
      }
    ],
    habilidades: {
      generales: ["Logística"],
      especiales: ["Carga"]
    },
    documentos: {
      contrato: "contrato_logisticapacifico.pdf",
      sagrilaft: "sagrilaft_logisticapacifico.pdf",
      tratamientoDatos: "tratamiento_datos_logisticapacifico.pdf",
      sst: "sst_logisticapacifico.pdf",
      fechaActivacion: "2025-12-01T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-12-01T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-12-01T00:00:00.000Z"
      }
    ]
  },
  {
    id: 17,
    informacionGeneral: {
      razonSocial: "Servicios de Limpieza Integral S.A.S",
      nit: "905445566-3",
      direccionCorrespondencia: "Calle 70 #35-15",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["8121 - Limpieza general interior de edificios"],
      correoEmpresa: "gerencia@limpiezaintegral.com"
    },
    representanteLegal: {
      nombre: "Paola Martínez",
      tipoDocumento: "CC",
      documento: "1066778899",
      celular: "3207788990",
      email: "paola.martinez@limpiezaintegral.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 70 #35-15",
        ciudad: "Bogotá",
        departamento: "Cundinamarca",
        telefonos: ["6018899001"]
      }
    ],
    habilidades: {
      generales: ["Aseo", "Desinfección"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_limpiezaintegral.pdf",
      sagrilaft: "sagrilaft_limpiezaintegral.pdf",
      tratamientoDatos: "tratamiento_datos_limpiezaintegral.pdf",
      sst: "sst_limpiezaintegral.pdf",
      fechaActivacion: "2026-01-18T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2026-01-18T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2026-01-18T00:00:00.000Z"
      }
    ]
  },
  {
    id: 18,
    informacionGeneral: {
      razonSocial: "Grúas y Talleres del Norte Ltda",
      nit: "806556677-4",
      direccionCorrespondencia: "Avenida 40 #80-25",
      lineaNegocio: ["Autos"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4520 - Mantenimiento y reparación de vehículos"],
      correoEmpresa: "contacto@gruasnorte.com"
    },
    representanteLegal: {
      nombre: "Andrés López",
      tipoDocumento: "CC",
      documento: "79223344",
      celular: "3118899001",
      email: "andres.lopez@gruasnorte.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Avenida 40 #80-25",
        ciudad: "Medellín",
        departamento: "Antioquia",
        telefonos: ["6049900112"]
      }
    ],
    habilidades: {
      generales: ["Grúa", "Mecánica"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_gruasnorte.pdf",
      sagrilaft: "sagrilaft_gruasnorte.pdf",
      tratamientoDatos: "tratamiento_datos_gruasnorte.pdf",
      sst: "sst_gruasnorte.pdf",
      fechaActivacion: "2025-10-20T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-10-20T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-10-20T00:00:00.000Z"
      }
    ]
  },
  {
    id: 19,
    informacionGeneral: {
      razonSocial: "Transporte de Mercancías del Atlántico S.A.S",
      nit: "907667788-5",
      direccionCorrespondencia: "Calle 85 #50-40",
      lineaNegocio: ["Carga"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4923 - Transporte de carga por carretera"],
      correoEmpresa: "operaciones@transatlantico.com"
    },
    representanteLegal: {
      nombre: "Eduardo Parra",
      tipoDocumento: "CC",
      documento: "8033445566",
      celular: "3129900112",
      email: "eduardo.parra@transatlantico.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Calle 85 #50-40",
        ciudad: "Barranquilla",
        departamento: "Atlántico",
        telefonos: ["6056677889"]
      }
    ],
    habilidades: {
      generales: ["Transporte pesado"],
      especiales: ["Carga"]
    },
    documentos: {
      contrato: "contrato_transatlantico.pdf",
      sagrilaft: "sagrilaft_transatlantico.pdf",
      tratamientoDatos: "tratamiento_datos_transatlantico.pdf",
      sst: "sst_transatlantico.pdf",
      fechaActivacion: "2025-11-10T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'SUSPENDIDO',
      subRazon: "TECNICO",
      fechaEstado: "2026-02-15T00:00:00.000Z",
      fechaReactivacion: "2026-03-15T00:00:00.000Z"
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-11-10T00:00:00.000Z"
      },
      {
        estado: 'SUSPENDIDO',
        subRazon: "TECNICO",
        fecha: "2026-02-15T00:00:00.000Z"
      }
    ]
  },
  {
    id: 20,
    informacionGeneral: {
      razonSocial: "Instalaciones Técnicas del Sur Ltda",
      nit: "808778899-6",
      direccionCorrespondencia: "Carrera 20 #30-50",
      lineaNegocio: ["Hogar"],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: ["4321 - Instalaciones eléctricas"],
      correoEmpresa: "servicios@instalacionessur.com"
    },
    representanteLegal: {
      nombre: "Beatriz Sánchez",
      tipoDocumento: "CC",
      documento: "52445566",
      celular: "3201001122",
      email: "beatriz.sanchez@instalacionessur.com",
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: "Carrera 20 #30-50",
        ciudad: "Pasto",
        departamento: "Nariño",
        telefonos: ["6027334455"]
      }
    ],
    habilidades: {
      generales: ["Electricidad"],
      especiales: []
    },
    documentos: {
      contrato: "contrato_instalacionessur.pdf",
      sagrilaft: "sagrilaft_instalacionessur.pdf",
      tratamientoDatos: "tratamiento_datos_instalacionessur.pdf",
      sst: "sst_instalacionessur.pdf",
      fechaActivacion: "2025-12-15T00:00:00.000Z"
    },
    estadoProveedor: {
      estado: 'ACTIVO',
      subRazon: null,
      fechaEstado: "2025-12-15T00:00:00.000Z",
      fechaReactivacion: null
    },
    historialEstados: [
      {
        estado: 'ACTIVO',
        subRazon: null,
        fecha: "2025-12-15T00:00:00.000Z"
      }
    ]
  }
];

// Generar proveedores adicionales de manera programática para completar 200
const additionalProviders: ProviderMock[] = [];
const ciudades = [
  { ciudad: "Bogotá", departamento: "Cundinamarca" },
  { ciudad: "Medellín", departamento: "Antioquia" },
  { ciudad: "Cali", departamento: "Valle del Cauca" },
  { ciudad: "Barranquilla", departamento: "Atlántico" },
  { ciudad: "Cartagena", departamento: "Bolívar" },
  { ciudad: "Bucaramanga", departamento: "Santander" },
  { ciudad: "Pereira", departamento: "Risaralda" },
  { ciudad: "Manizales", departamento: "Caldas" },
  { ciudad: "Santa Marta", departamento: "Magdalena" },
  { ciudad: "Cúcuta", departamento: "Norte de Santander" },
  { ciudad: "Ibagué", departamento: "Tolima" },
  { ciudad: "Pasto", departamento: "Nariño" },
  { ciudad: "Villavicencio", departamento: "Meta" },
  { ciudad: "Armenia", departamento: "Quindío" },
  { ciudad: "Popayán", departamento: "Cauca" }
];

const lineasNegocio = ["Autos", "Hogar", "Carga"];
const estados: Array<'ACTIVO' | 'SUSPENDIDO' | 'RETIRADO'> = ['ACTIVO', 'SUSPENDIDO', 'RETIRADO'];
const habilidadesGenerales = [
  "Transporte pesado", "Logística", "Electricidad", "Plomería",
  "Grúa", "Auxilio vial", "Mecánica", "Aseo", "Pintura", "Albañilería"
];
const habilidadesEspeciales = ["Carga", "Refrigeración", "Mudanzas"];

for (let i = 21; i <= 200; i++) {
  const ciudadIndex = (i - 21) % ciudades.length;
  const lineaIndex = (i - 21) % lineasNegocio.length;
  const estadoIndex = i % 3 === 0 ? 2 : i % 5 === 0 ? 1 : 0;
  const ciudad = ciudades[ciudadIndex];
  const linea = lineasNegocio[lineaIndex];
  const estado = estados[estadoIndex];
  
  const fecha = new Date(2025, 6 + (i % 6), (i % 28) + 1).toISOString();
  
  const habilidadesGen = [
    habilidadesGenerales[(i * 2) % habilidadesGenerales.length],
    habilidadesGenerales[(i * 3) % habilidadesGenerales.length]
  ];
  
  const habilidadesEsp = linea === "Carga" ? ["Carga"] : [];
  
  const provider: ProviderMock = {
    id: i,
    informacionGeneral: {
      razonSocial: `Empresa de Servicios ${i} S.A.S`,
      nit: `90${String(i).padStart(7, '0')}-${i % 10}`,
      direccionCorrespondencia: `Calle ${i} #${i % 100}-${i % 50}`,
      lineaNegocio: [linea],
      tipoPersona: 'Jurídica',
      actividadEconomicaRues: [`${4000 + (i % 1000)} - Actividad económica ${i}`],
      correoEmpresa: `contacto@empresa${i}.com`
    },
    representanteLegal: {
      nombre: `Representante ${i}`,
      tipoDocumento: "CC",
      documento: String(1000000 + i * 123).slice(0, 10),
      celular: `31${String(i).padStart(8, '0')}`,
      email: `rep${i}@empresa${i}.com`,
      cargo: "Representante Legal"
    },
    sucursales: [
      {
        direccion: `Calle ${i} #${i % 100}-${i % 50}`,
        ciudad: ciudad.ciudad,
        departamento: ciudad.departamento,
        telefonos: [`60${String(i).padStart(8, '0')}`]
      }
    ],
    habilidades: {
      generales: habilidadesGen,
      especiales: habilidadesEsp
    },
    documentos: {
      contrato: `contrato_empresa${i}.pdf`,
      sagrilaft: `sagrilaft_empresa${i}.pdf`,
      tratamientoDatos: `tratamiento_datos_empresa${i}.pdf`,
      sst: `sst_empresa${i}.pdf`,
      fechaActivacion: fecha
    },
    estadoProveedor: {
      estado: estado,
      subRazon: estado === 'ACTIVO' ? null : estado === 'SUSPENDIDO' ? "TECNICO" : "ADMINISTRATIVO",
      fechaEstado: fecha,
      fechaReactivacion: estado === 'SUSPENDIDO' ? new Date(2026, 3, 15).toISOString() : null
    },
    historialEstados: [
      {
        estado: estado,
        subRazon: estado === 'ACTIVO' ? null : estado === 'SUSPENDIDO' ? "TECNICO" : "ADMINISTRATIVO",
        fecha: fecha
      }
    ]
  };
  
  additionalProviders.push(provider);
}

// Combinar proveedores base con adicionales
providersMockData.push(...additionalProviders);
