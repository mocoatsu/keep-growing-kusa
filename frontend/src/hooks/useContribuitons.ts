import useSWR from "swr";
import { ContributionWeeks } from "../domain/Contribution/ContributionWeeks";
import { fetchContributions } from "../infrastructure/Github/githubApi";
import { contributionsQuery } from "../infrastructure/GraphQL/query";

type ContributionType = {
  contributionWeeks: ContributionWeeks;
  totalContributions: number;
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
    contributionWeeks: new ContributionWeeks(ContributionWeeksResponse),
    totalContributions: totalContributions ?? 0,
  };
};
