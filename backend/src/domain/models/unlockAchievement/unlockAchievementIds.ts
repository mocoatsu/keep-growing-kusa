import { AchievementId } from "../achievement/AchievementId";

export class UnlockedAchievementIds {
  public readonly value: AchievementId[] = [];

  constructor(v: AchievementId[]) {
    this.value = v;
  }

  toNumber(): number[] {
    return this.value.map((v) => {
      return Number(v.value());
    });
  }
}
