import { UnlockAchievements } from "../achievement copy/UnlockAchievements";
import { EngineerId } from "../engineer/engineerId";
import { UnlockAchievement } from "./unlockAchievement";
import { UnlockAchievementId } from "./unlockAchievementId";

export interface IUnlockAchievementRepository {
  findEntitiesByEngineerId: (
    engineerId: EngineerId
  ) => Promise<UnlockAchievements>;
  save: (v: UnlockAchievements) => Promise<void>;
  delete: (id: UnlockAchievementId) => Promise<void>;
}
