import express from "express";
import { AchievementApplicationService } from "../../application/achievement/achievementApplicationService";
import { UnlockAchievementApplicationService } from "../../application/unlockAchievement/unlokAchievementApplicationService";
import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { AchievementRepository } from "../../domain/models/achievement/achievementRepository";
import { UnlockAchievementRepository } from "../../domain/models/unlockAchievement/unlockAchievementRepository";

export const router = express.Router();

router
  .get("/all", async (req, res) => {})
  // 実績解除条件と照合して実績解除をする
  .post("/save/:engineerId", async (req, res) => {
    const unlockAchievementApplicationService =
      new UnlockAchievementApplicationService();

    await unlockAchievementApplicationService.saveFullfilled(
      Number(req.params.engineerId)
    );

    res.json({ message: "実績の作成に成功しました" });
  })
  .put("/edit/:id", async (req, res) => {
    const unlockAchievementApplicationService =
      new AchievementApplicationService(new AchievementRepository());

    const achievement = await unlockAchievementApplicationService.update(
      Number(req.params.id),
      req.body.name,
      req.body.description,
      Number(req.body.difficultyLevel)
    );

    res.json(achievement);
  });
