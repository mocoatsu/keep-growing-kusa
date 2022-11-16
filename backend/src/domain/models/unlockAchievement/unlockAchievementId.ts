export class UnlockAchievementId {
  private achievementId: number;
  constructor(v: number | string) {
    const id = Number(v);
    if (v <= 0) {
      throw new Error("実績IDが正しくありません");
    }
    this.achievementId = id;
  }

  value() {
    return this.achievementId;
  }
}
