export type AchievementType = {
  id: number;
  name: string;
  description: string;
  difficultyLevel: number;
};

const defaultValue: AchievementType = {
  id: 0,
  name: "",
  description: "",
  difficultyLevel: 0,
};
export class Achievement {
  public readonly id;
  public readonly name: string;
  public readonly description: string;
  public readonly difficultyLevel: number;

  constructor(v: AchievementType = defaultValue) {
    this.id = v.id;
    this.name = v.name;
    this.description = v.description;
    this.difficultyLevel = v.difficultyLevel;
  }
}
