import express from "express";
import { AchievementApplicationService } from "../../application/achievement/achievementApplicationService";
import { ContributionApplicationService } from "../../application/contributions/contributionApplicationService";
import { UnlockAchievementApplicationService } from "../../application/unlockAchievement/unlokAchievementApplicationService";
import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { AchievementRepository } from "../../domain/models/achievement/achievementRepository";
import { UnlockAchievementRepository } from "../../domain/models/unlockAchievement/unlockAchievementRepository";

export const router = express.Router();

router
  .get("/all", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    const achievements = await achievementApplicationService.findAll();

    res.json(achievements);
  })
  .get("/:id", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    const achievement = await achievementApplicationService.findById(
      Number(req.params.id)
    );

    res.json(achievement);
  })
  .post("/create", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    await achievementApplicationService.create(
      req.body.name,
      req.body.description,
      req.body.difficultyLevel
    );
    res.json({ message: "実績の作成に成功しました" });
  })
  .put("/edit/:id", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    const achievement = await achievementApplicationService.update(
      Number(req.params.id),
      req.body.name,
      req.body.description,
      Number(req.body.difficultyLevel)
    );

    res.json(achievement);
  })
  .delete("/delete/:id", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    await achievementApplicationService.delete(
      new AchievementId(req.params.id)
    );
    res.json({ message: "実績の削除に成功しました" });
  })
  .post("/unlock", async (req, res) => {
    const unlockAchievementApplicationService =
      new UnlockAchievementApplicationService(
        new UnlockAchievementRepository()
      );
    const material =
      await new ContributionApplicationService().getContributionsMaterial();
    // @@ エンジニアIDを渡せるようにする
    unlockAchievementApplicationService.saveFullfilled(1, material);
    res.json();
  });
