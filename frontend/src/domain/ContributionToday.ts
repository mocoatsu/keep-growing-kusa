import { GetContributionsQuery } from "../infrastructure/GraphQL/type";

type ContributionTodayType = {
  __typename?: "ContributionCalendarDay";
  contributionCount: number;
  date: any;
  weekday: number;
};

export class ContributionToday {
  private value: ContributionTodayType;

  constructor(v: ContributionTodayType) {
    this.value = v;
  }

  contributionCount(): number {
    return this.value.contributionCount;
  }

  isZeroContribution(contributionCount: number): boolean {
    return contributionCount == 0;
  }
}
