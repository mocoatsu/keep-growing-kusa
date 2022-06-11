import useSWR from "swr";
import { ContributionWeeks } from "../domain/ContributionWeeks";
import { fetchContributions } from "../infrastructure/Github/githubApi";
import { contributionsQuery } from "../infrastructure/GraphQL/query";

export const useContribution = (): {
  contributionWeeks: ContributionWeeks;
  error: any;
} => {
  const githubSWRResponse = useSWR(contributionsQuery, fetchContributions, {
    suspense: true,
  });

  const weekContributions =
    githubSWRResponse.data?.user?.contributionsCollection.contributionCalendar
      .weeks ?? undefined;

  return {
    contributionWeeks: new ContributionWeeks(weekContributions),
    error: githubSWRResponse.error,
  };
};
