import { UnlockAchievement } from "../unlockAchievement/unlockAchievement";
import { UnlockAchievementId } from "../unlockAchievement/unlockAchievementId";

export class UnlockAchievements {
  private unlockAchievements: UnlockAchievement[] = [];

  constructor(v: UnlockAchievement[]) {
    this.unlockAchievements = v;
  }

  value() {
    return [...this.unlockAchievements];
  }

  ids(): UnlockAchievementId[] {
    const ids = this.unlockAchievements.map((achievement) => {
      return achievement.id;
    });

    return ids.filter((id): id is NonNullable<typeof id> => {
      return id !== null;
    });
  }
}
