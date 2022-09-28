import { UnlockAchievement } from "../unlockAchievement/unlockAchievement";

export class UnlockAchievements {
  private unlockAchievements: UnlockAchievement[] = [];

  constructor(v: UnlockAchievement[]) {
    this.unlockAchievements = v;
  }

  value() {
    return [...this.unlockAchievements];
  }

  ids() {
    return this.unlockAchievements.map((unlockAchievement) => {
      return unlockAchievement.id;
    });
  }
}
