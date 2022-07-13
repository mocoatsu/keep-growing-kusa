import useSWR from "swr";
import { ContributionToday } from "../domain/Contribution/ContributionToday";
import { ContributionWeeks } from "../domain/Contribution/ContributionWeeks";
import { TotalContributions } from "../domain/Contribution/TotalContributions";
import { fetchContributions } from "../infrastructure/Github/githubApi";
import { contributionsQuery } from "../infrastructure/GraphQL/query";

type ContributionType = {
  contributionToday: ContributionToday;
  contributionWeeks: ContributionWeeks;
  totalContributions: TotalContributions;
};

export const useContribution = (): ContributionType => {
  const githubSWRResponse = useSWR(contributionsQuery, fetchContributions, {
    suspense: true,
  });

  const weekContributions =
    githubSWRResponse.data?.user?.contributionsCollection.contributionCalendar
      .weeks ?? undefined;

  const totalContributions =
    githubSWRResponse.data?.user?.contributionsCollection.contributionCalendar
      .totalContributions;

  return {
    contributionToday: new ContributionWeeks(
      weekContributions
    ).contributionToday(),
    contributionWeeks: new ContributionWeeks(weekContributions),
    totalContributions: new TotalContributions(totalContributions),
  };
};
