/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `tbl_permiso` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tbl_permiso_nombre_key" ON "tbl_permiso"("nombre");
