-- CreateTable
CREATE TABLE "Engineer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Engineer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty_level" INTEGER NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnlockAchievement" (
    "id" SERIAL NOT NULL,
    "achievement_id" INTEGER NOT NULL,
    "engineer_id" INTEGER NOT NULL,

    CONSTRAINT "UnlockAchievement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Engineer_name_key" ON "Engineer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_name_key" ON "Achievement"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_description_key" ON "Achievement"("description");

-- AddForeignKey
ALTER TABLE "UnlockAchievement" ADD CONSTRAINT "UnlockAchievement_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnlockAchievement" ADD CONSTRAINT "UnlockAchievement_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "Engineer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
