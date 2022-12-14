/*
  Warnings:

  - A unique constraint covering the columns `[achievement_id,engineer_id]` on the table `UnlockAchievement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UnlockAchievement_achievement_id_engineer_id_key" ON "UnlockAchievement"("achievement_id", "engineer_id");
