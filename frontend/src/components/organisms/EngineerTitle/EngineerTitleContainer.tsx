import { FactoryEngineerLevel } from "../../../domain/EngineerLevel/FactoryEngineerLevel";
import { useContribution } from "../../../hooks/useContribuitons";
import { EngineerTitlePresenter } from "./EngineerTitlePresenter";

export function EngineerTitleContainer() {
  const { contributions } = useContribution();

  const engineerLevel = FactoryEngineerLevel.engineerLevelByContributionsCount(
    contributions.totalContributions
  );

  return (
    <EngineerTitlePresenter
      title={engineerLevel?.title()}
    ></EngineerTitlePresenter>
  );
}
