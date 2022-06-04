import { Suspense } from "react";
import { useContribution } from "../../../hooks/useContribuitons";
import { ContributionProfilePresenter } from "./ContributionProfilePresenter";

export const ContributionProfileContainer = () => {
  const { data, error } = useContribution();
  return (
    <ContributionProfilePresenter
      contribution={data}
    ></ContributionProfilePresenter>
  );
};
