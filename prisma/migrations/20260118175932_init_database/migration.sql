-- CreateTable
CREATE TABLE "tbl_rol" (
    "id_rol" SERIAL NOT NULL,
    "nombre_rol" TEXT NOT NULL,

    CONSTRAINT "tbl_rol_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "tbl_permiso" (
    "id_permiso" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "tbl_permiso_pkey" PRIMARY KEY ("id_permiso")
);

-- CreateTable
CREATE TABLE "tbl_rol_permiso" (
    "id_rol" INTEGER NOT NULL,
    "id_permiso" INTEGER NOT NULL,

    CONSTRAINT "tbl_rol_permiso_pkey" PRIMARY KEY ("id_rol","id_permiso")
);

-- CreateTable
CREATE TABLE "tbl_usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido_paterno" TEXT NOT NULL,
    "apellido_materno" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado_usuario" INTEGER NOT NULL,
    "id_rol" INTEGER NOT NULL,
    "fecha_modificacion" TIMESTAMP(3),
    "usuario_creacion" TEXT,
    "usuario_modificacion" TEXT,
    "version" INTEGER DEFAULT 1,

    CONSTRAINT "tbl_usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "tbl_credencial_tradicional" (
    "id_usuario" INTEGER NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "tbl_credencial_tradicional_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_usuario_email_key" ON "tbl_usuario"("email");

-- AddForeignKey
ALTER TABLE "tbl_rol_permiso" ADD CONSTRAINT "tbl_rol_permiso_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "tbl_rol"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_rol_permiso" ADD CONSTRAINT "tbl_rol_permiso_id_permiso_fkey" FOREIGN KEY ("id_permiso") REFERENCES "tbl_permiso"("id_permiso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_usuario" ADD CONSTRAINT "tbl_usuario_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "tbl_rol"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_credencial_tradicional" ADD CONSTRAINT "tbl_credencial_tradicional_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "tbl_usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
