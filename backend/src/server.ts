import express from "express";
import cors from "cors";

import { AchievementRepository } from "./domain/models/achievement/achievementRepository";
import { AchievementService } from "./domain/services/achievementService";
import { AchievementId } from "./domain/models/achievement/AchievementId";
// import { router } from "./presentation/routes";
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const router = express.Router();

app
  .use(cors())
  .get("/achievements/all", async (req, res) => {
    const achievementService = new AchievementService(
      new AchievementRepository()
    );

    const achievements = await achievementService.findAll();
    res.json(achievements);
  })
  .delete("/achievements/delete/:id", async (req, res) => {
    const achievementService = new AchievementService(
      new AchievementRepository()
    );

    const achievements = await achievementService.delete(
      new AchievementId(req.params.id)
    );
    res.json();
  });
