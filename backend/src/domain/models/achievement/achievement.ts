export class Achievement {
  readonly id: number | null;
  readonly name: string;
  readonly description: string;
  readonly difficultyLevel: number;

  constructor(
    id: number | null,
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
    id: number,
    name: string,
    description: string,
    difficultyLevel: number
  ) {
    return new Achievement(id, name, description, difficultyLevel);
  }
}
