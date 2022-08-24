import { ContributionLastWeek } from "./ContributionLastWeek";
import { ContributionThisWeek } from "./ContributionThisWeek";

// 先週と比較した変化量
export class ComparedToLastWeek {
  private contributionThisWeek: ContributionThisWeek;
  private contributionLastWeek: ContributionLastWeek;
  constructor(v1: ContributionThisWeek, v2: ContributionLastWeek) {
    this.contributionThisWeek = v1;
    this.contributionLastWeek = v2;
  }

  increase(): number {
    if (this.contributionThisWeek.count() < this.contributionLastWeek.count()) {
      return 0;
    }

    return (
      this.contributionThisWeek.count() - this.contributionLastWeek.count()
    );
  }
}
