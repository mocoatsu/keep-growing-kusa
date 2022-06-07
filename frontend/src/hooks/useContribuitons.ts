import useSWR from "swr";
import { fetchContributions } from "../infrastructure/Github/githubApi";
import { contributionsQuery } from "../infrastructure/GraphQL/query";

export const useContribution = () => {
  const githubSWRResponse = useSWR(contributionsQuery, fetchContributions, {
    suspense: true,
  });
  return { data: githubSWRResponse.data, error: githubSWRResponse.error };
};
