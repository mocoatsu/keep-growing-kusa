import { FactoryEngineerLevel } from "../../../domain/EngineerLevel/FactoryEngineerLevel";
import { useContribution2 } from "../../../hooks/useContribuitons2";
import { EngineerTitlePresenter } from "./EngineerTitlePresenter";

export function EngineerTitleContainer() {
  const { totalContributions } = useContribution2();

  const engineerLevel =
    FactoryEngineerLevel.engineerLevelByContributionsCount(totalContributions);

  return (
    <EngineerTitlePresenter
      title={engineerLevel?.title()}
    ></EngineerTitlePresenter>
  );
}
