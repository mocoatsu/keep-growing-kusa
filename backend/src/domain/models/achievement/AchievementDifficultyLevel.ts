// 実績難易度
export class AchievementDifficultyLevel {
  private static readonly _valueToinstanceMap = new Map<
    number,
    AchievementDifficultyLevel
  >();

  public static readonly EASY = new AchievementDifficultyLevel(1, "簡単");
  public static readonly NORMAL = new AchievementDifficultyLevel(2, "普通");
  public static readonly HARD = new AchievementDifficultyLevel(3, "難しい");

  private constructor(
    public readonly value: number,
    public readonly name: string
  ) {
    AchievementDifficultyLevel._valueToinstanceMap.set(value, this);
  }

  static fromValue(v: number) {
    const instance = AchievementDifficultyLevel._valueToinstanceMap.get(v);
    if (!instance) {
      throw new Error(`${v} is Invalid AchievementDifficultyLevel value`);
    }
    return instance;
  }
}
