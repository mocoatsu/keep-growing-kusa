import { useContribution } from "../../../hooks/useContribuitons";
import { ContributionProfilePresenter } from "./ContributionProfilePresenter";

export const ContributionProfileContainer = () => {
  const { contributionWeeks } = useContribution();
  const contributionToday = contributionWeeks.contributionToday();

  return (
    <ContributionProfilePresenter
      contribution={contributionToday.count()}
    ></ContributionProfilePresenter>
  );
};
