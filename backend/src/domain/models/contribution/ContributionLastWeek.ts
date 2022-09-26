type ContributionLastWeekType = Array<{
  __typename?: "ContributionCalendarDay";
  contributionCount: number;
  date: any;
  weekday: number;
}>;

export class ContributionLastWeek {
  private value: ContributionLastWeekType;

  constructor(v: ContributionLastWeekType) {
    this.value = v;
  }

  count() {
    const contributionCountLastWeek = this.value.reduce(
      (sum, contributionsDay) => {
        return sum + contributionsDay.contributionCount;
      },
      0
    );
    return contributionCountLastWeek;
  }
}
