import { Provider } from '../interfaces/provider.interface';
export const providersMock: Provider[] = [
   {
      "id": 1,
      "informacionGeneral": {
        "razonSocial": "Servicios Integrales Andinos S.A.S",
        "nit": "900123456-7",
        "direccionCorrespondencia": "Carrera 15 #80-20",
        "lineaNegocio": [
          "Autos",
          "Hogar"
        ],
        "tipoPersona": "Jurídica",
        "actividadEconomicaRues": "4520 - Mantenimiento y reparación de vehículos",
        "correoEmpresa": "contacto@andinos.com"
      },
      "representanteLegal": {
        "nombre": "Carlos Pérez",
        "tipoDocumento": "CC",
        "numeroDocumento": "1020304050",
        "celular": "3001234567",
        "correo": "carlos.perez@andinos.com",
        "esGerente": true
      },
      "sucursales": [
        {
          "departamento": "Cundinamarca",
          "ciudad": "Bogotá",
          "direccion": "Carrera 15 #80-20",
          "telefonosContacto": [
            "6014567890",
            "3001234567"
          ]
        },
        {
          "departamento": "Cundinamarca",
          "ciudad": "Soacha",
          "direccion": "Calle 12 #10-45",
          "telefonosContacto": [
            "3019876543"
          ]
        },
        {
          "departamento": "Boyacá",
          "ciudad": "Tunja",
          "direccion": "Avenida Norte #23-18",
          "telefonosContacto": [
            "6087445566",
            "3205558899"
          ]
        }
      ],
      "habilidades": {
        "especiales": [],
        "generales": [
          "Transporte pesado",
          "Logística"
        ]
      },
      "documentos": {
        "fechaContrato": "2026-01-10",
        "fechaActivacion": "2026-01-15",
        "contrato": "contrato_andinos.pdf",
        "sagrilaft": "sagrilaft_andinos.pdf",
        "cartaTratamientoDatos": "tratamiento_datos.pdf",
        "sst": "sst_andinos.pdf",
        "siab": true,
        "correoLider": "lider.andinos@segurosbolivar.com"
      },
      "estadoProveedor": {
        "estado": "ACTIVO",
        "subRazon": null,
        "fechaEstado": "2026-01-15",
        "fechaReactivacion": null
      },
      "historialEstados": [
        {
          "estado": "ACTIVO",
          "fecha": "2026-01-15"
        }
      ]
    },
    {
      "id": 2,
      "informacionGeneral": {
        "razonSocial": "Soluciones Logísticas del Caribe",
        "nit": "901456789-0",
        "direccionCorrespondencia": "Avenida 4 #12-30",
        "lineaNegocio": [
          "Carga"
        ],
        "tipoPersona": "Jurídica",
        "actividadEconomicaRues": "5229 - Otras actividades complementarias al transporte",
        "correoEmpresa": "info@logisticacaribe.com"
      },
      "representanteLegal": {
        "nombre": "María Fernanda López",
        "tipoDocumento": "CC",
        "numeroDocumento": "52889977",
        "celular": "3105556677",
        "correo": "maria.lopez@logisticacaribe.com",
        "esGerente": false
      },
      "gerente": {
        "nombre": "Jorge Ramírez",
        "tipoDocumento": "CC",
        "numeroDocumento": "79988776",
        "celular": "3118889900",
        "correo": "jorge.ramirez@logisticacaribe.com"
      },
      "sucursales": [
        {
          "departamento": "Atlántico",
          "ciudad": "Barranquilla",
          "direccion": "Calle 72 #45-10",
          "telefonosContacto": [
            "6053344556"
          ]
        }
      ],
      "habilidades": {
        "especiales": [
          "Carga"
        ],
        "generales": []
      },
      "documentos": {
        "fechaContrato": "2026-02-01",
        "fechaActivacion": "2026-02-05",
        "contrato": "contrato_logistica_caribe.pdf",
        "sagrilaft": "sagrilaft_logistica.pdf",
        "cartaTratamientoDatos": "tratamiento_logistica.pdf",
        "sst": "sst_logistica.pdf",
        "siab": false,
        "correoLider": "lider.caribe@segurosbolivar.com"
      },
      "estadoProveedor": {
        "estado": "SUSPENDIDO",
        "subRazon": "TECNICO",
        "fechaEstado": "2026-03-01",
        "fechaReactivacion": "2026-03-31"
      },
      "historialEstados": [
        {
          "estado": "ACTIVO",
          "fecha": "2026-01-10"
        },
        {
          "estado": "SUSPENDIDO",
          "subRazon": "TECNICO",
          "fecha": "2026-03-01",
          "fechaReactivacion": "2026-03-31"
        }
      ]
    },
    {
      "id": 3,
      "informacionGeneral": {
        "razonSocial": "Asistencias Técnicas del Pacífico S.A.S",
        "nit": "900789456-3",
        "direccionCorrespondencia": "Calle 8 #34-55",
        "lineaNegocio": [
          "Hogar",
          "Autos"
        ],
        "tipoPersona": "Jurídica",
        "actividadEconomicaRues": [
          "4321 - Instalaciones eléctricas",
          "4330 - Terminación y acabado de edificios"
        ],
        "correoEmpresa": "contacto@asistenciaspacifico.com"
      },
      "representanteLegal": {
        "nombre": "Andrés Gómez",
        "tipoDocumento": "CC",
        "numeroDocumento": "94561233",
        "celular": "3156678899",
        "correo": "andres.gomez@asistenciaspacifico.com",
        "esGerente": true
      },
      "sucursales": [
        {
          "departamento": "Valle del Cauca",
          "ciudad": "Cali",
          "direccion": "Calle 8 #34-55",
          "telefonosContacto": [
            "6024457788",
            "3156678899"
          ]
        }
      ],
      "habilidades": {
        "especiales": [],
        "generales": [
          "Electricidad",
          "Plomería"
        ]
      },
      "documentos": {
        "fechaContrato": "2026-01-20",
        "fechaActivacion": "2026-01-25",
        "contrato": "contrato_pacifico.pdf",
        "sagrilaft": "sagrilaft_pacifico.pdf",
        "cartaTratamientoDatos": "tratamiento_pacifico.pdf",
        "sst": "sst_pacifico.pdf",
        "siab": true,
        "correoLider": "lider.pacifico@segurosbolivar.com"
      },
      "estadoProveedor": {
        "estado": "ACTIVO",
        "subRazon": null,
        "fechaEstado": "2026-02-15",
        "fechaReactivacion": null
      },
      "historialEstados": [
        {
          "estado": "ACTIVO",
          "fecha": "2025-12-20"
        },
        {
          "estado": "SUSPENDIDO",
          "subRazon": "HABILIDAD",
          "fecha": "2026-01-20",
          "fechaReactivacion": "2026-02-15"
        },
        {
          "estado": "ACTIVO",
          "fecha": "2026-02-15"
        }
      ]
    },
    {
      "id": 4,
      "informacionGeneral": {
        "razonSocial": "Grúas y Auxilios del Centro Ltda",
        "nit": "830456123-9",
        "direccionCorrespondencia": "Avenida Boyacá #45-60",
        "lineaNegocio": [
          "Autos"
        ],
        "tipoPersona": "Jurídica",
        "actividadEconomicaRues": [
          "5221 - Actividades de estaciones, vías y servicios complementarios",
          "7710 - Alquiler y arrendamiento de vehículos automotores"
        ],
        "correoEmpresa": "operaciones@gruascetro.com"
      },
      "representanteLegal": {
        "nombre": "Ricardo Mejía",
        "tipoDocumento": "CC",
        "numeroDocumento": "80123456",
        "celular": "3209988776",
        "correo": "ricardo.mejia@gruascetro.com",
        "esGerente": false
      },
      "gerente": {
        "nombre": "Paola Hernández",
        "tipoDocumento": "CC",
        "numeroDocumento": "52788990",
        "celular": "3123344556",
        "correo": "paola.hernandez@gruascetro.com"
      },
      "sucursales": [
        {
          "departamento": "Antioquia",
          "ciudad": "Medellín",
          "direccion": "Avenida Boyacá #45-60",
          "telefonosContacto": [
            "6044445566"
          ]
        },
        {
          "departamento": "Caldas",
          "ciudad": "Manizales",
          "direccion": "Carrera 23 #12-40",
          "telefonosContacto": [
            "6068899001"
          ]
        }
      ],
      "habilidades": {
        "especiales": [],
        "generales": [
          "Grúa",
          "Auxilio vial"
        ]
      },
      "documentos": {
        "fechaContrato": "2025-12-15",
        "fechaActivacion": "2026-01-05",
        "contrato": "contrato_gruas_centro.pdf",
        "sagrilaft": "sagrilaft_gruas.pdf",
        "cartaTratamientoDatos": "tratamiento_gruas.pdf",
        "sst": "sst_gruas.pdf",
        "siab": true,
        "correoLider": "lider.gruas@segurosbolivar.com"
      },
      "estadoProveedor": {
        "estado": "SUSPENDIDO",
        "subRazon": "OPERATIVO",
        "fechaEstado": "2026-02-20",
        "fechaReactivacion": "2026-03-20"
      },
      "historialEstados": [
        {
          "estado": "ACTIVO",
          "fecha": "2026-01-01"
        },
        {
          "estado": "SUSPENDIDO",
          "subRazon": "OPERATIVO",
          "fecha": "2026-02-20",
          "fechaReactivacion": "2026-03-20"
        }
      ]
    },
    {
      "id": 5,
      "informacionGeneral": {
        "razonSocial": "Servicios Integrales del Oriente",
        "nit": "901112233-4",
        "direccionCorrespondencia": "Carrera 7 #21-90",
        "lineaNegocio": [
          "Hogar"
        ],
        "tipoPersona": "Jurídica",
        "actividadEconomicaRues": [
          "8121 - Limpieza general interior de edificios",
          "4322 - Instalaciones de fontanería y aire acondicionado"
        ],
        "correoEmpresa": "administracion@serviciosoriente.com"
      },
      "representanteLegal": {
        "nombre": "Diana Castro",
        "tipoDocumento": "CC",
        "numeroDocumento": "1033445566",
        "celular": "3015566778",
        "correo": "diana.castro@serviciosoriente.com",
        "esGerente": true
      },
      "sucursales": [
        {
          "departamento": "Santander",
          "ciudad": "Bucaramanga",
          "direccion": "Carrera 7 #21-90",
          "telefonosContacto": [
            "6076332211",
            "3015566778"
          ]
        }
      ],
      "habilidades": {
        "especiales": [],
        "generales": [
          "Plomería",
          "Aseo"
        ]
      },
      "documentos": {
        "fechaContrato": "2026-02-01",
        "fechaActivacion": "2026-02-10",
        "contrato": "contrato_oriente.pdf",
        "sagrilaft": "sagrilaft_oriente.pdf",
        "cartaTratamientoDatos": "tratamiento_oriente.pdf",
        "sst": "sst_oriente.pdf",
        "siab": false,
        "correoLider": "lider.oriente@segurosbolivar.com"
      },
      "estadoProveedor": {
        "estado": "RETIRADO",
        "subRazon": "ADMINISTRATIVO",
        "fechaEstado": "2026-01-30",
        "fechaReactivacion": null
      },
      "historialEstados": [
        {
          "estado": "ACTIVO",
          "fecha": "2025-10-01"
        },
        {
          "estado": "SUSPENDIDO",
          "subRazon": "OPERATIVO",
          "fecha": "2025-12-01",
          "fechaReactivacion": "2025-12-31"
        },
        {
          "estado": "RETIRADO",
          "subRazon": "ADMINISTRATIVO",
          "fecha": "2026-01-30"
        }
      ]
    },
    {
      "id": 6,
      "informacionGeneral": {
        "razonSocial": "Asistencias Integrales del Norte S.A.S",
        "nit": "900998877-1",
        "direccionCorrespondencia": "Carrera 48 #76-12",
        "lineaNegocio": [
          "Autos",
          "Carga"
        ],
        "tipoPersona": "Jurídica",
        "actividadEconomicaRues": [
          "4520 - Mantenimiento y reparación de vehículos",
          "4330 - Terminación y acabado de edificios"
        ],
        "correoEmpresa": "contacto@asistenciasnorte.com"
      },
      "representanteLegal": {
        "nombre": "Felipe Navarro",
        "tipoDocumento": "CC",
        "numeroDocumento": "91234567",
        "celular": "3167788990",
        "correo": "felipe.navarro@asistenciasnorte.com",
        "esGerente": true
      },
      "sucursales": [
        {
          "departamento": "Atlántico",
          "ciudad": "Barranquilla",
          "direccion": "Carrera 48 #76-12",
          "telefonosContacto": [
            "6057788990",
            "3167788990"
          ]
        },
        {
          "departamento": "Magdalena",
          "ciudad": "Santa Marta",
          "direccion": "Calle 22 #5-18",
          "telefonosContacto": [
            "6054321122"
          ]
        }
      ],
      "habilidades": {
        "especiales": [
          "Carga"
        ],
        "generales": [
          "Auxilio vial",
          "Grua"
        ]
      },
      "documentos": {
        "fechaContrato": "2026-02-15",
        "fechaActivacion": "2026-02-20",
        "contrato": "contrato_norte.pdf",
        "sagrilaft": "sagrilaft_norte.pdf",
        "cartaTratamientoDatos": "tratamiento_norte.pdf",
        "sst": "sst_norte.pdf",
        "siab": true,
        "correoLider": "lider.norte@segurosbolivar.com"
      },
      "estadoProveedor": {
        "estado": "ACTIVO",
        "subRazon": null,
        "fechaEstado": "2026-03-05",
        "fechaReactivacion": null
      },
      "historialEstados": [
        {
          "estado": "ACTIVO",
          "fecha": "2025-11-01"
        },
        {
          "estado": "SUSPENDIDO",
          "subRazon": "TECNICO",
          "fecha": "2025-12-10",
          "fechaReactivacion": "2025-12-20"
        },
        {
          "estado": "ACTIVO",
          "fecha": "2025-12-20"
        },
        {
          "estado": "SUSPENDIDO",
          "subRazon": "TECNICO",
          "fecha": "2026-02-01",
          "fechaReactivacion": "2026-03-05"
        },
        {
          "estado": "ACTIVO",
          "fecha": "2026-03-05"
        }
      ]
    },
    {
      "id": 7,
      "informacionGeneral": {
        "razonSocial": "Soluciones Técnicas del Eje Cafetero",
        "nit": "901334455-8",
        "direccionCorrespondencia": "Carrera 14 #10-65",
        "lineaNegocio": [
          "Hogar"
        ],
        "tipoPersona": "Jurídica",
        "actividadEconomicaRues": [
          "4321 - Instalaciones eléctricas",
          "4322 - Instalaciones de fontanería y aire acondicionado"
        ],
        "correoEmpresa": "administracion@solucioneseje.com"
      },
      "representanteLegal": {
        "nombre": "Natalia Ríos",
        "tipoDocumento": "CC",
        "numeroDocumento": "1088776655",
        "celular": "3024455667",
        "correo": "natalia.rios@solucioneseje.com",
        "esGerente": true
      },
      "sucursales": [
        {
          "departamento": "Risaralda",
          "ciudad": "Pereira",
          "direccion": "Carrera 14 #10-65",
          "telefonosContacto": [
            "6063344556",
            "3024455667"
          ]
        },
        {
          "departamento": "Quindío",
          "ciudad": "Armenia",
          "direccion": "Avenida Bolívar #21-30",
          "telefonosContacto": [
            "6067788991"
          ]
        }
      ],
      "habilidades": {
        "especiales": [],
        "generales": [
          "Plomería",
          "Electricidad"
        ]
      },
      "documentos": {
        "fechaContrato": "2026-03-01",
        "fechaActivacion": "2026-03-05",
        "contrato": "contrato_eje_cafetero.pdf",
        "sagrilaft": "sagrilaft_eje.pdf",
        "cartaTratamientoDatos": "tratamiento_eje.pdf",
        "sst": "sst_eje.pdf",
        "siab": false,
        "correoLider": "lider.ejecafetero@segurosbolivar.com"
      },
      "estadoProveedor": {
        "estado": "ACTIVO",
        "subRazon": null,
        "fechaEstado": "2026-03-10",
        "fechaReactivacion": null
      },
      "historialEstados": [
        {
          "estado": "ACTIVO",
          "fecha": "2026-03-10"
        }
      ]
    }
];
