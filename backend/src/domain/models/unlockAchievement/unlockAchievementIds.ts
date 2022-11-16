import { UnlockAchievementId } from "./unlockAchievementId";

export class UnlockAchievementIds {
  private unlockAchievementIds: UnlockAchievementId[] = [];

  constructor(v: UnlockAchievementId[]) {
    this.unlockAchievementIds = v;
  }

  value(): UnlockAchievementId[] {
    return [...this.unlockAchievementIds];
  }

  toNumber(): number[] {
    return this.unlockAchievementIds.map((v) => {
      return Number(v.value());
    });
  }
}
