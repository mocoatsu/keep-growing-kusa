import { EngineerLevel } from "./FactoryEngineerLevel";
import { SuperLevel } from "./SuperLevel";

export class LeaderLevel implements EngineerLevel {
  public static contributionsCountForLevel = 1000;

  readonly totalContributions: number;

  constructor(totalContributions: number) {
    this.totalContributions = totalContributions;
  }

  contributionCountToNextLevel(nextLevel: EngineerLevel): number {
    return SuperLevel.contributionsCountForLevel - this.totalContributions;
  }

  title() {
    return "みんなのヒーロー";
  }
}
