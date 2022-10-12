import useSWR from "swr";
import { fetchContributions } from "../infrastructure/express/api";

type ContributionType = {
  contributions: {
    contributionWeeks: number;
    totalContributions: number;
    countToday: number;
    countThisWeek: number;
    increasedCountFromYesterday: number;
    increasedCountFromLastWeek: number;
  };
};

export const useContribution = (): ContributionType => {
  const contributionSWRResponse = useSWR("a", fetchContributions, {
    suspense: true,
  });

  return { contributions: contributionSWRResponse.data };
};
