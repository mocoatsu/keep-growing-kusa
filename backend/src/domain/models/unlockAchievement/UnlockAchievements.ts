import { UnlockAchievement } from "./unlockAchievement";
import { UnlockAchievementIds } from "./unlockAchievementIds";

export class UnlockAchievements {
  private unlockAchievements: UnlockAchievement[] = [];

  constructor(v: UnlockAchievement[]) {
    this.unlockAchievements = v;
  }

  value() {
    return [...this.unlockAchievements];
  }

  ids(): UnlockAchievementIds {
    const ids = this.unlockAchievements.map((achievement) => {
      return achievement.id;
    });

    const idsWithoutNull = ids.filter((id): id is NonNullable<typeof id> => {
      return id !== null;
    });

    return new UnlockAchievementIds(idsWithoutNull);
  }
}
