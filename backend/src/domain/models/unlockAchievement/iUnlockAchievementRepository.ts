import { UnlockAchievements } from "./UnlockAchievements";
import { EngineerId } from "../engineer/engineerId";
import { UnlockAchievementId } from "./unlockAchievementId";

export interface IUnlockAchievementRepository {
  findEntitiesByEngineerId: (
    engineerId: EngineerId
  ) => Promise<UnlockAchievements>;
  save: (v: UnlockAchievements) => Promise<void>;
  delete: (id: UnlockAchievementId) => Promise<void>;
}
