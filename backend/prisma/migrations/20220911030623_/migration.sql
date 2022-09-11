/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Achievement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Achievement` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Achievement" ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_description_key" ON "Achievement"("description");
