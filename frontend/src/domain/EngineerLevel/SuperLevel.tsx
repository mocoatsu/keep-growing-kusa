import { EngineerLevel } from "./FactoryEngineerLevel";

export class SuperLevel implements EngineerLevel {
  public static contributionsCountForLevel = 2000;

  readonly totalContributions: number;

  constructor(totalContributions: number) {
    this.totalContributions = totalContributions;
  }

  contributionCountToNextLevel(nextLevel: EngineerLevel): number {
    return 0;
  }

  title() {
    return "世界的なスーバーエンジニア";
  }
}
