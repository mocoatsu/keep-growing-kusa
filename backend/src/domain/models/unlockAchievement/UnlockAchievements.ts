import { UnlockAchievement } from "./unlockAchievement";
import { UnlockedAchievementIds } from "./unlockAchievementIds";

export class UnlockAchievements {
  private unlockAchievements: UnlockAchievement[] = [];

  constructor(v: UnlockAchievement[]) {
    this.unlockAchievements = v;
  }

  value() {
    return [...this.unlockAchievements];
  }

  unlockedAchievementIds(): UnlockedAchievementIds {
    const ids = this.unlockAchievements.map((achievement) => {
      return achievement.achievementId;
    });

    return new UnlockedAchievementIds(ids);
  }
}
