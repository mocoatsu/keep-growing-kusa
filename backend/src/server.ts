import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import { sessionExpress } from "./presentation/middleware";
import { router as authRouter } from "./presentation/routes/authController";
import { router as engineerRouter } from "./presentation/routes/engineerController";
import { router as achievementRouter } from "./presentation/routes/achievementController";
import { router as unlockAchievementRouter } from "./presentation/routes/unlockAchievementController";
import { router as contributionRouter } from "./presentation/routes/contributionController";

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app
  .use(cors({ origin: "http://localhost:3000", credentials: true }))
  .use(express.json())
  .use(morgan("short"))
  .use(sessionExpress)
  .use("/auth", authRouter)
  .use("/engineers", engineerRouter)
  .use("/achievements", achievementRouter)
  .use("/unlockAchievements", unlockAchievementRouter)
  .use("/contributions", contributionRouter);
