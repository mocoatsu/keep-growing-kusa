import { EngineerLevel } from "./FactoryEngineerLevel";
import { LeaderLevel } from "./LeaderLevel";

export class SeniorLevel implements EngineerLevel {
  public static contributionsCountForLevel = 500;

  readonly totalContributions: number;

  constructor(totalContributions: number) {
    this.totalContributions = totalContributions;
  }

  contributionCountToNextLevel(nextLevel: EngineerLevel): number {
    return LeaderLevel.contributionsCountForLevel - this.totalContributions;
  }

  title() {
    return "つよつよエンジニア";
  }
}
