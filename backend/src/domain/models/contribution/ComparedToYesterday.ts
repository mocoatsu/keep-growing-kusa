import { ContributionToday } from "./ContributionToday";
import { ContributionYesterday } from "./ContributionYesterday";

// 昨日と比較した変化量
export class ComparedToYesterday {
  private contributionToday: ContributionToday;
  private contributionYesterday: ContributionYesterday;
  constructor(v1: ContributionToday, v2: ContributionYesterday) {
    this.contributionToday = v1;
    this.contributionYesterday = v2;
  }

  increase(): number {
    if (this.contributionToday.count() < this.contributionYesterday.count()) {
      return 0;
    }

    return this.contributionToday.count() - this.contributionYesterday.count();
  }
}
