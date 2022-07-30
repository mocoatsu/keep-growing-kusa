import useSWR from "swr";
import { ContributionThisWeek } from "../domain/Contribution/ContributionThisWeek";
import { ContributionToday } from "../domain/Contribution/ContributionToday";
import { ContributionWeeks } from "../domain/Contribution/ContributionWeeks";
import { TotalContributions } from "../domain/Contribution/TotalContributions";
import { fetchContributions } from "../infrastructure/Github/githubApi";
import { contributionsQuery } from "../infrastructure/GraphQL/query";

type ContributionType = {
  contributionToday: ContributionToday;
  contributionThisWeek: ContributionThisWeek;
  totalContributions: TotalContributions;
};

export const useContribution = (): ContributionType => {
  const githubSWRResponse = useSWR(contributionsQuery, fetchContributions, {
    suspense: true,
  });

  const ContributionWeeksResponse =
    githubSWRResponse.data?.user?.contributionsCollection.contributionCalendar
      .weeks ?? undefined;

  const totalContributions =
    githubSWRResponse.data?.user?.contributionsCollection.contributionCalendar
      .totalContributions;

  return {
    contributionToday: new ContributionWeeks(
      ContributionWeeksResponse
    ).contributionToday(),
    contributionThisWeek: new ContributionWeeks(
      ContributionWeeksResponse
    ).contributionThisWeek(),
    totalContributions: new TotalContributions(totalContributions),
  };
};
