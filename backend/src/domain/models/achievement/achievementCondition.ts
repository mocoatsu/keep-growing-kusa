// 実績条件
export class AchievementCondition {
  private static readonly _valueToinstanceMap = new Map<
    number,
    AchievementCondition
  >();

  public static readonly FIRST_CONTRIBUTION = new AchievementCondition(
    1,
    this.firstContribution
  );

  private constructor(
    public readonly id: number,
    public readonly condition: () => boolean
  ) {
    AchievementCondition._valueToinstanceMap.set(id, this);
  }

  static fromId(v: number) {
    const instance = AchievementCondition._valueToinstanceMap.get(v);
    if (!instance) {
      throw new Error(`${v} is Invalid AchievementCondition Id`);
    }
    return instance;
  }

  isFullfilled(): boolean {
    return this.condition();
  }

  private static firstContribution() {
    return true;
  }
}
