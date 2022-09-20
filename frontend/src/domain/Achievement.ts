export type AchievementType = {
  id: number;
  name: string;
  description: string;
  difficultyLevel: number;
};

export class Achievement {
  public readonly id: number;
  public readonly name: string;
  public readonly description: string;
  public readonly difficultyLevel: number;

  constructor(v: AchievementType) {
    this.id = v.id;
    this.name = v.name;
    this.description = v.description;
    this.difficultyLevel = v.difficultyLevel;
  }
}
