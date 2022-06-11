import useSWR from "swr";
import { ContributionWeeks } from "../domain/ContributionWeeks";
import { fetchContributions } from "../infrastructure/Github/githubApi";
import { contributionsQuery } from "../infrastructure/GraphQL/query";

export const useContribution = () => {
  const githubSWRResponse = useSWR(contributionsQuery, fetchContributions, {
    suspense: true,
  });

  const weekContributions =
    githubSWRResponse.data?.user?.contributionsCollection.contributionCalendar
      .weeks ?? undefined;

  return {
    data: weekContributions ? new ContributionWeeks(weekContributions) : {},
    error: githubSWRResponse.error,
  };
};
