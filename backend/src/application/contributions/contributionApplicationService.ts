import { ContributionWeeks } from "../../domain/models/contribution/ContributionWeeks";
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

    return {
      contributionWeeks: new ContributionWeeks(ContributionWeeksResponse),
      totalContributions: totalContributions ?? 0,
    };
  }
}
