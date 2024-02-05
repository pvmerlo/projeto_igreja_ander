/*
  Warnings:

  - The primary key for the `calendario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `calendario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `comunidade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `comunidade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `responsavelId` column on the `comunidade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `contato` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `contato` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `dizimo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `dizimo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `pessoaId` column on the `dizimo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `endereco` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `endereco` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `estoque` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `estoque` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `setorId` column on the `estoque` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `responsavelId` column on the `estoque` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `membroSetor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `membroTurma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pessoa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `pessoa` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `comunidadeId` column on the `pessoa` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `sacramento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `sacramento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `setor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `setor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `responsavelId` column on the `setor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tesouraria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tesouraria` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tipoEvento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tipoEvento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tipoSacramento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tipoSacramento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `turma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `turma` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `professorId` column on the `turma` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `comunidadeId` on the `calendario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tipoEventoId` on the `calendario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pessoaId` on the `contato` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pessoaId` on the `endereco` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `comunidadeId` on the `estoque` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `setorId` on the `membroSetor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `membroSetorId` on the `membroSetor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `turmaId` on the `membroTurma` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `membroId` on the `membroTurma` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pessoaId` on the `sacramento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tipoSacramentoId` on the `sacramento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `comunidadeId` on the `setor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `comunidadeId` on the `tesouraria` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `setorId` on the `turma` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "calendario" DROP CONSTRAINT "calendario_comunidadeId_fkey";

-- DropForeignKey
ALTER TABLE "calendario" DROP CONSTRAINT "calendario_tipoEventoId_fkey";

-- DropForeignKey
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_responsavelId_fkey";

-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "dizimo" DROP CONSTRAINT "dizimo_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "estoque" DROP CONSTRAINT "estoque_comunidadeId_fkey";

-- DropForeignKey
ALTER TABLE "estoque" DROP CONSTRAINT "estoque_responsavelId_fkey";

-- DropForeignKey
ALTER TABLE "estoque" DROP CONSTRAINT "estoque_setorId_fkey";

-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_membroSetorId_fkey";

-- DropForeignKey
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_setorId_fkey";

-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_membroId_fkey";

-- DropForeignKey
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "pessoa" DROP CONSTRAINT "pessoa_comunidadeId_fkey";

-- DropForeignKey
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_tipoSacramentoId_fkey";

-- DropForeignKey
ALTER TABLE "setor" DROP CONSTRAINT "setor_comunidadeId_fkey";

-- DropForeignKey
ALTER TABLE "setor" DROP CONSTRAINT "setor_responsavelId_fkey";

-- DropForeignKey
ALTER TABLE "tesouraria" DROP CONSTRAINT "tesouraria_comunidadeId_fkey";

-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_professorId_fkey";

-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_setorId_fkey";

-- AlterTable
ALTER TABLE "calendario" DROP CONSTRAINT "calendario_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "comunidadeId",
ADD COLUMN     "comunidadeId" INTEGER NOT NULL,
DROP COLUMN "tipoEventoId",
ADD COLUMN     "tipoEventoId" INTEGER NOT NULL,
ADD CONSTRAINT "calendario_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "responsavelId",
ADD COLUMN     "responsavelId" INTEGER,
ADD CONSTRAINT "comunidade_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "contato" DROP CONSTRAINT "contato_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pessoaId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL,
ADD CONSTRAINT "contato_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "dizimo" DROP CONSTRAINT "dizimo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pessoaId",
ADD COLUMN     "pessoaId" INTEGER,
ADD CONSTRAINT "dizimo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pessoaId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL,
ADD CONSTRAINT "endereco_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "estoque" DROP CONSTRAINT "estoque_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "setorId",
ADD COLUMN     "setorId" INTEGER,
DROP COLUMN "responsavelId",
ADD COLUMN     "responsavelId" INTEGER,
DROP COLUMN "comunidadeId",
ADD COLUMN     "comunidadeId" INTEGER NOT NULL,
ADD CONSTRAINT "estoque_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "membroSetor" DROP CONSTRAINT "membroSetor_pkey",
DROP COLUMN "setorId",
ADD COLUMN     "setorId" INTEGER NOT NULL,
DROP COLUMN "membroSetorId",
ADD COLUMN     "membroSetorId" INTEGER NOT NULL,
ADD CONSTRAINT "membroSetor_pkey" PRIMARY KEY ("setorId", "membroSetorId");

-- AlterTable
ALTER TABLE "membroTurma" DROP CONSTRAINT "membroTurma_pkey",
DROP COLUMN "turmaId",
ADD COLUMN     "turmaId" INTEGER NOT NULL,
DROP COLUMN "membroId",
ADD COLUMN     "membroId" INTEGER NOT NULL,
ADD CONSTRAINT "membroTurma_pkey" PRIMARY KEY ("turmaId", "membroId");

-- AlterTable
ALTER TABLE "pessoa" DROP CONSTRAINT "pessoa_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "comunidadeId",
ADD COLUMN     "comunidadeId" INTEGER,
ADD CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "sacramento" DROP CONSTRAINT "sacramento_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pessoaId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL,
DROP COLUMN "tipoSacramentoId",
ADD COLUMN     "tipoSacramentoId" INTEGER NOT NULL,
ADD CONSTRAINT "sacramento_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "setor" DROP CONSTRAINT "setor_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "responsavelId",
ADD COLUMN     "responsavelId" INTEGER,
DROP COLUMN "comunidadeId",
ADD COLUMN     "comunidadeId" INTEGER NOT NULL,
ADD CONSTRAINT "setor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tesouraria" DROP CONSTRAINT "tesouraria_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "comunidadeId",
ADD COLUMN     "comunidadeId" INTEGER NOT NULL,
ADD CONSTRAINT "tesouraria_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tipoEvento" DROP CONSTRAINT "tipoEvento_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tipoEvento_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tipoSacramento" DROP CONSTRAINT "tipoSacramento_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tipoSacramento_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "turma" DROP CONSTRAINT "turma_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "professorId",
ADD COLUMN     "professorId" INTEGER,
DROP COLUMN "setorId",
ADD COLUMN     "setorId" INTEGER NOT NULL,
ADD CONSTRAINT "turma_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "calendario_id_key" ON "calendario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comunidade_id_key" ON "comunidade"("id");

-- CreateIndex
CREATE UNIQUE INDEX "contato_id_key" ON "contato"("id");

-- CreateIndex
CREATE UNIQUE INDEX "dizimo_id_key" ON "dizimo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "endereco_id_key" ON "endereco"("id");

-- CreateIndex
CREATE UNIQUE INDEX "estoque_id_key" ON "estoque"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_id_key" ON "pessoa"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sacramento_id_key" ON "sacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "setor_id_key" ON "setor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tesouraria_id_key" ON "tesouraria"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipoEvento_id_key" ON "tipoEvento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipoSacramento_id_key" ON "tipoSacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "turma_id_key" ON "turma"("id");

-- AddForeignKey
ALTER TABLE "pessoa" ADD CONSTRAINT "pessoa_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_tipoSacramentoId_fkey" FOREIGN KEY ("tipoSacramentoId") REFERENCES "tipoSacramento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_tipoEventoId_fkey" FOREIGN KEY ("tipoEventoId") REFERENCES "tipoEvento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_membroSetorId_fkey" FOREIGN KEY ("membroSetorId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tesouraria" ADD CONSTRAINT "tesouraria_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dizimo" ADD CONSTRAINT "dizimo_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
