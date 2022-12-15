/*
  Warnings:

  - You are about to drop the `Achievement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Engineer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UnlockAchievement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UnlockAchievement" DROP CONSTRAINT "UnlockAchievement_achievement_id_fkey";

-- DropForeignKey
ALTER TABLE "UnlockAchievement" DROP CONSTRAINT "UnlockAchievement_engineer_id_fkey";

-- DropTable
DROP TABLE "Achievement";

-- DropTable
DROP TABLE "Engineer";

-- DropTable
DROP TABLE "UnlockAchievement";

-- CreateTable
CREATE TABLE "engineer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "engineer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achievement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty_level" INTEGER NOT NULL,

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unlock_achievement" (
    "id" SERIAL NOT NULL,
    "achievement_id" INTEGER NOT NULL,
    "engineer_id" INTEGER NOT NULL,

    CONSTRAINT "unlock_achievement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "engineer_name_key" ON "engineer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "achievement_name_key" ON "achievement"("name");

-- CreateIndex
CREATE UNIQUE INDEX "achievement_description_key" ON "achievement"("description");

-- CreateIndex
CREATE UNIQUE INDEX "unlock_achievement_achievement_id_engineer_id_key" ON "unlock_achievement"("achievement_id", "engineer_id");

-- AddForeignKey
ALTER TABLE "unlock_achievement" ADD CONSTRAINT "unlock_achievement_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unlock_achievement" ADD CONSTRAINT "unlock_achievement_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "engineer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
