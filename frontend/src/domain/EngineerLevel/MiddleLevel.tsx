import { EngineerLevel } from "./FactoryEngineerLevel";
import { SeniorLevel } from "./SeniorLevel";

export class MiddleLevel implements EngineerLevel {
  public static contributionsCountForLevel = 100;

  readonly totalContributions: number;

  constructor(totalContributions: number) {
    this.totalContributions = totalContributions;
  }

  contributionCountToNextLevel(nextLevel: EngineerLevel): number {
    return SeniorLevel.contributionsCountForLevel - this.totalContributions;
  }

  title() {
    return "若手のホープ";
  }
}
