import express from "express";
<<<<<<< HEAD
import cors from "cors";

import { AchievementRepository } from "./domain/models/achievement/achievementRepository";
import { AchievementId } from "./domain/models/achievement/AchievementId";
import { AchievementApplicationService } from "./application/achievement/achievementApplicationService";
=======
import { AchievementRepository } from "./domain/models/achievement/achievementRepository";
import { AchievementService } from "./domain/services/achievementService";
>>>>>>> f7b98bf719ee163822d2d06af750b87659f1b211
// import { router } from "./presentation/routes";
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const router = express.Router();
<<<<<<< HEAD

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
  .get("/achievements/:id", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    const achievement = await achievementApplicationService.findById(
      Number(req.params.id)
    );

    res.json(achievement);
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
  .put("/achievements/edit/:id", async (req, res) => {
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
  .delete("/achievements/delete/:id", async (req, res) => {
    const achievementApplicationService = new AchievementApplicationService(
      new AchievementRepository()
    );

    await achievementApplicationService.delete(
      new AchievementId(req.params.id)
    );
    res.json({ message: "実績の削除に成功しました" });
=======
// router
app
  .use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  })
  .get("/", (req, res) => {
    res.send("beautiful World!");
  })
  .get("/achievements", async (req, res) => {
    const achievementService = new AchievementService(
      new AchievementRepository()
    );

    const achievements = await achievementService.findAll();
    res.json(achievements);
>>>>>>> f7b98bf719ee163822d2d06af750b87659f1b211
  });
