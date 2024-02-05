-- AlterTable
ALTER TABLE "dizimo" ADD COLUMN     "responsavelId" INTEGER;

-- AlterTable
ALTER TABLE "tesouraria" ADD COLUMN     "responsavelId" INTEGER;

-- AddForeignKey
ALTER TABLE "tesouraria" ADD CONSTRAINT "tesouraria_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dizimo" ADD CONSTRAINT "dizimo_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
