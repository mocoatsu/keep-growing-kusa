import useSWR from "swr";
import { fetchContributions } from "../infrastructure/express/api";

type ContributionType = {
  totalContributions: number;
};

export const useContribution2 = (): ContributionType => {
  const contributionSWRResponse = useSWR("a", fetchContributions, {
    suspense: true,
  });

  const totalContributions =
    contributionSWRResponse.data?.user?.contributionsCollection
      .contributionCalendar.totalContributions;

  return {
    totalContributions: totalContributions ?? 0,
  };
};
