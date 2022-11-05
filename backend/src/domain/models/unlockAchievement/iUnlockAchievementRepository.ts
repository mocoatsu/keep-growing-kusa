import { UnlockAchievements } from "./UnlockAchievements";
import { UnlockAchievementId } from "./unlockAchievementId";
import { Condition } from "./unlockAchievementRepository";

export interface IUnlockAchievementRepository {
  findBy: (condition: Condition) => Promise<UnlockAchievements>;
  save: (v: UnlockAchievements) => Promise<void>;
  delete: (id: UnlockAchievementId) => Promise<void>;
}
