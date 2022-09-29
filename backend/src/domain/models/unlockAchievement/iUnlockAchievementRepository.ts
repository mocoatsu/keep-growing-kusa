import { UnlockAchievements } from "../achievement copy/UnlockAchievements";
import { EngineerId } from "../enginner/engineerId";
import { UnlockAchievement } from "./unlockAchievement";
import { UnlockAchievementId } from "./unlockAchievementId";

export interface IUnlockAchievementRepository {
  findEntitiesByEnginnerId: (
    enginnerId: EngineerId
  ) => Promise<UnlockAchievements>;
  save: (v: UnlockAchievement) => Promise<void>;
  delete: (id: UnlockAchievementId) => Promise<void>;
}
