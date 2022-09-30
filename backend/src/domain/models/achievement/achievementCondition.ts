import { UnlockAchievementMaterial } from "../unlockAchievementMaterial/unlockAchievementMaterial";
import { AchievementId } from "./AchievementId";

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
    public readonly condition: (
      unlockAchievementMaterial: UnlockAchievementMaterial
    ) => boolean
  ) {
    AchievementCondition._valueToinstanceMap.set(id, this);
  }

  static fromId(v: AchievementId) {
    const instance = AchievementCondition._valueToinstanceMap.get(v.value());
    if (!instance) {
      throw new Error(`${v} is Invalid AchievementCondition Id`);
    }
    return instance;
  }

  isFullfilled(unlockAchievementMaterial: UnlockAchievementMaterial): boolean {
    return this.condition(unlockAchievementMaterial);
  }

  private static firstContribution(
    unlockAchievementMaterial: UnlockAchievementMaterial
  ) {
    return Boolean(
      unlockAchievementMaterial.contributions.contributionThisWeek()
    );
  }
}
