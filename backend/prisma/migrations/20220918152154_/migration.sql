/*
  Warnings:

  - You are about to drop the column `name` on the `UnlockAchievement` table. All the data in the column will be lost.
  - You are about to drop the `Enginner` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `difficulty_level` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement_id` to the `UnlockAchievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enginner_id` to the `UnlockAchievement` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UnlockAchievement_name_key";

-- AlterTable
ALTER TABLE "Achievement" ADD COLUMN     "difficulty_level" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UnlockAchievement" DROP COLUMN "name",
ADD COLUMN     "achievement_id" INTEGER NOT NULL,
ADD COLUMN     "enginner_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Enginner";

-- CreateTable
CREATE TABLE "Enginners" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Enginners_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UnlockAchievement" ADD CONSTRAINT "UnlockAchievement_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnlockAchievement" ADD CONSTRAINT "UnlockAchievement_enginner_id_fkey" FOREIGN KEY ("enginner_id") REFERENCES "Enginners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
