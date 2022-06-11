import { ContributionLastWeek } from "./ContributionLastWeek";
import { ContributionThisWeek } from "./ContributionThisWeek";
import { ContributionToday } from "./ContributionToday";
import { ContributionYesterday } from "./ContributionYesterday";

type Contributionweeks = Array<{
  __typename?: "ContributionCalendarWeek";
  firstDay: any;
  contributionDays: Array<{
    __typename?: "ContributionCalendarDay";
    contributionCount: number;
    date: any;
    weekday: number;
  }>;
}>;

export class ContributionWeeks {
  private value: Contributionweeks;

  constructor(v: Contributionweeks) {
    this.value = v;
  }

  countOfWeekFromYear(): number {
    return this.value.length;
  }

  contributionToday(): ContributionToday {
    const thisWeekIndex = this.value.length - 1;
    return new ContributionToday(
      this.value[thisWeekIndex].contributionDays[new Date().getDay()]
    );
  }

  contributionYesterday(): ContributionYesterday {
    const thisWeekIndex = this.value.length - 1;

    // 日曜日の場合、先週の土曜日のコントリビューションを取得する
    if (new Date().getDay() == 0) {
      return new ContributionYesterday(
        this.value[thisWeekIndex - 1].contributionDays[6]
      );
    }

    return new ContributionYesterday(
      this.value[thisWeekIndex].contributionDays[new Date().getDay()]
    );
  }

  contributionThisWeek(): ContributionThisWeek {
    const thisWeekIndex = this.value.length - 1;
    return new ContributionThisWeek(this.value[thisWeekIndex].contributionDays);
  }

  contributionLastWeek(): ContributionLastWeek {
    const lastWeekIndex = this.value.length - 2;
    return new ContributionLastWeek(this.value[lastWeekIndex].contributionDays);
  }
}
