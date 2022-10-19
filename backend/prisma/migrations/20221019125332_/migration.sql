/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Engineer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Engineer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Engineer" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Engineer_name_key" ON "Engineer"("name");
