import { ContributionWeeks } from "../contribution/ContributionWeeks";

type Materials = {
  contributions: {
    contributionWeeks: ContributionWeeks;
    total: number;
  };
};
export class UnlockAchievementMaterial {
  public readonly contributions: Materials;

  constructor(contributions: Materials) {
    this.contributions = contributions;
  }
}
