import { ContributionWeeks } from "../contribution/ContributionWeeks";

export class UnlockAchievementMaterial {
  public readonly contributions: ContributionWeeks;

  constructor(contributions: ContributionWeeks) {
    this.contributions = contributions;
  }
}
