import { useContribution } from "../../../hooks/useContribuitons";
import { ContributionProfilePresenter } from "./ContributionProfilePresenter";

export const ContributionProfileContainer = () => {
  const { contributions } = useContribution();

  return (
    <ContributionProfilePresenter
      contribution={contributions.countToday}
    ></ContributionProfilePresenter>
  );
};
