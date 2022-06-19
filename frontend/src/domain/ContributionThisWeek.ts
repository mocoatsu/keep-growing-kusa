import { GetContributionsQuery } from "../infrastructure/GraphQL/type";

type ContributionThisWeekType = Array<{
  __typename?: "ContributionCalendarDay";
  contributionCount: number;
  date: any;
  weekday: number;
}>;

export class ContributionThisWeek {
  private value: ContributionThisWeekType;

  constructor(v: ContributionThisWeekType) {
    this.value = v;
  }

  contribuionCount() {
    const contributionCountThisWeek = this.value.reduce(
      (sum, contributionsDay) => {
        return sum + contributionsDay.contributionCount;
      },
      0
    );
    return contributionCountThisWeek;
  }
}
