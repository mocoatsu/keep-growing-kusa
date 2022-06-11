import { GetContributionsQuery } from "../infrastructure/GraphQL/type";

type ContributionYesterdayType = {
  __typename?: "ContributionCalendarDay";
  contributionCount: number;
  date: any;
  weekday: number;
};

export class ContributionYesterday {
  private value: ContributionYesterdayType;

  constructor(v: ContributionYesterdayType) {
    this.value = v;
  }

  contributionCount(): number {
    return this.value.contributionCount;
  }

  isZeroContribution(contributionCount: number): boolean {
    return contributionCount == 0;
  }
}
