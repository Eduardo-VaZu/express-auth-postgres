/*
  Warnings:

  - A unique constraint covering the columns `[nombre_rol]` on the table `tbl_rol` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tbl_rol_nombre_rol_key" ON "tbl_rol"("nombre_rol");
