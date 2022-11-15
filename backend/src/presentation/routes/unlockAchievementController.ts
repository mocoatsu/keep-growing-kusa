import express from "express";
import { UnlockAchievementApplicationService } from "../../application/unlockAchievement/unlockAchievementApplicationService";
import { UnlockAchievementRepository } from "../../domain/models/unlockAchievement/unlockAchievementRepository";

export const router = express.Router();

router
  .get("/:engineerId", async (req, res) => {
    const unlockAchievementApplicationService =
      new UnlockAchievementApplicationService(
        new UnlockAchievementRepository()
      );

    const unlockedAchievements =
      await unlockAchievementApplicationService.getAllUnlockedAchievements(
        Number(req.params.engineerId)
      );

    res.json(unlockedAchievements);
  })
  .post("/delete", async (req, res) => {
    const unlockAchievementApplicationService =
      new UnlockAchievementApplicationService(
        new UnlockAchievementRepository()
      );

    await unlockAchievementApplicationService.deleteUnlockAchievements(
      req.body.engineerId,
      req.body.achievementId
    );

    res.json({ message: "解除された実績の削除に成功しました" });
  });
