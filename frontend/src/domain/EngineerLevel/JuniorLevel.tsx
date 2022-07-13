import { EngineerLevel } from "./FactoryEngineerLevel";
import { MiddleLevel } from "./MiddleLevel";

export class JuniorLevel implements EngineerLevel {
  public static contributionsCountForLevel = 0;

  readonly totalContributions: number;

  constructor(totalContributions: number) {
    this.totalContributions = totalContributions;
  }

  contributionCountToNextLevel(nextLevel: EngineerLevel): number {
    return MiddleLevel.contributionsCountForLevel - this.totalContributions;
  }

  title() {
    return "初心者エンジニア";
  }
}
