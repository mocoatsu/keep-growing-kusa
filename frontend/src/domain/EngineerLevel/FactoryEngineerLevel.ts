import { JuniorLevel } from "./JuniorLevel";
import { LeaderLevel } from "./LeaderLevel";
import { MiddleLevel } from "./MiddleLevel";
import { SeniorLevel } from "./SeniorLevel";
import { SuperLevel } from "./SuperLevel";

export type EngineerLevel = {
  totalContributions: number;
  contributionCountToNextLevel: (nextLevel: EngineerLevel) => number;
  title: () => string;
};

export class FactoryEngineerLevel {
  static enginnerLevelByContributionsCount(contributionsCount: number) {
    // TODO:順番が入れ替わると返される区分オブジェクトが変わるロジックの改善
    if (contributionsCount < JuniorLevel.contributionsCountForLevel)
      return new JuniorLevel(contributionsCount);

    if (contributionsCount < MiddleLevel.contributionsCountForLevel)
      return new MiddleLevel(contributionsCount);

    if (contributionsCount < SeniorLevel.contributionsCountForLevel)
      return new SeniorLevel(contributionsCount);

    if (contributionsCount < LeaderLevel.contributionsCountForLevel)
      return new LeaderLevel(contributionsCount);

    if (contributionsCount < SuperLevel.contributionsCountForLevel)
      return new SuperLevel(contributionsCount);

    return new JuniorLevel(contributionsCount);
  }
}
