import { ComparedToLastWeek } from "../../domain/models/contribution/ComparedToLastWeek";
import { ComparedToYesterday } from "../../domain/models/contribution/ComparedToYesterday";
import { ContributionWeeks } from "../../domain/models/contribution/ContributionWeeks";
import { UnlockAchievementMaterial } from "../../domain/models/unlockAchievementMaterial/unlockAchievementMaterial";
import { fetchContributions } from "../../infrastructure/Github/githubApi";

export class ContributionApplicationService {
  async fetchContributions() {
    const contributions = await fetchContributions();

    const ContributionWeeksResponse =
      contributions.user?.contributionsCollection.contributionCalendar.weeks ??
      undefined;
    const totalContributions =
      contributions.user?.contributionsCollection.contributionCalendar
        .totalContributions;
    const contributionWeeks = new ContributionWeeks(ContributionWeeksResponse);

    return {
      contributionWeeks: new ContributionWeeks(ContributionWeeksResponse),
      totalContributions: totalContributions ?? 0,
      countToday: contributionWeeks.contributionToday().count(),
      countThisWeek: contributionWeeks.contributionThisWeek().count(),
      increasedCountFromYesterday: new ComparedToYesterday(
        contributionWeeks.contributionToday(),
        contributionWeeks.contributionYesterday()
      ).increase(),
      increasedCountFromLastWeek: new ComparedToLastWeek(
        contributionWeeks.contributionThisWeek(),
        contributionWeeks.contributionLastWeek()
      ).increase(),
    };
  }

  async getContributionsMaterial() {
    const contributions = await fetchContributions();
    const contributionsMaterial = {
      contributions: {
        contributionWeeks: new ContributionWeeks(
          contributions.user?.contributionsCollection.contributionCalendar.weeks
        ),
        total:
          contributions.user?.contributionsCollection.contributionCalendar
            .totalContributions ?? 0,
      },
    };
    return new UnlockAchievementMaterial(contributionsMaterial);
  }
}
