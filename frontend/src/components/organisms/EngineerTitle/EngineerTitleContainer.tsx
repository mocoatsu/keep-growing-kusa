import { FactoryEngineerLevel } from "../../../domain/EngineerLevel/FactoryEngineerLevel";
import { useContribution } from "../../../hooks/useContribuitons";
import { EngineerTitlePresenter } from "./EngineerTitlePresenter";

export function EngineerTitleContainer() {
  const { totalContributions } = useContribution();

  const engineerLevel =
    FactoryEngineerLevel.engineerLevelByContributionsCount(totalContributions);

  return (
    <EngineerTitlePresenter
      title={engineerLevel?.title()}
    ></EngineerTitlePresenter>
  );
}
