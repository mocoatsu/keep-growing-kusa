import express from "express";
import cors from "cors";

import { AchievementRepository } from "./domain/models/achievement/achievementRepository";
import { AchievementId } from "./domain/models/achievement/AchievementId";
import { AchievementApplicationService } from "./application/achievement/achievementApplicationService";
import { Achievement } from "./domain/models/achievement/achievement";
import { AchievementDifficultyLevel } from "./domain/models/achievement/AchievementDifficultyLevel";
// import { router } from "./presentation/routes";
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const router = express.Router();

app
  .use(cors())
  .use(express.json())
  .get("/achievements/all", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    const achievements = await achievementApplicationService.findAll();

    res.json(achievements);
  })
  .post("/achievements/create", async (req, res) => {
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
  .delete("/achievements/delete/:id", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    await achievementApplicationService.delete(
      new AchievementId(req.params.id)
    );
    res.json({ message: "実績の削除に成功しました" });
  });
