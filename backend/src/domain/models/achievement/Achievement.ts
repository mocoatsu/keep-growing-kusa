import { AchievementId } from "./AchievementId";

export class Achievement {
  readonly id: AchievementId | null;
  readonly name: string;
  readonly description: string;
  readonly difficultyLevel: number;

  constructor(
    id: AchievementId | null,
    name: string,
    description: string,
    difficultyLevel: number
  ) {
    if (name === null) {
      throw new Error("実績名が設定されていません");
    }
    this.id = id;
    this.name = name;
    this.description = description;
    this.difficultyLevel = difficultyLevel;
  }

  static factoryWithoutId(
    name: string,
    description: string,
    difficultyLevel: number
  ) {
    return new Achievement(null, name, description, difficultyLevel);
  }

  static factory(
    id: AchievementId,
    name: string,
    description: string,
    difficultyLevel: number
  ) {
    return new Achievement(id, name, description, difficultyLevel);
  }
}
