import { EngineerId } from "../engineer/EngineerId";
import { UnlockAchievement } from "../unlockAchievement/unlockAchievement";
import { UnlockAchievementIds } from "../unlockAchievement/unlockAchievementIds";
import { UnlockAchievements } from "../unlockAchievement/UnlockAchievements";
import { UnlockAchievementMaterial } from "../unlockAchievementMaterial/unlockAchievementMaterial";
import { Achievement } from "./Achievement";
import { AchievementCondition } from "./AchievementCondition";
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
  locked(unlockAchievementIds: UnlockAchievementIds): Achievements {
    const lockedAchievement = this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists");
      }

      return !unlockAchievementIds.toNumber().includes(achievement.id.value());
    });

    return new Achievements(lockedAchievement);
  }

  // 解除された実績のみ取得
  unlocked(unlockAchievementIds: UnlockAchievementIds): Achievements {
    const unlockedAchievements = this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id exists ");
      }

      return unlockAchievementIds.toNumber().includes(achievement.id.value());
    });
    return new Achievements(unlockedAchievements);
  }

  filledCondition(unlockAchievementMaterial: UnlockAchievementMaterial) {
    const filledAchievements = this.achievements.filter((achievement) => {
      if (achievement.id === null) {
        throw new Error("invalid achievement id included");
      }

      const condition = AchievementCondition.fromId(achievement.id);

      return condition.isFullfilled(unlockAchievementMaterial);
    });

    return new Achievements(filledAchievements);
  }

  ids(): AchievementId[] {
    const ids = this.achievements.map((achievement) => {
      return achievement.id;
    });
    return ids.filter((id): id is NonNullable<typeof id> => {
      return id !== null;
    });
  }

  toUnlockAchievements(engineerId: EngineerId) {
    const unlockAchievements = this.achievements.map((v) => {
      if (v.id === null) throw Error(`無効なID${v.id}`);

      return new UnlockAchievement(null, v.id, engineerId);
    });

    return new UnlockAchievements(unlockAchievements);
  }
}
