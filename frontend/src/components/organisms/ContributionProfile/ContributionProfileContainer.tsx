import { Suspense } from "react";
import { useContribution } from "../../../hooks/useContribuitons";
import { ContributionProfilePresenter } from "./ContributionProfilePresenter";

export const ContributionProfileContainer = () => {
  const { contributionWeeks, error } = useContribution();
  const contributionToday = contributionWeeks.contributionToday();

  return (
    <ContributionProfilePresenter
      contribution={contributionToday.contributionCount()}
    ></ContributionProfilePresenter>
  );
};
