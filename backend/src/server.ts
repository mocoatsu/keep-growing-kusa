import express from "express";
import cors from "cors";
import { router as achievementRouter } from "./presentation/routes/achievementController";
import { router as unlockAchievementRouter } from "./presentation/routes/unloclAchievementController";
import { router as contributionController } from "./presentation/routes/contributionController";

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app
  .use(cors())
  .use(express.json())
  .use("/achievements", achievementRouter)
  .use("/unlocAchievements", unlockAchievementRouter)
  .use("/contributions", contributionController);
