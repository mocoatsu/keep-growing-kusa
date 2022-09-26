import useSWR from "swr";
import { ContributionWeeks } from "../domain/Contribution/ContributionWeeks";
import { fetchContributions } from "../infrastructure/express/api";

type ContributionType = {
  contributionWeeks: ContributionWeeks;
  totalContributions: number;
};

export const useContribution2 = () => {
  // export const useContribution2 = (): ContributionType => {
  const githubSWRResponse = useSWR("a", fetchContributions, {
    suspense: true,
  });

  // return {
  //   contributionWeeks: new ContributionWeeks(ContributionWeeksResponse),
  //   totalContributions: totalContributions ?? 0,
  // };
};
