export type AchievementType = {
  id: number;
  name: string;
  description: string;
};

export class Achievements {
  private achievements: AchievementType[] = [];
  constructor(v: AchievementType[]) {
    this.achievements = v;
  }

  value() {
    return [...this.achievements];
  }
}
