import { Achievements } from "../models/achievement/Achievements";
import { UnlockAchievementMaterial } from "../models/unlockAchievementMaterial/unlockAchievementMaterial";

export class UnlockAchievementService {
  fetchUnlockAchievements(
    achievements: Achievements,
    material: UnlockAchievementMaterial
  ) {
    return achievements.filledCondition(material);
  }
}
