-- CreateTable
CREATE TABLE "rol" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "linea_negocio" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,

    CONSTRAINT "linea_negocio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departamento" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,

    CONSTRAINT "departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ciudad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "departamento_id" INTEGER NOT NULL,

    CONSTRAINT "ciudad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documento" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habilidad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "categoria" VARCHAR(100) NOT NULL,

    CONSTRAINT "habilidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habilidad_especial" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "habilidad_especial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actividad_economica" (
    "id" SERIAL NOT NULL,
    "codigo_ciiu" VARCHAR(10),
    "nombre" VARCHAR(150) NOT NULL,

    CONSTRAINT "actividad_economica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "correo" VARCHAR(150) NOT NULL,
    "cedula" VARCHAR(20) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,
    "rol_id" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proveedor" (
    "id" SERIAL NOT NULL,
    "razon_social" VARCHAR(150) NOT NULL,
    "nit" VARCHAR(20) NOT NULL,
    "correo" VARCHAR(150) NOT NULL,
    "estado_id" INTEGER NOT NULL,

    CONSTRAINT "proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacto_proveedor" (
    "id" SERIAL NOT NULL,
    "proveedor_id" INTEGER NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "tipo_documento" VARCHAR(10) NOT NULL,
    "documento" VARCHAR(20) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "cargo" VARCHAR(50) NOT NULL,
    "es_gerente" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "contacto_proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sucursal" (
    "id" SERIAL NOT NULL,
    "direccion" VARCHAR(200) NOT NULL,
    "ciudad_id" INTEGER NOT NULL,
    "proveedor_id" INTEGER NOT NULL,

    CONSTRAINT "sucursal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnico" (
    "id" SERIAL NOT NULL,
    "disponibilidad" VARCHAR(50) NOT NULL,
    "causa_rechazo" VARCHAR(255),
    "usuario_id" INTEGER NOT NULL,
    "sucursal_id" INTEGER NOT NULL,
    "estado_id" INTEGER NOT NULL,

    CONSTRAINT "tecnico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sucursal_telefono" (
    "id" SERIAL NOT NULL,
    "sucursal_id" INTEGER NOT NULL,
    "numero" VARCHAR(20) NOT NULL,

    CONSTRAINT "sucursal_telefono_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proveedor_linea" (
    "proveedor_id" INTEGER NOT NULL,
    "linea_id" INTEGER NOT NULL,

    CONSTRAINT "proveedor_linea_pkey" PRIMARY KEY ("proveedor_id","linea_id")
);

-- CreateTable
CREATE TABLE "proveedor_actividad" (
    "proveedor_id" INTEGER NOT NULL,
    "actividad_id" INTEGER NOT NULL,

    CONSTRAINT "proveedor_actividad_pkey" PRIMARY KEY ("proveedor_id","actividad_id")
);

-- CreateTable
CREATE TABLE "proveedor_habilidad_especial" (
    "proveedor_id" INTEGER NOT NULL,
    "habilidad_especial_id" INTEGER NOT NULL,

    CONSTRAINT "proveedor_habilidad_especial_pkey" PRIMARY KEY ("proveedor_id","habilidad_especial_id")
);

-- CreateTable
CREATE TABLE "tecnico_habilidad" (
    "tecnico_id" INTEGER NOT NULL,
    "habilidad_id" INTEGER NOT NULL,
    "estado_habilidad" VARCHAR(50) NOT NULL,

    CONSTRAINT "tecnico_habilidad_pkey" PRIMARY KEY ("tecnico_id","habilidad_id")
);

-- CreateTable
CREATE TABLE "score" (
    "proveedor_id" INTEGER NOT NULL,
    "habilidad_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "score_pkey" PRIMARY KEY ("proveedor_id","habilidad_id")
);

-- CreateTable
CREATE TABLE "documento_tecnico" (
    "tecnico_id" INTEGER NOT NULL,
    "documento_id" INTEGER NOT NULL,
    "url" VARCHAR(500) NOT NULL,

    CONSTRAINT "documento_tecnico_pkey" PRIMARY KEY ("tecnico_id","documento_id")
);

-- CreateTable
CREATE TABLE "documento_proveedor" (
    "proveedor_id" INTEGER NOT NULL,
    "documento_id" INTEGER NOT NULL,
    "url" VARCHAR(500) NOT NULL,

    CONSTRAINT "documento_proveedor_pkey" PRIMARY KEY ("proveedor_id","documento_id")
);

-- CreateTable
CREATE TABLE "historico_habilidad" (
    "id" SERIAL NOT NULL,
    "tecnico_id" INTEGER NOT NULL,
    "habilidad_id" INTEGER NOT NULL,
    "estado" VARCHAR(50) NOT NULL,
    "fecha_movimiento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observaciones" TEXT,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "historico_habilidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico_estado_proveedor" (
    "id" SERIAL NOT NULL,
    "fecha_movimiento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3),
    "sub_razon" VARCHAR(255),
    "proveedor_id" INTEGER NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "historico_estado_proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estado_nombre_key" ON "estado"("nombre");

-- CreateIndex
CREATE INDEX "idx_ciudad_departamento" ON "ciudad"("departamento_id");

-- CreateIndex
CREATE UNIQUE INDEX "documento_nombre_key" ON "documento"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "habilidad_nombre_key" ON "habilidad"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "habilidad_especial_nombre_key" ON "habilidad_especial"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "actividad_economica_codigo_ciiu_key" ON "actividad_economica"("codigo_ciiu");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cedula_key" ON "usuario"("cedula");

-- CreateIndex
CREATE INDEX "idx_usuario_rol" ON "usuario"("rol_id");

-- CreateIndex
CREATE UNIQUE INDEX "proveedor_razon_social_key" ON "proveedor"("razon_social");

-- CreateIndex
CREATE UNIQUE INDEX "proveedor_nit_key" ON "proveedor"("nit");

-- CreateIndex
CREATE INDEX "idx_sucursal_proveedor" ON "sucursal"("proveedor_id");

-- CreateIndex
CREATE UNIQUE INDEX "tecnico_usuario_id_key" ON "tecnico"("usuario_id");

-- AddForeignKey
ALTER TABLE "ciudad" ADD CONSTRAINT "ciudad_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proveedor" ADD CONSTRAINT "proveedor_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacto_proveedor" ADD CONSTRAINT "contacto_proveedor_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sucursal" ADD CONSTRAINT "sucursal_ciudad_id_fkey" FOREIGN KEY ("ciudad_id") REFERENCES "ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sucursal" ADD CONSTRAINT "sucursal_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnico" ADD CONSTRAINT "tecnico_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnico" ADD CONSTRAINT "tecnico_sucursal_id_fkey" FOREIGN KEY ("sucursal_id") REFERENCES "sucursal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnico" ADD CONSTRAINT "tecnico_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sucursal_telefono" ADD CONSTRAINT "sucursal_telefono_sucursal_id_fkey" FOREIGN KEY ("sucursal_id") REFERENCES "sucursal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proveedor_linea" ADD CONSTRAINT "proveedor_linea_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proveedor_linea" ADD CONSTRAINT "proveedor_linea_linea_id_fkey" FOREIGN KEY ("linea_id") REFERENCES "linea_negocio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proveedor_actividad" ADD CONSTRAINT "proveedor_actividad_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proveedor_actividad" ADD CONSTRAINT "proveedor_actividad_actividad_id_fkey" FOREIGN KEY ("actividad_id") REFERENCES "actividad_economica"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proveedor_habilidad_especial" ADD CONSTRAINT "proveedor_habilidad_especial_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proveedor_habilidad_especial" ADD CONSTRAINT "proveedor_habilidad_especial_habilidad_especial_id_fkey" FOREIGN KEY ("habilidad_especial_id") REFERENCES "habilidad_especial"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnico_habilidad" ADD CONSTRAINT "tecnico_habilidad_tecnico_id_fkey" FOREIGN KEY ("tecnico_id") REFERENCES "tecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnico_habilidad" ADD CONSTRAINT "tecnico_habilidad_habilidad_id_fkey" FOREIGN KEY ("habilidad_id") REFERENCES "habilidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "score" ADD CONSTRAINT "score_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "score" ADD CONSTRAINT "score_habilidad_id_fkey" FOREIGN KEY ("habilidad_id") REFERENCES "habilidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento_tecnico" ADD CONSTRAINT "documento_tecnico_tecnico_id_fkey" FOREIGN KEY ("tecnico_id") REFERENCES "tecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento_tecnico" ADD CONSTRAINT "documento_tecnico_documento_id_fkey" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento_proveedor" ADD CONSTRAINT "documento_proveedor_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento_proveedor" ADD CONSTRAINT "documento_proveedor_documento_id_fkey" FOREIGN KEY ("documento_id") REFERENCES "documento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_habilidad" ADD CONSTRAINT "historico_habilidad_tecnico_id_fkey" FOREIGN KEY ("tecnico_id") REFERENCES "tecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_habilidad" ADD CONSTRAINT "historico_habilidad_habilidad_id_fkey" FOREIGN KEY ("habilidad_id") REFERENCES "habilidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_habilidad" ADD CONSTRAINT "historico_habilidad_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_estado_proveedor" ADD CONSTRAINT "historico_estado_proveedor_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_estado_proveedor" ADD CONSTRAINT "historico_estado_proveedor_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_estado_proveedor" ADD CONSTRAINT "historico_estado_proveedor_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
