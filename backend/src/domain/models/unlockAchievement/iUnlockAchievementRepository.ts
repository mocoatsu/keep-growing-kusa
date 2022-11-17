import { UnlockAchievements } from "./UnlockAchievements";
import { Condition } from "./unlockAchievementRepository";
import { AchievementId } from "../achievement/AchievementId";
import { EngineerId } from "../engineer/EngineerId";

export interface IUnlockAchievementRepository {
  findBy: (condition: Condition) => Promise<UnlockAchievements>;
  create: (v: UnlockAchievements) => Promise<void>;
  delete: (
    achievementId: AchievementId,
    engineerId: EngineerId
  ) => Promise<void>;
}
