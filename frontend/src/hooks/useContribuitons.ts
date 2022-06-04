import useSWR from "swr";
import { fetchContributions } from "../infrastructure/Github/githubApi";
import { contributionsQuery } from "../infrastructure/GraphQL/query";

export const useContribution = () => {
  const githubSWRResponse = useSWR(contributionsQuery, fetchContributions, {
    suspense: true,
  });
  githubSWRResponse.data?.getContributions.variables.userName;
  return { data: githubSWRResponse.data, error: githubSWRResponse.error };
};
