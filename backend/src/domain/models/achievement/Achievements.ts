import { UnlockAchievementId } from "../unlockAchievement/unlockAchievementId";
import { UnlockAchievementMaterial } from "../unlockAchievementMaterial/unlockAchievementMaterial";
import { Achievement } from "./achievement";
import { AchievementCondition } from "./achievementCondition";

export class Achievements {
  private achievements: Achievement[] = [];
  constructor(v: Achievement[]) {
    this.achievements = v;
  }

  value() {
    return [...this.achievements];
  }

  // 解除されていない実績のみ取得
  locked(unlockAchievementIds: UnlockAchievementId[]) {
    this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists ");
      }

      return !(achievement.id in unlockAchievementIds);
    });
  }
  // 解除された実績のみ取得
  unlocked(unlockAchievementIds: UnlockAchievementId[]) {
    this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists ");
      }

      return achievement.id in unlockAchievementIds;
    });
  }

  filledCondition(unlockAchievementMaterial: UnlockAchievementMaterial) {
    const filledAchievements = this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists ");
      }

      const condition = AchievementCondition.fromId(achievement.id);

      return condition.isFullfilled(unlockAchievementMaterial);
    });

    return filledAchievements;
  }
}
