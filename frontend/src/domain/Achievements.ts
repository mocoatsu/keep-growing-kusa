import { AchievementType } from "./Achievement";

export class Achievements {
  private achievements: AchievementType[] = [];
  constructor(v: AchievementType[]) {
    this.achievements = v;
  }

  value() {
    return [...this.achievements];
  }
}
