import express from "express";
import { AchievementRepository } from "./domain/models/achievement/achievementRepository";
import { AchievementService } from "./domain/services/achievementService";
// import { router } from "./presentation/routes";
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const router = express.Router();
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
  });
