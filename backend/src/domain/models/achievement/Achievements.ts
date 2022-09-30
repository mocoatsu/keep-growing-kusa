import { UnlockAchievementId } from "../unlockAchievement/unlockAchievementId";
import { UnlockAchievementMaterial } from "../unlockAchievementMaterial/unlockAchievementMaterial";
import { Achievement } from "./achievement";
import { AchievementCondition } from "./achievementCondition";
import { AchievementId } from "./AchievementId";

export class Achievements {
  private achievements: Achievement[] = [];
  constructor(v: Achievement[]) {
    this.achievements = v;
  }

  value() {
    return [...this.achievements];
  }

  // 解除されていない実績のみ取得
  locked(unlockAchievementIds: UnlockAchievementId[]): Achievements {
    const lockedAchievement = this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists ");
      }

      return !(achievement.id.value() in unlockAchievementIds);
    });

    return new Achievements(lockedAchievement);
  }

  // 解除された実績のみ取得
  unlocked(unlockAchievementIds: UnlockAchievementId[]): Achievements {
    const unlockedAchievements = this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists ");
      }

      return achievement.id.value() in unlockAchievementIds;
    });
    return new Achievements(unlockedAchievements);
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

  ids(): AchievementId[] {
    const ids = this.achievements.map((achievement) => {
      return achievement.id;
    });
    return ids.filter((id): id is NonNullable<typeof id> => {
      return id !== null;
    });
  }
}
