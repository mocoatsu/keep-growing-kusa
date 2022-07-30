import { FactoryEngineerLevel } from "../../../domain/EngineerLevel/FactoryEngineerLevel";
import { useContribution } from "../../../hooks/useContribuitons";
import { EnginnerTitlePresenter } from "./EnginnerTitlePresenter";

export function EnginnerTitleContainer() {
  const { totalContributions } = useContribution();

  const engineerLevel = FactoryEngineerLevel.enginnerLevelByContributionsCount(
    totalContributions.count()
  );

  return (
    <EnginnerTitlePresenter
      title={engineerLevel?.title()}
    ></EnginnerTitlePresenter>
  );
}
